import Router, { Route } from 'preact-router';
import Home from './modules/home';
import About from './modules/about';
import Login from './modules/login';
import MainLayout from './modules/layout';

export function App() {
  return (
    <div className={`h-[100vh]`}>
      <Router>
        <Route path='/' default component={()=> <MainLayout component={() => <Home />}/> }/>
        <Route path='/about' component={()=> <MainLayout component={() => <About />}/>}/>
        <Route path='/login' component={()=> <Login />}/>
      </Router>
    </div>
  );
}
