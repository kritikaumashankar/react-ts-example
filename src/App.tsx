import { useState } from "react";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";


function App(){
  const [count, setCount] = useState(1);

  return (
    <>
      <Heading title={"Kritika"}/>
      <Section title={"Diff Title"}>This is my section</Section>
      <Counter setCount={setCount}> Count is {count}</Counter>
      <List items={["coffee","tacos","code"]} render={(item: string) => <span>{item}</span>} />
    </>
    )
}

export default App;