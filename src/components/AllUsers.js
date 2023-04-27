import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  styled,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { deleteUser, getUsersDetails } from "../service/api";

const Thead = styled(TableRow)`
background:orchid;


}`;
const Tbody = styled(TableRow)`
background:#FBF5DF;

}`;
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersDetailsagain();
  }, []);
  const getUsersDetailsagain = async () => {
    let response = await getUsersDetails();
    setUsers(response.data);
  };

  const deleteUserData=async (id)=>{
    await deleteUser(id);
getUsersDetailsagain()
  }
  return (
     <Table>
      <Thead>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell></TableCell>
      </Thead>
      <TableBody>
        {users.map((user) => (
          <Tbody>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button style={{ marginRight: "10px" }} component={Link} to={`/edit/${user.id}`} variant="contained">
                Edit
              </Button>
              <Button
                style={{ borderRadius: "10px" }}
                variant="outlined"
                color="error"
                onClick={()=>deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </Tbody>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
