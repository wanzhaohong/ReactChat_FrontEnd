import React, {useContext, useRef} from 'react';
import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './Room.css'; 

const Room = () => {
    const room = useRef();
    const { user } = useContext(AuthContext);

    //redirect user to previous page or other pages
    const history = useHistory();

    const handleClick = (event) => {
        event.preventDefault();
        console.log(user.username, room.current.value);
        history.push(`/chat?name=${user.username}&room=${room.current.value}`);
        // <Redirect to={`/chat?name=${user.username}&room=${room.current.value}`} />
    };

    return (
        <div className="roomOutterContainer">
            <Container>
                <h2>Welcome {user.username}! please enter the room name.</h2>
                <form onSubmit={handleClick}>
                    <div><input placeholder="Room Name" className="roomInput mt-20" type="text" ref={room} required /></div>
                    <button className="roombutton mt-20" type="submit">SUBMIT</button>
                </form>
            </Container>
        </div>
    );
}

export default Room;