class Bid < ApplicationRecord
  belongs_to :user
  belongs_to :auction

  validates :bid_price, numericality: { greater_than_or_equal_to: 1 }
end
