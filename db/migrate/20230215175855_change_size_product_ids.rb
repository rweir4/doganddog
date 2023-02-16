class ChangeSizeProductIds < ActiveRecord::Migration[7.0]
  def change
    remove_column :sizes, :product_subcategory_id

    add_column :sizes, :product_subcategory_ids, :text, array: true, default: []
  end
end
