import React from "react";
import Avatar from "./Avatar";

const MessageBox = (props) => (
    <li className={`${ props.side }`}>
        <Avatar side={ props.side } />
        <div className="bg-teal-500 rounded mt-1 text-white">
            { props.message }
        </div>
    </li>
);

export default MessageBox;