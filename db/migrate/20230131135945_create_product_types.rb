class CreateProductTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :product_types do |t|
      t.string :type, null: false
      t.timestamps
    end
  end
end
