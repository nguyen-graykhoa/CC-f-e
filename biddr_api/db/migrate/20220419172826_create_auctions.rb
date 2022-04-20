class CreateAuctions < ActiveRecord::Migration[7.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.integer :current_price
      t.datetime :bid_end_at
      t.integer :reserve_price
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
