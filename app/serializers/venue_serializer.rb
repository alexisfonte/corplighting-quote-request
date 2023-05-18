class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address_id, :phone_number, :user_id
end
