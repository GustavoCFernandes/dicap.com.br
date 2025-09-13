  // Recupera o nome do usuário do localStorage
  const loggedInUser = localStorage.getItem('loggedInUser');

  // Se o usuário estiver logado, exibe o nome na barra superior
  if (loggedInUser) {
    document.getElementById('username').textContent = `Professor: ${loggedInUser}`;
  } else {
    // Caso contrário, redireciona de volta para a página de login
    alert('Você precisa fazer login primeiro.');
    window.location.href = '../index.html'; // Ajuste o caminho conforme necessário
  }

  // Função para sair (limpa o localStorage e redireciona para o login)
  document.getElementById('logoutButton').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser'); // Remove o nome do usuário do localStorage
    window.location.href = '../index.html'; // Redireciona para a página de login
  });
