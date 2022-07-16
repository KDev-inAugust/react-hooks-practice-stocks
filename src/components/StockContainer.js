import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, handlePortfolioAdd}) {

  

  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map((index)=>{
        return <Stock handlePortfolioAdd={handlePortfolioAdd} key={index.id} name={index.name} price={index.price} />
      })}
    </div>
  );
}

export default StockContainer;
