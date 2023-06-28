# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Color.delete_all

Color.create!([
  { color: 'lavender' },
  { color: 'indigo' },
])

Size.delete_all

Size.create!([
  { size: 'xs' },
  { size: 's' },
  { size: 'm' },
  { size: 'l' },
  { size: 'xl' },
])

ProductCategory.delete_all

ProductCategory.create!([
  { category: 'pet' },
  { category: 'home' },
])

ProductSubcategory.delete_all

ProductSubcategory.create!([
  { subcategory: 'dog_shirt', category_id: 1 },
  { subcategory: 'toy', category_id: 1 },
  { subcategory: 'bandana', category_id: 1 },
  { subcategory: 'tea_towel', category_id: 2 },
])

Product.delete_all

Product.create!([
  { name: 'Classic Linen Shirt', description: '', price: '39.99', product_subcategory_id: 1 },
  { name: 'Daisy Plush Toy', description: '', price: '22.99', product_subcategory_id: 2 },
  { name: 'HedgeRow Bandana', description: '', price: '29.99', product_subcategory_id: 3 },
  { name: 'Vine Bandana', description: '', price: '29.99', product_subcategory_id: 3 },
  { name: 'Classic Linen Tea Towel', description: '', price: '29.99', product_subcategory_id: 4 },
])

Subscription.delete_all

Subscription.create!([
  { email: 'hi@hi.com' },
  { email: 'me@me.com' },
  { email: 'you@you.com' },
])