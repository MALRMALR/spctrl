require 'rails_helper'

describe "Compositions", js: true do

  it "creates a new composition with categories melodic, happy, and study" do
    visit(root_path)
    create_composition
  end

  it "edits the composition" do
    visit(root_path)
    create_composition
    expect(page).to have_content('delayTime')
  end

  it "creates a random composition" do
    visit(root_path)
    create_random_composition
  end

  it "saves a composition" do
    visit(root_path)
    create_composition
    fill_in('name', with: 'My Swaggity Swag Mix')
    saves_composition()
  end

end
