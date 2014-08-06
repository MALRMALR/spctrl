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

RSpec.configure do |config|
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
  # instead of true.
  config.use_transactional_fixtures = true

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


def create_composition()
  find('#category1').find(:xpath, 'option[4]').click
  find('#category2').find(:xpath, 'option[3]').click
  find('#category3').find(:xpath, 'option[1]').click
  click_button('Create Composition')
end

def create_random_composition()
  click_button('Random')
end

def saves_composition()
  click_button('Save Composition')
end

def create_composition()
  find('#category1').find(:xpath, 'option[4]').click
  find('#category2').find(:xpath, 'option[3]').click
  find('#category3').find(:xpath, 'option[1]').click
  click_button('Create Composition')
end

def sign_up()
  page.find('#sign_up').click
  fill_in('Username', :with => 'DrRobotMck')
  fill_in('Password', :with => 'abc')
  fill_in('user[password_confirmation]', :with => 'abc')
  click_button('Update')
end

def log_in(username, password)
  page.find('#login').click
  fill_in('Username', :with => username)
  fill_in('Password', :with => password)
  click_button('Log In')
end

def log_out()
  click_link('Sign Out')
end

def delete_user()
  click_link('DELETE ACCOUNT')
end
