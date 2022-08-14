const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        {options.map((option, index) => (
            <button key={index} name={option} type='button' onClick={onLeaveFeedback}>{option}</button>
        ))}
    </div>
);

export default FeedbackOptions;