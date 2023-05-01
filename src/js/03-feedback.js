import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form')

let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {}

formEl.elements.email.value = formData?.email || ''  
formEl.elements.message.value = formData?.message || '' 

formEl.addEventListener('input', throttle(onTextInput, 500))
formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault()
  e.target.reset()
  localStorage.removeItem('feedback-form-state')
  console.log(formData); 
  formData ={}
}

function onTextInput(e) {
    formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }

