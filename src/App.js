import React from 'react';

const Messages = (props) => {
    
    return props.conversation.map((message, index) => (
        <div key={ index } className={ `${message.issuer}-message` }>
            <div className="message">{ message.text }</div>
        </div>
    ));
};

const App = () => {
    const chatbotOutputRef = React.createRef();

    const [userMessage, setUserMessage] = React.useState({
        text: "",
        issuer: "user"
    });
    const [conversation, setConversation] = React.useState([{
        text: "Hi! I'm a bot. What's up?",
        issuer: "bot"
    }]);

    const handleChange = (event) => {
        let message = event.target.value;
        if(message) {
            setUserMessage({
                text: message,
                 issuer: "user"
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setConversation([...conversation, userMessage, {
            text: "Message: " + userMessage.text,
            issuer: "bot"
        }]);
        setUserMessage({
            text: "",
             issuer: "user"
        });
    };

    React.useEffect(() => {
        chatbotOutputRef.current.scrollTop = chatbotOutputRef.current.scrollHeight;
    });

    return (
        <div className="bot">
            <div className="chat-output" id="chat-output" ref={ chatbotOutputRef }>
                <Messages conversation={ conversation } />
            </div>
            <div className="chat-input">
                <form action="#0" id="user-input-form" onSubmit={ handleSubmit }>
                    <input
                        type="text"
                        id="user-input"
                        className="user-input"
                        placeholder="Talk to StackOverflow Assistant Bot."
                        value={ userMessage.text }
                        onChange={ handleChange }
                    />
                </form>
            </div>
        </div>
    );
};

export default App;
