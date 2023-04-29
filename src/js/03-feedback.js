import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form')

populateForm()

const formData = {
  email: formEl.elements.email.value,
  message: formEl.elements.message.value
}

formEl.addEventListener('input', throttle(onTextInput, 500))
formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault()
    e.target.reset()
    localStorage.removeItem('feedback-form-state')
    console.log(formData); 
}

function populateForm() {
  const objForForm = JSON.parse(localStorage.getItem('feedback-form-state'))
        if (objForForm) {
            formEl.elements.email.value = objForForm.email  
            formEl.elements.message.value = objForForm.message  
        }       
}

function onTextInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

