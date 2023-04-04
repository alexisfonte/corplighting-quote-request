class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :path, :subcategories

end
