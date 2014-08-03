class CompositionsController < ApplicationController

  def create

  end

  def comp_params
    params.require(:composition).permit(:name)
  end

end
