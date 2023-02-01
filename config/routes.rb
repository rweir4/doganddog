Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :products
      resources :subscriptions
    end
  end
  
  # Defines the root path route ("/")
  # root "articles#index"
end
