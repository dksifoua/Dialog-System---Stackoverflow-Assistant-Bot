# Dialog System - StackOverflow Assistant Bot

In this project, I built a conversational chatbot that is able to answer programming-related question as well as general question.

## Launch the project
- **In local**
    - `cd ./api`
    - `pip install -r requirements.text`
    - `./launch.sh` for Linux OS or `./launch.cmd` for Windows OS
    - The API is then available on [`localhost:5000`](localhost:5000)
    - `cd ../ui`
    - `npm install`
    - `echo REACT_APP_API_ENDPOINT=localhost:5000 > .env`
    - `npm start`
    - The UI is then available on [`localhost:3000`](localhost:3000)
- **Using Docker**