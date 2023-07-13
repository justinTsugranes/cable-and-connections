document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section-container')
  const navLinks = document.querySelectorAll('nav a')

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault() // prevent the default action

      // hide all sections
      sections.forEach(function (section) {
        section.style.display = 'none'
      })

      // show the clicked section
      const targetSection = document.querySelector(this.getAttribute('href'))
      targetSection.style.display = 'block'
    })
  })
})
