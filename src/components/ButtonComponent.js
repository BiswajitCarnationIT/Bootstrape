import React from "react";

const ButtonComponent = () => {
  return (
    <div>
      <div class="container">
        <h2>Split Buttons</h2>
        <div class="btn-group">
          <button type="button" class="btn btn-primary">
            Sony
          </button>
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li>
              <a href="#">Tablet</a>
            </li>
            <li>
              <a href="#">Smartphone</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent;
