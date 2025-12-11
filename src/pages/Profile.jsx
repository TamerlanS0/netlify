import React, { useEffect } from 'react';
import { useTokens } from '../stores/tokenStore';

const Profile = () => {
  const { accessToken } = useTokens();
  
  const getUserInfo = async () => {
    try {
      const res = await fetch("https://ilkinibadov.com/api/v1/auth/me", {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      });
      
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []); 

  return (
    <div>
      Profile
    </div>
  );
}

export default Profile;