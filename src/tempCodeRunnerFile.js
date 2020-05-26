import React from 'react';
import { USER_EXISTS_QUERY } from './graphql/queries';
import { useClient } from './client'


function App() {
  return (
<form class="container">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  );
}

export default App;
