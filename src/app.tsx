import Router, { Route } from 'preact-router';
import Home from './modules/home';
import About from './modules/about';
import Login from './modules/login';
import MainLayout from './modules/layout';
import { AuthProvider, useAuth } from './modules/auth/AuthProvider';

export function App() {
  
  return (
    <div className={`h-[100vh]`}>
      <AuthProvider>
        <RouterApp/>
      </AuthProvider>
    </div>
  );
}

const RouterApp = () => {
  const auth = useAuth();
  return (
    <div>
      <Router>
        {
          auth.isAuthenticated && <Route path='/' default component={()=> <MainLayout component={() => <Home />}/> }/>
        }
        {
          auth.isAuthenticated && <Route path='/about' component={()=> <MainLayout component={() => <About />}/>}/>
        }
        {
          !auth.isAuthenticated && <Route path='/login' component={()=> <Login />}/>
        }
      </Router>
    </div>
  )
}
