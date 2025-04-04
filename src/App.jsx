import CoreConcepts from "./components/CoreConcept/CoreConcepts";
import Header from "./components/Header/Header";
import Examples from "./components/Example/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
