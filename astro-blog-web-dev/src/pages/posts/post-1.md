---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Introduction to Terminal"
author: Neoh Wei Jun
pubDate: 2023-08-27
description: "An introduction to the terminal."
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "The full Astro logo."
tags: ["terminal", "productivity"]
---

---

```bash
echo "Hello World!"
```

## Terminal and command lines

### What is a terminal?

The terminal is a program that allows you to interact with your computer using text commands. It is also known as the command line or shell.

1. **ls**: List all files in the current directory

2. **cd**: Change directory | ./: Current directory | ../: Parent directory | ~: Home directory | ..: Previous directory

3. **mkdir**: Make directory (folder) | **rmdir**: Remove directory

4. **touch**: Create a file (_Windows_: $null > filename)

5. **cat**: Print the content of a file | _Windows_: **type**

6. **rm**: Remove a file | _Windows_: **del**

7. **pwd**: Print working directory | _Windows_: **cd**

8. **clear**: Clear the terminal screen | _Windows_: **cls** | ctrl + l (shortcut)

9. **ctrl + c**: Cancel the current process / exit the current program

10. **arrow up/down**: previous/next command (history)

11. **tab**: autocomplete | **powershell**: **right arrow key**: for autocomplete / **f2**: List all history commands

## Additional

_If you are using Windows, consider using the new **PowerShell** from Microsoft. It is much better than the old command prompt._

---

Terminal configuration that I use (Windows): [oh-my-posh](https://ohmyposh.dev/)

[Video: Make Windows Terminal Look Better | Oh My Posh Guide](https://www.youtube.com/watch?v=-G6GbXGo4wo)

---

For Mac: [oh-my-zsh](https://ohmyz.sh/)

For Mac, a lot of YouTube videos on how to setup and configure it. Consider installing plugins such as auto-suggestion and syntax highlighting.
