$(function(){
  $('.overlay-add-course').on('click', modalOverlayLogic.addCourseToUserDashboard);
  $('.overlay-remove-course').on('click', modalOverlayLogic.removeCourseFromUserDashboard);
  $('.favorite-course').on('click', modalOverlayLogic.favoriteCourse);
  $('.unfavorite-course').on('click', modalOverlayLogic.unfavoriteCourse);
  $('.complete-course').on('click', modalOverlayLogic.completeCourse);
  $('.uncomplete-course').on('click', modalOverlayLogic.uncompleteCourse);
});


var modalOverlayLogic = (function() {
  // _private vars and functions
  function _appendCourse(course, school) {
    var courseTemplate = $('.dashboard-course-template').clone()
    courseTemplate.attr('data-course-id', course.id)
    courseTemplate.find('img').attr('src', course.course_img_url)
    courseTemplate.find('a').attr('href', course.course_url)
    courseTemplate.find('.course-description a').append(course.title.slice(0, 36))
    courseTemplate.find('.course-description p').append(school.name.slice(0, 39))
    if (course.start_date === null) {
      courseTemplate.find('.course-description .date-display').text("Start Date: TBD")
    } else {
      courseTemplate.find('.course-description .date-display').text("Start Date: " + course.start_date)
    }
    return courseTemplate
  }

  return {
    removeCourseFromUserDashboard: function() {
      var courseID = $(this).attr('data-course-id');
      var userID = $('#current-user-id').attr('data-user-id');
      $.ajax({
        url: '/users/' + userID + '/courses/' + courseID,
        method: 'DELETE',
        data: {"course_id": courseID}
      }).done(function(result){
        var a = $('#current-user-added-classes').attr('data-added-course-ids');
        a = a.replace(courseID + ", ", "");
        $('#current-user-added-classes').replaceWith("<div id='current-user-added-classes' display='hidden' data-added-course-ids='" + a + "' ></div>");
        var b = $('#current-user-favorited-classes').attr('data-favorited-course-ids');
        b = b.replace(courseID + ", ", "");
        $('#current-user-favorited-classes').replaceWith("<div id='current-user-favorited-classes' display='hidden' data-favorited-course-ids='" + b + "' ></div>");
        var c = $('#current-user-completed-classes').attr('data-completed-course-ids');
        c = c.replace(courseID + ", ", "");
        $('#current-user-completed-classes').replaceWith("<div id='current-user-completed-classes' display='hidden' data-completed-course-ids='" + c + "' ></div>");
        $('.overlay-add-course').css('display', 'inherit');
        $('.overlay-remove-course').css('display', 'none');
        $('.unfavorite-course').css('display', 'none');
        $('.favorite-course').css('display', 'inherit');
        $('.favorite-course').attr('disabled', 'disabled');
        $('.uncomplete-course').css('display', 'none');
        $('.complete-course').css('display', 'inherit');
        $('.complete-course').attr('disabled', 'disabled');
      }).fail(function(){
        console.log("error has occurred");
      })
    },

    addCourseToUserDashboard: function() {
      var courseID = $(this).attr('data-course-id');
      var userID = $('#current-user-id').attr('data-user-id');
      $.ajax({
        url: '/users/' + userID + '/courses',
        method: 'POST',
        data: {"course_id": courseID}
      }).done(function(result){
        var a = $('#current-user-added-classes').attr('data-added-course-ids')
        $('#current-user-added-classes').replaceWith("<div id='current-user-added-classes' display='hidden' data-added-course-ids='" + [a.slice(0, 1), courseID + ', ', a.slice(1)].join('') + "' ></div>");
        $('.overlay-add-course').css('display', 'none');
        $('.overlay-remove-course').css('display', 'inherit');
        $('.favorite-course').removeAttr('disabled');
        $('.complete-course').removeAttr('disabled');
      }).fail(function(){
        alert('You must be logged in to add classes');
      })
    },

    favoriteCourse: function() {
      var courseID = $(this).attr('data-course-id');
      var userID = $('#current-user-id').attr('data-user-id');
      $.ajax({
        url: '/users/' + userID + '/courses/' + courseID,
        method: 'PUT',
        data: {"course_id": courseID, "update_action": {"favorited": true}, "update_params": "fave"}
      }).done(function(result){
        var a = $('#current-user-favorited-classes').attr('data-favorited-course-ids')
        $('#current-user-favorited-classes').replaceWith("<div id='current-user-favorited-classes' display='hidden' data-favorited-course-ids='" + [a.slice(0, 1), courseID + ', ', a.slice(1)].join('') + "' ></div>");
        $('.favorite-course').css('display', 'none');
        $('.unfavorite-course').css('display', 'inherit')
      }).fail(function(){
        alert("You must be taking this class to favorite it")
      })
    },

    unfavoriteCourse: function() {
      var courseID = $(this).attr('data-course-id');
      var userID = $('#current-user-id').attr('data-user-id');
      $.ajax({
        url: '/users/' + userID + '/courses/' + courseID,
        method: 'PUT',
        data: {"course_id": courseID, "update_action": {"favorited": false}, "update_params": "fave"}
      }).done(function(result){
        var a = $('#current-user-favorited-classes').attr('data-favorited-course-ids');
        a = a.replace(courseID + ", ", "");
        $('#current-user-favorited-classes').replaceWith("<div id='current-user-favorited-classes' display='hidden' data-favorited-course-ids='" + a + "' ></div>");
        $('.favorite-course').css('display', 'inherit');
        $('.unfavorite-course').css('display', 'none')
      }).fail(function(){
        alert("error has occurred")
      })
    },

    completeCourse: function() {
      var courseID = $(this).attr('data-course-id');
      var userID = $('#current-user-id').attr('data-user-id');
      $.ajax({
        url: '/users/' + userID + '/courses/' + courseID,
        method: 'PUT',
        data: {"course_id": courseID, "update_action": {"completed": true}, "update_params": "complete"}
      }).done(function(result){
        var a = $('#current-user-completed-classes').attr('data-completed-course-ids')
        $('#current-user-completed-classes').replaceWith("<div id='current-user-completed-classes' display='hidden' data-completed-course-ids='" + [a.slice(0, 1), courseID + ', ', a.slice(1)].join('') + "' ></div>");
        $('.complete-course').css('display', 'none');
        $('.uncomplete-course').css('display', 'inherit');
      }).fail(function(){
        alert("error has occurred")
      })
    },

    uncompleteCourse: function() {
      var courseID = $(this).attr('data-course-id');
      var userID = $('#current-user-id').attr('data-user-id');
      $.ajax({
        url: '/users/' + userID + '/courses/' + courseID,
        method: 'PUT',
        data: {"course_id": courseID, "update_action": {"completed": false}, "update_params": "complete"}
      }).done(function(result){
        var a = $('#current-user-completed-classes').attr('data-completed-course-ids');
        a = a.replace(courseID + ", ", "");
        $('#current-user-completed-classes').replaceWith("<div id='current-user-completed-classes' display='hidden' data-completed-course-ids='" + a + "' ></div>");
        $('.complete-course').css('display', 'inherit');
        $('.uncomplete-course').css('display', 'none');
      }).fail(function(){
        alert("error has occurred")
      })
    }
  }
})();

