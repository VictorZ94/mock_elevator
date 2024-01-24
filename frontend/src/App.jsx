import { useEffect, useState } from "react";
import { Popover, Steps } from "antd";
import "./App.css";
import Commander from "./components/Commander";
import { client } from "./helper/constants";

function App() {
  const description = "This is a description.";
  const [floors, setFloor] = useState([
    {
      title: "Sotanos - parqueadero",
    },
    {
      title: "Piso 1",
      description,
    },
    {
      title: "Piso 2",
      description,
    },
    {
      title: "Piso 3",
      description,
    },
    {
      title: "Piso 4",
      description,
    },
    {
      title: "Piso 5",
      description,
    },
  ]);
  const [currentFloor, setCurrentFloor] = useState(0);

  const customDot = (dot, { status }) => (
    <Popover content={<span>Elevator: {status}</span>}>{dot}</Popover>
  );

  useEffect(() => {
    const fetchData = () => {
      client
        .get("floor/", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => console.log(response.status));
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (currentFloor < floors.length - 1) {
      setTimeout(() => {
        setCurrentFloor(currentFloor + 1);
      }, 5000);
    }
  }, [currentFloor]);

  return (
    <>
      <div className="commander">
        <Commander numberFloor={currentFloor} />
      </div>
      <div>
        <Steps current={currentFloor} items={floors} progressDot={customDot} />
      </div>
    </>
  );
}

export default App;
