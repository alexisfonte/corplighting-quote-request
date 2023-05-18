class CreateVenues < ActiveRecord::Migration[7.0]
  def change
    create_table :venues do |t|
      t.string :name
      t.string :phone_number
      t.integer :address_id
      t.integer :quote_id

      t.timestamps
    end
  end
end
