class SoundsController < ApplicationController

  def home
    @user = User.new
  end

  def random
    @user = User.new
    random = Sound.pluck(:url).sample(3)
    @sounds = random.map{|link| Sound.where(url: link).sample }
    # @sounds = []
    # random.each do |link|
    #   @sounds.push(Sound.where(url: link).sample)
    # end
  end

  def filter
    @user = User.new
    @sound1 = Sound.where(category: params[:category1]).sample(1)
    @sound2 = Sound.where(category: params[:category2]).sample(1)
    @sound3 = Sound.where(category: params[:category3]).sample(1)
    # Sound.where(category: params[:category1])
    # @sounds = Sound.filter_sounds(params)
  end

  # def search
  #   search_term = params[:search].downcase
  #   @results = Sounds.where("LOWER(name) like ?", "%#(search_term)%")
  # end

  def canvas
    @user = User.new
    @sound = Sound.pluck(:url).sample(1)
  end

end
