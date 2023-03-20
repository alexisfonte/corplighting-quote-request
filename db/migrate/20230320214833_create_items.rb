class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :size
      t.string :description
      t.string :flex_id
      t.string :image_id
      t.string :catgory_id

      t.timestamps
    end
  end
end
