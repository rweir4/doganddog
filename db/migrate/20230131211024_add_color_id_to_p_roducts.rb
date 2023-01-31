class AddColorIdToPRoducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :color_id, :integer
  end
end
