class User < ActiveRecord::Base
  has_secure_password
  validates :username, :password, presence: true
  has_many :compositions, dependent: :destroy
end
