class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :prep_date, :return_date, :status, :client_id, :venue_id, :user_id
end
