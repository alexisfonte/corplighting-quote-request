class AddressSerializer < ActiveModel::Serializer
  attributes :id, :line1, :line2, :city, :state, :zip_code, :user_id
end
