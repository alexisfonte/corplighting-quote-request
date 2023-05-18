Rails.application.routes.draw do
  resources :clients
  resources :venues
  resources :addresses
  resources :users, only: [:show, :create, :update]
  resources :quote_items, only: [:index, :show, :create, :update, :destroy]
  resources :quotes, only: [:index, :show, :create, :update]
  resources :categories, only: [:index]
  resources :items, only: [:index, :show]
  
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  # user sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/auth/:provider/callback', to: 'sessions#omniauth'
  

  # user actions
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  patch '/edit-account', to: 'users#update'
  post '/verify', to: 'users#verify_edit'

  # cart actions
  get '/cart', to: 'carts#display_cart'
  post '/cart/add/:id', to: 'carts#add_to_cart'
  patch '/cart/update/:id', to: 'carts#update_cart_item_quantity'
  delete '/cart/remove/:id', to: 'carts#remove_from_cart'

  get '/inventory', to: 'items#browse'
  get '/categories/:category_id/items', to: 'items#filtered_items'
  get '/similar-items/:id', to: 'items#similar_products'

  get '/categories/:id', to: 'categories#show'
end
