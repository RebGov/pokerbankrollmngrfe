# Ante UP Poker Bankroll Suite (Not a Gaming Site) 
**Bankroll manager tool to maximize poker player’s success by viewing statistics of personal wins and losses per game over time.** (Back-End code for server & persisting of data: https://github.com/RebGov/pokerbankrollmngrbe)

* Ante Up is a tool built to help a poker player (user) to create his/her personal ledger of game play statistics. Inputs:
  - Date & Time In/Out,
  - Monetary Buy-In/Cash-Out
  - Location
  - Type of Game
  - Blinds Structure,
  - Kill Pot Status (auto set at 'None')
  - Calculations completed in Rails back-end before persisting user entry are: 
    - Total minutes played
    - Profit of entry, and 
    - Whether game won or lost. 
  
* The following statistics are preformed using the above persisting user inputs with filter capabilities for specific game type statistic:
  - total profit/loss
  - duration of game play
  - rate of win/loss over time played 
  - total games played
  - wins vs losses and displayed using chart.js doughnut graph
  - Chart.js line graph used to visualize monetary flow over time.
  
* RESTful API requests to Rails backe-end gives the user maximum ability to see statistics of user entry history, SQL queries filter through the database using any or all of the following options:
  - game type
  - location (poker room)
  - blind structure
  - kill-pot status (full/half/none)
  - date game played choices:
    - Current Month
    - Current Year
    - Start Date and End Date
  - History of Games filtered are sorted in Descending order by Date game played

* Dates & Time Manipulations used to modify minutes of play to HH:MM format
* Calendars selectors used for inputing date and time and filtering date ranges: "Date and time picker" from "material-ui-pickers" library.

* Current Deliverables:
  - Creating and persisting: user account
  - Creating and persisitng: game types, game location (poker room), blind structures, kill statuses
  - Creating and persisiting: user entry of game data
  
* Changes in progress:
 - Filter Date Search BY Month: working on solution for end date to not be hard coded for 31st
 - Chart.js Line graph visual monetary flow over time 
 - Adding Edit and Delete options for selected game
 - Adding Previous month/year options

* Future Deliverables:
  - Tournament Game Data storage and statistics
  - Ability to store "live" sessions
  - Mobile App

**Systems, Configurations and Dependencies**

  * NPM Create-React-app 
  * React.js
  * React-Router.js
  * Redux.js
  * Thunk.js
  * Chart.js
  * Material-UI Libraries

Please email me for any further questions: becci.govert@gmail.com. 
