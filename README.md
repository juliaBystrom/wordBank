## WordBank (Group 7):

<img src="landingPage.png"/>

### Project description

The project's target group will be people who aim to learn a new language. The user will be able to translate a word or expression from one language to another, and in a quick and easy manner save that translation in a personal bank. To be able to use this feature the user will need to create an account and log in. The user can organize the translations in different boards and add information to support learning, in the form of a tag or comment. 


### Technology

Front-end:         React.js

Persistence:         Google’s service Firestore

Hosting:         Netlify

API:             Google Cloud Translation API 

Third-party-libs:     React DnD HTML5 Backend, to enable drag and drop functionality. 

Data:            The translation data comes from Google Cloud Translation API.
App specific data will include user information, boards, cards, tags, comments.

### Progress made:

These features have been implemented so far:
- signup/signin page
- sidebar with filtration of cards, setup for sorting boards 
- translate functionality with Google API
- trello-like boards to save translations

### Planning to do:

Features that are planned to be implemented:
- Drag & drop functionality
- Ranking of most used / latest used boards to sort on
- Translate by pressing 'enter'
- Add comment on creation of card
- Choose language to translate FROM
- Overall styling and UX

### File structure

Files are structured into the folders: models, presenters, views. In views we have an additional
folder called components for parts in the application that is frequently used e.g. buttons, img
tags, text. 
<br/>
<br/>
* Utils = Utilities
* src/index.js = entry point for the application
* src/App.js = routing, modal creation, etc.
* src/theme.js & src/style.js = shared styling and colors for the application
* src/firebase.js = firebase connection established
