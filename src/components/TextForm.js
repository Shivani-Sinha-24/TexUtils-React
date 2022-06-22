import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('uppercase clicked: '+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');
    }
    const handleLowClick = ()=>{
        // console.log('lowercase clicked: '+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase','success');
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (e)=>{
        // console.log('on change');
        setText(e.target.value)
    }
    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied to clipboard','success');
    }
    const handleSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces removed','success');

    }
    const [text, setText] = useState('');
    // text='new text';//Wrong way to change the state
    // setText('new text');//Correct way to change the state

  return (
    <>
    <div className='container'>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows='8' value={text} style={{backgroundColor:props.mode==='dark'?'#656464':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} placeholder='Enter the text here'></textarea>
        </div>
        <button type="submit" className="btn mx-1" style={{backgroundColor:props.mode==='dark'?'#282727':'#eaeaea', color:props.mode==='dark'?'white':'black'}} onClick={handleUpClick}>UPPERCASE</button>
        <button type="submit" className="btn mx-1" style={{backgroundColor:props.mode==='dark'?'#282727':'#eaeaea', color:props.mode==='dark'?'white':'black'}} onClick={handleLowClick}>lowerercase</button>
        <button type="submit" className="btn mx-1" style={{backgroundColor:props.mode==='dark'?'#282727':'#eaeaea', color:props.mode==='dark'?'white':'black'}} onClick={handleCopy}>Copy text</button>
        <button type="submit" className="btn mx-1" style={{backgroundColor:props.mode==='dark'?'#282727':'#eaeaea', color:props.mode==='dark'?'white':'black'}} onClick={handleSpaces}>Remove extra spaces</button>
        <button type="submit" className="btn mx-1" style={{backgroundColor:props.mode==='dark'?'#282727':'#eaeaea', color:props.mode==='dark'?'white':'black'}} onClick={handleClearClick}>Clear text</button>
        {/* capitalized case,alternating case,titlecase,inversecase */}
    </div>
    <div className="container">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length===0?"Enter something in the textbox above to preview here":text}</p>
    </div>
    </>
  )
}
