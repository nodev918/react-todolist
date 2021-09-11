import React from "react";
import "./todo.css";
import { FavoriteBorder} from "@material-ui/icons";

export default function Todo(todo) {
  const [todoo, setTodoo] = React.useState(todo.data);

  React.useEffect(() => {
    console.log(todoo);
  }, [todoo]);

  function addItem(e) {
    const newTodo = todoo.concat(e.target.value);
    setTodoo(newTodo);
    e.target.value = "";
  }

  function deleteItem(item) {
    const targetText = item.children[1].innerText;
    const newTodo = todoo.filter((text) => text !== targetText);
    setTodoo(newTodo);
  }

  return (
    <div className="todo">
      <div className="todoContainer">
        <div className="todoInput">
          <input
            type="text"
            className="inputText"
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                addItem(e);
              }
            }}
          />
          <button
            className="push"
            onClick={(e) => {
              addItem(e);
            }}
          >
            push
          </button>
        </div>
        <div className="todoBody">
          {todoo.map((item) => {
            
            return (
              <>

                <div className="card">
                  <div className="cardHeader">
                    <input
                      className="cardTitle"
                      placeholder="標題(請自行更改)"
                      contentEditable="true"
                    />
                    <span
                      className="close"
                      onClick={(e) => {
                        deleteItem(e.target.parentNode.parentNode);
                      }}
                    >
                      X
                    </span>
                  </div>
                  <div className="cardBody">{item}</div>
                  <div className="cardFooter">
                    <input
                      type="text"
                      className="cardFooterComment"
                      placeholder="留言處..."
                      contentEditable="true"
                    />
                    <span
                      className="cardFooterLike"
                      onClick={() => {

                      }}
                    >
                      <FavoriteBorder />

                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
