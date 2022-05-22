import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import SidebarRight from "./components/SidebarRight/SidebarRight";

function App() {
  return (
    <BrowserRouter>
      <div
        className='App'
        style={{
          display: "flex",
          justifyContent: "space-between",
          // border: "1px solid blue",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          className='App2'
          style={{
            margin: "5rem 2rem 5rem 8rem",
            border: "1px solid transparent",
          }}
        >
          <NavBar />
        </div>
        <div
          className='App3'
          style={{
            padding: "1.5rem 1rem",
            // margin: "3rem 0",
            border: "1px solid transparent",
            width: "100%",
          }}
        >
          <Main />
        </div>
        <div
          className='App4'
          style={{
            margin: "5rem 8rem 5rem 2rem",
            border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <SidebarRight />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
