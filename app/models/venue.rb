class Venue < ApplicationRecord
    belongs_to :quote
    has_one :address
end
