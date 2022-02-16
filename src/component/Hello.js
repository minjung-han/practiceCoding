import { useState } from "react";
import World from "./World";
import "./Hello.module.css"

export default function Hello(){
   return (
       <div>
           <h1>Hello</h1>
           <World></World>
       </div>
   );
}