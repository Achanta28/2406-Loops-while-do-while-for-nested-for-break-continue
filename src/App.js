import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  // let score = 0;
  let[score,setScore]= useState(0);
  let[balls,setBalls]=useState(0);
  let[wickets,SetWickets]=useState(0);
    return (
    <div className="App">
      <h1>Score:{score}</h1>
      <h1>Overes:{parseInt(balls/6)}.{balls%6}</h1>
      <h1>Wickets:{wickets}</h1>
      {/* <button onClick={()=>{
        score ++;
        console.log(score)
      }}>Increment Score</button>
      <button onClick={()=>{
        score --;
        console.log(score)
      }}>Decrement Score</button> */}
      <button onClick={()=>{
        setScore(score +1);
        setBalls(balls +1);
        
      }}>Single</button>
      <button onClick={()=>{
        setScore(score +2)
        setBalls(balls +1);
        
      }}>Double</button>
       <button onClick={()=>{
        setScore(score +4);
        setBalls(balls +1);
      }}>Four</button>
      <button onClick={()=>{
        setScore(score +6)
        setBalls(balls +1);
      }}>Six</button>
       <button onClick={()=>{
        setScore(score +1);
        
      }}>Wide</button>
      <button onClick={()=>{
        setBalls(balls +1)
        SetWickets(wickets +1)
        }}>Out</button>
        <br></br>
        <br></br>
        <hr></hr>
        <h2>conditional statement</h2>
        <button onClick={()=>{
          let engMarks = 90;
          if(engMarks>= 35){
            console.log(`passed in English`)
          }
        }}>if</button>
        <br></br>
        <br></br>
        <hr></hr>
        <h2>Looping Statement</h2>
        <button onClick={()=>{
          let telMarks = 75;
          while(telMarks >= 35){
            console.log(`While - ${telMarks}`);
            telMarks--;

          }
           
        }}>While</button>
        <button onClick={()=>{
          let hinMarks = 85;
          do{
            console.log(`do while --${hinMarks}`)
            hinMarks--;

          }while(hinMarks >= 35)
        }}>Do While</button>
        <button onClick={()=>{
          for(let i=1;i<=100;i++){
            console.log(i)
          }
        }}>For</button>
        <button onClick={()=>{
          for(let i=1;i<=100;i++){
                 for(let j=1;j<=10;j++){
                  console.log(`${i} * ${j} =${i*j}`)

                 }
          }
        }}>Nested For</button>
        <button onClick={()=>{
          for(let i=1;i<=10000;i++){
            console.log(i)
            if(i == 9999){
              break;
            }
          }

        }}>Break</button>
        <button onClick={()=>{
           for(let i=1;i<=100000;i++){
            if(i >1000 && i < 9999){
              continue;
            }
            console.log(i);
          }
        }}>Continue</button>
        <button onClick={()=>{
          for(let i=1;i<=100;i++){
            if(i !== 5 && i !== 6 && i !== 7 && i !== 8 && i !== 9 && i !== 15 &&
              i !== 25 && i !== 34 && i !== 46 && i !== 57 && i !== 68 && i !== 79 &&
              i !== 93 && i !== 97
            ){
              console.log(`Tables of ${i}:`);
              for(let j=1;j<=100;j++){
                if(j !== 11 && j !== 12 && j !== 15 && j !== 19 && j !== 23 &&
                  j !== 27 && j !== 46 && j !== 54 && j !== 73 
                ){
                  console.log(`${j} x ${i} = ${i*j}`)
                }
              }
              console.log(`-----`)
            }

          }
         
        }}>Tables</button>
      
    </div>
  );
}

export default App;
