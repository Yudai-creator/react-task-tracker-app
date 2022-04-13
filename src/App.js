import Header from "./components/HeaderApp";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="container">
      <Header title="Cool task tracker"/>
      <Tasks/>
    </div>
  );
}

export default App;
