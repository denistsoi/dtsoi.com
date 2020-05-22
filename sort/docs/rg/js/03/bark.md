---
prev: /en/js/03/
next: false
---

``` html
<html>
  <body></body>
  <script>
    var dog = document.createElement('button');
    dog.innerHTML = 'bark?'

    dog.addEventListener('click', function bark (event) {
      // code here
      console.log(event.target);
    }, false);  

    // append dog to body
    document.body.appendChild(dog);
  </script>
</html>
```