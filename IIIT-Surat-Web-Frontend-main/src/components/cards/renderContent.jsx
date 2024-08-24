// src/RenderContentComponent.js
import React from 'react';

// import './App.css'; // Ensure you have your CSS file to style the images

const RenderContentComponent = ({ content }) => {
 console.log(content)
  const renderContent = () => {
    if (content.content === 'Sports') {
        return 'Content for Sports';
      } else if (content.content === 'Cultural') {
        return 'Content for Cultural';
      } else if (content.content === 'Antra') {
        return 'Content for Antra';
      } else {
        return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat fugiat necessitatibus. Et ab id minus tenetur consectetur molestias expedita minima delectus hic facere dicta rem fugit labore repudiandae ad deleniti tempore deserunt quisquam unde, consequuntur quaerat voluptas? Eos adipisci sunt eaque delectus voluptatibus! Enim animi quidem perferendis amet blanditiis commodi ex temporibus maxime dolore mollitia earum soluta non inventore harum at, dicta beatae quasi eius maiores numquam dolor sint odit consequuntur hic! Veniam sapiente accusantium tempora voluptas. Cumque magnam id, quod sunt optio pariatur ad dolor quis provident omnis nemo placeat quo rerum iste sed sequi eaque animi quidem commodi voluptas repellat obcaecati quos sint <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet placeat fugiat necessitatibus. Et ab id minus tenetur consectetur molestias expedita minima delectus hic facere dicta rem fugit labore repudiandae ad deleniti tempore deserunt quisquam unde, consequuntur quaerat voluptas? Eos adipisci sunt eaque delectus voluptatibus! Enim animi quidem perferendis amet blanditiis commodi ex temporibus maxime dolore mollitia earum soluta non inventore harum at, dicta beatae quasi eius maiores numquam dolor sint odit consequuntur hic! Veniam sapiente accusantium tempora voluptas. Cumque magnam id, quod sunt optio pariatur ad dolor quis provident omnis nemo placeat quo rerum iste sed sequi eaque animi quidem commodi voluptas repellat obcaecati quos sint';
      }
  };
  
  return <p className=" ml-10 mr-16 mx-auto text-justify text-base">{renderContent()}</p>;
};

export default RenderContentComponent;