
const form = document.querySelector('form')
const nameInput = document.querySelector('#fname')
const emailInput = document.querySelector('#email')
const error = document.querySelector('.error')

form.addEventListener('submit', function(e){
    e.preventDefault()

    if(nameInput.value === '' ||  emailInput.value === ''){
        error.style.display = 'block'

        setTimeout(() => {
            error.style.display = 'none'
        }, 5000)

        return
    }
    alert(`Hello ${nameInput.value}🎊, your form has been submitted successfully.\nYour email is ${emailInput.value}`)
    console.log(nameInput.value)
    console.log(emailInput.value)

    nameInput.value = ''
    emailInput.value = ''

    
})