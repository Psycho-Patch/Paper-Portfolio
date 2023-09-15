# Paper-Portfolio

## OVERVIEW

# 📄 Paper Portfolio Website with Smooth Scrolling and Animations 🎨

Welcome to my interactive paper-themed portfolio website! This repository contains the source code for a Portfolio website.

🌟 Key Features:
- Smooth scrolling powered by Locomotive Scroll.
- Eye-catching animations and transitions using GSAP.
- Responsive design for an optimal viewing experience on various devices.

🔗 Check out the live website: https://paper-portfolio.netlify.app

# HTML, CSS, and JavaScript:

The website is built using standard web technologies, including HTML for structuring content, CSS for styling, and JavaScript for interactivity and animations.

# Locomotive Scroll Integration:

Locomotive Scroll is integrated into the website to create a smooth scrolling experience. This JavaScript library allows for custom scroll behavior and animations as users navigate the website.

# GSAP Animation:

GSAP (GreenSock Animation Platform) is used for creating animations in website. GSAP is a powerful animation library that enables to design smooth and engaging animations, enhancing the user experience.

📃 About Me:
I'm a passionate Web Developer and UI/UX Designer and a creator with a love for design and interactivity. This website serves as a canvas to share my work and connect with fellow enthusiasts.

📧 Contact:
Have a project in mind or just want to say hi? Feel free to reach out to me at Akshaybillore92@gmail.com

Happy exploring! 🚀


## How to use locomotive scrollbar

First, copy this cdn and paste under the <TITLE> Tag inside <HEAD> tag : 

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" />

Next, copy this script and paste at the end of the <BODY> tag : 

    <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>

Last, Paste this code inside your js file :

    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
