class BackfillProductSizeTable < ActiveRecord::Migration[7.0]
  def change
    product_sizes = []

    Product.all.each do |product|
      size_ids = case product.product_subcategory_id
      when 4
        [1,2,3]
      when 3
        [1,2,3,4,5]
      else
        []
      end

      size_ids.each do |size|
        product_sizes << { product_id: product.id, size_id: size }
      end
    end

    product_sizes.each do |product_size|
      ProductSize.create!(product_id: product_size[:product_id], size_id: product_size[:size_id])
    end
  end
end
