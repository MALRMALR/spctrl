Rails.application.routes.draw do
  root 'application#index'
  get '/sounds', to: 'sounds#index'
end
