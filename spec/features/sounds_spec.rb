require 'rails_helper'

describe "Sounds", js: true do

  it "creates a new composition with categories melodic, neutral, and study" do
    choose_composition
    expect(page).to have_content('melodic')
    expect(page).to have_content('light')
    expect(page).to have_content('sleep')
    click_button('Create Composition')
    expect(page).to have_css('#sliders')
  end

  it "can be manipulated on a canvas" do
    view_canvas
    expect(page).to have_css('#myCanvas')
    expect(page).to have_content('MAJOR')
    expect(page).to have_content('MINOR')
  end

end
