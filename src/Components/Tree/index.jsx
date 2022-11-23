import React, { useState } from "react";
import "./index.css";
import Modal from "../Modal";

export default ({ cards }) => {

  const one_dimensional_to_tree = (jsonData) => {
    const categorys = jsonData.map(x => {
      return x.category;
    })

    const uniqCategorys = Array.from(new Set(categorys));

    let temp = {}, len1 = jsonData.length, len2 = uniqCategorys.length, result = [];
    for (let j = 0; j < len2; j++) {
      temp.label = uniqCategorys[j];
      temp.children = [];
      result.push(temp);
      temp = {};
    }
    for (let i = 0; i < len1; i++) {
      for (let j = 0; j < len2; j++) {
        if (jsonData[i].category === result[j].label) {
          temp.label = jsonData[i].image;
          temp.timestamp = jsonData[i].timestamp;
          temp.category = jsonData[i].category;
          temp.filesize = jsonData[i].filesize;
          result[j].children.push(temp);
          temp = {};
        }
      }
    }
    return result;
  }

  const treeData = one_dimensional_to_tree(cards);

  const openTree = (className) => {
    let child = document.getElementsByClassName(className);
    for (let i = 0; i < child.length; i++) {
      if (child[i].hasAttribute("hidden")) {
        child[i].removeAttribute("hidden");
      }
      else {
        child[i].setAttribute("hidden", true);
      }
    }
  }

  const [show, showModal] = useState(false);
  const [setCard, setSetCard] = useState({});

  return <div style={{ padding: "70px" }}>
    {treeData.map((d, i) => (
      <>
        <div
          className={`parent `}
          key={i}
          onClick={() => { openTree(d.label) }}
        >
          .{d.label}
        </div>
        {d.children.map((b, i) => {
          return (<div
            className={`child ` + d.label}
            key={i}
            hidden
            onClick={() => { showModal(!show); setSetCard(b) }}
          >.
            {b.label}
          </div>)
        })}
      </>
    ))}
    {show && <Modal b={setCard} showModal={showModal} show={show}/>}
  </div>
}
