export default () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5000/api';
  } else {
    return '/api';
  }
};
