import { PropsExample1 } from "./component/PropsExample1";
import { PropsExample2 } from "./component/PropsExample2";

function App() {
  const propsValue = 'PropsExample1';
  return (
    <>
      <PropsExample1 name={propsValue}/>
      <PropsExample2 props2="this is props example with attribute"/>
    </>
  )
}

export default App
