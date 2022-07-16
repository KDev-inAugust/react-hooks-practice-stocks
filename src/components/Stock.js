import React from "react";

function Stock({name, price, handlePortfolioAdd}) {

  function handleStockClick(e){
    console.log(e.target.value)
  handlePortfolioAdd(name);
  }

  return (
    <div onClick={handleStockClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
