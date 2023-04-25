class Item < ApplicationRecord
    belongs_to :category
    has_many :cart_items
    # has_many :quote_items
    # has_many :quotes, through: :quote_items

    self.per_page = 24

    validates :flex_id, uniqueness: true

    scope :customer_inventory, -> { joins(:category).merge(Category.customer_inventory) } 

    def category_path
        categories = self.category.path.split(/\s>\s/)
        # Category.where(name: category_name, parent_category: nil)
        path = []
        categories.map do |category, index|
            if (index == 0)
            new_cat = Category.find_by(name: category, parent_category_id: nil)
            path << new_cat
            else 
                new_cat = Category.find_by(name: category, parent_category_id: path.last.parent_category_id)
                path << new_cat    
            end
        end
        path
    end

    def self.for_filtered_category(category)
        categories = [category] + category.all_subcategories
        where(category_id: categories)
    end

end
