document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      const username = document.getElementById('username').value; // Captura o nome de usuário
      const password = document.getElementById('password').value; // Captura a senha

      // Verifica se as credenciais correspondem a algum usuário na lista
      const user = users.find((u) => u.username === username && u.password === password);
      if (user) {
        // Armazena o nome do usuário no localStorage
        localStorage.setItem('loggedInUser', user.username);

        // Redireciona para a página do dashboard
        window.location.href = 'dashboard/dashboard.html';
      } else {
        // Exibe um pop-up de erro se as credenciais forem inválidas
        alert('Usuário ou senha incorretos. Tente novamente.');
      }
    });
  }
});

// Função para alternar a visibilidade da senha
document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  const toggleIcon = document.getElementById('togglePassword');

  // Alterna entre 'password' e 'text'
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleIcon.classList.remove('fa-eye'); // Altera o ícone para olho fechado
    toggleIcon.classList.add('fa-eye-slash');
  } else {
    passwordField.type = 'password';
    toggleIcon.classList.remove('fa-eye-slash'); // Altera o ícone para olho aberto
    toggleIcon.classList.add('fa-eye');
  }
});