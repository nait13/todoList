import React from 'react';
import ReactDOM from 'react-dom';
import {TodoListPage} from './pages/TodoListPage';
import {LoginPage} from './pages/LoginPage';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {PrivateRoute} from './components/PrivateRoute';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// TODO: add todos counter to header(menu)
import {db} from './firebase/firebaseConfig';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route element={
          <PrivateRoute>
            <TodoListPage/>
          </PrivateRoute>          
        } path='/todos' />       
        <Route element={<LoginPage/>} path='/' />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
