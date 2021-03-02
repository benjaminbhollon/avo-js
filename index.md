## Welcome to AvoJS

AvoJS is a simple, un-opinionated, and lightweight library for adding callbacks to function changes. Weighing in at under 400 bytes, it's easily small enough to use without worry.

### Potential use cases

- Automatically updating an HTML element's content when a variable's value changes (see example below).
- Updating the page whenever new information becomes available (for example, if you request information from an API and set the variable in a callback, it can automatically update the page)
- Validating input as soon as it happens
- Best of all, being able to combine multiple implementations. The same function could be called, for example, on user input, AJAX callback, and everywhere else that a variable's value is changed.

This is a _non-comprehensive_ list. It was just me thinking up a few possibilities right after finishing the first version. Please do [let me know your implementation](https://seewitheyesclosed.com/contact/) so I can add it! I look forward to hearing about this being used in ways I never foresaw.

### Installation

I am planning to put up a CDN-hosted version of AvoJS in the next few days.

Really, though, AvoJS is so lightweight (Under 400 bytes!) that you should be able to host it yourself with zero problems. Just download `avo.min.js` from [the repository](https://github.com/benjaminbhollon/avo-js) and include it in a script tag. Honestly, it's so small that you could put it in an inline script tag and suffer very few negative consequences.

### Usage

AvoJS has a special syntax for variables, but it's not too hard to get the hang of. It goes like this:

```js
avo(varName);
```

Note that there is no need to declare AvoJS variables (and it may even cause problems if you do). Just start using them and it will work smoothly.

To set/get the value of your AvoJS variable, use `avo(varName).value`. If you forget to use the `value` property, it will throw an error. `avo(varName).value` can be treated pretty much like a normal JS variable and function properly.

Now, if you don't add a callback, there's no reason to use AvoJS. So here's how you bind a callback to a AvoJS variable:

```js
avo(varName).bind(callback);
```

That's it. From now on whenever you assign the value of `avo(varName).value`, the callback function will run.

Please note that the callback will only run for assignments _after_ it has been bound to the variable. On the plus side, this means that you can change the callback at a later point in execution. Just run `avo(varName).bind(callback)` with your new callback.

### Example

In this example, we will use AvoJS to automatically update the header of a document (with the id `documentHeader`) with the value of a text input (with the id `documentHeaderInput`).

Here is the HTML:

```html
<h1 id="documentHeader">Untitled</h1>
<input type="text" value="Untitled" id="documentHeaderInput">

<!--Include avo.min.js-->
<script src="avo.min.js"></script>
<!--Include the JS we'll be writing below-->
<script src="script.js"></script>
```

Pretty simple. Now here's the JS:

```js
avo('documentTitle').value = "Untitled"; // Sets to Untitled -- Note that this will not update the header because we have not yet bound the callback. You can bind the callback before assigning the variable's value as well, which _would_ update the header.

//When the document title changes, update the page header
avo('documentTitle').bind(() => {
  document.getElementById("documentTitle").innerText = avo('documentTitle');.value;
});

//Listen for user changes the title to the text input
document.getElementById('documentTitleInput').addEventListener('input', () => {
  avo('documentTitle').value = this.value; // This will automatically trigger the callback and update the header to match
});
```

Pretty easy. But I believe that coding's beauty is in its ability to simplify complex problems into small chunks. This 400-byte library (!!!) is powerful enough to be useful in endless use-cases. I originally wrote it for use in a social media app that I'm coding and for a messaging app my friend is making.

---

A [See WIth Eyes Closed](https://seewitheyesclosed.com) Project by Benjamin Hollon. If you enjoyed this, stop by my site and take a look at some of the other stuff I've made.
