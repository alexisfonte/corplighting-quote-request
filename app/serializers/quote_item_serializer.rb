class QuoteItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :quote_id, :item_id
end
