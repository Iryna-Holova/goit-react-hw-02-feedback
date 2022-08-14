import PropTypes from "prop-types";
import { NotificationText } from "./Notification.styled";

const Notification = ({message}) => (
    <NotificationText>{message}</NotificationText>
);

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};