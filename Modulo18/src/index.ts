import { isEmail } from 'validator';

const form = document.getElementById('form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const divs = document.querySelectorAll('.form-fields');
    validateInputs(divs);
  });
}

const validateInputs = (divs: NodeListOf<Element>) => {
  if (!divs) return;

  let password: string;

  const error = (errormsg: string, span: HTMLSpanElement) => {
    span.style.display = 'block';
    span.textContent = `ERRO: ${errormsg}`;
  };

  const clean = (span: HTMLSpanElement) => {
    span.style.display = 'none';
    span.textContent = ' ';
  };

  divs.forEach((div) => {
    const input = div.querySelector('input');
    const span = div.querySelector('span');

    if (!input || !span) return;
    
    clean(span);
    
    if (!input.value) {
      error('Campo Vazio.', span);
      return;
    }

    if (input.classList.contains('password')) {
      password = input.value;
    }

    if (input.classList.contains('password2') && input.value !== password) {
      error('Senhas não são as mesmas.', span);
      return;
    }

    if (input.classList.contains('email') && !isEmail(input.value)) {
      error('Email Inválido.', span);
      return;
    }
  });
};
