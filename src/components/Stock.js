import React from "react";

function Stock({name, price, handlePortfolioAdd, isInPortfolio, handlePortfolioDelete}) {

  console.log(isInPortfolio)

  function handleStockClick(e){
    if (isInPortfolio===false){
      console.log(e.target.value)
      handlePortfolioAdd(name);
    }
    else handlePortfolioDelete(name)
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
