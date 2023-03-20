class ChangeCatgoryIdColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :items, :catgory_id, :category_id
  end
end
