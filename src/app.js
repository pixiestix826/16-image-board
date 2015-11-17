/* globals $ */
export default function() {
  var bar = $(`.nav-bar`);
  var form = $(`.new-photo-form`);

  bar.on(`click`, function() {
    $this.form.slideToggle();
  });
}
