import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div>
          <label>Your Todo Companion</label>
          </div>
          <div className="add-todo">
          <input type="text" placeholder="Add todo..."></input>
          <button>Add ToDo</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
