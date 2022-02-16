import World from "./World";
import styles from"./Hello.module.css";

function showName() {
    alert("Hi Mike");
}

function showText(e) {
    console.log(e.target.value);
}

export default function Hello(){
   return (
       <div>
           <h1>Hello</h1>
           <button onClick={showName}>Show Name</button>
           <button onClick={() => {
               showName(27);
           }}>Show Age</button>
           <input type="text" onChange={showText}/>

        { /**  위의 onChange={showText} 와 같음        
            <input type="text" onChange={(e) =>{
               console.log(e.target.value)
           }}/>
            
           // function showText에서 e를 매개변수로 받는게 아니라 txt를 바로 받을 때
           function showText(txt) {
               console.log(txt);
           }
            <input type="text" onChange={(e) =>{
               const txt = e.target.value;
               showText(txt);
           }}/>

          */}       
        </div>
   );
}