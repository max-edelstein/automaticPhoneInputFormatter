// JavaScript used to format phone input
// original source: https://codepen.io/sumanengbd/pen/mAWzvq
// I edited the original for clarity and so anyone can download
// and play with

let zChar = new Array(' ', '(', ')', '-', '.');

// maximum allowed length of string
let maxphonelength = 13;

let phonevalue1;
let phonevalue2;
let cursorposition;

function ParseForNumber1(object) {
  phonevalue1 = ParseChar(object.value, zChar);
}

function ParseForNumber2(object) {
  phonevalue2 = ParseChar(object.value, zChar);
}

function backspacerUP(object, event) {

  if (event) {

    event = event;

  } else {

    event = window.event;

  }

  if (event.which) {

    var keycode = event.which;

  } else {

    var keycode = event.keyCode;

  }

  ParseForNumber1(object);

  if (keycode >= 48) {
    ValidatePhone(object);
  }

}; // end of backspaceUP() function

function backspacerDOWN(object, event) {

  if (event) {

    event = event;

  } else {

    event = window.event;

  }

  if (event.which) {

    var keycode = event.which;

  } else {

    var keycode = event.keyCode;

  }

  ParseForNumber2(object);

}; // end of backspacerDOWN function()

function GetCursorPosition() {

  var t1 = phonevalue1;
  var t2 = phonevalue2;
  var bool = false;

  for (i = 0; i < t1.length; i++) {

    if (t1.substring(i, 1) != t2.substring(i, 1)) {

      if (!bool) {

        cursorposition = i;
        bool = true;

      }

    } // end of outer if

  } // end of for

}; // end of GetCursorPosition() function

function ValidatePhone(object) {

  var p = phonevalue1;

  p = p.replace(/[^\d]*/gi, '');

  if (p.length < 3) {

    object.value = p;

  } else if (p.length == 3) {

    pp = p;
    d4 = p.indexOf('(');
    d5 = p.indexOf(')');

    if (d4 == -1) {

      pp = '(' + pp;

    }

    if (d5 == -1) {

      pp = pp + ')';

    }

    object.value = pp;

  } else if (p.length > 3 && p.length < 7) {

    p = '(' + p;
    l30 = p.length;
    p30 = p.substring(0, 4);
    p30 = p30 + ')';

    p31 = p.substring(4, l30);
    pp = p30 + p31;

    object.value = pp;

  } else if (p.length >= 7) {

    p = '(' + p;
    l30 = p.length;
    p30 = p.substring(0, 4);
    p30 = p30 + ')';

    p31 = p.substring(4, l30);
    pp = p30 + p31;

    l40 = pp.length;
    p40 = pp.substring(0, 8);
    p40 = p40 + '-';

    p41 = pp.substring(8, l40);
    ppp = p40 + p41;

    object.value = ppp.substring(0, maxphonelength);

  } // end of else if

  GetCursorPosition();

  if (cursorposition >= 0) {

    if (cursorposition == 0) {

      cursorposition = 2;

    } else if (cursorposition <= 2) {

      cursorposition = cursorposition + 1;

    } else if (cursorposition <= 5) {

      cursorposition = cursorposition + 2;

    } else if (cursorposition == 6) {

      cursorposition = cursorposition + 2;

    } else if (cursorposition == 7) {

      cursorposition = cursorposition + 4;
      e1 = object.value.indexOf(')');
      e2 = object.value.indexOf('-');

      if (e1 > -1 && e2 > -1) {

        if (e2 - e1 == 4) {

          cursorposition = cursorposition - 1;

        }

      }

    } else if (cursorposition < 11) {

      cursorposition = cursorposition + 3;

    } else if (cursorposition == 11) {

      cursorposition = cursorposition + 1;

    } else if (cursorposition >= 12) {

      cursorposition = cursorposition;

    }

    //var txtRange = object.body.createTextRange();
    // txtRange.moveStart('character', cursorposition);
    //   txtRange.moveEnd('character', cursorposition - object.value.length);
    // txtRange.select();
  }

}; // end of ValidatePhone() function

function ParseChar(sStr, sChar) {

  if (sChar.length == null) {

    zChar = new Array(sChar);

  } else {

    zChar = sChar;

  }

  for (i = 0; i < zChar.length; i++) {

    sNewStr = '';

    var iStart = 0;
    var iEnd = sStr.indexOf(sChar[i]);

    while (iEnd != -1) {

      sNewStr += sStr.substring(iStart, iEnd);
      iStart = iEnd + 1;
      iEnd = sStr.indexOf(sChar[i], iStart);

    }

    sNewStr += sStr.substring(sStr.lastIndexOf(sChar[i]) + 1, sStr.length);

    sStr = sNewStr;

  } //end of for loop

  return sNewStr;

}; // end of ParseChar() function
