class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :cart_items

  def cart_items
    object.cart_items.map { |item| CartItemSerializer.new(item) }
  end
  
end
