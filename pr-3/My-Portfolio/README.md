# My Portfolio Website

A responsive portfolio website created using React-Bootstrap.

## Project Overview

This project is a single-page portfolio website divided into five main sections:

1. Header
2. Slider
3. Work
4. Contact
5. Footer

Each section is created as a separate React component and combined in the main `App.jsx` file.

The project focuses on component-based development, responsive layout design, React state management, and the use of React-Bootstrap components.

## Technologies Used

* React
* Vite
* JavaScript
* Bootstrap
* React-Bootstrap
* CSS

## Project Structure

src/
│
├── components/
│   ├── Header.jsx
│   ├── Slider.jsx
│   ├── Work.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Sections

### Header

The Header component contains the website logo, Work, Studio, contact and Start a Project button.

### Slider

The Slider component displays different slides containing information about Website, Detailed-Content and main-sections.

The slides change automatically after a fixed-timeperiod and Users can also manually select a slide using the indicators on the right side.

React hooks such as `useState`, `useEffect`, and `useRef` are used to manage the active slide and timer.

### Work

The Work section displays selected projects in a structured layout.

Each project contains:

* Project number
* Project name
* Description
* Category
* Year

The project information is stored in an array and displayed dynamically using the `map()` method and these all project data's are dummy data and not contain real data.

### Contact

The Contact section contains a form with:

* Name
* Email
* Project details

React's `useState` hook is used to manage the form data.

When the form is submitted, the default page get's refreshed and a success message is displayed.

### Footer

The Footer component displays the studio name, copyright information, and social media links.

The current year is generated dynamically using JavaScript.

