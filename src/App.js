import React, { useState } from "react";
import { USER_EXISTS_QUERY } from "./graphql/queries";
import { LINK_GENERATE_MUTATION} from "./graphql/mutation";
import { useClient } from "./client";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const App = () => {
  const client = useClient();
  const [email, setEmail] = useState("");

  const viewUser = async (e) => {
    try {
      e.preventDefault();
      const emailck = { email };
      const response = await client.request(USER_EXISTS_QUERY, emailck);
      if (response.userExists) {
        Swal.fire({
          icon: "success",
          title: "Great",
          text: "Thank You!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Opps...",
          text: "Please register with us!",
        });
      }
      console.log({ response });
    } catch (err) {
      console.log(err);
    }
  };
  const sendLink= async(e)=>{
    try{
      e.preventDefault();
      const nlink =await client.request(LINK_GENERATE_MUTATION);
      console.log(nlink.linkGenerate);
      
    }
    catch (err) {
      console.log(err);
    }

  }
  return (
    /* <form className="container" onSubmit={viewUser}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted" >
          Check that you are registered with us or not!
        </small>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form> */
    <form className="container" onSubmit={sendLink}>
      <button type="submit" className="btn btn-primary">
        Generate Link
      </button>
    </form>
  );
};

export default App;
