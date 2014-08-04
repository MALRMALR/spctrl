class CompositionsController < ApplicationController

  def create
    @current_user ||= User.find(session[:current_user])
    sounds = []
    sounds.push(Sound.find(params[:sound_id1]))
    sounds.push(Sound.find(params[:sound_id2]))
    sounds.push(Sound.find(params[:sound_id3]))
    composition = Composition.create(name: params[:name])
    composition.sounds << sounds
    @current_user.compositions.push(composition)
    redirect_to root_path
  end

  def show
    @composition = Composition.find(params[:id])
  end

  def comp_params
    params.require(:composition).permit(:name)
  end

end
