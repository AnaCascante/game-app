import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={(item) => console.log(item)}
        />
      </div>

      <div>
        |<BsFillCalendarFill size={30} color="red" />|
      </div>

      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            This is an alert message!
          </Alert>
        )}
        <Button color="success" onClick={() => setAlertVisible(!alertVisible)}>
          Click Me
        </Button>
      </div>
    </>
  );
}

export default App;
