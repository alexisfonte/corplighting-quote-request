class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :flex_id, :path, :parent_category_id
end
