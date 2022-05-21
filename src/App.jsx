import "./App.scss";
import Card from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import CardLeft from './components/Card/CardLeft';
import SidebarRight from "./components/SidebarRight/SidebarRight";
import { Switch, Route } from "react-router-dom";
import Discovery from "./pages/Discovery";
import HomePage from "./pages/HomePage";
import DashBoard from "./pages/DashBoard";
// import SidebarRight from "./components/SidebarRight/SidebarRight";
function App() {
  return (
    // <div className='App'>
    <div className='App' style={{display: "flex", justifyContent:'space-between', border: '4px solid blue', width: '100%', height:'100%'}}>

    <div className='App2' style={{margin:'3rem 0', border: '4px solid red'}}>
      <NavBar />
    </div>
      <BrowserRouter>
      {/* <div> */}
    <div className='App3' style={{margin:'0 2rem', border: '4px solid green', width: '100%'}}>

      <Main/>
      </div>
      <div className='App4' style={{ border: '4px solid red', maxWidth: '16rem', display:'flex', flexDirection:'column'}}>
      <SidebarRight/>

      {/* <CardWide/> */}
      {/* <Footer /> */}
    </div>
    {/* <Switch>
      <Route path='/dashboard' exact component={DashBoard} />
      <Route path='/discovery' exact component={Discovery} />
      </Switch> */}
      </BrowserRouter>

      
    </div>
  );
}

export default App;

   
// import "./App.scss";
// import SideMenu, { menuItems } from "./components/SideMenu";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useState } from "react";

// const Dashboard = () => <h1>Dashboard</h1>;
// const Content = () => <h1>Content</h1>;
// const Courses = () => <h1>Content/Courses</h1>;
// const Videos = () => <h1>Content/Videos</h1>;
// const Design = () => <h1>Design</h1>;
// const Content2 = () => <h1>Content2</h1>;
// const Courses2 = () => <h1>Content/Courses 2</h1>;
// const Videos2 = () => <h1>Content/Videos 2</h1>;
// const Design2 = () => <h1>Design 2</h1>;

// function App() {
//   const [inactive, setInactive] = useState(false);

//   return (
//     <div className="App">
//       <Router>
//         <SideMenu
//           onCollapse={(inactive) => {
//             console.log(inactive);
//             setInactive(inactive);
//           }}
//         />

//         <div className={`container ${inactive ? "inactive" : ""}`}>
//           {/* improvememt, not recorded in video, its just looping through menuItems
//           instead of hard coding all the routes */}
//           {menuItems.map((menu, index) => (
//             <>
//               <Route key={menu.name} exact={menu.exact} path={menu.to}>
//                 <h1>{menu.name}</h1>
//               </Route>
//               {menu.subMenus && menu.subMenus.length > 0
//                 ? menu.subMenus.map((subMenu, i) => (
//                     <Route key={subMenu.name} path={subMenu.to}>
//                       <h1>{subMenu.name}</h1>
//                     </Route>
//                   ))
//                 : null}
//             </>
//           ))}

//           {/* <Switch>
//             <Route exact path={"/"}>
//               <Dashboard />
//             </Route>
//             <Route exact path={"/content"}>
//               <Content />
//             </Route>
//             <Route path={"/content/courses"}>
//               <Courses />
//             </Route>
//             <Route path={"/content/videos"}>
//               <Videos />
//             </Route>
//             <Route path={"/design"}>
//               <Design />
//             </Route>
//             <Route exact path={"/content-2"}>
//               <Content2 />
//             </Route>
//             <Route path={"/content-2/courses"}>
//               <Courses2 />
//             </Route>
//             <Route path={"/content-2/videos"}>
//               <Videos2 />
//             </Route>
//             <Route path={"/design-2"}>
//               <Design2 />
//             </Route>
//           </Switch> */}
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;
