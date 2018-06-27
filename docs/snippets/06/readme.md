---
prev: /en/
next: false
sidebar: auto
---

# Javascript code is single threaded...

### However, the browser/node uses multiple processes to leverage multithreading on a CPU level.

i.e. Multiple tabs on Chrome/Firefox.



<!-- ### Async Javascript (single-thread) 

``` js
function downloadData(source, callback) {
  return callback()
}

function handleData (error, data) {
  if (error) { 
    console.error('there was a problem with', error);
  } else { 
    console.log('download finished', data) 
  }
  return data;
}

downloadData('http://www.bbc.com/news/world-asia-43818751', handleData);
```


### form submission

``` js
var form = document.querySelector('form')
form.onsubmit = function (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, function (err, response, body) {
    var statusMessage = document.querySelector('.status')
    if (err) return statusMessage.value = err
    statusMessage.value = body
  })
}
``` -->