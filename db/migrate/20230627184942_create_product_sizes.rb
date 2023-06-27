class CreateProductSizes < ActiveRecord::Migration[7.0]
  def change
    create_table :product_sizes do |t|
      t.integer :product_id
      t.integer :size_id
      t.timestamps
    end
  end
end
