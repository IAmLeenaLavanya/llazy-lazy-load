# A Really Simple Lazy Load - Images &amp; IFrames

*Disclaimer: Requires JQuery.*

I tried a ton of lazy load scripts on a client's website but none of them seemed to work so I ended up writing my own one. Also works for infinite scrolling.

[Codepen Demo](https://codepen.io/leenalavanya/full/gjGWqg/)

### How To Use

Call the script. Then, for images, use:

```html
<img class="llazy" data-loaded="false" src="ACTUAL_IMAGE_SRC" data-src="PLACEHOLDER_IMAGE_SRC"/>
````

For iframes, use:

```html
<iframe class="llazy" data-loaded="false" src="ACTUAL_IFRAME_SRC" data-src="PLACEHOLDER_IMAGE_SRC"></iframe>
````

