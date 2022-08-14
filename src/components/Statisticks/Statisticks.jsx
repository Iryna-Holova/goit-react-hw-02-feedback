import PropTypes from "prop-types";
import { StatisticList, StatisticListItem, StatisticTitle, SummaryItem } from "./Statisticks.styled";

const Statisticks = ({good, neutral, bad, total, positivePercentage}) => (
    <>
        <StatisticTitle>Statisticks</StatisticTitle>
        <StatisticList>
            <StatisticListItem>Good: {good}</StatisticListItem>
            <StatisticListItem>Neutral: {neutral}</StatisticListItem>
            <StatisticListItem>Bad: {bad}</StatisticListItem>
        </StatisticList>
        <SummaryItem>Total: {total}</SummaryItem>
        <SummaryItem>Positive feedback: {positivePercentage}%</SummaryItem>
    </>
);

export default Statisticks;

Statisticks.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};