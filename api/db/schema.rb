# frozen_string_literal: true

ActiveRecord::Schema.define(version: 0) do
  create_table 'users', options: 'ENGINE=InnoDB DEFAULT CHARSET=utf8mb4', force: :cascade do |t|
    t.string 'name'
    t.datetime 'updated_at', null: false
    t.datetime 'created_at', null: false
  end
end
