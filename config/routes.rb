Rails.application.routes.draw do
  resources :categories
  resources :items
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
end
