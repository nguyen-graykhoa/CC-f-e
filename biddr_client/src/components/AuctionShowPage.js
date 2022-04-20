import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Auction, Bid } from '../requests';

const AuctionShowPage = () => {
  const [auction, setAuction]  = useState({})
  const [bids, setBids] = useState([])
  const params = useParams();
  console.log(`params ${params.id}`)
 
  //let bidsArr = Array.from(bids)

  useEffect(() => {
    Auction.show(params.id).then((fetchedAPIData) => {
       
      const {auction, bids} = fetchedAPIData
        setAuction(auction);
        setBids(bids)
         
    });
  },[])
  console.log(`bids ${bids}`)
  const submitBid = (event) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    Bid.create({
      bid_price: fd.get('bid_price'),
      auction_id: params.id
    }).then((bid) => {
        console.log(`bid: ${bid.errors}`);
        if (bid.errors) {
            console.log(`BidErrors: ${bid.errors}`, bid.errors);
        } else {
            //the history prop contains methods used to navigate
           // this.props.history.push(`/auctions`);
        }
    }); 
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
              <input type="text" name="bid_price" /><span><button type='submit'>bid</button></span>
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
