class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, index: true, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.text :color_ids, array: true, default: [].to_yaml
      t.integer :product_type_id, null: false
      t.timestamps
    end
  end
end
