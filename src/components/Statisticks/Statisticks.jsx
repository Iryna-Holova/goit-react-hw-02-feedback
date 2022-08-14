


const Statisticks = ({good, neutral, bad, total, positivePercentage}) => (
    <>
        <h2>Statisticks</h2>
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
    </>
);

export default Statisticks;