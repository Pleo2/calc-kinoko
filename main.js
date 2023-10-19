import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <form action="cost" class="cost">
      <label for="price">Coloca el precio original</label>
      <input type="number" name="cost" id="Precio-original">
      </input>
      <input type='submit'>
      </input>
    </form>
    <div class="show-price"></div>
  </div>
`

const result = document.querySelector('.cost')
result.addEventListener('click', (event) => {
  event.preventDefault()
  const price = document.querySelector('#Precio-original').value
  const result = price - (price * 0.1)

  if ( price != 0 ){
    document.querySelector('.show-price').innerHTML = `
      <h1>${result} es lo que debe costar</h1>
    `
  }
})
