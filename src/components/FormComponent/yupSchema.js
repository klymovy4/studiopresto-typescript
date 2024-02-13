import * as Yup from 'yup'

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().matches(emailRegExp, 'Invalid email format ').required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required')
})