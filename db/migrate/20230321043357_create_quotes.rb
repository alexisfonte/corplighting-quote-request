class CreateQuotes < ActiveRecord::Migration[7.0]
  def change
    create_table :quotes do |t|
      t.datetime :prep_date
      t.datetime :return_date
      t.string :status
      t.integer :client_id
      t.integer :venue_id
      t.integer :user_id

      t.timestamps
    end
  end
end
