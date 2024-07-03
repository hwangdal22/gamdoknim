// script.js

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const addMovieBtn = document.getElementById('add-movie-btn');
  const logoutBtn = document.getElementById('logout-btn');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      console.log('Logging in with', email);
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log('Login successful:', userCredential.user);
          window.location.href = 'main.html';
        })
        .catch((error) => {
          console.error('Login error:', error);
          alert(error.message);
        });
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      console.log('Signing up with', email);
      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log('Signup successful:', userCredential.user);
          window.location.href = 'index.html';
        })
        .catch((error) => {
          console.error('Signup error:', error);
          alert(error.message);
        });
    });
  }

  if (addMovieBtn) {
    addMovieBtn.addEventListener('click', () => {
      const movieTitle = document.getElementById('movie-title').value;
      console.log('Adding movie:', movieTitle);

      db.collection('movies').add({
        title: movieTitle,
        reviews: []
      }).then(() => {
        console.log('Movie added successfully');
        loadMovies();
      }).catch((error) => {
        console.error('Add movie error:', error);
        alert(error.message);
      });
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
​⬤
