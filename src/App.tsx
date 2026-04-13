import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
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
  );
}

export default App;
