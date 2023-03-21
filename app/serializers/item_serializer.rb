class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :size, :description, :image_id

  belongs_to :category
end
