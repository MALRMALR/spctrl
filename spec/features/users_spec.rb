require 'rails_helper'

describe "Users", js: true do

  # WUS DIS FO
  before(:all) do
    User.destroy_all
    @test_user = User.create!(username: "a-Breezy", password: "abc")
  end

  it "signs up if no user is logged in" do
    visit(root_path)
    sign_up()
  end

  it "logs in if there is no one logged in" do
    visit(root_path)
    log_in(@test_user.username, 'abc')
  end

  it "logs out" do
    visit(root_path)
    log_in(@test_user.username, 'abc')
    visit(root_path)
    log_out()
  end

  it "deletes" do
    visit(root_path)
    log_in(@test_user.username, 'abc')
    click_link('a-Breezy')
    delete_user()
  end

  it "views compositions" do
    visit(root_path)
    log_in(@test_user.username, 'abc')
    creates_composition()
    saves_composition()
  end

end
