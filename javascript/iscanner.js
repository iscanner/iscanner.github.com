// iscanner demo
'use strict';

+function(global, undefined) {
  var api = './api/latest.json';
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", api, true);
  xmlHttp.onreadystatechange = function(d) {
    if (xmlHttp.readyState == 4) {
      callback(xmlHttp.responseText);
    }
  };
  xmlHttp.send(null);
  var callback = function(data) {
    data = JSON.parse(data);
    document.getElementById('ios_version').innerHTML = data.ios.version;
    document.getElementById('android_version').innerHTML = data.android.version;
  };
  var ua = navigator.userAgent.toLowerCase();

  if (!!~ua.indexOf('micromessenger')) {
    document.getElementById('unsupport').style.display = 'block';
  }
}(this);
