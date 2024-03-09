import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to LowerCase", "success");
    }
    const handleCopy = () => {
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.ShowAlert("Text Copied", "success");
    }
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/); 
        setText(newText.join(" "));
        props.ShowAlert("Extra Spaces Removed", "success");
    }
    const handleOnChange = (event) => { 
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    {/* style={{color: props.mode==='dark'?'white':'black'}} */}
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}> 
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="form-group mb-3">
                <textarea className="form-control" 
                value={text}
                onChange={handleOnChange}
                style={{
                    backgroundColor: props.mode==='dark'?'white':'grey', 
                    color: props.mode==='dark'?'black':'white'
                    }}
                id="exampleFormControlTextarea1" rows="8"
                ></textarea>
            </div>
            <button className='btn btn-info mx-2 mb-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-info mx-2 mb-2' onClick={handleLoClick}>Convert to LowerCase</button>
            <button className='btn btn-info mx-2 mb-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-info mx-2' onClick={handleSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}> 
            <h2 className='mb-3'>Your Text Summary</h2>
            <p> <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
            <p><b>{text.split(" ").length*0.008}</b> Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to Preview it here"}</p>
        </div>
    </>
  )
}
