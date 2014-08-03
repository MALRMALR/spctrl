class CreateCompositions < ActiveRecord::Migration
  def change
    create_table :compositions do |t|
      t.string :name
    end
  end
end
