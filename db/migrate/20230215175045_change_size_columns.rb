class ChangeSizeColumns < ActiveRecord::Migration[7.0]
  def change
    remove_column :sizes, :product

    add_column :sizes, :product_subcategory_id, :integer
  end
end
