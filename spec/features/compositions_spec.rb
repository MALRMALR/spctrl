require 'rails_helper'

describe "Compositions", js: true do

  it "shows a new composition with categories melodic, neutral, and study" do
    show_composition
  end

  it "edits the composition" do
    create_composition
    expect(page).to have_content('delayTime')
  end

  it "creates a random composition" do
    create_random_composition
  end

  it "saves a composition" do
    log_in('mck', 'abc')
    create_composition
    fill_in('name', :with => 'My Swag Mix')
    click_button('Save Composition')
  end

end
