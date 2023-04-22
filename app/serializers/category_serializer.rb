class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :path, :parent_category_id

end
