# PodCast Capstone

## Overview
A digital platform enables users to explore, stream, and download audio episodes covering a multitude of topics while connecting with others. Users can express their preferences through likes, saves, and comments on their favorite episodes. The app offers a diverse array of content, tailored to individual interests and preferences.

### Problem

Existing podcast platforms host content, but there is a gap in the market for an app that focuses on enhancing the user experience by connecting them with tailored content and fostering community engagement based on shared experiences.

### User Profile

Designed for a broad audience, ranging from individuals on-the-go and commuters to students and those who prefer audible content. The app emphasizes a user-friendly design, accessibility features, and seamless interaction options, allowing users to like, save, and comment on their favorite content.

### Features

Content discovery, content interactions, content engagement


### Tech Stack

The tech stack includes React for the frontend, Node.js with Express for the backend, Knex for database query building, and MySQL for data storage.

### APIs

MySQL database is employed as a comprehensive data storage solution, encompassing user information, episode details, comment data, and Spotify iframe embeds. Firebase Authentication is utilized for secure user authentication, allowing users to access and manage their personalized content within the application.


### Sitemap

The sitemap outlines the structure of a music streaming web application with various pages. The <HomePage /> serves as the starting point, offering personalized suggestions. Users can explore and comment on episodes on their <PersonalPage />, while the <SearchPage /> facilitates content discovery. The <YourLibraryPage /> organizes personal collections, and specific music categories are navigable through <CategoriesPage /> and <SelectCategoryPage />. Additional pages, such as <MostPlayedPage />, <MostLovedPage />, <MostCommentedPage />, and <SomethingNewPage />, cater to diverse user preferences and content recommendations.

### Mockups

![Home Page](./src/assests/HOMEPAGE.png)
![Search Page](./src/assests/SEARCH.png)
![Your Library](./src/assests/YOURLIBRARY.png)
![Categories Page](./src/assests/CATEGORIES.png)
![Most PLayed Page](./src/assests/MOSTPLAYED.png)
![Most Loved Page](./src/assests/MOSTLOVED.png)
![Most Talked About Page](./src/assests/MOSTTALKEDABOUT.png)
![Something New Page](./src/assests/SOMETHINGNEW.png)
![Episode Page](./src/assests/EPISODEPAGE.png)
![Episode Page Playing](./src/assests/PLAYEPISODE.png)


## Nice-to-haves

It would be great to implement a subscription feature, enabling offline listening for users. Additional enhancements include content creators' capabilities for podcast uploading and management, integration of push notifications, subscription management tools, episode streaming and downloading options, increased social media integration, an in-app customer support chat, secure login with encryption, AI-driven playlist suggestions based on user preferences and listening history, and the option for continuous playback. Consideration for incorporating the Stripe API could also facilitate user payments.

## Future Plans

Future developments include implementing Firebase login, tracking users' liked and saved episodes in MySQL, enabling automatic comment display on the Episode page through Axios POST requests, designing a mobile-friendly layout, incorporating episode play tracking with a dedicated "Most Played" page, pre-loading recommended episodes on the search page, introducing category filters based on user engagement, excluding episodes already interacted with, and showcasing the most recent relevant episodes on a "Something New" page.