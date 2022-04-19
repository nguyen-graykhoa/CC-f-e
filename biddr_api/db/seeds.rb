User.destroy_all
Bid.destroy_all
Auction.destroy_all

PASSWORD = "123"
super_user = User.create(
    first_name: "Admin",
    last_name: "User",    
    email: "admin@user.com",
    password_digest: PASSWORD    
)

5.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
        first_name: first_name,
        last_name: last_name,        
        email: "#{first_name}_#{last_name}@user.com",
        password_digest: PASSWORD
    )
end

users = User.all

5.times do 
    created_at = Faker::Date.backward(days:7 * 5)

    a = Auction.create(
        title: Faker::Camera.brand,
        description: Faker::Camera.brand_with_model,
        current_price: Faker::Commerce.price(range: 0..10.0, as_string: true),
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )
    if a.valid?
        rand(1..5).times do
            Bid.create(
              auction: a,
              bid_price: Faker::Commerce.price(range: 0..10.0, as_string: true),
              user: users.sample,
            )
        end
         
    end
    
end

auctions = Auction.all
bids = Bid.all

puts Cowsay.say("Generated #{users.count} users", :koala)
puts Cowsay.say("Generated #{auctions.count} auctions", :frogs)
puts Cowsay.say("Generated #{bids.count} bids", :cow)
 