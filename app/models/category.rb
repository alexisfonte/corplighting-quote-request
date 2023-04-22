class Category < ApplicationRecord
    belongs_to :parent_category, :class_name => "Category", :optional => true
    has_many :subcategories, :class_name => "Category", :foreign_key => "parent_category_id"
    has_many :items, dependent: :destroy

    validates :flex_id, uniqueness: true

    # scope :all_subcategories, ->(name) { where("path LIKE :prefix", prefix: "#{name}%") }
    scope :customer_inventory, ->{ where(customer_view: true) }

    # def self.filter(name)
    #     items = []
    #     all_subcategories(name).each do |category|
    #         category.items.each do |item|
    #             items << item
    #         end
    #     end
    #     return items
    # end

    def self.customer_categories
        return Category.where(parent_category: nil, name: ["Audio", "Lighting", "Video", "LED"])
    end

    def all_subcategories
        subcategories.map do |subcategory|
            [subcategory] + subcategory.all_subcategories
        end.flatten
    end

    def breadcrumb
        if parent_category
            parent_category.breadcrumb + [self]
        else
            [self]
        end
    end

end
