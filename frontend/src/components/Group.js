import React, { useState } from "react";
import axios from "axios";

const Group = () => {
  const [items, setItems] = useState([]);
  const datas = async () => {
    try {
      const {
        data: { groups },
      } = await axios.get("/api");
      setItems(groups);
    } catch (error) {
      console.log(error);
    }
  };
  datas();
  return (
    <article className="article">
      <h1 className="heading">Groups</h1>
      <div className="container">
        <ul className="listItems">
          {items.map((item) => {
            const { imageURL, title, count, _id } = item;
            return (
              <li className="listItem" key={_id}>
                <img src={imageURL} alt="img" className="image" />
                <h1 className="title">{title}</h1>
                <p className="counters">{count} count</p>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default Group;
