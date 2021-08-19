import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import { io } from "socket.io-client";

import Info from '../Info/Info';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import './Chat.css'

const ENDPOINT = 'http://localhost:5000';
let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        const url = new URL(window.location.href);
        const name = url.searchParams.get("name");
        const room = url.searchParams.get("room");
        // console.log(window.location.href);
        // const { name, room } = queryString.parse(window.location.href);

        // console.log(name);
        // console.log(room);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });

        //example callback returns an error
        // socket.emit('join', { name, room }, () => {
        // });

        //For unmounting/User disconnection
        

    }, [ENDPOINT, window.location.href]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    //function for send message.

    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }


    return (
        <div className="outerContainer">
            <div className="chat_container">
                <Info room={room} />
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
}


export default Chat;