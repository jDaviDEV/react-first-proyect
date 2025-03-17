import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}  // sending props to the component
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]}            /*other way to send props*//>
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
