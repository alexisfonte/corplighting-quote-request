class CreateQuoteItems < ActiveRecord::Migration[7.0]
  def change
    create_table :quote_items do |t|
      t.integer :quantity
      t.integer :quote_id
      t.integer :item_id

      t.timestamps
    end
  end
end
