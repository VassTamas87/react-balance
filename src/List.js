import React from "react";

const List = ({ list, remove }) => (
  <>
    {list.map((el) => (
      <div key={el.id} className="card mt-4 p-2 hov">
        <div className="list">
          <div>{el.title}</div>
          <div className="del">
            <div
              className={`mx-5 ${el.type === "pos" ? "pos" : "neg"}`}
            >{`${el.price.toLocaleString().replace(/,/g, " ")} HUF`}</div>
            <button onClick={() => remove(el)} className="btn btn-secondary">
              Törlés
            </button>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default List;
