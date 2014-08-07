# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV["RAILS_ENV"] ||= 'test'
require 'spec_helper'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
require 'capybara/rspec'
require 'pry'
require 'shoulda/matchers'

# Requires supporting ruby files with custom matchers and macros, etc, in
# spec/support/ and its subdirectories. Files matching `spec/**/*_spec.rb` are
# run as spec files by default. This means that files in spec/support that end
# in _spec.rb will both be required and run as specs, causing the specs to be
# run twice. It is recommended that you do not name files matching this glob to
# end with _spec.rb. You can configure this pattern with the --pattern
# option on the command line or in ~/.rspec, .rspec or `.rspec-local`.
Dir[Rails.root.join("spec/support/**/*.rb")].each { |f| require f }

# Checks for pending migrations before tests are run.
# If you are not using ActiveRecord, you can remove this line.
ActiveRecord::Migration.maintain_test_schema!

# Load seed script to prepare test database
Rails.application.load_seed

RSpec.configure do |config|
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
  # instead of true.
  config.use_transactional_fixtures = false

  # RSpec Rails can automatically mix in different behaviours to your tests
  # based on their file location, for example enabling you to call `get` and
  # `post` in specs under `spec/controllers`.
  #
  # You can disable this behaviour by removing the line below, and instead
  # explicitly tag your specs with their type, e.g.:
  #
  #     RSpec.describe UsersController, :type => :controller do
  #       # ...
  #     end
  #
  # The different available types are documented in the features, such as in
  # https://relishapp.com/rspec/rspec-rails/docs
  config.infer_spec_type_from_file_location!
end

def sign_up
  visit(root_path)
  page.find('#sign_up').click
  fill_in('Username', :with => 'DrRobotMck')
  fill_in('Password', :with => 'abc')
  fill_in('user[password_confirmation]', :with => 'abc')
  click_button('SIGN UP')
end

def log_in(username, password)
  User.create(username: username, password: password )
  visit(root_path)
  page.find('#login').click
  fill_in('Username', :with => username)
  fill_in('Password', :with => password)
  click_button('LOG IN')
end

def log_out
  click_link('Sign Out')
end

def delete_user
  visit(root_path)
  click_link(@test_user.username)
  click_link('DELETE ACCOUNT')
  page.driver.browser.switch_to.alert.accept
end

def choose_composition
  visit(root_path)
  find('#category1').find(:xpath, 'option[4]').click
  find('#category2').find(:xpath, 'option[3]').click
  find('#category3').find(:xpath, 'option[1]').click
end

def create_and_show_composition
  visit(root_path)
  find('#category1').find(:xpath, 'option[4]').click
  find('#category2').find(:xpath, 'option[3]').click
  find('#category3').find(:xpath, 'option[1]').click
  click_button('Create Composition')
end

def create_random_composition
  visit(root_path)
  click_button('Random')
end

def show_composition
  visit(root_path)
  find('#category1').find(:xpath, 'option[4]').click
  find('#category2').find(:xpath, 'option[3]').click
  find('#category3').find(:xpath, 'option[1]').click
  click_button('Create Composition')
end

def save_composition
  fill_in('name', with: 'My Swaggity Swag Mix')
  click_button('Save Composition')
end

def view_canvas
  visit(root_path)
  click_link('Canvas')
end
