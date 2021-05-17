## WordBank (Group 7):

<img src="landingPage.png"/>

### Project description

The project's target group will be people who aim to learn a new language. The user will be able to translate a word or expression from one language to another, and in a quick and easy manner save that translation in a personal bank. To be able to use this feature the user will need to create an account and log in. The user can organize the translations in different boards and add information to support learning, in the form of a tag or comment. 

Link to current website: https://wordbank.netlify.app/
### Technology

- Front-end: React.js

- Persistence: Google’s service Firebase Firestore

- Hosting: Netlify

- API: Google Cloud Translation API 

- Third-party-libs: React DnD HTML5 Backend, to enable drag and drop functionality. 

- Data: The translation data comes from Google Cloud Translation API.
App specific data will include user information, boards, cards, tags, comments.

### Progress made:

These features have been implemented so far:
- Signup/signin page
- Enabling creating and giving tags to cards with translations
- Sidebar with filtration of cards, setup for sorting boards 
- Translate functionality with Google API
- Trello-like boards to save translations
- Save user-specific data to Firestore
- Card info is given by a pop up when a card is pressed.
- Can move cards between boards
- Change any information related to a Card
- Better styling


### Planning to do:

Features that are planned to be implemented:
- Overall styling and UX
- Adding code to make our website more accessible 
- Flashcards

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
* src/firebase/firebaseConfig = firebase connection established

### How to setup
1. Clone repo
2. npm install in main folder
3. npm start
4. Register user
5. Create and store your own translations
6. Good luck!
