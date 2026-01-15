// Abrir o menu mobile

const mobileMenuButton = document.querySelector('#mobile-menu-button');
const mobileMenu = document.querySelector('#mobile-menu');


mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('flex');
  mobileMenu.classList.toggle('hidden');
})

const btnNext = document.getElementById('goToPhotoStep');
const stepForm = document.getElementById('new_member_form');
const stepPhoto = document.getElementById('step-photo');



btnNext.addEventListener('click', () => {
  const nome = document.getElementById('nome').value.trim();
  const dataNascimento = document.getElementById('data_nascimento').value.trim();
  const estadoCivil = document.getElementById('estado_civil').value;
  const rg = document.getElementById('rg').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const nomeMae = document.getElementById('nome_mae').value.trim();
  const nacionalidade = document.getElementById('nacionalidade').value.trim();
  const naturalidade = document.getElementById('naturalidade').value.trim();

  const dataConversao = document.getElementById('data_conversao').value.trim();
  const conversaoNaoRecordo = document.querySelector('input[name="conversao_nao_recordo"]').checked;

  const dataBatismo = document.getElementById('data_batismo').value.trim();
  const batismoNaoRecordo = document.querySelector('input[name="batismo_nao_recordo"]').checked;

  // ===== Validações =====
  if (nome.length < 3) {
    alert('Informe o nome completo.');
    return;
  }

  if (!dataNascimento) {
    alert('Informe a data de nascimento.');
    return;
  }

  if (!estadoCivil) {
    alert('Selecione o estado civil.');
    return;
  }

  if (!rg) {
    alert('Informe o RG.');
    return;
  }

  if (!cpf || cpf.length < 11) {
    alert('Informe um CPF válido.');
    return;
  }

  if (!nomeMae) {
    alert('Informe o nome da mãe.');
    return;
  }

  if (!nacionalidade) {
    alert('Informe a nacionalidade.');
    return;
  }

  if (!naturalidade) {
    alert('Informe a naturalidade.');
    return;
  }

  // Conversão
  if (!conversaoNaoRecordo && !dataConversao) {
    alert('Informe a data de conversão ou marque "Não recordo".');
    return;
  }

  // Batismo
  if (!batismoNaoRecordo && !dataBatismo) {
    alert('Informe a data de batismo ou marque "Não recordo".');
    return;
  }
  // ===== PASSOU TUDO → AVANÇA =====
  document.getElementById('new_member_form').classList.add('hidden');
  document.getElementById('step-photo').classList.remove('hidden');

});

const conversaoCheckbox = document.querySelector('input[name="conversao_nao_recordo"]');
const dataConversaoInput = document.getElementById('data_conversao');

conversaoCheckbox.addEventListener('change', () => {
  dataConversaoInput.disabled = conversaoCheckbox.checked;
  if (conversaoCheckbox.checked) dataConversaoInput.value = '';
});

const batismoCheckbox = document.querySelector('input[name="batismo_nao_recordo"]');
const dataBatismoInput = document.getElementById('data_batismo');

const submitForm = document.querySelector('#submit-form');
batismoCheckbox.addEventListener('change', () => {
  dataBatismoInput.disabled = batismoCheckbox.checked;
  if (batismoCheckbox.checked) dataBatismoInput.value = '';
  // Se passou tudo, avança pra etapa da foto
  document.getElementById('new_member_form').classList.add('hidden');
  document.getElementById('step-photo').classList.remove('hidden');

});

submitForm.addEventListener('click', async (e) => {
  alert('entra aqui');
  const foto = document.getElementById('foto').files[0];
  const noPhoto = document.getElementById('noPhoto').checked;

  if (!foto && !noPhoto) {
    alert('Selecione uma foto ou marque "Não quero foto".');
    return;
  }

  const payload = {
    nome: document.getElementById('nome').value.trim(),
    data_nascimento: document.getElementById('data_nascimento').value.trim(),
    estado_civil: document.getElementById('estado_civil').value,
    rg: document.getElementById('rg').value.trim(),
    cpf: document.getElementById('cpf').value.trim(),
    nome_mae: document.getElementById('nome_mae').value.trim(),
    nome_pai: document.getElementById('nome_pai').value.trim(),
    nacionalidade: document.getElementById('nacionalidade').value.trim(),
    naturalidade: document.getElementById('naturalidade').value.trim(),
    data_conversao: document.getElementById('data_conversao').value.trim(),
    conversao_nao_recordo: document.querySelector('input[name="conversao_nao_recordo"]').checked,
    data_batismo: document.getElementById('data_batismo').value.trim(),
    batismo_nao_recordo: document.querySelector('input[name="batismo_nao_recordo"]').checked,
    cargo: document.getElementById('cargo').value.trim(),
    foto_url: null // depois a gente liga com upload
  };

  try {
    const response = await fetch('/.netlify/functions/createMember', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Erro ao salvar');
    }

    alert('Membro cadastrado com sucesso! ✅');
    // aqui você pode redirecionar pra listagem

  } catch (err) {
    console.error(err);
    alert('Erro ao salvar membro. Veja o console.');
  }

});

