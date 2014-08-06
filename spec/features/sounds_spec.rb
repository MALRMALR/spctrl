require 'rails_helper'

describe "Sounds", js: true do

  it "creates a new composition with categories melodic, happy, and sleep" do
  visit(root_path)
  create_composition
  end

end
