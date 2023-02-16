class ChangeProductColorColumnAgain < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :color_id

    add_column :products, :color_ids, :text, array: true, default: [0]
  end
end
