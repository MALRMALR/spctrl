require 'rails_helper'

describe "Users", js: true do

  def sign_up(description)
    click_link('login')
    fill_in('Username', :with => 'DrRobotMck')
    fill_in('Password', :with => 'abc')
    click_link('Create a Profile')
  end

  it "signs me in if there is no one logged in" do
    visit(root_path)

  end

end
