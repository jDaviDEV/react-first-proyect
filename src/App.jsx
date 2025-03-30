import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { EXAMPLES } from "./data";
import { useState } from "react";

function App() {
  const [identifier, setIdentifier] = useState();

  function onClickHandler(identifier) {
    setIdentifier(identifier)
  }

  let tabContent = <p>Please select a concept.</p>

  if (identifier) {
    tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[identifier].title}</h3>
      <p>{EXAMPLES[identifier].description}</p>
      <pre>
        <code>{EXAMPLES[identifier].code}</code>
      </pre>
    </div>
    );
  }

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
            <CoreConcept {...CORE_CONCEPTS[2]}            /*other way to send props*/ />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={identifier === "components"} onClick={() => onClickHandler("components")}>Components</TabButton>
            <TabButton isSelected={identifier === "jsx"} onClick={() => onClickHandler("jsx")}>JSX</TabButton>
            <TabButton isSelected={identifier === "props"} onClick={() => onClickHandler("props")}>Props</TabButton>
            <TabButton isSelected={identifier === "state"} onClick={() => onClickHandler("state")}>State</TabButton>
          </menu>
        </section>

      {tabContent}

      </main>
    </div>
  );
}

export default App;
