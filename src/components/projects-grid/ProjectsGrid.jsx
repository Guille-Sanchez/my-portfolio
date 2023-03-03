import { useId } from 'react'
import './projectGrid.css'
function ProjectsGrid () {
  // screenshots iphone 12/13 mini
  const myProjects = [
    {
      body: 'This project features a controlled form for a greater user experience as well as some sorting mechanisms.',
      id: 1,
      image: '../../screenshots/buscador-de-peliculas.png',
      title: 'Movie Search Website',
      urlLive: 'https://buscador-de-peliculas-chicho.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/buscador-de-peliculas'
    }, {
      body: 'Insert a url and shorten it! This website saves your shortened-link on local-storage so you never lose it.',
      id: 2,
      image: '../../screenshots/url-shortener.png',
      title: 'Url Shortener',
      urlLive: 'https://url-shortener-vite-app.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/url-shortner'
    }, {
      body: 'Bored? This website gives you a random piece of art and tries to guess the artist nationality.',
      id: 3,
      image: '../../screenshots/get-art-piece.png',
      title: 'Get Art Piece',
      urlLive: 'https://art-from-the-art-institute-of-chicago.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/DisplayArt'
    }, {
      body: 'Manage Company\'s homepage. This project presents small details which put together bring a good user experience.',
      id: 4,
      image: '../../screenshots/manage.png',
      title: 'Get Art Piece',
      urlLive: 'https://glittering-lamington-b0ab80.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/manage-landing-page'
    }, {
      body: 'Ever wonder what the current transaction for a given currency is? Well, now you can quickly check it on this website.',
      id: 5,
      image: '../../screenshots/bank-exchange.png',
      title: 'Currency Exhange',
      urlLive: 'https://bank-exchange-chicho.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/bank_exchange'
    }, {
      body: 'Do you have some spare time to kill with a friend? Why don\'t you use it to play the classic game of tic-tac-toe?',
      id: 6,
      image: '../../screenshots/tic-tac-toe.png',
      title: 'Tic-Tac-Toe',
      urlLive: 'https://tic-tac-toe-chicho.netlify.app/',
      urlrepo: 'https://github.com/Guille-Sanchez/Tic-Tac-Toe'
    }
  ]
  const projectId = useId()
  return (
    <section>
      <h2>Projects</h2>
      <div className='project-grid'>
        {myProjects.map((project, index) => {
          return (
            <div key={`${projectId}-${index}`} className='card'>
              <p className='title'>{project.title}</p>
              <img src={project.image} alt={project.title} />
              <p className='body'>{project.body}</p>
              <div className='btn-group'>
                <a href={project.urlrepo}>Repository</a>
                <a href={project.urlLive}>Live Demo</a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsGrid
