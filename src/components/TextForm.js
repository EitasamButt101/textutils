import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        
    }
    const handleLoClick = ()=>{
        console.log("Upper case was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        
    }
    const handleResetClick = ()=>{
        console.log("Upper case was clicked" + text)
        let newText = ''
        setText(newText)
        
    }

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

const capitalFirstLetter = ()=>{
    let words = text.split(" ")
   let uppercaseword = ' '
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword)
}



  const handleSPerLineClick =() =>{
    let newText = text.replaceAll('.',"\n");
    setText(newText);
}

const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
}




    const [text, setText] = useState('Enter Text Here');
  return (
    <>
    <div>
        <h1>{props.heading} </h1>
<div className="mb-3">
<textarea className="form-control"value= {text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Conver to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Conver to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleResetClick}>Reset</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Pronounce</button>
<button className="btn btn-primary mx-1" onClick={capitalFirstLetter}>Capitalized First Letter</button>
<button className="btn btn-primary mx-1" onClick={handleSPerLineClick}>Sentence Foam</button>
<button className="btn btn-primary mx-1" onClick={downloadTxtFile}>Download File</button>




<div className="container my-2"></div>
<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minute read</p>
<h2>Preview</h2>
<p>{text}</p>

    </div>
    </>
)
}
