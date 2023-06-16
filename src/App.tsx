import './App.css'

function App() {
  return (
    <>
      <div className="list">
        {new Array(25).fill(1).map(() => (
          <span className="item" />
        ))}
      </div>
    </>
  )
}

export default App
