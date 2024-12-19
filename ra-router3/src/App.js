import {Routes,Route} from 'react-router-dom'
import Acceuil from './components/Accueil.jsx';
import Categories from './components/Categories.js'
import Technologie from './components/Technologie.js'
import Cuisine from './components/Cuisine.js'
import Voyages from './components/Voyages.js'
import ArticleDetails from './components/ArticlesDetails.js';
function App() {
  return (
    <Routes>
            <Route path='/' element={<Acceuil/>}></Route>
            <Route path='categories' element={<Categories/>}>
              <Route path='Technologie' element={<Technologie/>}></Route>
              <Route path='Voyages' element={<Voyages/>}></Route>
              <Route path='Cuisine' element={<Cuisine/>}></Route>
              <Route path='*' element={<p>Not Found</p>}></Route>
            </Route>
            <Route path='/Articles/:id' element={<ArticleDetails/>}></Route>
            <Route path='*' element={<p>Not Found</p>}></Route>
    </Routes>
  );
}

export default App;
