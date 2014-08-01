class SoundsController < ApplicationController

  def random
    @sounds = []
    random = Sound.pluck(:url).sample(3)
    random.each do |link|
      sounds.push(Sound.where(url: link).sample)
    end
  end

  def filter
    @sounds = Sound.where(category: params[:category])
  end

  # def search
  #   search_term = params[:search].downcase
  #   @results = Sounds.where("LOWER(name) like ?", "%#(search_term)%")
  # end

end
