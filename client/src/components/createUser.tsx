import React,{useState} from 'react';
import { useMutation } from '@apollo/client';
import { CREATEUSER } from '../Graphql/Mutation';

const Create_User = () => {

    const [name,setName] = useState("")
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const [createUser,{error}] = useMutation(CREATEUSER);

return(
     <div className="createUser">
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => createUser({
              variables:{
                name:name,
                username:username,
                password:password
              }
            })}>Create User</button>
          </div>
)
}

export default Create_User;