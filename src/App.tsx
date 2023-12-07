import './App.css'
import ErrorMessage from './components/Error';
import List from './components/List';
import Loader from './components/Loader';
import useJsonFetch from './hooks/useJsonFetch'

function App() {
  const [{data, loading, error}] = useJsonFetch();

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage error={'Error on fetch!!!'} />}
      {data.length && <List users={data}/>}
    </>
  )
}

export default App
