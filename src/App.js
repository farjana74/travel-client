import logo from './logo.svg';
import './App.css';
import Banner from './Pages/Home/Banner/Banner';
import { Nav } from 'react-bootstrap';
import Header from './Pages/Shared/Header/Header';
import Choice from './Pages/Home/Choice/Choice';
// import Package from './Pages/Home/Package/Package';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Destination from './Pages/Destination/Destination';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login/Login';
import Single from './Pages/Home/Single/Single';
import Details from './Pages/Home/Details/Details';
import AddService from './Pages/Admin/AddService/AddService';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrder from './Pages/Admin/MyOrder/MyOrder';
import ManageOrder from './Pages/Admin/ManageOrder/ManageOrder';
import AdminDasboard from './Pages/Admin/AdminDashboard/AdminDasboard';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
// import Footer from './pages/Shared/Footer/Footer';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="travel">
      <AuthProvider>
<BrowserRouter>
<Header></Header>
<Switch>
<Route exact path ="/home">
<Home></Home>
</Route>
<Route exact path ="/">
<Home></Home>
</Route>
<PrivateRoute path="/adminDashbord">
  <AdminDasboard></AdminDasboard>

</PrivateRoute>
<Route path ="/destination">
<Destination></Destination>
</Route>
<Route path="/addService">
<AddService></AddService>
</Route>
<Route path="/myOrder">
<MyOrder></MyOrder>

</Route>
<Route path="/manageOrder">
<ManageOrder></ManageOrder>

</Route>



<PrivateRoute path="/details/:detailsId">
<Details></Details>
</PrivateRoute>

<Route exact path="/login">
       <Login></Login>

     </Route>
<Route exact path="/register">
       <Register></Register>

     </Route>
<Route path ="/contact">
<Contact></Contact>
</Route>
<Route exact path="*">
<NotFound></NotFound>
</Route>
</Switch>
<br />
<br />
<br />
<Footer></Footer>

</BrowserRouter>
      
      </AuthProvider>
    </div>
  );
}

export default App;
