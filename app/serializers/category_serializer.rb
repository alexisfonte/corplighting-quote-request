class CategorySerializer < ActiveModel::Serializer
  # attributes :id, :name, :path, :parent_category_id
  attributes :id, :name, :path, :subcategories, :breadcrumb

  def breadcrumb
    object.breadcrumb.map { |category| { id: category.id, name: category.name } }
  end
end
