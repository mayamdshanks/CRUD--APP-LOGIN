import { useState,useEffect } from "react";
import {getUser,editUser} from "../service/api";
import {useNavigate , useParams} from 'react-router-dom'
import {
  FormControl,
  FormGroup,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

const Cssnice = styled(Typography)`
  margin-bottom: 15px;
`;

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0;
  ${"" /* & > div( */}
  margin-bottom:10px
    margin-top:20px;

  );
`;
const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
export const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const navigate =useNavigate()
  const {id}=useParams()
  useEffect(() => {
   getUserData();

  },[])

  const getUserData= async ()=>{
   let response= await getUser(id);
  setUser(response.data)
  }
  
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const addUserDetails = async () => {
    await editUser(user,id);
    navigate('/all')
  };

  return (
    <Container>
      <FormControl>
        <Cssnice variant="h5">Edit User</Cssnice>
        <TextField
          onChange={(e) => onValueChange(e)}
          name="name"
          id="standard-basic"
          label="Name"
          variant="standard"
          value={user.name}
        />
        <TextField
          onChange={(e) => onValueChange(e)}
          name="username"
          id="standard-basic"
          label="Username"
          variant="standard"
          value={user.username}
        />
        <TextField
          onChange={(e) => onValueChange(e)}
          name="email"
          id="standard-basic"
          label="Email"
          variant="standard"
          value={user.email}
        />
        <TextField
          onChange={(e) => onValueChange(e)}
          name="phone"
          id="standard-basic"
          label="Phone"
          variant="standard"
          value={user.phone}
        />
        <Button
          onClick={() => addUserDetails()}
          variant="contained"
          color="error"
        >
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};
