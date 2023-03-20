class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :size, :description, :flex_id, :image_id, :catgory_id
end
