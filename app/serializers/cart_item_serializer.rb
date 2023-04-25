class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :item_name, :quantity
end
