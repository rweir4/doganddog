class ChangeTypeinProductTypes < ActiveRecord::Migration[7.0]
  def change
    remove_column :product_types, :type
    add_column :product_types, :category, :string
  end
end
