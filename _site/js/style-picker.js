jQuery('select.options').change(function() {
  console.log(1, $(this).val());
  var target = $(this).val();
  $('#product-' + target).show().siblings('div').hide();
});
