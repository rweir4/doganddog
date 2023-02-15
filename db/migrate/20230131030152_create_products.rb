class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, index: true, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.string :file
      t.integer :color_id, null: false
      t.integer :product_type_id, null: false
      t.timestamps
    end
  end
end
