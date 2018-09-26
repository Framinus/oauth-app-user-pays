document.addEventListener('DOMContentLoaded', () => {

  const listSG = document.getElementById('list-btn');
  const sendSG = document.getElementById('send-btn');

  if (window.location.pathname == '/auth') {
    const submitBtn = document.getElementById('submit-btn');
    const authForm = document.getElementById('auth-form');

    // this allows the user to get authorized to use your app.
    // it takes a client_id and a random code that you set as state.
    const authorizeUser = (event) => {
      event.preventDefault();
      const response = axios.post('/auth')
      .then(() => {
        console.log('successfully posted');
      })
      .catch((err) => {
        console.log(err);
      })
    };

    authForm.addEventListener('submit', authorizeUser);

  }

})
