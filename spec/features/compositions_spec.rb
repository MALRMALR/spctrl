require 'rails_helper'

describe "Compositions", js: true do

  it "shows a new composition" do
    create_and_show_composition
    expect(page).to have_css('#sliders')
  end

  it "edits the composition" do
    create_and_show_composition
    expect(page).to have_content('DELAYTIME')
    expect(page).to have_content('FEEDBACK')
    expect(page).to have_content('CUTOFF FREQ')
    expect(page).to have_content('REVERB')
  end

  it "creates a random composition" do
    create_random_composition
    expect(page).to have_content('DELAYTIME')
    expect(page).to have_content('FEEDBACK')
    expect(page).to have_content('CUTOFF FREQ')
    expect(page).to have_content('REVERB')
  end

  it "saves a composition" do
    log_in('DrRobotMck', 'abc')
    create_and_show_composition
    save_composition
    expect(page).to have_content('Saved Compositions')
  end

end
