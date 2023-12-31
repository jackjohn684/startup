### Elevator pitch:

Have you ever been waiting in a line or for a class with one of your buddies and wanted to play a simple game to pass the time? Well, what’s a simpler game than Connect 4? With this website, you can play a quick game of connect four no matter where you are. You can also sign in and make an account in order to track your score and see how your win-loss percentage compares to other people online through the leaderboard.

 ![image](https://github.com/jackjohn684/startup/assets/143542012/6fa264da-6344-4f8a-91da-c9c191abc4c4)
![image](https://github.com/jackjohn684/startup/assets/143542012/71223e21-041b-4ef8-9359-f46c37f64831)
![image](https://github.com/jackjohn684/startup/assets/143542012/e27da309-fad9-4bb4-9583-40f47afd9be9)
![image](https://github.com/jackjohn684/startup/assets/143542012/bf0d2a37-ac95-497d-8021-537da53232be)

 
Key Features:
Secure login of HTTPS
Option of whether to play against a computer or human.
The classic game connect four.
A page showing the wins and losses of the player’s account.
A page with a leaderboard for the best win/loss percentage.


I will use the Technologies in the following ways.

HTML – I will use four HTML pages. One for login, one for the game itself, one to see the game history of the player, and one for a leaderboard. I might make another one too like in the Simon to have a quote and a picture or something. The html structure will be correct.

CSS- I will make it look pretty so it doesn’t just look like plain connect 4. I will use a styling such that it won’t be hard to play on a phone. I want the rows of the connect four game to be big enough such that nobody fails to click on the correct place. Hopefully, I’ll be able to make it look better than a simple 2d model and I’ll be able to put an animation for the tokens dropping.

JavaScript – It will help with login and everything that has to do with the game including the coin dropping and determining when someone wins. I think I’ll also have to use JavaScript to make the code for the computer opponent. 

Service – I can use the backend service for login, and the leaderboard of who has the best win ratio or the most wins.
DB – Store the users, the games, and the win and loss percentage.
Login- Register and login users. One can log in so that they can access their own wins and losses and play as themselves. 

WebSocket- When someone’s win ratio changes, it will broadcast it to all the other users in the leaderboard.
React- Application ported to use the React web framework.


## Simon.html
I deployed the simon files to my website and I changed a couple things. I added a new page called "yee", and I added a link to it in all of the other pages. The page, "yee" has a bit of text and a lot of buttons in it.

## HTML deliverable

**HTML pages** - I'll have four HTML pages. One for the login, one for the game, one for the win-loss history, and one for the win-loss leaderboard.

**Links** - The login page links to the play page. Just like the Simon application, all of the pages link to the other ones.

**Text** - There are many textual descriptions

**Images** - I put a connect 4 image I found from Wikipedia on the home page

**Login** - Input box and submit button for login.

**Database** - The game history represents data pulled from the database

**WebSocket** - The notifications of when someone starts a game shows realtime communication.

## CSS Deliverable

For this deliverable I properly styled the application into its final appearance.
- **Header, footer and main content body**
- **Navigation elements** - All of the links are in the top right corner in a type of menu. I also changed the color, the font and removed the underlines.
- - **Responsive to window resizing** - I made the connect 4 board shrink when the page changes size. I also made certain less necessary parts of the webside disappear when the page gets small enough.
- **Application elements** - I did my best to make everything look good and usable.
- **Application text content** - The same fonts for all of the pages
- **Application images** I still have the image in the home page.
- ## Javascript Deliverable
- For this deliverable I implimented all of the necessary things with JavaScript
- **Future login** Someone can sign in with their name and their name is visible when they are playing connect 4. I might change it to allow two people to sign in for when they play against each other.
- **future database data** Everytime someone wins a game, it goes into the game history that says the current date and whether red or yellow won.
- **future WebSocket** Every once in a while when someone's playing, it lets you know that eich won a game.
- **Interaction Logic** I got the entire connect 4 game to work the way it should
- RIght now the leaderboard doesn't do anything, but I'll implement that in the future

## Service deliverable

For this deliverable I added backend endpoints that receives whether someone won a game, and returns that.

- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - I made it display a random quote on the game history page.
- **Backend service endpoints** - Endpoints for the games that the players won.
- **Frontend calls service endpoints** - I used this to load the game history.
- 
## DB deliverable

For this deliverable I stored the winners of the games in the database

- **MongoDB Atlas database created** - done!
- **Endpoints for data** - My endpoints send the data to mongo.
- **Stores data in MongoDB** - done!

## Login deliverable

For this deliverable I associate the game history with the user.

- **User registration** - Creates a new account in the database.
- **existing user** - It lets you sign in as a user if it already exists. It remembers the game history of that user
- **Use MongoDB to store credentials** - Stores the user and their game history.
- **Restricts functionality** - You are stuck on the login page until you log in.

  ## WebSocket deliverable

For this deliverable I used webSocket to update the votes on the frontend in realtime.

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - It displays in realtime if a player finishes a game.

- ## React deliverable


- **Bundled and transpiled** - Yes!
- **Components** - Login, the game, the table for the game History are all components.
- **Router** - The router is used for the navigation between pages
- **Hooks** - I use useEffect in multiple places




