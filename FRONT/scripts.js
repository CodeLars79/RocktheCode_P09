document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('funko-container')
  const showMoreButton = document.getElementById('show-more')
  const modal = document.getElementById('modal')
  const modalDetails = document.getElementById('modal-details')
  const closeModalButton = document.getElementById('close-modal')

  let funkos = []
  let currentIndex = 0
  const itemsPerPage = 20

  // Function to fetch Funkos from the API
  async function fetchFunkos() {
    try {
      const response = await fetch('http://localhost:3000/api/v1/funkos')
      funkos = await response.json()
    } catch (error) {
      console.error('Error fetching funkos:', error)
      container.innerHTML = '<p>Failed to load Funko data.</p>'
      showMoreButton.style.display = 'none'
    }
  }

  // Function to render Funkos to the DOM
  function renderFunkos() {
    const nextFunkos = funkos.slice(currentIndex, currentIndex + itemsPerPage)
    nextFunkos.forEach((funko) => {
      const funkoCard = document.createElement('div')
      funkoCard.className = 'funko-card'
      funkoCard.innerHTML = `
        <img src="${funko.img}" alt="${funko.name}" />
        <h2>${funko.name}</h2>
        <p>Price: ${funko.price} €</p>
      `
      // Add click event to each card for enhancement
      funkoCard.addEventListener('click', () => openModal(funko))
      container.appendChild(funkoCard)
    })
    currentIndex += itemsPerPage

    if (currentIndex >= funkos.length) {
      showMoreButton.style.display = 'none'
    }
  }

  // Function to open the modal with more details
  function openModal(funko) {
    modalDetails.innerHTML = `
      <img src="${funko.img}" alt="${funko.name}" style="width: 100%; height: auto; border-radius: 8px;"/>
      <h2>${funko.name}</h2>
            <p>Price: ${funko.price} €</p>
    `
    modal.style.display = 'flex'
  }

  // Function to close the modal
  closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  // Close the modal when clicking outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  })

  // Initial fetch and render
  await fetchFunkos()
  renderFunkos()

  // Load more Funkos on button click
  showMoreButton.addEventListener('click', renderFunkos)
})
