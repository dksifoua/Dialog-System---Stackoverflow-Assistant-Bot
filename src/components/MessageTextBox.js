import React from "react";

const MessageTextBox = (props) => (
    <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter your messages here ..."
            aria-label="Message"
            value={ props.message }
            onChange={ props.onChange }
            onKeyPress={ props.handleKeyPress } />
        { props.children }
    </div>
);

export default MessageTextBox;