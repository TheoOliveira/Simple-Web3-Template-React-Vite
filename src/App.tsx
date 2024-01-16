import watchAsset from "./functions/watchAsset"

function App() {

  return (
    <>
  <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Adicione a USDTToken a sua carteira</h2>
        <button 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          onClick={watchAsset}
        >
          Adicione aqui!
        </button>
      </div>
    </div>
    </>
  )
}

export default App
