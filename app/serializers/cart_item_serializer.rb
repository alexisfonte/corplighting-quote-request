class CartItemSerializer < ActiveModel::Serializer
  attributes :item, :quantity
end
