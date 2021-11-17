export function phoneValidator(phone) {
    if (!phone) return "Phone Number can't be empty."
    if (9 < phone.length > 11) return 'Enter valid phone number'
    return ''
}
  