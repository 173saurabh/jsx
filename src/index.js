// Import the react & react dom library
import React from 'react';
import ReactDOM from 'react-dom';


/*function getButtonText(){
    return 'Click on me!';
}*/

// Create a react component
const App = () =>
{

    //*const buttonText = 'Click Me!';

    //Using an object
    const buttonText = {text:'Click Me!'};

    //Styling
    //*const style = {backgroundColor:'blue' ,color:'white'};
    
    //return <div>Hi there!</div>;
    return (
    <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor:'blue' ,color:'white'}}>{buttonText.text}</button>
    </div>
    );
};


// Take the react component & show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);