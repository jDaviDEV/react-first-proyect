import React from 'react';
import TabButton from './TabButton';
import Section from '../Section/Section';
import { EXAMPLES } from '../../data';
import { useState } from 'react';

const Examples = () => {
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
        <>
            <Section title="Examples" id="examples">
                <menu>
                    <TabButton isSelected={identifier === "components"} onClick={() => onClickHandler("components")}>Components</TabButton>
                    <TabButton isSelected={identifier === "jsx"} onClick={() => onClickHandler("jsx")}>JSX</TabButton>
                    <TabButton isSelected={identifier === "props"} onClick={() => onClickHandler("props")}>Props</TabButton>
                    <TabButton isSelected={identifier === "state"} onClick={() => onClickHandler("state")}>State</TabButton>
                </menu>
            </Section>

            {tabContent}
        </>
    )
}

export default Examples
