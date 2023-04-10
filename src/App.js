import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import UserLogin from './Components/User/UserLogin';
import UserDashboard from './Components/User/UserDashboard';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminLogin from './Components/Admin/AdminLogin';
import SignUp from './Components/User/SignUp';
import AllUsers from './Components/Admin/AllUsers';
import Profile from './Components/User/Profile';
import AddCourses from './Components/Admin/AddCourses';
import Cource from './Components/Cource';
import Demo from './Components/Demo';
import AddQuestion from './Components/Admin/AddQuestion';
import AddViewQuestion from './Components/Admin/AddViewQuestion';
import Diagram from './Components/Admin/Diagram';

function App() {
  return (
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/Cource' element={<Cource/>}/>
     <Route path='/login' element={<UserLogin />}/>
     <Route path='/adminlogin' element={<AdminLogin />}/>
     <Route path='/signup' element={<SignUp />}/>
     <Route path='/Demo' element={<Demo/>}/>
     <Route path='/userdashboard' element={<UserDashboard />}>
     <Route path='profile' element={<Profile/>}/>
    
     </Route>

     <Route path='/admindashboard' element={<AdminDashboard />}>
     <Route path='allusers' element={<AllUsers/>}/>
     <Route path='addcourse' element={<AddCourses/>}/>
     <Route path='AddQuestion' element={<AddQuestion/>}/>
     <Route path='AddViewQuestion' element={<AddViewQuestion/>}/>
     <Route path='Diagram' element={<Diagram/>}/>
     </Route>
    </Routes>
  );
}

export default App;
