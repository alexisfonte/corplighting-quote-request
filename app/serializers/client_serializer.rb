class ClientSerializer < ActiveModel::Serializer
  attributes :id, :company, :quote_id, :address_id, :phone_number
end
