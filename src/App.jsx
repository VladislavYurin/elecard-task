import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Catalog from "./Components/Catalog"
import Tree from "./Components/Tree";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

const App = () => {
    const [cards, setCards] = useState([]);
    const [view, setView] = useState("catalog");
    const [isLoading, setIsLoading] = useState(true);
    // const [deletedCards, setDeletedCards] = useState([]);

    useEffect(() => {
        fetch("http://contest.elecard.ru/frontend_data/catalog.json")
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setCards(data);
                // localStorage.setItem("data", JSON.stringify(data));
            });
    }, []);

    const sortCards = (sortFlag) => {
        const copyCards = cards.concat();
        const sortedCards = copyCards.sort((a, b) => { return a[sortFlag] > b[sortFlag] ? 1 : -1 });
        setCards(sortedCards);
    }

    const deleteCard = (timestamp) => {
        const copyCards = cards.concat();
        const index = copyCards.map(x => {
            return x.timestamp;
        }).indexOf(timestamp);
        copyCards.splice(index, 1);
        // deletedCards.push(timestamp);
        setCards(copyCards);
    }
    // console.log(deletedCards);
    // useEffect(() => {
    //     setDeletedCards(deletedCards);
    //     localStorage.setItem("deletedCard", deletedCards);
    // }, [deletedCards])

    return <>
        {isLoading ? <Loader /> : <>
            <Header setView={setView} />
            <div className="wrapper">
                {view === "catalog" ? (<Catalog cards={cards} sortCards={sortCards} deleteCard={deleteCard} />) : (<Tree cards={cards} />)}
            </div>
            <Footer /></>}
    </>
}

export default App;