import React from 'react';
import "./App.css";
import CommentBox from './components/CommentBox';
import CommentsList from './components/CommentsList';
import Root from 'Root';

function App() {
  return (
    <div className="container">
        <Root>
            <CommentBox />
            <CommentsList />
        </Root>
    </div>
  );
}

export default App;
