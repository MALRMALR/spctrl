class SoundsController < ApplicationController

  def home
    @user = User.new
  end

  def random
    @user = User.new
    random = Sound.pluck(:url).sample(3)
    @sounds = random.map{|link| Sound.where(url: link).sample }
  end

  def filter
    @user = User.new
    @sound1 = Sound.where(category: params[:category1]).sample(1)
    @sound2 = Sound.where(category: params[:category2]).sample(1)
    @sound3 = Sound.where(category: params[:category3]).sample(1)
  end

  def canvas
    @user = User.new
  end
end
