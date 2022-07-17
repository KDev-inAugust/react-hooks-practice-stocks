import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioList, handlePortfolioDelete, handlePortfolioAdd}) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioList.map((index)=>{
          return (<Stock key={index.id} name={index.name} price={index.price} isInPortfolio={true} handlePortfolioDelete={handlePortfolioDelete} handlePortfolioAdd={handlePortfolioAdd}/>)
        })
      }
    </div>
  );
}

export default PortfolioContainer;
