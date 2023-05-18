class Quote < ApplicationRecord
    belongs_to :user, required: true
    has_one :venue, required: true
    has_one :client, required: true

    has_many :quote_items, dependent: :destroy
    has_many :items, through: :quote_items

    validates :user_id, presence: true
    # validates :prep_date, :return_date, :status, :client, :venue, :user, presence: true
end
