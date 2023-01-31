class RemoveColorIdsFromProducts < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :color_ids
  end
end
