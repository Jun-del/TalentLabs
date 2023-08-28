---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Introduction to HTML (HTML5)"
author: Neoh Wei Jun
pubDate: 2023-08-27
description: "I had some challenges, but asking in the community really helped!"
# image:
#   url: "https://docs.astro.build/assets/rays.webp"
#   alt: "Thumbnail of Astro rays."
tags: ["html"]
---

---

## What is HTML?

HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages and it describes the structure of a web page.
CSS is used to style the HTML elements, while JavaScript is used to make the page interactive.

Think of HTML as the skeleton of a web page, CSS as the skin, and JavaScript as the muscles. _Walk through head and body tags_

## HTML Elements

HTML elements are made up of a start tag, content, and an end tag. It can be nested within other elements or self-closing. There are attributes that can be added to provide additional information about the element.

```html
<!-- Start tag -->
<p>
	<!-- Content -->
	This is a paragraph.
</p>
<!-- End tag -->
```

Output: This is a paragraph.

```html
<!-- Self-closing -->
<img src="https://example.com/image.jpg" alt="Thumbnail of Astro arcs." />
```

The `<!-- -->` are comments. Comments are not displayed in the browser and are used to provide additional information about the code.

## Types of frequently used HTML elements

---

### Heading

Heading elements are used to define headings and subheadings. There are 6 levels of headings, with `<h1>` being the most important and `<h6>` being the least important.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
```

Output:

# Heading 1

## Heading 2

### Heading 3

---

### Paragraph

Paragraph elements are used to define paragraphs as shown above. `<p>Write something...</p>`

---

### Division (div)

Division elements are used to group elements together. It is often used to create a layout for a web page. It does not do anything by itself and do not have semantic meaning. It is generally used with CSS to style the elements (flexbox, grid, etc).

**Note:** It is recommended to use semantic elements instead of divs whenever possible. For example, use `<footer>` instead of `<div id="footer">`. for the footer of a web page.

---

### Anchor (Link)

Anchor elements are used to define a hyperlink, which is alink to another page.

```html
<a href="https:/youtube.com">Youtube</a>
```

target="\_blank" to open in new tab

Output: [Youtube](https:/youtube.com) (there's an underline)

---

### Image

As its name suggests, image elements `<img src="imageUrl"/>` are used to define images (example above). The alt attribute provides a text description of the image, which is useful for screen readers and search engines (SEO).

---

### List

There are 2 types of lists: ordered and unordered `<ol></ol>` `<ul></ul>` . List elements / items are used to define lists `<li>Nest something here</li>`.

```html
<ul>
	<li>Item 1</li>
	<li>Item 2</li>
</ul>
```

Output:

- Item 1
- Item 2

```html
<ol>
	<li>Item 1</li>
	<li>Item 2</li>
</ol>
```

Output:

1. Item 1
2. Item 2

---

### Button

Button elements are used to define buttons. It can be used to submit forms, trigger JavaScript functions, etc. It can be used with form elements (input, select, etc) to create forms.

```html
<button>Click me</button>
```

Output: <button>Click me</button>

---

### Inputs and tables

Demo a form

[w3schools inputs](https://www.w3schools.com/html/html_form_input_types.asp)

---

## Additional Resources

[w3schools](https://www.w3schools.com/html/default.asp)

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

[HTML tags list](https://www.tutorialrepublic.com/html-reference/html5-tags.php)

[Essential beginner HTML tags](https://www.youtube.com/watch?v=K_EVuLegRZ0)

[Complete Intro to Web Development, v3 - Brian Holt](https://btholt.github.io/complete-intro-to-web-dev-v3/)
