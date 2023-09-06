import React from "react";
import { useEffect, useState } from "react";
//import Update from "./../../components/update/Update";
//import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.scss";

const Home = () => {
  const [quotes, setQuotes] = React.useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        // Store the data in the component's state
        setQuotes(data);
      });
  }, []);

  const getRandomQuote = () => {
    // Get a random quote from the fetched data
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex]?.text || "No quotes available.";
  };

  
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Good Morning !!<br> Let's Learn !!";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Good Afternoon !!";
    } else if(currentHour >= 18 && currentHour < 22) 
    {
      greeting = "Good Evening !!";
    }
    else {
      greeting = "Its SLEEP time MACCHA,<br> <br> Good Night !! ";
    }

    return greeting;
  };



  return (
    
    <div className="home">
      <>
        <Navbar />
        <div className="homeContainer">
         {/* <Sidebar /> */}
          <div className="greeting" style={{ width: "30%",paddingTop: "60px" }}>
            <h2 style={{ color: 'blue', marginLeft: '20px', marginTop: '10px' }} dangerouslySetInnerHTML={{__html: getGreeting() }}>
            </h2>
          </div>
         

        <div className="quote-card" style={{ width: "35%" ,marginTop:"60px"}}>
          <div className="quote-card-content" style={{ width: "180%" }}> 
            <p className="quote-label">Quote of the Day </p>
            <p className="quote-text">{getRandomQuote()}</p>
          </div>
        </div>

         {/* <Update />*/}
         <div className="rightbar" style={{ marginLeft: "0px" }}>
          <div className="rightbarWrapper" style={{ width: "355px",marginLeft: "0px" }}>
              <Rightbar />
            </div>
          </div>
  </div>
      </>
</div>
  );
};

export default Home;
