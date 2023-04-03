class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  # has_many :venues
  # has_many :clients
end
