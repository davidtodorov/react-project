import * as yup from 'yup';

const schema = yup.object({
  firstName: yup.string('First Name shoud be a string')
    .required('First Name is required')
    .min(3, 'First Name should be more than 3 chars'),

  lastName: yup.string('Last Name shoud be a string')
    .required('Last Name is required')
    .min(3, 'Last Name should be more than 3 chars'),

  username: yup.string('Username shoud be a string')
    .required('Username is required')
    .min(3, 'Username should be more than 3 chars'),

  password: yup.string('Password must be a string')
    .required('Password is required')
    .min(3, 'Password must be more than 3 chars'),

  rePassword: yup.string('Password must be a string')
});

export default schema;