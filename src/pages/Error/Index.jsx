import './Error.scss'

function Error() {
  return (
    <main className='err'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'héxiste pas.</p>
      <a href="/">Retournez la page d'accueil</a>
    </main>
    
  )
}

export default Error