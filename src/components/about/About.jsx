// import React from 'react'
// import "./about.css"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';


// const About = () => {
//     return (
//         <div className='card_container'>
//             <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                     <Card.Title>Project 1</Card.Title>
//                     <Card.Text>
//                         Some quick example text to build on the card title and make up the
//                         bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//             </Card>
//             <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                         Some quick example text to build on the card title and make up the
//                         bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//             </Card>
//             <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                         Some quick example text to build on the card title and make up the
//                         bulk of the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//             </Card>
//         </div>
//     )
// }

// export default About

import React, { useState, useEffect } from 'react';
import "./about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const projects = [
  {
    title: 'Checkout Page Design',
    text: 'A well-designed checkout page is crucial for a smooth user experience in any e-commerce website. This project showcases my ability to create a clean, intuitive, and secure checkout flow.',
    image: `checkout.png`, // Replace with your actual image URL
    link: 'https://your-checkout-page-link.com', // Replace with your checkout page link
  },
  {
    title: 'Sign in Page Design',
    text: 'An appealing sign-in page makes a great first impression and encourages users to register. This project demonstrates my skills in crafting an attractive and user-friendly sign-in interface.',
    image: 'signin.png', // Replace with your actual image URL
    link: 'https://your-sign-in-page-link.com', // Replace with your sign-in page link
  },
  {
    title: 'Item Page Design',
    text: 'Compelling item pages are essential for capturing user interest and driving sales. This project highlights my expertise in designing clear, informative, and visually engaging item pages.',
    image: 'item.png', // Replace with your actual image URL
    link: 'https://your-item-page-link.com', // Replace with your item page link
  },
  {
    title: 'Product Page Design',
    text: 'Effective product pages provide a comprehensive overview of product features and benefits. This project demonstrates my ability to create informative, visually appealing, and conversion-optimized product pages.',
    image: 'product.png', // Replace with your actual image URL
    link: 'https://your-product-page-link.com', // Replace with your product page link
  },
  // Add more projects here
];

const About = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * projects.length);
      setCurrentProject(projects[randomIndex]);
    }, 5000); // Shuffle every 4 seconds

    return () => clearInterval(shuffleInterval); // Cleanup function to prevent memory leaks
  }, [projects]); // Dependency array to run the effect only once

  return (
    <div className='card_container'>
      <Card style={{ width: '80rem' }}> {/* Adjust width as needed */}
        <Card.Img variant="top" src={currentProject.image} />
        <Card.Body>
          <Card.Title>{currentProject.title}</Card.Title>
          <Card.Text>{currentProject.text}</Card.Text>
          <Button variant="primary" href={currentProject.link}>
            See Project
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
