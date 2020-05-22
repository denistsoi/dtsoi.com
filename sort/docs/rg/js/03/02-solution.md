---
prev: /en/js/03/02-challenge.md
next: /en/js/03/
---

``` html
<html>
  <body>
    <div id="app">
      <div class="images">
        <!-- add images here -->
      </div>
      <div class="buttons">
        <!-- add buttons here -->
      </div>
    </div>
    
  </body>
  <script>

    // add images
    

    // add buttons
    var left = document.createElement('button');
    left.innerHTML = 'left'

    var right = document.createElement('button');
    right.innerHTML = 'right'

    left.addEventListener('click', function moveImageLeft (event) {
      // code here
    }, false);  

    right.addEventListener('click', function moveImageRight (event) {
      // code here
    }, false)


    // append buttons to class name body
    document.body.appendChild(left);
    document.body.appendChild(right);

    
  </script>
</html>
```