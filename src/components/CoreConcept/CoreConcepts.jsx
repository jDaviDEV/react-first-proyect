import React from 'react'
import { CORE_CONCEPTS } from '../../data'
import CoreConcept from './CoreConcept'
import Section from '../Section/Section'

const CoreConcepts = () => {
    return (
        <>
            <Section title="Core Concepts" id="core-concepts">
                <ul>
                    {CORE_CONCEPTS.map((item, index) => <CoreConcept key={index} {...item} />)}
                </ul>
            </Section>
        </>

    )
}

export default CoreConcepts
