require 'rails_helper'

describe Composition do

    let(:mck) {User.create(
      username: "drrobotmck",
      password: "abc",
      password_confirmation: "abc"
      )}

    let(:composition) {Composition.create(
      name: "Suite mix",
      user: mck
      )}

    it { is_expected.to have_and_belong_to_many :sounds }
    it { is_expected.to belong_to :user }

    it "is valid when created while being logged in" do
      expect(composition).to be_valid
    end

    it "is valid when created with a name for the composition" do
      expect(composition).to be_valid
    end

    # it "is valid when created with three sounds" do
    #
    # end
end
