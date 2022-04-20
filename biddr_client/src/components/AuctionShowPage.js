import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Auction } from '../requests';

const AuctionShowPage = () => {
  const [auction, setAuction]  = useState({})
  const [bids, setBids] = useState([])
  const params = useParams();
  
 
  //let bidsArr = Array.from(bids)

  useEffect(() => {
    Auction.show(params.id).then((fetchedAPIData) => {
       
      const {auction, bids} = fetchedAPIData
        setAuction(auction);
        setBids(bids)
         
    });
  },[])
  const submitBid = () => {

  }

  return (
      <>
          <div>
              <h3>Title: {auction.title}</h3>
              <p>Description: {auction.description}</p>
              <p>Current Price: ${auction.current_price}</p>
          </div>
          <div>
            <form action="" onSubmit={submitBid}>
              <input type="text" /><span><button>bid</button></span>
            </form>
          </div>
          <div>
          <h4>Previous Bids</h4>
            {bids.map((e, i) => {
              return <div key={i}>${e.bid_price}.00 on <small>{e.created_at}</small></div>
            })}
          </div>
      </>
  );
}

export default AuctionShowPage
