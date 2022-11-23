import React, {useEffect} from "react";
import "./index.css";

const Card = ({ image, filesize, timestamp, category, deleteCard, deletedCard }) => {
    const imgStyle = {
        // backgroundImage: `url(${image})`
        backgroundImage: `url(https://www.sunhome.ru/i/wallpapers/122/zhivotnie-oboi-dlya-rabochego-stola.xxl.jpg)`
    };

    const date = new Date(timestamp);

//     useEffect(() => {
//         // if (deletedCard.includes(timestamp)) {
//             console.log(deletedCard, "xxx");
//         // }
// }, [])

    return (
        <div className="card__info">
            <div className="card__img" style={imgStyle}></div>
            <div className="card__img__discription">Файл: {image}</div>
            <div className="card__filesize">Размер файла: {filesize}</div>
            <div className="card__timestamp">{"Дата: " + date.getDate() +
                "/" + (date.getMonth() + 1) +
                "/" + date.getFullYear() +
                " " + date.getHours() +
                ":" + date.getMinutes() +
                ":" + date.getSeconds()}</div>
            <div className="card__category">Категория: {category}</div>
            <button
                className="card__btn"
                onClick={() => { deleteCard(timestamp) }}>x</button>
        </div>
    )
}

export default Card;