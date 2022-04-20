import React from 'react'
import { Auction } from '../requests';
import NewAuctionForm from './NewAuctionForm';

const NewAuctionPage = (props) => {
  const createNewAuction = (params) => {
     Auction.create(params).then((auction) => {
         console.log(`question: ${auction.errors}`);
         if (auction.errors) {
             console.log(`AuctionErrors: ${auction.errors}`, auction.errors);
             
         } else {
             //the history prop contains methods used to navigate
             this.props.history.push(`/auctions/${auction.id}`);
         }
     });
  }

  return (
      <div>
          <h3>New Auction</h3>
          <NewAuctionForm submitForm={createNewAuction} />
      </div>
  );
}

export default NewAuctionPage
