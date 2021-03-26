![image](https://user-images.githubusercontent.com/31847596/112691837-e88a4800-8e4b-11eb-9a1d-ceb225980f8c.png)


## Description
This is a web-app that allows users to keep track of games they want to play. It takes inspiration from Rawg.io and uses their API for finding information about games. Users can search for games and add them to their backlog. In their backlog they can categorize games as not played, started or completed. 

## Development
This app was made with React and Redux for the frontend and Ruby on Rails for the backend. Thunk was used to handle asynchronous fetch requests to get data from the RAWG API and save it into my redux store. For the styling I used React-Bootstrap with a bit of my own CSS.
'react-infinite-scroll-component' (https://github.com/ankeetmaini/react-infinite-scroll-component) was used for handling the infinite scrolling on the home page.

## Check Out The Live Version
https://guarded-temple-25512.herokuapp.com/
Note: signing up or logging in may take a while because the backend is hosted as a seperate heroku application.


