class CreateSounds < ActiveRecord::Migration
  def change
    create_table :sounds do |t|
      t.string   :category
      t.text     :url
    end
  end
end
