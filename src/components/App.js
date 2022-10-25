import React, {Component, useState} from "react";
import '../styles/App.css';


function App() {
const [first,setFirst] = useState("");
const [second,setSecond] = useState("");
// const [err,setErr]=useState('');
const [ans,setAns]=useState('');
     
   function  handleFirst(e){
        

            
            setFirst(e.target.value);
        
    }

    function handleSecond(e){
        
        
            setSecond(e.target.value);
        
    }
     
    function handleClear(){
         setFirst('');
         setSecond('');
         setAns('');
    }
     
    function handleClick(){
        if(first=="" ||second=="")
        {
            setAns('Please Enter valid input');
            return ;
        }
        else{
            setAns("");
             let s1=first; 
             let s2=second;
            
             let commonChars = "";
             for (let i = 0; i < s1.length; i++) {
                for (let j = 0; j < s2.length; j++) {
                    if (s1.charAt(i) == s2.charAt(j)) {
                        commonChars += s1.charAt(i);
                    }
                }
            }
    
            for(let i = 0; i < commonChars.length; i ++) {
               let charToRemove = commonChars.charAt(i)+"";
                s1 = s1.replace(charToRemove, "");
                s2 = s2.replace(charToRemove, "");
            }  

            let t=s1.length+s2.length;
            switch(t%6){
                case 1:{
                   setAns("Friends");
                   break;
                }
                case 2:{
                    setAns("Love");
                    break;
                }
                case 3:{
                    setAns("Affection");
                    break;
                }
                case 4:{
                    setAns("Marriage");
                    break;
                }
                case 5:{
                    setAns("Enemy");
                    break;
                }
                case 0:{
                    setAns("Siblings");
                    break;
                }
            }
             
        }
    }
        
    
    

        return(
            <div id="main">
               
               <input data-testid="input1" type='text' value={first} onChange={(e)=>handleFirst(e)} />
               <input data-testid="input2" type='text' value={second} onChange={(e)=>handleSecond(e)}/>
               {/* <p id="para">{err}</p> */}
               <button data-testid="calculate_relationship"  onClick={()=>handleClick()}>Calculate Relationship Future</button>
               <button data-testid="clear" onClick={()=>handleClear()}>clear</button>
             
               <h3 data-testid="answer">{ans}</h3>
            </div>
        );
    
}


export default App;
