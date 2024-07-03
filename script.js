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

      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          window.location.href = 'main.html';
        })
        .catch((error) => {
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

      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          window.location.href = 'index.html';
        })
        .catch((error) => {
          alert(error.message);
        });
    });
  }

  if (addMovieBtn) {
    addMovieBtn.addEventListener('click', () => {
      const movieTitle = document.getElementById('movie-title').value;

      db.collection('movies').add({
        title: movieTitle,
        reviews: []
      }).then(() => {
        loadMovies();
      }).catch((error) => {
        alert(error.message);
      });
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      auth.signOut().then(() => {
        window.location.href = 'index.html';
      }).catch((error) => {
        alert(error.message);
      });
    });
  }

  function loadMovies() {
    const movieList = document.getElementById('movie-list');
    const movieListMain = document.getElementById('movie-list-main');

    if (movieList || movieListMain) {
      db.collection('movies').get().then((querySnapshot) => {
        let moviesHTML = '';
        querySnapshot.forEach((doc) => {
          const movie = doc.data();
          moviesHTML += `<li>${movie.title}</li>`;
        });
        if (movieList) {
          movieList.innerHTML = moviesHTML;
        }
        if (movieListMain) {
          movieListMain.innerHTML = moviesHTML;
        }
      });
    }
  }

  loadMovies();
});
