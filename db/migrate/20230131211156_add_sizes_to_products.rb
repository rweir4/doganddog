class AddSizesToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :sizes, :text,  array: true, default: [].to_yaml
  end
end
