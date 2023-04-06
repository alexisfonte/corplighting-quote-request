class Item < ApplicationRecord
    belongs_to :category
    # has_many :quote_items
    # has_many :quotes, through: :quote_items

    self.per_page = 24

    validates :flex_id, uniqueness: true

    scope :customer_inventory, -> { joins(:category).merge(Category.customer_inventory) } 

    def highest_category
        category_name = self.category.path.split(/\s>\s/).first
        Category.where(name: category_name, parent_category: nil)
    end

end
