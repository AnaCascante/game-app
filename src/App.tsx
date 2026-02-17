import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>This is an alert message!</Alert>
      <Button color="blue" onClick={() => console.log("Button clicked!")}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
