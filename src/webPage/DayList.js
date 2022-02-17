import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DayList() {

    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);

    function onClick(){
        setCount(count + 1);
    }
{/** 
    어떤 상태가 바뀌었을 때 동작하는 함수를 작성할 수 있다.
    첫번째 매개변수로 함수를 받는다
    useEffect는 상태값이 변경되서 다시 렌더링 된 다음에 호출된다.
    불필요하게 계속 useEffect가 호출될 수 있기 때문에 두번째 매개변수로 배열을 호출한다.
*/}
    useEffect(()=>{

    });


    return (
        <>
        <ul className="list_day">
        {/* 단어 리스트에는 6개가 들어있기 때문에
        반복문을 써줄건데 그때 map을 사용한다.
        map은 배열을 받아서 또 다른 배열을 반환해준다 */}
            {days.map(day =>(
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>
                    Day {day.day}</Link>
                    </li>
            ))}
        </ul>
        <button onClick={onClick}>{count}</button>
        </>
    );
}