import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import "./home.css";

function Home() {
  const [text] = useState("Welcome to Auction App");
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  // Variants for the typewriter effect
  const typewriterVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Speed of typing
        onComplete: () => setIsTypingComplete(true)
      }
    }
  };
  
  // Variants for each character
  const characterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline"
    }
  };

  // Blinking cursor effect
  useEffect(() => {
    if (isTypingComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530); // Blinking speed in milliseconds
      
      return () => clearInterval(cursorInterval);
    }
  }, [isTypingComplete]);

  return (
    <>
      <Card>
        <div className="img-con">
          <Card.Img variant="top" src="/29710.jpg" />
        </div>
        <Card.Body>
          <Card.Text>
            <div className="card-text">
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                width: "100%",
                marginBottom: "1rem"
              }}>
                <motion.h2
                  variants={typewriterVariants}
                  initial="hidden"
                  animate="visible"
                  aria-label={text}
                  style={{ 
                    textDecoration: "underline", 
                    display: "inline-block",
                    margin: 0
                  }}
                >
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={characterVariants}
                      aria-hidden="true"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h2>
                <h2 
                  style={{ 
                    opacity: showCursor ? 1 : 0,
                    marginLeft: "3px",
                    fontWeight: "bold",
                    display: "inline-block",
                    margin: 0
                  }}
                >
                  |
                </h2>
              </div>
              <p>
                An auction is usually a process of buying and selling goods or
                services by offering them up for bids, taking bids, and then
                selling the item to the highest bidder or buying the item from
                the lowest bidder. Some exceptions to this definition exist and
                are described in the section about different types.
              </p>
              <p>
                Auctions can take place in various formats, including live
                auctions, online auctions, and silent auctions. The process
                typically involves an auctioneer who facilitates the bidding and
                ensures that all participants follow the established rules.
                Auctions are commonly used for selling valuable or unique items
                such as antiques, artwork, collectibles, real estate, and even
                government contracts.
              </p>
              <p>
                Today, auctions are widely used in both the public and private
                sectors, with industries like finance, government, and
                e-commerce leveraging them for procurement, liquidation, and
                competitive pricing. The transparency and efficiency of auctions
                make them a popular method for fair market transactions.
              </p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
