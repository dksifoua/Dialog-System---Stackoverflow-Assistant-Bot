import React from "react";

const Avatar = (props) => (
    <img
        className={ `rounded-full w-6 inline-block float-${ props.side }` }
        src="https://avatars1.githubusercontent.com/u/26673598?s=460&u=d2c88abd051b2ee272477cd73965927111d4a90a&v=4"
        alt="avatar" />
);

export default Avatar;