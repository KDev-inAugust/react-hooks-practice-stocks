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

function handleSortBy(sortby){
  switch (sortby) {
    case 'Alphabetically':
      setStockList([...stockList].sort(alphabatizeCompare(stockList)));
      break;
    case 'Price':
      setStockList([...stockList].sort(priceCompare(stockList)))
  }
}


const alphabatizeCompare = (propName) =>
  (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1

const priceCompare = (propName) =>
  (a, b) => a.price > b.price ? -1 : 1

  function handleFilter(category){
    fetch('http://localhost:3001/stocks')
    .then((res)=>res.json())
    .then((data)=>setStockList(data.filter((index)=>index.type===category)))
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

    function handlePortfolioDelete(name){
      console.log(name);
      setPortfolioList(portfolioList.filter((index)=>index.name!==name))
    }


  return (
    <div>
      <SearchBar handleSortBy={handleSortBy} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} handlePortfolioAdd={handlePortfolioAdd} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} handlePortfolioDelete={handlePortfolioDelete} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
