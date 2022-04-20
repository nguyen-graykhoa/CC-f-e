import React, { useState, useEffect } from 'react'
import { Auction } from '../requests'
import { Link } from 'react-router-dom';


const AuctionIndexPage = () => {
  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    Auction.index()
    .then((auctionsData) => {
      console.log(auctionsData)
      setAuctions(auctionsData)
       
    })
  }, [])

  const showAuction = (id) => {
    console.log(id)
  }

  return (
    <div>
      
      { auctions.map((e, i) => {
        return (
            <li key={i}>
                {e.id}-<Link to={`/auctions/${e.id}`}>{e.title}</Link>{' '}
                <button
                    onClick={() => {
                        showAuction(e.id);
                    }}
                >
                    View
                </button>{' '}
            </li>
        );
      })}
    </div>
  )
}

export default AuctionIndexPage
