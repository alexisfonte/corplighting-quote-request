Rails.application.routes.draw do
  resources :quote_items
  resources :quotes
  resources :categories
  resources :items
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  get '/categories/:id/items', to: 'items#filtered_items'
end
