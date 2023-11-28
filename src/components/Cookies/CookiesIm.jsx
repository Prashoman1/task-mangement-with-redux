import Cookies from "js-cookie";
import React, { useState } from "react";

export default function CookiesIm() {
  const [cookieName, setCookieName] = useState("");
  const [cookieValue, setCookieValue] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "cookieName") {
      setCookieName(value);
    } else if (name === "cookieValue") {
      setCookieValue(value);
    }
    console.log(cookieName, cookieValue);
  };

  const setCookie = () => {
    Cookies.set(cookieName, cookieValue);
    setCookieName("");
    setCookieValue("");
  };
  return (
    <div className="ps-36">
      <input
        type="text"
        name="cookieName"
        className="w-1/2 border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        value={cookieName}
        onChange={handleInputChange}
        placeholder="Cookie Name"
      />
      <br />
      <br />
      <br />
      <input
        type="text"
        name="cookieValue"
        className="w-1/2 border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        value={cookieValue}
        onChange={handleInputChange}
        placeholder="Cookie Value"
      />
      <br />
      <br />
      <button className="bg-blue-400 py-1 px-2 rounded-md text-white" onClick={setCookie}>Set Cookie</button>
    </div>
  );
}
