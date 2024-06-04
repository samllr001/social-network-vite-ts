import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage.tsx';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { ProfilePage } from './pages/ProfilePage/ProfilePage.tsx';
import { RegPage } from './pages/RegistrationPage/RegistrationPage.tsx';



function App() {

  const router = createBrowserRouter([
    {
     path:"/",
     element: <LoginPage/>
  },
    {
     path:"/main-page",
     element: <MainPage/>
  },
  {
    path:"/reg-page",
    element: <RegPage/>
 },
    {
     path:"/profile-page",
     element: <ProfilePage/>
  },
  ])
  
  return (
    <>
      <div className="App">
        <div className="container">
         <RouterProvider router={router}/>
        </div>
      </div>
    </>
  );
}

export default App;
