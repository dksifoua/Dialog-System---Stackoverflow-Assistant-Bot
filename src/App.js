import React from 'react';
import MessageContainer from "./components/MessageContainer";
import MessageTextBox from "./components/MessageTextBox";
import SendButton from "./components/SendButton";

const App = () => {

    const [messages, setMessages] = React.useState([]);
    const [currentMessage, setCurrentMessage] = React.useState({
        text: "",
        is_bot: false
    });

    const handleMessage = (e) => {
        setCurrentMessage({
            text: e.target.value,
            is_bot: false
        });
    }

    const handlePressKey = (e) => {
        if(e.key === "Enter" && currentMessage.text) {
            sendMessage();
        }
    }

    const handleClick = () => {
        sendMessage();
    }

    const sendMessage = () => {
        if(currentMessage.text) {
            let botMessage = {
                text: "Your message: " + currentMessage.text,
                is_bot: true
            }
            setMessages([...messages, currentMessage, botMessage]);
            setCurrentMessage({
                text: "",
                is_bot: false
            });
        }
    }

    return (
        <div className="container mx-auto my-10 w-3/4 h-full px-4 bg-gray-300 rounded-lg shadow-lg">
            <MessageContainer messages={ messages } />
            <MessageTextBox
                message={ currentMessage.text }
                onChange={ handleMessage }
                handleKeyPress={ handlePressKey }
            >
                <SendButton handleClick={handleClick} />
            </MessageTextBox>
        </div>
    );
}

export default App;
