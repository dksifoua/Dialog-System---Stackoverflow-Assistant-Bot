import React from 'react'
import { getInitMessage, getResponseMessage } from "./api/consume"

const Messages = (props) => {
    
    return props.conversation.map((message, index) => (
        <div key={ index } className={ `${message.issuer}-message` }>
            <div className="message">{ message.text }</div>
        </div>
    ))
}

const App = () => {
    const chatbotOutputRef = React.createRef()

    const [userMessage, setUserMessage] = React.useState({
        text: "",
        issuer: "user"
    })
    const [conversation, setConversation] = React.useState([])

    const handleChange = (event) => {
        let message = event.target.value
        if(message) {
            setUserMessage({
                text: message,
                 issuer: "user"
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getResponseMessage(userMessage.text)
            .then(res => {
                setConversation([...conversation, userMessage, {
                    text: res.data,
                    issuer: "bot"
                }])
                setUserMessage({
                    text: "",
                    issuer: "user"
                })
            })
    }

    React.useEffect(() => {
        getInitMessage()
            .then(res => {
                setConversation([{
                    text: res.data,
                    issuer: "bot"
                }])
            })
    }, [])

    React.useEffect(() => {
        chatbotOutputRef.current.scrollTop = chatbotOutputRef.current.scrollHeight
    })

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
    )
}

export default App