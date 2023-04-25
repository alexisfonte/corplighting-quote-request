class CartItem < ApplicationRecord
    belongs_to :cart
    belongs_to :item

    def serialize
        CartItemSerializer.new(self).as_json
    end
end
