
function App() {
  return (
    <div>
      <button onClick={async () => {
        const resp = await fetch('/api')
        const data = await resp.json()

        console.log(data)
      }}>
        Click me
      </button>
    </div>
  )
}

export default App
