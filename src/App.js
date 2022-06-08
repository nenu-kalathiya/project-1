import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './container/Home';
import Loading from './container/Loading';

const HomeWithLoading = Loading(Home)

function App(props) {

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([])

  let datas = [
    { id: 1, name: 'Nenu - Mini' },
    { id: 2, name: 'Swatu - Kookiee' }
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData(datas)
    }, 2000);
  }, [])

  return (
    <div>
      <HomeWithLoading
        isLoading={loading}
        data={data}
      />
    </div>
  );
}

export default App;