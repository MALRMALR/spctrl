Rails.application.routes.draw do
  root 'application#index'
  get '/filter', to: 'sounds#filter'
  get '/random', to: 'sounds#random'
end
