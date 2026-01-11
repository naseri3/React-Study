import './App.css';
import { useState } from 'react';
import Box from './component/Box';

function App() {
  let counter = 0;

  const [counter2, setCounter2] = useState(0);

  const increase = () => {
    // counter = counter + 1;          // 리액트에서 의미없는 코드 (업데이트되면 초기화 되는 값)
    setCounter2(counter2 + 1);
    console.log(counter, "counter2 state는", counter2);
  };

  // 1. 유저가 버튼을 클릭한다
  // 2. counter+1해서 1이 된다
  // 3. setState 함수 호출
  // 4. console.log실행
  // 변수 값은 1로 보이고 state값은 아직 안변했기 때문에 그전에 값이 보인다.
  // 함수 끝
  // app 다시 re render
  // let counter = 0을 거치면서 counter 값은 다시 0으로 초기화
  // state값은 update가 되면서 다시 render한다. 즉. 업데이트된 state값이 보인다

  // 잠깐 사용하는 값은 변수로 사용한다

  // State 값이 변경되면 React는 해당 컴포넌트를 다시 렌더링하여 화면을 자동으로 업데이트합니다. 이것이 React가 'React'인 이유입니다.


  return (
    <>
        {/* <Box name="리사" num={1}></Box>
        <Box name="제니" num={2}></Box>
        <Box name="지수" num={3}></Box>
        <Box name="로제" num={4}></Box> */}

        <div>{counter}</div>
        <div>state:{counter2}</div>
        <button onClick={increase}>클릭!</button>
    </>
  )
// JS와 HTML을 함께 사용할 수 있다, 즉 이게 컴포넌트이다
// state가 바뀌면 화면(UI)이 자동으로 다시 그려짐
// 리액트에서 제공하는 유용한 함수들의 집합을 react hook이라고 부름

// 변수는 동기적이다.

// state는 비동기적으로 작동을 한다
// set함수를 하고 바로 그 state를 이용하면 계속 그전의 값이 나옴
}

export default App
