Rails.application.routes.draw do
  resources :users
  resources :quote_items
  resources :quotes
  resources :categories
  resources :items
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

  get '/inventory', to: 'items#browse'
  get '/categories/:id/items', to: 'items#filtered_items'
end
