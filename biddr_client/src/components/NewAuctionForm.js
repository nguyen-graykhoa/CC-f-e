import React from 'react'
import { Form } from 'react-bootstrap'

const NewAuctionForm = (props) => {
  const getDataAndSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    console.log(fd.get('title'), fd.get('description'))
    props.submitForm(
      {
        title: fd.get('title'),
        description: fd.get('description'),
        created_at: new Date(),
        current_price: fd.get('current_price'),
        bid_end_at: new Date(),
        reserve_price: fd.get('reserve_price')
      }
    )
  }

  return (
      <form onSubmit={getDataAndSubmit}>
          <Form.Group className='mb-3'>
              <label htmlFor='title'>Title</label>
              <br />
              <input type='text' name='title' id='title' />
          </Form.Group>
          <div>
              <label htmlFor='description'>Description</label>
              <br />
              <input type='text' name='description' id='description' />
          </div>
          <div>
              <label htmlFor='current_price'>Current Price</label>
              <br />
              <input type='text' name='current_price' id='current_price' />
          </div>
          <div>
              <label htmlFor='reserve_price'>Reserve Price</label>
              <br />
              <input type='text' name='reserve_price' id='reserve_price' />
          </div>
          <div>
              <input type='submit' value='Create Auction' />
          </div>
      </form>
  );
}

export default NewAuctionForm
