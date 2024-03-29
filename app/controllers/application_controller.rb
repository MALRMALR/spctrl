class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def index
    render layout: 'application', text: ''
  end

  #session methods
  private
  def current_user
    User.find(session[:current_user]) if session[:current_user]
  end

  def authenticate
    redirect_to login_path unless current_user
  end

  def authorize
    unless current_user && current_user.id == params[:id].to_i
      redirect_to users_path
    end
  end

end
