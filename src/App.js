import "./App.css";
import UserTable from "./components/UserTable";
import { UserData } from "./data/userData";

function App() {
  return (
    <div className="App">
      <UserTable users={UserData} />
    </div>
  );
}

export default App;
