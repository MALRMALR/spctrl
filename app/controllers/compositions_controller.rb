class CompositionsController < ApplicationController

  def create
    sounds = []
    sounds.push(Sound.find(params[:sound_id1]));
    sounds.push(Sound.find(params[:sound_id2]));
    sounds.push(Sound.find(params[:sound_id3]));
    composition = Composition.create(name: params[:name])
    composition.sounds << sounds
    binding.pry
  end

  def comp_params
    params.require(:composition).permit(:name)
  end

end
