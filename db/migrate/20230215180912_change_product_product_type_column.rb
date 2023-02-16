class ChangeProductProductTypeColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :product_type_id

    add_column :products, :product_subcategory_id, :integer, null: false
  end
end
