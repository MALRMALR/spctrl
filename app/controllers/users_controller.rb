class UsersController < ApplicationController

  def index

  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to login_path
    else
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    session[:current_user] = nil
    redirect_to users_path
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
