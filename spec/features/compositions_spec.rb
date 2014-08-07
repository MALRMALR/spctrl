require 'rails_helper'

describe "Compositions", js: true do

  it "shows a new composition" do
    create_and_show_composition
    expect(page).to have_css('#sliders')
  end

  it "edits the composition" do
    create_and_show_composition
    expect(page).to have_content('delayTime')
    expect(page).to have_content('feedback')
    expect(page).to have_content('cutoff freq')
    expect(page).to have_content('Reverb')
  end

  it "creates a random composition" do
    create_random_composition
    expect(page).to have_content('delayTime')
    expect(page).to have_content('feedback')
    expect(page).to have_content('cutoff freq')
    expect(page).to have_content('Reverb')
  end

  it "saves a composition" do
    log_in('DrRobotMck', 'abc')
    create_and_show_composition
    fill_in('name', :with => 'My Swaggity Swag Mix')
    click_button('Save Composition')
    expect(page).to have_content('Saved Compositions')
  end

end
