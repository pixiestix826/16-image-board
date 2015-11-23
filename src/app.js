/* globals $ */
export default function() {

  var toggleForm = function() {
    $(`.image-form`).slideToggle();
  };

  $(`.fa-plus-circle`).on(`click`, function(ev) {
    $(`.image-form`).slideToggle();
    return false;
  });

  $(`.cancel`).on(`click`, function(ev) {
    $(`.image-form`).toggleForm();
    return false;
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
    });
  });

}
