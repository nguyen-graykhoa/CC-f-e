class Api::V1::BidsController < Api::ApplicationController
  
  before_action :find_auction
  
  # def index
  #   @bids = Bid.find_by('auction_id': @auction.id)
  #   rense json: { bids}
  # end

  def create     
    bid = Bid.new(bid_price: params[:bid_price].to_i, auction_id: params[:auction_id])
    bid.user = current_user
     
    

    bid.save!      
    render json: { id: bid.id }
  end

  private 
  
  def find_auction 
    @auction = Auction.find params[:auction_id]
  end

end
