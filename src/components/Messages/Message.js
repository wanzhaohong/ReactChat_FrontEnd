import React from 'react';
import './Message.css';

const Message = ({ message: {user, text}, name }) => {
    let SentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        SentByCurrentUser = true;
    }

    return(
        SentByCurrentUser ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messagebox backgroundBlue">
                    <p className="messageText colorWhite">{text}</p>
                </div>
            </div>
        ):(
            <div className="messageContainer justifyStart">
                <div className="messagebox backgroundLight">
                    <p className="messageText colorDark">{text}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    );
}

export default Message;