import React, {useState} from "react";

function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChanged = (event)=>{
        // console.log("on change");
        setText(event.target.value);

    }
    const [text, setText] = useState("");
    return(
        <>
        <div className="container">
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChanged} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button> 
            <button className="btn btn-primary mx-1" onClick={handleDownClick } >Convert to LowerCase</button>
        </div>

        <div className="container my-3">
            <h3>Text summary</h3>
            <p>No. of words count: {text.split(" ").length}</p>
            <p>No. of charectors including space: {text.length}</p>
            <p>time to take read: {0.008 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        
        </>
    )

}
export default TextForm;