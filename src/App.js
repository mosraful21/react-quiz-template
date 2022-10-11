import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children:
        [
          { path: '/', loader: () => fetch('quiz.json'), element: <Topics></Topics> },
          { path: '/statistics', loader: () => fetch('statistics.json'), element: <Statistics></Statistics> },
          { path: '/blog', element: <Blog></Blog> }
        ]
    },
    { path: '*', element: <h1 className='text-4xl'>This route not found 404</h1> }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
