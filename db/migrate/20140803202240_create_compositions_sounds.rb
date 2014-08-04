class CreateCompositionsSounds < ActiveRecord::Migration
  def change
    create_table :compositions_sounds do |t|
      t.references :composition
      t.references :sound
    end
  end
end
