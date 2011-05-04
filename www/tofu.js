tofu = {}

tofu.items = ["Keep calm", "Carry on"];

tofu.item = undefined;

tofu.updateList = function() {
  $('div#home div.content').html('<ul data-role="listview" id="list" data-filter="true"></ul>');
  jQuery.each(this.items, function(i, el) {
    $('ul#list').append('<li data-theme="c" class="ui-btn ui-btn-icon-right ui-li ui-btn-up-c"><a href="#edit-item" id="link-' + i + '">' + el + '</a></li>');
    $('#link-' + i).click(function() {
      tofu.item = i;
    });
    $('ul#list').append();
  });
  $('#list').page();
}

jQuery(function() {
  $('div#home').live('pagebeforeshow', function(event, ui) {
    tofu.updateList();
  });

  tofu.updateList();
});


jQuery(function() {
  $('div#edit-item').live('pagebeforeshow', function(event, ui) {
    $('#edit-item-text').val(tofu.items[tofu.item]);
  });

  tofu.updateList();
});

window.addEventListener('deviceready', function() {

});
