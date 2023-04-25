class RenameProductIdToItemId < ActiveRecord::Migration[7.0]
  def change
    rename_column :cart_items, :product_id, :item_id
  end
end
