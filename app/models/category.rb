class Category < ApplicationRecord
    has_many :subcategories, :class_name => "Category", :foreign_key => "parent_category_id"
    belongs_to :parent_category, :class_name => "Category", :optional => true
    has_many :items, dependent: :destroy

    validates :flex_id, uniqueness: true

end
