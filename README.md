## WordBank (Group 7):

![bild](https://user-images.githubusercontent.com/42782387/118537443-3c7b2400-b74d-11eb-8dbd-410e4ba30f07.png)

### Project description

The project's target group will be people who aim to learn a new language. The user will be able to translate a word or expression from one language to another, and in a quick and easy manner save that translation in a personal bank. To be able to use this feature the user will need to create an account and log in. The user can organize the translations in different boards and add information to support learning, in the form of a tag or comment. 

Link to current website: https://wordbank.netlify.app/

### SET UP

#### Clone this repo
```
git clone git@github.com:juliaBystrom/wordBank.git
```

#### Install Dependencies
```
npm install
```

#### Set up Enviroment file

To be able to use the google translate API an API key need to be set in the enviroment. Use your own key or if appliciable the one given to you.

1. In the terminal be in the root folder of this project
2. Change [API KEY] below to your API Key for the google translate API
3. Run

```
echo "REACT_APP_GOOGLE_TRANSLATE_API_KEY = '[API KEY]'" > .env
```
You can also in the root folder of this project create a file called .env with:
REACT_APP_GOOGLE_TRANSLATE_API_KEY = '[API KEY]'

#### Run application 
In the root folder of this project run:
```
npm run start
```

### Technology

- Front-end: React.js

- Persistence: Google’s service Firestore

- Hosting: Netlify

- API: Google Cloud Translation API 

- Third-party-libs: React DnD HTML5 Backend. React-modal for creating the pop up shwon when pressing a card.

- Data: The translation data comes from Google Cloud Translation API.
App specific data will include user information, boards, cards, tags, comments.

### Progress made:

~~These features have been implemented so far:~~
- ~~Signup/signin page~~
- ~~Enabling creating and giving tags to cards with translations~~
- ~~Sidebar with filtration of cards, setup for sorting boards~~
- ~~Translate functionality with Google API~~
- ~~Trello-like boards to save translations~~
- ~~Save user-specific data to Firestore~~
- ~~Card info is given by a pop up when a card is pressed.~~


### Planning to do:

~~Features that are planned to be implemented:~~
- ~~Persist model by retrieving saved data from Firestore at signin~~
- ~~Drag & drop functionality~~
- ~~Ranking of most used / latest used boards to sort on~~
- ~~Translate by pressing 'enter'~~
- ~~Add comment on creation of card~~
- ~~Choose language to translate FROM~~
- ~~Edit board and tag names~~
- ~~Not necessary to input tag - it is as of now necessary~~
- ~~Overall styling and UX~~
- ~~Adding code to make our website more accessible~~ 

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
* src/styledComponents = Files containing styled components that is used in multiple places of application.

