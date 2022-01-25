class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :body
      t.string :deadline

      t.timestamps
    end
  end
end
