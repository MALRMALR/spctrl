class SoundsController < ApplicationController

  def home

  end

  def random
    @sounds = []
    random = Sound.pluck(:url).sample(3)
    random.each do |link|
      @sounds.push(Sound.where(url: link).sample)
    end
  end

  def filter
    @sound1 = Sound.where('category LIKE ?', "%#{params[:category1]}%").sample(1)
    @sound2 = Sound.where('category LIKE ?', "%#{params[:category2]}%").sample(1)
    @sound3 = Sound.where('category LIKE ?', "%#{params[:category3]}%").sample(1)
  end

  # def search
  #   search_term = params[:search].downcase
  #   @results = Sounds.where("LOWER(name) like ?", "%#(search_term)%")
  # end

  def canvas
    @sound = Sound.pluck(:url).sample(1)
  end

end
