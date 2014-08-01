class SoundsController < ApplicationController

  def index

  end

  def random

  end

  def filter
    @sounds = Sounds.where(category: params[:category])
  end

  # def search
  #   search_term = params[:search].downcase
  #   @results = Sounds.where("LOWER(name) like ?", "%#(search_term)%")
  # end

end
