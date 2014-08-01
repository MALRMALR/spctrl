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
<<<<<<< HEAD
    @sound1 = Sound.where('category LIKE ?', "%#{params[:category1]}%")
    @sound2 = Sound.where('category LIKE ?', "%#{params[:category2]}%")
    @sound3 = Sound.where('category LIKE ?', "%#{params[:category3]}%")
=======
      @sounds = Sound.where('category LIKE ?', "%#{params[:category]}%")
>>>>>>> 7efad3c7b16c9060f80fad758c0fe1dc7308f93f
  end

  # def search
  #   search_term = params[:search].downcase
  #   @results = Sounds.where("LOWER(name) like ?", "%#(search_term)%")
  # end

end
