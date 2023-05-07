import axios from "axios";
const API_URL = "http://localhost:3002/users";

const addData = async (data) => {
  try {
    console.log(data);
    return await axios.post(API_URL, data);//data needs to be object or json
  } catch (error) {
    console.log("error while calling api", error.message);
  }
};

export default addData;

export const getUsersDetails = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("error while displaying api");
  }
};

export const getUser=async (data)=>{
  try {
    return await axios.get(`${API_URL}/${data}`)
  }
  catch(error) {
    console.log('error while calling getuser api',error.message)
  }
}
export const editUser=async (data,id)=>{
  try {
    return await axios.put(`${API_URL}/${id}`,data)
  }
  catch(error) {
    console.log('error while calling getuser api',error.message)
  }
}
export const deleteUser=async (id)=>{
  try {
    return await axios.delete(`${API_URL}/${id}`)
  }
  catch(error) {
    console.log('error while calling getuser api',error.message)
  }
}
