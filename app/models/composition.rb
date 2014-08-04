class Composition < ActiveRecord::Base
  has_and_belongs_to_many :sounds
  belongs_to :user
end
