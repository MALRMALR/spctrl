class SoundsController < ApplicationController

  def home

  end

  def random
    @sounds = []
    random = Sound.pluck(:url).sample(3)
    random.each do |link|
      sounds.push(Sound.where(url: link).sample)
    end
  end

  def filter
    @sound1 = Sound.where('category LIKE ?', "%#{params[:category1]}%")
    @sound2 = Sound.where('category LIKE ?', "%#{params[:category2]}%")
    @sound3 = Sound.where('category LIKE ?', "%#{params[:category3]}%")
  end

  # def search
  #   search_term = params[:search].downcase
  #   @results = Sounds.where("LOWER(name) like ?", "%#(search_term)%")
  # end

  def canvas

  end

end
