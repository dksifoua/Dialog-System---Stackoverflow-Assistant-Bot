import React from "react";
import MessageBox from "./MessageBox";

const MessageContainer = (props) => {

    const myRef = React.createRef();

    React.useEffect(() => {
        scrollToBottom();
    });

    const scrollToBottom = () => {
        myRef.current.scrollTop = myRef.current.scrollHeight;
    }

    const createMessages = (messages) => {
        return messages.map((message, index) => (
            <MessageBox
                key={ index }
                message={ message.text }
                side={ message.is_bot ? "left" : "right" }
            />
        ))
    }

    return (
        <ul className="mt-3 h-64" ref={ myRef }>
            { createMessages(props.messages) }
        </ul>
    )
};

export default MessageContainer;