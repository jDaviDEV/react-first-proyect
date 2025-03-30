import React from 'react';
import TabButton from './TabButton';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';
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
                <Tabs ButtonsContainer="menu" buttons={<>
                    <TabButton isSelected={identifier === "components"} onClick={() => onClickHandler("components")}>Components</TabButton>
                    <TabButton isSelected={identifier === "jsx"} onClick={() => onClickHandler("jsx")}>JSX</TabButton>
                    <TabButton isSelected={identifier === "props"} onClick={() => onClickHandler("props")}>Props</TabButton>
                    <TabButton isSelected={identifier === "state"} onClick={() => onClickHandler("state")}>State</TabButton>
                </>}>
                    {tabContent}
                </Tabs>
            </Section>
        </>
    )
}

export default Examples
