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
  { color: 'beige' },
])

Size.delete_all

Size.create!([
  { size: 'xs', product_subcategory_ids: [1, 3] },
  { size: 's', product_subcategory_ids: [1, 3]},
  { size: 'm', product_subcategory_ids: [3] },
  { size: 'l', product_subcategory_ids: [3] },
  { size: 'xl', product_subcategory_ids: [3] },
])

ProductCategory.delete_all

ProductCategory.create!([
  { category: 'pet' },
  { category: 'home' },
  { category: 'human' },
])

ProductSubcategory.delete_all

ProductSubcategory.create!([
  { subcategory: 'dog_shirt', category_id: 1 },
  { subcategory: 'toy', category_id: 1 },
  { subcategory: 'bandana', category_id: 1 },
  { subcategory: 'tea_towel', category_id: 2 },
  { subcategory: 'pillow', category_id: 2 },
  { subcategory: 'stationary', category_id: 2 },
])

Product.delete_all

Product.create!([
  { name: 'Classic Linen Shirt', description: '', price: '45.00', color_ids: [1, 2], product_subcategory_id: 1 },
  { name: 'Daisy Shirt', description: '', price: '49.99', color_ids: [1, 2], product_subcategory_id: 1 },
  { name: 'Tulip Shirt', description: '', price: '49.99', color_ids: [1, 2], product_subcategory_id: 1 },
  { name: 'Flower Field Shirt', description: '', price: '54.99', color_ids: [1, 2], product_subcategory_id: 1 },
  { name: 'Petal Shirt', description: '', price: '45.00', color_ids: [1, 2], product_subcategory_id: 1 },
  { name: 'Garden Polo', description: '', price: '45.00', color_ids: [1, 2], product_subcategory_id: 1 },
])

Product.create!([
  { name: 'Daisy Plush Toy', description: '', price: '16.99', color_ids: [1, 2], product_subcategory_id: 2 },
  { name: 'Tulip Plush Toy', description: '', price: '16.99', color_ids: [1, 2], product_subcategory_id: 2 },
  { name: 'Bone Plush Toy', description: '', price: '16.99', color_ids: [1, 2], product_subcategory_id: 2 },
  ])
  
Product.create!([
  { name: 'Flower Bandana', description: '', price: '19.99', color_ids: [1, 2], product_subcategory_id: 3 },
  { name: 'Arrow Bandana', description: '', price: '19.99', color_ids: [1, 2], product_subcategory_id: 3 },
  { name: 'Sailor Bandana', description: '', price: '19.99', color_ids: [1, 2], product_subcategory_id: 3 },
]);  

Product.create!([
  { name: 'Flower Wreath Tea Towel', description: '', price: '29.99', color_ids: [1, 2], product_subcategory_id: 4 },
]);
  
Product.create([
  { name: 'Floral Pillow', description: '', price: '49.99', color_ids: [1, 2], product_subcategory_id: 5 },
])

Product.create([
  { name: 'English Garden Stationary', description: '', price: '19.99', color_ids: [3], product_subcategory_id: 6 },
])

Subscription.delete_all

Subscription.create!([
  { email: 'hi@hi.com' },
  { email: 'me@me.com' },
  { email: 'you@you.com' },
])