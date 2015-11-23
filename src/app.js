/* globals $ */
export default function() {

  var toggleForm = function() {
    $(`.image-form`).slideToggle();
  };

  var showImage = function(image) {
    $('<li></li>')
    .text(`${image}, ${image.caption}`)
    .appendTo('.image-list');

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
      showImage(response);
    });
  });

  // Show existing contact
  $.ajax({
    url: `http://tiny-lr.herokuapp.com/collections/photos-bbs`,
    method: `GET`,
    dataType: `json`,
  }).then((response) => {
  });
}
