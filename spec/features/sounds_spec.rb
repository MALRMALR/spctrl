require 'rails_helper'

describe "Sounds", js: true do

  it "creates a new composition with categories melodic, happy, and sleep" do
  create_composition
  end

  it "can be manipulated on a canvas" do
    view_canvas
    expect(page).to have_css('#myCanvas')
  end

end
