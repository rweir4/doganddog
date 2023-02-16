class CreateSizes < ActiveRecord::Migration[7.0]
  def change
    create_table :sizes do |t|
      t.string :size, null: false
      t.text :product_subcategory_ids, default: [], array: true
      t.timestamps
    end
  end
end
