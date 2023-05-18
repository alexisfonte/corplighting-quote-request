class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :company
      t.string :phone_number
      t.integer :address_id
      t.integer :quote_id

      t.timestamps
    end
  end
end
