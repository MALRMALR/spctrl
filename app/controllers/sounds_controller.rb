class SoundsController < ApplicationController

  def random
    @sounds = Sound.where()
  end

  def filter
    @sounds = Sounds.where('category LIKE ?', "%#{params[:category]}%")
  end

  # def search
  #   search_term = params[:search].downcase
  #   @results = Sounds.where("LOWER(name) like ?", "%#(search_term)%")
  # end

end
