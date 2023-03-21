class SubcategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :path, :subcategories
end
