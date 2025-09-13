const users = [
  { username: 'Marlon', password: 'Dicap96' },
  { username: 'Jurandir', password: 'Dicap63' },
  { username: 'Ayumi', password: 'Dicap38' },
  { username: 'Renêe', password: 'Dicap85' },
  { username: 'Brian', password: 'Dicap52' },
];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const user = users.find((u) => u.username === username && u.password === password);
      if (user) {
        localStorage.setItem('loggedInUser', user.username);
        window.location.href = 'dashboard/dashboard.html';
      } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
      }
    });
  }
});