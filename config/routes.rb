Rails.application.routes.draw do
  root 'sounds#home'
  get '/home', to: 'sounds#home'
  get '/filter', to: 'sounds#filter'
  get '/random', to: 'sounds#random'
end
