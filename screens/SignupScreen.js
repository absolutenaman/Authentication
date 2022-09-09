import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import {createUser} from '../util/Auth';

async function SignupScreen() {
  const [isAuthenticating,setIsAuthenticating]=useState(false);
  async function sign_up_handler({email,password})
  {
    setIsAuthenticating(true);
    await createUser(email,password);
    setIsAuthenticating(false);
  }
  
  if(isAuthenticating)
  {
    return <LoadingOverlay message="Creating the User..."/>
  }
 
  return <AuthContent onAuthenticate={sign_up_handler}/>;
  
}

export default SignupScreen;
