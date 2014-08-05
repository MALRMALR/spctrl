class SessionsController < ApplicationController
  def new
    if current_user
      redirect_to user_path(current_user)
    else
      render :new
    end
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:current_user] = user.id
      redirect_to root_path
    else
      redirect_to login_path
    end
  end

  def destroy
    session[:current_user] = nil
    redirect_to login_path
  end
end
