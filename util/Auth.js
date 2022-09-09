import axios from "axios";
const API_KEY = 'AIzaSyDv_UJzwoH3UnTR6-Z7evZJDgsSdNWyWy4';
async function createUser(email,password)
{
    const response=await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
        +${API_KEY}`
    ,
    {
        email:email,
        password:password,
        returnSecureToken:true
    }
    );
    
}
export default createUser;