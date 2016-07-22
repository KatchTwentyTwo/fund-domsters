function stripeTables() {
  'use strict';
  var tables, odd, rows;
  if (!document.getElementsByTagName) {
    return false;
  }
   tables = document.getElementsByTagName('table');
  for (var i=0; i<tables.length; i++) {
     odd = false;
     rows = tables[i].getElementsByTagName('tr');
    for (var j=0; j<rows.length; j++) {
      if (odd == true) {
        addClass(rows[j],'odd');
        odd = false;
      } else {
        odd = true;
      }
    }
  };
}

function highlightRows() {
  'use strict';
  var rows;
  if(!document.getElementsByTagName) {
    return false;
  }
   rows = document.getElementsByTagName('tr');
  for (var i=0; i<rows.length; i++) {
    rows[i].oldClassName = rows[i].className
    rows[i].onmouseover = function() {
      addClass(this,'highlight');
    }
    rows[i].onmouseout = function() {
      this.className = this.oldClassName
    }
  }
};

function displayAbbreviations() {
  'use strict';
  var abbreviations, defs, current_abbr, definition, key, dlist, dtitle, dtitle_text, ddesc, ddesc_text, header, header_text, container;
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
   abbreviations = document.getElementsByTagName('abbr');
  if (abbreviations.length < 1) return false;
   defs = new Array();
  for (var i=0; i<abbreviations.length; i++) {
     current_abbr = abbreviations[i];
    if (current_abbr.childNodes.length < 1) continue;
     definition = current_abbr.getAttribute('title');
     key = current_abbr.lastChild.nodeValue;
    defs[key] = definition;
  }
   dlist = document.createElement('dl');
  for (key in defs) {
     definition = defs[key];
     dtitle = document.createElement('dt');
     dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);
     ddesc = document.createElement('dd');
     ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }
  if (dlist.childNodes.length < 1) return false;
   header = document.createElement('h3');
   header_text = document.createTextNode('Abbreviations');
  header.appendChild(header_text);
   container = document.getElementById('content');
  container.appendChild(header);
  container.appendChild(dlist);
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);