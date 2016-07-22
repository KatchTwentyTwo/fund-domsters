function addLoadEvent(func) {
  'use strict';
  var oldonload;
   oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function insertAfter(newElement, targetElement) {
  'use strict';
  var parent;
   parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function addClass(element, value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName += "";
    newClassName += value;
    element.className = newClassName;
  }
}

function highlightPage() {
  'use strict';
  var nav, links, linkurl, currenturl, linktext;
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById('nav')) return false;
   nav = document.getElementById('nav');
   links = nav.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
     linkurl = links[i].getAttribute('href');
     currenturl = window.location.href;
    if (currenturl.indexOf(linkurl) != -1) {
      links[i].className = 'here';
       linktext = links[i].lastChild.nodeValue.toLowerCase();
      document.body.setAttribute('id', linktext);
    }
  }
}

addLoadEvent(highlightPage);
