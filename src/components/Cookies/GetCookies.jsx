import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'

export default function GetCookies() {
    const [cookieValue, setCookieValue] = useState('');
    useEffect(() => {
        // Function to retrieve the value of a specific cookie
        const getCookieValue = () => {
          const myCookieValue = Cookies.get('badhon');
          if (myCookieValue) {
            setCookieValue(myCookieValue);
          }
        };
    
        // Call the function when the component mounts
        getCookieValue();
      }, []);
  return (
    <div className='w-full border-2 border-gray-400 '>
    <p>Cookie Value: {cookieValue}</p>
  </div>
  )
}
