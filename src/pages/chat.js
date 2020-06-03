import React,{useEffect} from 'react';
import { SEND_MESSAGE_MUTATION } from "../graphql/mutation";
import { useClient } from "../client";
import Swal from 'sweetalert2';

const Chat=()=>{
    return(
        <form className="container">
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Message</label>
            <input type="text" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Start Chatting</button>
        </form>
        
    )
}


export default Chat;