---
prev: /en/js/03/
next: /en/js/03/01-solution.md
---

``` html
<html>
  <body>
    <script>
      var clicker = document.createElement('button');
      clicker.innerHTML = 'make background red'

      clicker.addEventListener('click', function bark (event) {
        // code here
      }, false);  

      // append clicker to body
      document.body.appendChild(clicker);
    </script>
  </body>
</html>
```

### alternative


``` html
<html>
  <body>
    <button id="red" onclick="makeRed()">make background red</button>
    <script>

    function makeRed () {
      // code here
    }
    </script>
  </body>
</html>
```