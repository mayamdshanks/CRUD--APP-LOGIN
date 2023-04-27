import { useState } from "react";
import addData from "../service/api";
import {useNavigate} from 'react-router-dom'
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
export const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const navigate =useNavigate()
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  const addUserDetails = async () => {
    await addData(user);
    navigate('/all')
  };

  return (
    <Container>
      <FormControl>
        <Cssnice variant="h5">AddUser</Cssnice>
        <TextField
          onChange={(e) => onValueChange(e)}
          name="name"
          id="standard-basic"
          label="Name"
          variant="standard"
        />
        <TextField
          onChange={(e) => onValueChange(e)}
          name="username"
          id="standard-basic"
          label="Username"
          variant="standard"
        />
        <TextField
          onChange={(e) => onValueChange(e)}
          name="email"
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <TextField
          onChange={(e) => onValueChange(e)}
          name="phone"
          id="standard-basic"
          label="Phone"
          variant="standard"
        />
        <Button
          onClick={() => addUserDetails()}
          variant="contained"
          color="success"
        >
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};
