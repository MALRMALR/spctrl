Rails.application.routes.draw do
  root 'sounds#home'

  #sounds routes
  get '/home', to: 'sounds#home'
  get '/filter', to: 'sounds#filter'
  get '/random', to: 'sounds#random'
  get '/canvas', to: 'sounds#canvas'

  #compositions routes
  post '/compositions/create', to: 'compositions#create', as: 'new_composition'
  get '/compositions/:id', to: 'compositions#show', as: 'composition'
  delete 'compositions/:id', to: 'compositions#destroy'

  #users routes
  resources :users

  #session
  get '/login' => 'sessions#new'
  post '/sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
end
