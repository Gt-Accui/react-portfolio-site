import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


const NameText = (props) => {
  return (
    <p>Hi, {props.name}!</p>
  )
}

const Profile = (props) => {
  return (
    <div>
      <p>{props.age}</p>
      <p>{props.country}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <NameText name="Jack" />
      <Profile age={22} country="US" />
      <NameText name="Mary" />
      <Profile age={20} country="UK" />
    </div>
  )
}

export default App;
