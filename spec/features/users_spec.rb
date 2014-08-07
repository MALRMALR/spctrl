require 'rails_helper'

describe "Users", js: true do

  before(:all) do
    User.destroy_all
    @test_user = User.create!(username: "DrRobotMck", password: "abc")
  end

  it "signs up if no user is logged in" do
    sign_up()
  end

  it "logs in if there is no one logged in" do
    # expect(page).to have_xpath('')
    log_in(@test_user.username, 'abc')
  end

  it "logs out of session" do
    log_in(@test_user.username, 'abc')
    visit(root_path)
    log_out()
  end

  it "deletes own account" do
    log_in(@test_user.username, 'abc')
    click_link('DrRobotMck')
    delete_user()
  end

  it "views compositions" do
    log_in(@test_user.username, 'abc')
    create_composition()
    click_button('Save Composition')
  end

end
