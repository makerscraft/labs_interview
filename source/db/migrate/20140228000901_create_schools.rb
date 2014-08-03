class CreateSchools < ActiveRecord::Migration
  def change
    create_table :schools do |t|
      t.string :name, default: "School Name Not Provided"
      t.string :school_url
      t.string :school_img_url

      t.timestamps
    end
  end
end
