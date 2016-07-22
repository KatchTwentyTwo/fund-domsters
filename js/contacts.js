function focusLabels() {
  'use strict';
  var labels, id, element;
  if (!document.getElementsByTagName) {
    return false;
  }
   labels = document.getElementsByTagName('label');
  for (var i=0; i<labels.length; i++) {
    if (!labels[i].getAttribute('for')) continue;
    labels[i].onclick = function() {
       id = this.getAttribute('for');
      if (!document.getElementById(id)) {
        return false;
      }
       element = document.getElementById(id);
      element.focus();
    }
  }
}

function resetFields(whichform) {
  'use strict';
  var element;
  for (var i=0; i<whichform.elements.length; i++) {
     element = whichform.elements[i];
    if (element.type == 'submit') continue;
    if (!element.defaultValue) continue;
    element.onfocus = function() {
    if (this.value == this.defaultValue) {
      this.value = "";
     }
    }
    element.onblur = function() {
      if (this.value == '') {
        this.value = this.defaultValue;
      }
    }
  }
}

function validateForm(whichform) {
  'use strict';
  var element;
  for (var i=0; i<whichform.elements.length; i++) {
     element = whichform.elements[i];
    if (element.className.indexOf('required') != -1) {
      if (!isFilled(element)) {
        alert('Please fill in the '+element.name+' field.');
        return false;
      }
    }
    if (element.className.indexOf('email') != -1) {
      if (!isEmail(element)) {
        alert('The '+element.name+' field must be a valid email address.');
        return false;
      }
    }
  }
  return true;
}

function isFilled(field) {
  if (field.value.length < 1 || field.value == field.defaultValue) {
    return false;
  } else {
    return true;
  }
}

function isEmail(field) {
  'use strict';
  if (field.value.indexOf('@') == -1 || field.value.indexOf('.') == -1) {
    return false;
  } else {
    return true;
  }
}

function prepareForms() {
  var thisform;
  for (var i=0; i<document.forms.length; i++) {
     thisform = document.forms[i];
    resetFields(thisform);
    thisform.onsubmit = function() {
      return validateForm(this);
    }
  }
}

addLoadEvent(focusLabels);
addLoadEvent(prepareForms);