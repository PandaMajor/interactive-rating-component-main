# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

![Web prompt](/screenshots/web%20prompt.jpeg)
![Web active states](/screenshots/web%20active%20states.png)
![Web thank you](/screenshots/web%20thank%20you.jpeg)
Mobile prompt | Mobile thank you
:------------:|:---------------:
![Mobile prompt](/screenshots/mobile%20prompt.jpeg) | ![Mobile thank you](/screenshots/mobile%20thank%20you.jpeg)


### Links
- Live Site URL: [https://pandamajor.github.io/interactive-rating-component-main/](https://pandamajor.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Custom Javascript

### What I learned

The **!important** tag can be used to override the inline style applied by the javascript code. Without the tag, the snippet below would only work the prior to selecting a rating.

```css
.rating:hover {
    background-color: var(--light-gray) !important;
    color: var(--white) !important;
}
```

### Useful resources

- [StackOverflow](https://stackoverflow.com/questions/14071652/css-hover-event-not-working-after-using-javascript) - This helped provide insight on why the hover style defined in the stylesheet stopped working once the javascript was applied.

## Author

- Twitter - [@major_liu](https://www.twitter.com/major_liu)

