function isEmpty(value, noti) {
    if (!value || value.toString().length == 0) {
        if (!noti) {
            notification.error("Không được để trống")
        } else {
            notification.error(noti)
        }
        return false;
    } else {
        return value;
    }
}

function isNumber(value, noti) {
    if (isNaN(value)) {
        if (!noti) {
            notification.error("Không phải là số")
        } else {
            notification.error(noti)
        }
        return false;
    } else {
        return value;
    }
}