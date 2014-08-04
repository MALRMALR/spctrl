class CreateSounds < ActiveRecord::Migration
  def change
    create_table :sounds do |t|
      t.string   :category
      t.text     :url

      t.timestamps
    end
  end
end
