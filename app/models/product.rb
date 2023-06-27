class Product < ApplicationRecord
  has_many :product_colors
  has_many :product_sizes
  has_many :colors, :through => :product_colors
  has_many :sizes, :through => :product_sizes
end