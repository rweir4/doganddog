# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Color.delete_all

Color.create!([
  { color: 'Lavender' },
  { color: 'Indigo' },
])

Size.delete_all

Size.create!([
  { size: 'xs', product_types: ['dog_shirt', 'dog_bandana']},
  { size: 's', product_types: ['dog_shirt', 'dog_bandana']},
  { size: 'm', product_types: ['dog_shirt', 'dog_bandana']},
  { size: 'l', product_types: ['dog_bandana']},
  { size: 'xl', product_types: ['dog_bandana']},
])

ProductType.delete_all

ProductType.create!([
  { category: 'dog_shirt' },
  { category: 'toy' },
  { category: 'dog_bandana' },
  { category: 'tea_towel' },
  { category: 'pillow' },
  { category: 'stationary' },
])

Product.delete_all

Product.create!([
  { name: 'Lavender Linen Shirt', description: '', price: '45.00', color_id: 1, product_type_id: 1, sizes: ['xs', 's', 'm'] },
  { name: 'Indigo Linen Shirt', description: '', price: '45.00', color_id: 2, product_type_id: 1, sizes: ['xs', 's', 'm'] },
  { name: 'Daisy Shirt in Lavender', description: '', price: '49.99', color_id: 1, product_type_id: 1, sizes: ['xs', 's', 'm'] },
  { name: 'Daisy Shirt in Indigo', description: '', price: '49.99', color_id: 2, product_type_id: 1, sizes: ['xs', 's', 'm'] },
  { name: 'Tulip Shirt in Lavender', description: '', price: '49.99', color_id: 1, product_type_id: 1, sizes: ['xs', 's', 'm'] },
  { name: 'Tulip Shirt in Indigo', description: '', price: '49.99', color_id: 2, product_type_id: 1, sizes: ['xs', 's', 'm'] },
  { name: 'Flower Field Shirt in Lavender', description: '', price: '54.99', color_id: 1, product_type_id: 1, sizes: ['xs', 's', 'm'] },
  { name: 'Flower Field Shirt in Indigo', description: '', price: '54.99', color_id: 2, product_type_id: 1, sizes: ['xs', 's', 'm'] },
  { name: 'Petal Shirt in Lavender', description: '', price: '45.00', color_id: 1, product_type_id: 1, sizes: ['xs', 's', 'm'] },
  { name: 'Petal Shirt in Indigo', description: '', price: '45.00', color_id: 2, product_type_id: 1, sizes: ['xs', 's', 'm'] },
  { name: 'Garden Polo in Lavender', description: '', price: '45.00', color_id: 1, product_type_id: 1, sizes: ['xs', 's', 'm'] },
  { name: 'Garden Polo in Indigo', description: '', price: '45.00', color_id: 2, product_type_id: 1, sizes: ['xs', 's', 'm'] },
])

Product.create!([
  { name: 'Daisy Plush Toy in Lavender', description: '', price: '16.99', color_id: 1, product_type_id: 2 },
  { name: 'Daisy Plush Toy in Indigo', description: '', price: '16.99', color_id: 2, product_type_id: 2 },
  { name: 'Tulip Plush Toy in Lavender', description: '', price: '16.99', color_id: 1, product_type_id: 2 },
  { name: 'Tulip Plush Toy in Indigo', description: '', price: '16.99', color_id: 2, product_type_id: 2 },
  { name: 'Bone Plush Toy in Lavender', description: '', price: '16.99', color_id: 1, product_type_id: 2 },
  { name: 'Bone Plush Toy in Indigo', description: '', price: '16.99', color_id: 2, product_type_id: 2 },
  ])
  
Product.create!([
  { name: 'Flower Bandana in Lavender', description: '', price: '16.99', color_id: 1, product_type_id: 3, sizes: ['xs', 's', 'm', 'l', 'xl'] },
  { name: 'Flower Bandana in Indigo', description: '', price: '16.99', color_id: 2, product_type_id: 3, sizes: ['xs', 's', 'm', 'l', 'xl'] },
  { name: 'Arrow Bandana in Lavender', description: '', price: '16.99', color_id: 1, product_type_id: 3, sizes: ['xs', 's', 'm', 'l', 'xl'] },
  { name: 'Arrow Bandana in Indigo', description: '', price: '16.99', color_id: 2, product_type_id: 3, sizes: ['xs', 's', 'm', 'l', 'xl'] },
  { name: 'Sailor Bandana in Lavender', description: '', price: '16.99', color_id: 1, product_type_id: 3, sizes: ['xs', 's', 'm', 'l', 'xl'] },
  { name: 'Sailor Bandana in Indigo', description: '', price: '16.99', color_id: 2, product_type_id: 3, sizes: ['xs', 's', 'm', 'l', 'xl'] },
]);  

Product.create!([
  { name: 'Floral Tea Towel in Lavender', description: '', price: '29.99', color_id: 1, product_type_id: 4 },
  { name: 'Floral Tea Towel in Indigo', description: '', price: '29.99', color_id: 2, product_type_id: 4 },
]);
  
Product.create([
  { name: 'Floral Pillow in Lavender', description: '', price: '49.99', color_id: 1, product_type_id: 5 },
  { name: 'Floral Pillow in Indigo', description: '', price: '49.99', color_id: 2, product_type_id: 5 },
])

Product.create([
  { name: 'English Garden Stationary', description: '', price: '19.99', color_id: 1, product_type_id: 5 },
])