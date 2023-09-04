---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Introduction to Browser APIs"
author: Neoh Wei Jun
pubDate: 2023-09-04
description: ""
# image:
#   url: "https://docs.astro.build/default-og-image.png"
#   alt: "The word “astro” against an illustration of planets and stars."
tags: ["browser", "browser-api"]
---

# Introduction to frequently used Browser APIs

## Browser APIs

1. DOM Manipulation:

Document Object Model (DOM): The DOM API allows you to access and manipulate the structure and content of web pages. Common operations include selecting elements, changing element attributes or content, and creating new elements.

2. Event Handling:

Event API: JavaScript and React both rely on event handling to respond to user interactions like clicks, keyboard input, and more. You can attach event listeners to DOM elements to handle these events.

3. AJAX and HTTP Requests:

Fetch API: The Fetch API is used for making HTTP requests to retrieve data from a server. It's commonly used for fetching data in React applications, often in combination with useEffect for data fetching and state management.

4. Timers and Intervals:

setTimeout(): This API allows you to schedule a function to be executed after a specified delay in milliseconds. It's used for tasks like running code after a certain time interval.
setInterval(): Similar to setTimeout(), but it repeatedly calls a function with a specified time interval.

5. Local Storage and Session Storage:

localStorage and sessionStorage: These APIs provide a way to store key-value pairs in the browser for persistent data storage. They are often used to store user preferences, settings, or cached data.

6. History API:

History API: It allows you to manipulate the browser's session history, enabling features like navigation without full page reloads. React Router, a popular routing library for React, utilizes this API.

7. Geolocation API:

Geolocation API: This API provides access to the user's geographical location. It's used in web applications to provide location-based services, such as finding nearby restaurants or displaying user locations on maps.
Web Storage API:

8. Canvas API:

Canvas API: This API allows you to draw and manipulate graphics and images directly in the browser. It's commonly used for creating interactive visualizations and games.

9. Web Workers:

Web Workers: Web Workers are a way to run JavaScript code in the background, separate from the main browser thread. They are used for tasks that require heavy computation without blocking the UI.

10. Media APIs:

MediaStream API: This API enables access to device cameras and microphones for applications like video conferencing or audio recording.
HTML5 Audio and Video: These elements and their associated APIs allow you to play audio and video files directly in web applications.
