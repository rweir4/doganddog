class DropProductSubcategories < ActiveRecord::Migration[7.0]
  def change
    drop_table :product_subcategories_tables

    create_table :product_subcategories do |t|
      t.string :subcategory, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end
