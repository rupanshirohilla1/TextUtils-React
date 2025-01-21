import React , {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextArea(props) {
const[text,setText] = useState('Enter Text Here');

const handleUpOnClick1 =()=>{
// console.log('UpperCase is clicked ! ' + text)
let newText= text.toUpperCase();
setText(newText)
props.showAlert("Converted to UpperCase", "success");
};

const handleUpOnClick2 =()=>{
  // console.log('UpperCase is clicked ! ' + text)
  let newText= text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to LowerCase", "success");
  };

const handleOnChange =(event)=>{
// console.log('Onchange is Clicked ! ')
// So that I can enter the text 
setText(event.target.value);

};

const handleSentenceCase = () => {
  let newText = text
    .toLowerCase()
    .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
  setText(newText);
  props.showAlert("Converted to SentanceCase", "success");
  
};

const handleExtractEmails = () => {
  let emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  let emails = text.match(emailRegex) || [];
  setText(emails.join(", "));
  props.showAlert("Email Fetched", "success");
 
};



return (
<>

<div className="container my-3  " style ={{color : props.mode ==='dark' ? 'white' : '#042743' }} >
<h2 >{props.heading}</h2>
<div className="mb-3" >

<textarea className="form-control" id="myBox" value ={text}  onChange ={handleOnChange}  style ={{backgroundColor : props.mode ==='dark' ? 'grey' : 'white'  , color : props.mode ==='dark' ? 'white' : '#042743' }}  rows="8"> </textarea>
</div>
<button className="btn btn-primary mx-2 " onClick ={handleUpOnClick1}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2  " onClick ={handleUpOnClick2}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2  " onClick ={handleSentenceCase}>Convert to SentanceCase</button>
<button className="btn btn-primary mx-2  " onClick ={handleExtractEmails}>Extract Emails</button>
  
  
</div>

<div className="container" style ={{color : props.mode ==='dark' ? 'white' : '#042743' }}>
  <h1>Word Count : {text.split(" ").length} and No.of Characters : {text.length}</h1>
  <h2>Time to read this : {0.5 *  text.split(" ").length } seconds</h2>
  <h4>Preview</h4>
<p>{text.length >0 ? text : "Enter something in textbox to preview"}</p>
</div> 


  
 
</>
  
);
}
