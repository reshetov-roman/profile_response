const selectGender = document.querySelectorAll('.page-profile-wrapper__forms-personal--sex input[type="radio"]');

selectGender.forEach((radio, i) => {
  radio.id = `sex_${i}`;
  radio.nextElementSibling.setAttribute('for', `sex_${i}`);
});


const accordeonCheckBoxes = document.querySelectorAll('.page-profile-wrapper__forms-notifications--headline');

accordeonCheckBoxes.forEach(checkBox => {
  checkBox.addEventListener('click', e => {
    const target = e.target;
    target.classList.toggle('revorse');
    target.nextElementSibling.classList.toggle('show');
  });
});


const setIdAccordeonFields = document.querySelectorAll('.page-profile-wrapper__forms-notifications--checkboxes');

setIdAccordeonFields.forEach((radio, i) => {
  radio.querySelector('.page-profile-wrapper__forms-notifications--checkbox').id = `checked_${i}`;
  let label = radio.querySelector('.page-profile-wrapper__forms-notifications--text');
      label.setAttribute('for', `checked_${i}`);
});



const popupFormField = document.querySelectorAll('.page-profile-wrapper__forms-security--eye');

popupFormField.forEach(field => {
  field.addEventListener('click', e => {
    const target = e.target;
    target.classList.toggle('hide');
    const type = target.parentNode.querySelector('.page-profile-wrapper__forms-security--fld');
    type.type === 'password' ? type.type = 'text' : type.type = 'password';
  });
});


const popupFormFieldValid = document.querySelectorAll('.page-profile-wrapper__forms-security--fld');

popupFormFieldValid.forEach(input => {
  input.addEventListener('input',() => {

    let currentPass = document.getElementById('currentPass').value,
    newPass = document.getElementById('newPass').value,
    repeatPass = document.getElementById('repeatPass').value,
    buttonChange = document.querySelector('.buttonChange');
    activeError = document.querySelector('.page-profile-wrapper__forms-security--error');
  
    if(currentPass.length != 0 && newPass.length != 0
    && repeatPass.length != 0 && newPass == repeatPass
    && newPass != '' && repeatPass != '') {
      buttonChange.removeAttribute('disabled');
      buttonChange.classList.add('active');
    } else {
    buttonChange.setAttribute('disabled', '');
    buttonChange.classList.remove('active');
    }

    newPass != repeatPass || repeatPass != newPass ?
    activeError.classList.add('error') : 
    activeError.classList.remove('error');

  });
});


let personalFieldForm = document.querySelectorAll('.page-profile-wrapper__forms-personal--for input');

$("#phone").mask("8(999) 999-9999");
$('#date').mask('99.99.9999');



personalFieldForm.forEach(field => {
  field.addEventListener('input', () => {
    let name = document.querySelector('[data-name]').value,
        surName = document.querySelector('[data-sur-name]').value,
        secondName = document.querySelector('[data-second-name]').value,
        email = document.querySelector('[data-email]').value,
        mobile = document.querySelector('[data-mobile]').value,
        birth = document.querySelector('[data-birth]').value,
        man = document.querySelector('[data-checked-man]'),
        woman = document.querySelector('[data-checked-woman]'),
        buttonChange = document.querySelector('.page-profile-wrapper__forms-personal--save');
    

        if(name.length != 0 && surName.length != 0 && secondName.length != 0 && secondName.length != 0 && email.length != 0) {
          if(man.checked || woman.checked) {
            buttonChange.disabled = false;
            buttonChange.classList.add('active');
            buttonChange.parentNode.classList.add('active');
          }
            }
          else {
            buttonChange.disabled = true;
            buttonChange.classList.remove('active');
            buttonChange.parentNode.classList.remove('active');
        }
  });
});







  const backdrop = document.querySelector('#modal-backdrop');
  document.addEventListener('click', modalHandler);

  function modalHandler(evt) {
    const modalBtnOpen = evt.target.closest('.js-modal');
    if (modalBtnOpen) {
      const modalSelector = modalBtnOpen.dataset.modal;
      showModal(document.querySelector(modalSelector));
    }

    const modalBtnClose = evt.target.closest('.modal-close');
    if (modalBtnClose) {
      evt.preventDefault();
      hideModal(modalBtnClose.closest('.modal-window'));
    }

    if (evt.target.matches('#modal-backdrop')) {
      hideModal(document.querySelector('.modal-window.show'));
    }
  }

  function showModal(modalElem) {
    modalElem.classList.add('show');
    backdrop.classList.remove('hidden');
  }

  function hideModal(modalElem) {
    modalElem.classList.remove('show');
    backdrop.classList.add('hidden');
  }




// let isg = $('#phone').on('change', function() {
//   console.log(33);
// });