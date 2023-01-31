class CreateSizes < ActiveRecord::Migration[7.0]
  def change
    create_table :sizes do |t|
      t.string :size, null: false
      t.text :products, array: true, default: [].to_yaml
      t.timestamps
    end
  end
end
