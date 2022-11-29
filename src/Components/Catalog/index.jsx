import React from "react";
import Card from "../Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.css";

export default ({ sortCards, cards, deleteCard }) => {

    return <Container className="cards-container">
        <Row>
            <Col lg={12} md={12} sm={12}>
                <form className="sort">
                    <div className="radio">
                        <input
                            type="radio"
                            value="category"
                            id="category"
                            name="sort"
                            onClick={() => { sortCards("category") }}
                        />
                        <label htmlFor="category">По категории</label>
                    </div>
                    <div className="radio"><input
                        type="radio"
                        value="date"
                        id="date"
                        name="sort"
                        onClick={() => { sortCards("timestamp") }}
                    />
                        <label htmlFor="date">По дате</label></div>
                    <div className="radio"><input
                        type="radio"
                        value="file"
                        id="file"
                        name="sort"
                        onClick={() => { sortCards("image") }}
                    />
                        <label htmlFor="file">По названию файла</label></div>
                    <div className="radio"><input
                        type="radio"
                        value="filesize"
                        id="filesize"
                        name="sort"
                        onClick={() => { sortCards("filesize") }}
                    />
                        <label htmlFor="filesize">По размеру файла</label></div>
                    <button className="reset">Сброс</button>
                </form>
            </Col>
            {cards.map((d, i) =>
                <Col lg={3} md={4} sm={6} className="card" key={i}>
                    <Card
                        image={d.image}
                        filesize={d.filesize}
                        timestamp={d.timestamp}
                        category={d.category}
                        deleteCard={deleteCard}
                    />
                </Col>)
            }
        </Row>
    </Container>
}