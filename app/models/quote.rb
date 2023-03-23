class Quote < ApplicationRecord
    belongs_to :user, required: true
    belongs_to :client, required: true
    belongs_to :venue, required: true

    has_many :quote_items, dependent: :destroy
    has_many :items, through: :quote_items

    validates :user_id, presence: true
    # validates :prep_date, :return_date, :status, :client, :venue, :user, presence: true
end
