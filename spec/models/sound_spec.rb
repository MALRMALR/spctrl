require 'rails_helper'

describe Sound do
  let(:sound1) {Sound.create(category: "melodic", url: "https://s3.amazonaws.com/spctrl/207558__edtijo__happy-guitar.mp3")}
  let(:sound2) {Sound.create(category: "city", url: "https://s3.amazonaws.com/spctrl/100263__sagetyrtle__062510-park.mp3")}
  let(:sound3) {Sound.create(category: "percussion", url: "https://s3.amazonaws.com/spctrl/153444__orginaljun__angry-fast-mac-keyboard-typing+1.mp3")}

  it { is_expected.to have_and_belong_to_many :compositions }

  it "has a category property" do
    expect(sound1.category).to eq("melodic")
    expect(sound2.category).to eq("city")
    expect(sound3.category).to eq("percussion")
  end

  it "has a valid url property" do
    expect(sound1.url).to eq("https://s3.amazonaws.com/spctrl/207558__edtijo__happy-guitar.mp3")
    expect(sound2.url).to eq("https://s3.amazonaws.com/spctrl/100263__sagetyrtle__062510-park.mp3")
  end

end
