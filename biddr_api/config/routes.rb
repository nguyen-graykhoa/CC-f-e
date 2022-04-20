Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "auctions#index"
 
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :auctions, only: [:create, :index, :show] do
        resource :bids, only: [:create]
      end
       
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create] do
        # get('users/current', {to: 'users#current'})
        get :current, on: :collection #api/v1/users/current
      end
       
    end
  end

     
end
