import React, {Component, useState} from "react";
import '../styles/App.css';


const App = () => {

       

    const [yourName, setYourName] = useState('')

    const [friendName, setFriendName] = useState('')

    const [ans, setAns] = useState('')

    let flames = ["Siblings","Friends","Love","Affection","Marriage","Enemy"]

   

    const handleResult = () => {

        if(yourName === '' || friendName === '') {

            setAns('Please Enter valid input')

            return

        }


 

        let first = yourName.replace(/\s+/g, '').toLowerCase();

        let second = friendName.replace(/\s+/g, '').toLowerCase();

       

        // const m1 = new Map();

        // for(let i = 0; i < first.length; i++) {

        //     if(m1.has(first.charAt(i))) {

        //         let of = m1.get(first.charAt(i))

        //         let nf = of + 1;

        //         m1.set(first.charAt(i), nf)

        //     }

        //     else {

        //         m1.set(first.charAt(i), 1)

        //     }

        // }

        // for(let i = 0; i < second.length; i++) {

        //     if(m1.has(second.charAt(i))) {

        //         let of = m1.get(second.charAt(i))

        //         if(of == 0) {

        //             let nf = of+1

        //             m1.set(second.charAt(i), nf)

        //         }else {

        //             let nf = of - 1;

        //             m1.set(second.charAt(i), nf)

        //         }  

        //     }

        //     else {

        //         m1.set(second.charAt(i), 1)

        //     }

        // }

        for(let i=0;i<first.length;i++){

            for(let j=0;j<second.length;j++){

                if(first.charAt(i)===second.charAt(j)){

                    first = first.substring(0,i) + first.substring(i+1,first.length);

       

                    second = second.substring(0,j)+second.substring(j+1,second.length);

                    i--;

                }

            }

        }


 

        // console.log(m1.entries())

        // let size = 0;

        // for(let [key, value] of m1) {

        //     if(value > 0) {

        //         // console.log(key)

        //         size++

        //     }

        // }

        let size = first.length + second.length

        let idx = size % 6


 

        setAns(flames[idx])

    }


 

    const handleClear = () => {

        // console.log(yourName)

        setYourName('')

        // console.log(friendName)

        setFriendName('')

        setAns('')

    }


 

    return(

        <div id="main">

            {/* <h1>Flames Game</h1> */}

           <input data-testid="input1" type="text" value={yourName} placeholder="First Name" onChange={(e) => setYourName(e.target.value)}></input> <br></br> <br></br>

           <input data-testid="input2" type="text" value={friendName} placeholder="Second Name" onChange={(e) => setFriendName(e.target.value)}></input> <br></br> <br></br>

           <button data-testid="calculate_relationship" onClick={handleResult}>Calculate Relationship Future</button>

           <button data-testid="clear" onClick={handleClear}>Clear</button>

           <h3 data-testid="answer">{ans}</h3>

        </div>

    )

   

}



 

export default App;


 



// function App() {
// const [first,setFirst] = useState("");
// const [second,setSecond] = useState("");
// // const [err,setErr]=useState('');
// const [ans,setAns]=useState('');
     
//    function  handleFirst(e){
        

            
//             setFirst(e.target.value);
        
//     }

//     function handleSecond(e){
        
        
//             setSecond(e.target.value);
        
//     }
     
//     function handleClear(){
//          setFirst('');
//          setSecond('');
//          setAns('');
//     }
     
//     function handleClick(){
//         if(first=="" ||second=="")
//         {
//             setAns('Please Enter valid input');
//             return ;
//         }
//         else{
//             setAns("");
//              let s1=first; 
//              let s2=second;
            
//              let commonChars = "";
//              for (let i = 0; i < s1.length; i++) {
//                 for (let j = 0; j < s2.length; j++) {
//                     if (s1.charAt(i) == s2.charAt(j)) {
//                         commonChars += s1.charAt(i);
//                     }
//                 }
//             }
    
//             for(let i = 0; i < commonChars.length; i ++) {
//                let charToRemove = commonChars.charAt(i)+"";
//                 s1 = s1.replace(charToRemove, "");
//                 s2 = s2.replace(charToRemove, "");
//             }  

//             let t=s1.length+s2.length;
//             switch(t%6){
//                 case 1:{
//                    setAns("Friends");
//                    break;
//                 }
//                 case 2:{
//                     setAns("Love");
//                     break;
//                 }
//                 case 3:{
//                     setAns("Affection");
//                     break;
//                 }
//                 case 4:{
//                     setAns("Marriage");
//                     break;
//                 }
//                 case 5:{
//                     setAns("Enemy");
//                     break;
//                 }
//                 case 0:{
//                     setAns("Siblings");
//                     break;
//                 }
//             }
             
//         }
//     }
        
    
    

//         return(
//             <div id="main">
               
//                <input data-testid="input1" type='text' value={first} onChange={(e)=>handleFirst(e)} />
//                <input data-testid="input2" type='text' value={second} onChange={(e)=>handleSecond(e)}/>
//                {/* <p id="para">{err}</p> */}
//                <button data-testid="calculate_relationship"  onClick={()=>handleClick()}>Calculate Relationship Future</button>
//                <button data-testid="clear" onClick={()=>handleClear()}>clear</button>
             
//                <h3 data-testid="answer">{ans}</h3>
//             </div>
//         );
    
// }


// export default App;
