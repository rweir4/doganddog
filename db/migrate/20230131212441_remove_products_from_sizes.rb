class RemoveProductsFromSizes < ActiveRecord::Migration[7.0]
  def change
    remove_column :sizes, :products
    add_column :sizes, :product_types, :text, array: true, default: [].to_yaml
  end
end
