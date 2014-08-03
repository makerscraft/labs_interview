class UserCoursesController < ApplicationController
  before_filter :authenticate_user!

  def create
    user = User.find(params[:user_id].to_i)
    course = Course.find(params[:course_id].to_i)
    user.courses << course
    render json: params
  end

  def destroy
    user = User.find(params[:user_id].to_i)
    course = Course.find(params[:course_id].to_i)
    user.courses.delete(course)
    render json: params
  end

  def update
    if params[:update_action]["favorited"] == "true"
      params[:update_action]["favorited"] = true
    else
      params[:update_action]["favorited"] = false
    end
    favorited = {favorited: params["update_action"]["favorited"]}

    if params[:update_action]["completed"] == "true"
      params[:update_action]["completed"] = true
    else
      params[:update_action]["completed"] = false
    end
    completed = {completed: params["update_action"]["completed"]}

    if params[:update_params] == "fave"
      action = favorited
    else
      action = completed
    end
    p params[:update_params]
    CourseUser.find_by_user_id_and_course_id(params[:user_id].to_i, params[:course_id].to_i).update_attributes(action)
    render json: params
  end
end