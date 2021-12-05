import './App.css';
import MainPage from "./Modules/MainPage";
import Movies from './Assets/movie-related.jpg'
function App() {

  return (
      <div>
          <img src={Movies} width="100%" alt={'BackgroundImage'} />
          <MainPage/>
      </div>
  );
}

export default App;
