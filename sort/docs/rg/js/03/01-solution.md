---
prev: /en/js/03/01-challenge.md
next: /en/js/03/
---

``` html
<html>
  <body></body>
  <script>
    var clicker = document.createElement('button');
    clicker.innerHTML = 'red'

    clicker.addEventListener('click', function bark (event) {
      // code here
      document.body.style.backgroundColor = 'red';
    }, false);  

    // append clicker to body
    document.body.appendChild(clicker);
  </script>
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
      document.body.style.backgroundColor = 'red';
    }
    </script>
  </body>
</html>
```