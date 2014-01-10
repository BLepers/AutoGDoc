// ==UserScript==
// @name        AutoCode
// @namespace   AutoCode
// @description Don't want to type in GDocs
// @include     https://docs.google.com/document/*
// @version     0.1
// @grant       GM_xmlhttpRequest
// @grant         GM_setClipboard
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.js
// ==/UserScript==


var dispatchMouseEvent = function(target, var_args) {
  var e = document.createEvent("MouseEvents");
  // If you need clientX, clientY, etc., you can call
  // initMouseEvent instead of initEvent
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
};

var dispatchKeyboardEvent = function(target, initKeyboradEvent_args) {
  var e = document.createEvent("KeyboardEvents");
  e.initKeyboardEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
};
var dispatchTextEvent = function(target, initTextEvent_args) {
  var e = document.createEvent("TextEvent");
  e.initTextEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
};
var dispatchSimpleEvent = function(target, type, canBubble, cancelable) {
  var e = document.createEvent("Event");
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
};


$('#clearFormattingButton').parent().append(
    $('<div class="goog-toolbar-button goog-inline-block docs-collapsable-toolbar-control docs-collapsable-toolbar-control" id="clearFormattingButton2" aria-disabled="false" role="button" style="-moz-user-select: none;" data-tooltip="Bamboule" aria-label="Bamboule"><div class="goog-toolbar-button-outer-box goog-inline-block"><div class="goog-toolbar-button-inner-box goog-inline-block"><div class="docs-icon goog-inline-block "><div class="docs-icon-img-container docs-icon-img docs-icon-clear-formatting">&nbsp;</div></div></div></div></div>')
);

function writeText(t, url) {
    var element;

    GM_setClipboard(t, 'html');
   
    setTimeout(function() {
        element = $('span[aria-label="Ctrl+A."]').parent().parent()[0];
        if(!element)
            element = $('span[aria-label="shortcut Ctrl+A."]').parent().parent()[0];
        dispatchMouseEvent(element, 'mousedown', true, true);
        dispatchMouseEvent(element, 'mouseup', true, true);
       
   
        element = $('span[aria-label="Ctrl+V."]').parent().parent()[0];
        if(!element)
            element = $('span[aria-label="shortcut Ctrl+V."]').parent().parent()[0];
        dispatchMouseEvent(element, 'mousedown', true, true);
        dispatchMouseEvent(element, 'mouseup', true, true);
       
        setTimeout(function() { getText(url); }, 3000);
    }, 500);
}

function getText(url) {
    if($('#docs-notice').text() == 'Saving...') {
        setTimeout(function() { getText(url); }, 500);
        return;
    }
   
    var done = 0;
    function process(data) {
        if(done)
            return;
        done = 1;
       
        writeText(data.responseText, url);
    }
    GM_xmlhttpRequest({
        method: 'GET',
        url:url+'?'+(new Date()),
        onload:process,
        onerror:process,
    });
}

$('#clearFormattingButton2').click(function() {
    getText('http://localhost/test.php');
});
