class SubcategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :path, :subcategories, :breadcrumb

  def breadcrumb
    object.breadcrumb.map { |category| { id: category.id, name: category.name } }
  end
end
