import CardList from "../components/CardList";
import picture1 from "./assets/picture1.jpeg";
import picture2 from "./assets/picture2.jpeg";
import picture3 from "./assets/picture3.jpeg";
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