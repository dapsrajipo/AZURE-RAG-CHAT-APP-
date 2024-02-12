import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    " How can LLMs improve the accuracy of medical diagnoses from patient interviews?",
    "What role do LLMs play in enhancing personalized patient care and treatment plans?",
    "How can LLMs support mental health professionals in providing care?",
    "In what ways can LLMs contribute to medical education and continuous professional development?"
];

const GPT4V_EXAMPLES: string[] = [
    "Can LLMs enhance collaborative healthcare by integrating insights from various healthcare professionals?",
    "What are the limitations and challenges of implementing LLMs in real-world healthcare settings?",
    "What are the ethical considerations in using LLMs for patient data analysis and privacy?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
