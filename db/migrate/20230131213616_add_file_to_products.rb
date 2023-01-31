class AddFileToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :product_photo_location, :string
  end
end
