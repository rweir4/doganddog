class BackfillProductColorTable < ActiveRecord::Migration[7.0]
  def change
    product_colors = []

    Product.all.each do |product|
      Color.all.each do |color|
        product_colors << { product_id: product.id, color_id: color.id }
      end
    end

    product_colors.each do |product_size|
      ProductColor.create!(product_id: product_size[:product_id], color_id: product_size[:color_id])
    end
  end
end
