class User < ApplicationRecord
    has_secure_password
    has_many :quotes
    has_many :venues
    has_many :clients

    validates :email, presence: {message: "Email is required to create an account"}, uniqueness: {message: "This email is already associated with an account"}, format: { with: URI::MailTo::EMAIL_REGEXP, message: "Invalid email" }
    validates :password, presence: {message: "Password required"}, length: {minimum: 8, message: "Password must be at least 8 characters long"}
    validates :name, presence: {message: "Name is required"}
end