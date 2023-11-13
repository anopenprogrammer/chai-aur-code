import "./App.css";
import Card from "./components/Card";

function App() {
  // const myObj = {
  //   name: 'Deepak',
  //   age: 22,
  //   location: 'India'
  // }

  const myObj = [
    {
      name: "Deepak",
      age: 22,
      location: "India",
    },
    {
      name: "Ajay",
      age: 13,
      location: "India",
    }
  ];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card obj1={myObj[0]} btnText="Click me"/>
      <Card obj1={myObj[1]} />
    </>
  );
}

export default App;
