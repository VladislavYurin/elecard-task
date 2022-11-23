import React from "react";
import "./index.css";
import Logo from "../Logo";



export default ({ setView }) => {
  return <header>
    <Logo />
    <form className="view">
      <input
        type="radio"
        value="cart__list"
        id="cart__list"
        name="view"
        onClick={() => { setView("catalog") }}
      />
      <label htmlFor="cart__list">Карточки</label>
      <input
        type="radio"
        value="tree__list"
        id="tree__list"
        name="view"
        onClick={() => { setView("tree") }}
      />
      <label htmlFor="tree__list">Древо</label>
    </form>
  </header>
}