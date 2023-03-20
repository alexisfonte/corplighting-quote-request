class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :flex_id
      t.string :path
      t.bigint :parent_category_id
      t.boolean :customer_view

      t.timestamps
    end
  end
end
