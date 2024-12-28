import * as yup from 'yup';

export const singupSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    username: yup.string().required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(4, 'Password must be at least 4 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[A-Za-z\d\W_]{4,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one special character'),
});
