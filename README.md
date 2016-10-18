# Selector.js
- A lightweight Javascript library to get the CSS selector of elements.
- Finds the CSS selector of the element you hover/click on and displays the entire path in the console.

# Depenedencies
- jQuery

# Example
- Let us consider we need to find the path for all the different type of elements given below on either clicking them or hovering over them.

```html
<!DOCTYPE html>
<html>
  <body>
      <div class="example">
              <p class="foo">foo</p>
              <span id="bar">bar</span>
          </div>
          <ul id = "list">
            <li class="1">1</li>
            <li class="2">2</li>
          </ul>
  </body>
</html>
```
- selector.js makes it extremey easy to do so. Just add the following two lines of code after adding selector.js in your root directory to see it in action. selector.js requiresjQuery to function and has not bundled it together so that it does not interfere with the existing jQuery on your web page.

```javascript
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
<script type="text/javascript" src="selector.js"></script>
```
- Configure the selector.js file to set events to trigger the library and elements on which to trigger it, for example, if you want it to be active for all elements on hover or click,use the following default functions.

```javascript
$("*").hover(function() {//shows the path of element currently being hovered.
  var path = $(this).getPath();
	console.log(path);
});
$("*").click(function() { //shows the path of element currently being clicked.
	var path = $(this).getPath();
	console.log(path);
});
```
- Open your browser console and see it in action.
       
