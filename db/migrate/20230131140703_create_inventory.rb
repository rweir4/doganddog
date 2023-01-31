class CreateInventory < ActiveRecord::Migration[7.0]
  def change
    create_table :inventories do |t|
      t.integer :product_id, null: false
      t.integer :color_id, null: false
      t.integer :size_id, null: false
      t.integer :quantity, null: false
      t.timestamps
    end
  end
end
