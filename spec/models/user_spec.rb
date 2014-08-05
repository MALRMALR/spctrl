require 'rails_helper'

describe User do

  let(:mck) {User.create(
    username: "drrobotmck",
    password: "abc",
    password_confirmation: "abc"
    )}

    it { is_expected.to validate_presence_of :username }
    it { is_expected.to have_many :compositions }

    it "is valid when created with a username and password" do
      expect(mck).to be_valid
    end
  end
