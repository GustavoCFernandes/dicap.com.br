//dashboard
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('evaluationForm');
  const submitButton = document.getElementById('submitButton');

  // Função para enviar os dados via Webhook
  async function sendDataToWebhook(data) {
    try {
      const response = await fetch('https://hook.us2.make.com/1akpqo32prpq2wqe3fwxmj1af7hh9dyq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Dados enviados com sucesso!');
      } else {
        alert('Erro ao enviar os dados. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao enviar os dados. Verifique a conexão.');
    }
  }

  // Evento de envio do formulário
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const studentName = document.getElementById('studentName').value;
    const vocabulario = document.getElementById('vocabulario').value;
    const pronuncia = document.getElementById('pronuncia').value;
    const gramatica = document.getElementById('gramatica').value;
    const comentariosGerais = document.getElementById('comentariosGerais').value;
    const comentarioInterno = document.getElementById('comentarioInterno').value;
    const fpe = document.getElementById('fpe').value;
    const cor = document.getElementById('cor').value;
    const pat = document.getElementById('pat').value;
    const q = document.getElementById('q').value;

    // Cria um objeto com os dados do formulário
    const formData = {
      studentName,
      vocabulario,
      pronuncia,
      gramatica,
      comentariosGerais,
      comentarioInterno,
      fpe: parseFloat(fpe),
      cor: parseFloat(cor),
      pat: parseFloat(pat),
      q: parseFloat(q),
    };

    // Envia os dados para o Webhook
    await sendDataToWebhook(formData);

    // Limpa o formulário após o envio
    form.reset();
  });
});