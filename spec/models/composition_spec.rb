require 'rails_helper'

describe Composition do

  it { is_expected.to have_and_belong_to_many :sounds }
  it { is_expected.to belong_to :user }
  
end
