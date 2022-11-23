import React from "react";
import "./index.css";

export default ({ b, showModal, show }) => {
    const date = new Date(b.timestamp);

    return <div className="popup">
        <div className="text">Фото: {b.label}</div>
        <div className="text">Категория: {b.category}</div>
        <div className="text">Размер файла: {b.filesize}</div>
        <div className="text">{"Дата: " + date.getDate() +
            "/" + (date.getMonth() + 1) +
            "/" + date.getFullYear() +
            " " + date.getHours() +
            ":" + date.getMinutes() +
            ":" + date.getSeconds()}</div>
        <button onClick={() => { showModal(!show) }} >Закрыть</button>
    </div>
}