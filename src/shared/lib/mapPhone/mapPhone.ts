export const mapPhone = (phone: string) => {
    if (phone.startsWith('+7')) {
        phone = phone.substring(1);
    } else if (phone.startsWith('8')) {
        phone = '7' + phone.substring(1);
    }
    if (phone.length > 11) {
        phone = phone.substring(0, 11);
    }
    return phone;
}

