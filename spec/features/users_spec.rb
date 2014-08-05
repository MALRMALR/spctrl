require 'rails_helper'

describe "Users", js: true do

  def sign_up()
    page.find('#sign_up').click
    fill_in('Username', :with => 'DrRobotMck')
    fill_in('Password', :with => 'abc')
    fill_in('user[password_confirmation]', :with => 'abc')
    click_button('Update')
  end

  def log_in()
    page.find('#login').click
    fill_in('Username', :with => 'DrRobotMck')
    fill_in('Password', :with => 'abc')
    click_button('Log In')
  end

  # before(:each) do
  #   User.destroy_all
  #   User.create!(username: "adambreezy", password: "abc")
  # end

  it "signs up if no user is logged in" do
    visit(root_path)
    sign_up()
  end

  it "logs in if there is no one logged in" do
    visit(root_path)
    log_in()
  end

end
