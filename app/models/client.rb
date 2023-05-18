class Client < ApplicationRecord
    belongs_to :quote
    has_one :address
end
