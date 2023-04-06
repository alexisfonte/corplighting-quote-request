class ChangeCategoryIdInItems < ActiveRecord::Migration[7.0]
  def change
    change_column :items, :category_id, :integer, using: "category_id::integer"
  end
end
