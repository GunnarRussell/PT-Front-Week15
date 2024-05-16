import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Article from './components/article/article.js';
import CommentList from './components/comment-list/comment-list.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Article />
        <CommentList />

      </header>
    </div>
  );
}

export default App;
