require 'rails_helper'

describe "Users", js: true do

  before(:all) do
    User.destroy_all
    @test_user = User.create!(username: "DrRobotMck", password: "abc")
  end

  it "signs up if no user is logged in" do
    sign_up
    expect(page).to have_content(@test_user.username)
  end

  it "logs in if there is no one logged in" do
    visit(root_path)
    expect(page).to have_content('LOGIN')
    log_in(@test_user.username, 'abc')
  end

  it "logs out of session if logged in" do
    log_in(@test_user.username, 'abc')
    expect(page).to have_content('SIGN OUT')
    log_out
    expect(page).to have_content('LOGIN')
  end

  it "deletes own account" do
    log_in(@test_user.username, 'abc')
    click_link('DrRobotMck')
    delete_user
  end

  it "views compositions" do
    log_in(@test_user.username, 'abc')
    create_and_show_composition
    click_button('Save Composition')
  end

end
