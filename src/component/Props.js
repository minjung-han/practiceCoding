import { useState } from "react";
import UserName from "./UserName";

// App.js에서 적었던 <Hello age={23} /> 여기의 23이 props로 들어온다
// 넘겨받은 값이 있기 때문에 이 값은 Hello 컴포넌트에서 바꿔줄 수 없다.
// 만약 값을 바꿔주고 싶다면 컴포넌트에서 state를 다시 만들어야 한다.
export default function Props(props) {
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인입니다." : "미성년자입니다."

    return(
        <diV>
            <h1 id="name">
                {name}({age}) : {msg}
            </h1>
            {/* 여기서 {name}은 UserName 컴포넌트 입장에서는 props이고
                Props 컴포넌트에서는 props 이다.
            */}
            <UserName name={name}></UserName>
            <button onClick={() => {
                setName(name === "Mike" ? "Jane" : "Mike");
                setAge(age + 1);
            }}>                    
            Change
            </button>
        </diV>
    );
}