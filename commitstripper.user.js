// ==UserScript==
// @name        CommitStripper
// @namespace   zackad's script
// @description Strip all comic in one page
// @include     http://www.commitstrip.com/en/*
// @include     http://www.commitstrip.com/en/page/*
// @version     0.1
// @grant       none
// @copyright   2016, zackad
// ==/UserScript==
$(document).ready(function () {
  var post = $('.excerpt a');
  $('.excerpts').html('');
  post.each(function(){
    var elem = $(this);
    var url = elem.attr('href');
    $.ajax(url)
     .done(function(response){
      var article = $(response).find('article').prop('outerHTML');
      $('.excerpts').append(article);
    })
  });
});
