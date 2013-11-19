Mg Box
======

Mg Box is a JavaScript implementation of the <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes">CSS3 flexbox</a>. It does not aim to replace flexbox or be API-compatible with it, but is useful while we're waiting for the CSS3 flexbox to become widely implemented.

<h2>What you can do with it</h2>
Mg Box allows you to position floating elements of next to each other without causing issues when the elements are of different dimensions, in particular, height.

<h2>How it works</h2>

When you insert the mg_box.js file in your page, it searches for any element with a class "mg_box" and calculates, based on its total width, whether the immediate children element fits on the same row (assuming all chidren elements are set to float:left), and does so for every subsequent children one level down.

When it reaches a children that doesn't fit on the same row, it applies a clear:both to the given children, causing a new row to be created without clipping or pushing elements elsewhere; because of how clearing causes the float to stop at the highest height value of the preceding elements.

Mg Box also recalculates wrapping when the page changes size, so it can be used in conjunction with responsive designs.

<h2>How to</h2>

<ol>
  <li>Download mg_box.js and add it to your page (either link it or paste the contents in, it doesn't matter, Mg Box calls onload automatically and even works with or without jQuery.</li>
  <li>Make sure the immediate children of the class mg_box are set to float left; place this anywhere in your CSS:<br>
  <code>.mg_box > * { float: left }</code></li>
  <li>That's it!<br>
  Make sure the children elements in the “grid” have widths and heights of some sort and apply the mg_box class to a parent element and you're good to go:<br>
  <pre>&lt;div class="mg_box"&gt;
  &lt;a href="#"&gt;
    &lt;h3&gt;Profile 1&lt;/h3&gt;
    &lt;img src="profile_picture_1.jpg" alt="">
  &lt;/a>
  &lt;a href="#">
    &lt;h3>Profile 2&lt;/h3>
    &lt;img src="profile_picture_2.jpg" alt="">
  &lt;/a>
  &lt;a href="#">
    &lt;h3>Profile 3&lt;/h3>
    &lt;img src="profile_picture_3.jpg" alt="">
  &lt;/a>
  &lt;a href="#">
    &lt;h3>Profile 4&lt;/h3>
    &lt;img src="profile_picture_4.jpg" alt="">
  &lt;/a>
&lt;/div&gt;</pre></li>
</ol>
