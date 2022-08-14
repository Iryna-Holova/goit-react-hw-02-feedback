import PropTypes from "prop-types";
import { ButtonsContainer, OptionButton } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <ButtonsContainer>
        {options.map((option, index) => (
            <OptionButton key={index} name={option} type='button' onClick={onLeaveFeedback}>{option}</OptionButton>
        ))}
    </ButtonsContainer>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};