$(".hide").on('click', function() {
    $("nav ul").toggle('slow');
      })

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers:{
      'Accept': 'application/json'
    }
  })

  if(response.ok){
    this.reset()
    alert('your message was sent successfully, I will reply soon :)')
  }
}