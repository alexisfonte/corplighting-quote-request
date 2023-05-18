class Address < ApplicationRecord
    belongs_to :user
    belongs_to :venue
    belongs_to :client
end
