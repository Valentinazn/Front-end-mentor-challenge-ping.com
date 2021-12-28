const emailCollector = document.getElementById('email-collector')
const inputBox = document.getElementById('input-box')
const ourMainContent = document.getElementById('main-content')
const text = document.getElementById('text')
const email = document.getElementById('email')
const regex =  /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
const regexo =  /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;


emailCollector.addEventListener( 'submit', (e) =>{
  e.preventDefault()

  emailValidation()

  
  let ourFormData = new FormData(e.target)
  let userEmailAddress = ourFormData.get('email-address')
  let updateHtmlContent = `

        <img src="assets/images/celebration.svg">

         <h2 class=" title title-our-main-content">Congratulations!</h2>

         <p class=" subtitle subtitle-our-main-content">You will get weekly PING tips sent to: <strong>${userEmailAddress}</strong></p>
        
         <img class="img-res margin-top" src="assets/images/illustration-dashboard.png">
   `
   ourMainContent.innerHTML = updateHtmlContent
})


function emailValidation(){

  if (regex.test(email.value) || regexo.test(email.value)) {

    text.innerHTML = 'Your email address is valid'
    text.style.color = '#00ff00'
    email.style.borderColor = 'hsl(0, 0%, 59%)'

  }else {

    text.innerHTML = 'Please enter valid email address'
    text.style.color = '#ff0000'
    email.style.borderColor = '#ff0000'
  }

}


