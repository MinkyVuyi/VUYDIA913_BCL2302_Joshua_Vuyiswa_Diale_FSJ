import { createContext } from "react";
import notificationContext from './notification-context';

const notificationContext = createContext({
    notification: null, // { title, message, status }
    showNotification: function(notificationData) {},
    hideNotification: function() {}
});

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState();

    function showNotificationHandler(notificationData) {
        setActiveNotification(notificationData);
    }

    function hideNotificationHandler() {
        setActiveNotification(null);
    }

const context = { notification: activeNotification, showNotification: showNotificationHandler, hideNotification: hideNotificationHandler,
 };

    return (
        <NotificationContext.Provider value = {context}>
            {props.children}
        </NotificationContext.Provider>
    );
}

export default notificationContext;