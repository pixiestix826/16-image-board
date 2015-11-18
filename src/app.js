/* globals $ */
export default function() {
  var btn = $(`.fa-plus-circle`);
  var form = $(`.drop-down`);

$(`.fa-plus-circle`).on(`click`, function() {
  $(`.drop-down`).slideUp();
  return false;
});
  $(`.fa-plus-circle`).on(`click`, function() {
    $(`drop-down`).slideDown();
  });
}
