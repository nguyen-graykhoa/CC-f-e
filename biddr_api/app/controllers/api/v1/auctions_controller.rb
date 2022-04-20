class Api::V1::AuctionsController < Api::ApplicationController
    before_action :find_auction, only: [:show]
    before_action :authenticate_user!, except: [:index, :show, :create]

    def create      
      #current_user = User.find(19)
      auction = Auction.new(auction_params)
      auction.user = current_user  
      auction.save!      
      render json: { id: auction.id }
    end

    def index
      auctions = Auction.order(created_at: :desc)
      render(json: auctions)
    end

    def show
        # return a single question in json format
        
        @bids = @auction.bids
         
        render(json: {auction: @auction, bids: @bids})
    end

    private 

    def auction_params
      params.require(:auction).permit(:title, :description, :current_price)
    end

    def find_auction
      @auction = Auction.find(params[:id])
    end
end
