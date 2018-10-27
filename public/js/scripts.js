$(document).foundation();

const $error = $(".error-stack");
const $btn = $(".btn-stack");

$btn.on('click', function () {
  if ($error.is(":hidden")) {
    $error.show();
    $btn.text("Hide Full Error Stack");
  } else {
    $error.hide();
    $btn.text("View Full Error Stack");
  }
});