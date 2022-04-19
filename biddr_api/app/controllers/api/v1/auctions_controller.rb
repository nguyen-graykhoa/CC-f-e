class Api::V1::AuctionsController < Api::ApplicationController
    before_action :find_auction, only: [:show]
    before_action :authenticate_user!, except: [:index, :show]

    def create      
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
        render(json: @auction)
    end

    private 

    def auction_params
      params.require(:auctions).permit(:title, :description, :current_price, :bid_end_at)
    end

    def find_auction
      @auction = Auction.find(params[:id])
    end
end
