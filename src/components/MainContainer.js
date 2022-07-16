import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

const [stockList, setStockList]=useState([]);
const [portfolioList, setPortfolioList]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then((res)=>res.json())
    .then((data)=>setStockList(data))
  },[])

 
  function compareLists(stockList, portfolioList){
    for(let i=0; i < stockList.length; i++){
    for(let j=0; j < portfolioList.length; j++){
      if(stockList[i]===portfolioList[j]){
        console.log(portfolioList[j].name)
        return portfolioList[j].name;
      }
    }
  }
 }


  function handlePortfolioAdd(name){
    console.log(name);
if (portfolioList.some(index=>index.name===name)){
  console.log('already there')}
  else {
  stockList.map((index)=>{
    if(index.name===name){
      setPortfolioList([...portfolioList, index]);
        }
      }
    )
}
    }

   


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} handlePortfolioAdd={handlePortfolioAdd}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
