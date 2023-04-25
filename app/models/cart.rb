class Cart < ApplicationRecord
    belongs_to :user, :optional => true
    has_many :cart_items, dependent: :destroy
    has_many :items, through: :cart_items

    def add_item(product, quantity)
        item = cart_items.find { |i| i.item_id == product.id }
        if item
          item.quantity += quantity
        else
          item = cart_items.build(item_id: product.id, quantity: quantity)
        end
    end
    
    def self.build_from_hash(hash)
        cart = Cart.new
        hash["cart_items"].each do |item|
          cart.cart_items.build(item_id: item["item_id"], quantity: item["quantity"])
        end
        cart
    end
    
    def serialize
        CartSerializer.new(self).as_json
    end
end
