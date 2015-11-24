/* globals $ */
export default function() {

  var toggleForm = function() {
    $(`.image-form`).slideToggle();
  };

  var showGroup = function(group) {
    var groupItem = $('<li></li>')
    .appendTo('.image-list');

    $('<img>')
    .attr('src', group.image)
    .appendTo(groupItem);

    $('<p></p>').text(group.caption).appendTo(groupItem);
  };

  // Click on plus button shows form
  $(`.fa-plus-circle`).on(`click`, function() {
    $(`.image-form`).slideToggle();
    return false;
  });

  $(`.cancel`).on(`click`, function(ev) {
    $(`.image-form`).toggleForm();

    // Stop page from actually submitting
    ev.preventDefault();
  });

  // Image form saves an image
  $(`.image-form`).on(`submit`, function(ev) {
    //Stop page from actually submitting
    ev.preventDefault();

    var image = $(`#image-url`).val();
    var caption = $(`#image-caption`).val();

    $.ajax({
      url: `http://tiny-lr.herokuapp.com/collections/photos-bbs`,
      method: `POST`,
      dataType: `json`,
      data: {image, caption},
    }).then((response) => {
      //Reset form after submitting
      $(`#image-url`).val('');
      $(`#image-caption`).val('');
      toggleForm();

      // Add image right away to list
      showGroup(response);
    });
  });

  // Show existing contact
  $.ajax({
    url: `http://tiny-lr.herokuapp.com/collections/photos-bbs`,
    method: `GET`,
    dataType: `json`,
  }).then((response) => {
    response.forEach(showGroup);
  });
}
