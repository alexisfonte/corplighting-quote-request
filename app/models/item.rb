class Item < ApplicationRecord
    belongs_to :category
    # has_many :quote_items
    # has_many :quotes, through: :quote_items

    validates :flex_id, uniqueness: true

end
