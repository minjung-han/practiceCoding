import dummy from "../dataBase/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day() {
    // dummy의 word를 사용할 것이다.
    const {day} = useParams();
                                    //word의 day는 숫자인데 day는 문자열이기 때문에 오류가 난다.
    const wordList = dummy.words.filter(word => (word.day === Number(day)));
    
   
    return(
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word=>(
                   <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
        </>
    );
}