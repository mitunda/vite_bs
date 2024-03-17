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
    text: 'A Checkout page for an ecommerce website',
    image: `checkout.png`, // Replace with your actual image URL
  },
  {
    title: 'Sign in page design',
    text: 'Another project description to showcase your work.',
    image: 'signin.png', // Replace with your actual image URL
  },
  {
    title: 'item page design',
    text: 'Another project description to showcase your work.',
    image: 'item.png', // Replace with your actual image URL
  },
  {
    title: 'product page design',
    text: 'Another project description to showcase your work.',
    image: 'product.png', // Replace with your actual image URL
  },
  // Add more projects here
];

const About = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * projects.length);
      setCurrentProject(projects[randomIndex]);
    }, 3000); // Shuffle every 3 seconds

    return () => clearInterval(shuffleInterval); // Cleanup function to prevent memory leaks
  }, [projects]); // Dependency array to run the effect only once

  return (
    <div className='card_container'>
      <Card style={{ width: '100rem' }}>
        <Card.Img variant="top" src={currentProject.image} />
        <Card.Body>
          <Card.Title>{currentProject.title}</Card.Title>
          <Card.Text>{currentProject.text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
