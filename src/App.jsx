import CardList from "./components/CardList.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-10 text-blue-600">
        ID Card Generator
      </h1>

      <CardList />
    </div>
  );
}

export default App;