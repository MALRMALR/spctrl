require 'rails_helper'

describe "Compositions", js: true do

  it "should create a new composition with three sounds when random button is clicked" do
    Sound.create!(category: 'city', url: 'https://s3.amazonaws.com/spctrl/100263__sagetyrtle__062510-park.mp3')
    Sound.create!(category: 'noise', url: 'https://s3.amazonaws.com/spctrl/117555__kougloff__moteur.mp3')
    Sound.create!(category: 'sleep', url: 'https://s3.amazonaws.com/spctrl/117782__burning-mir__ambient-sounds-14+1.mp3')
    visit(root_path)
    
    click_button('Random')
    composition = find("#sound-wrapper")

    expect(composition).to have_content("city")
    expect(composition).to have_content("noise")
    expect(composition).to have_content("sleep")
  end
end
