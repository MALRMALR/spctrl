class CreateCompositions < ActiveRecord::Migration
  def change
    create_table :compositions do |t|
      t.string :name
      t.belongs_to :user

      t.timestamps
    end
  end
end
