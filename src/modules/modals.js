export const openModal = (modal) => {
    document.body.insertAdjacentHTML('beforeend', `
    <div class= "modal-backdrop fade"></div>
    `)

    modal.style.display = 'block'
    setTimeout(() => {
        const layout = document.querySelector('.modal-backdrop')
        layout.classList.add('show')
        modal.classList.add('show')
    }, 200)
}

export const closeModal = (modal) => {
    const layout = document.querySelector('.modal-backdrop')
    modal.classList.remove('show')
    layout && layout.remove('show')
    setTimeout(() => {
        modal.style.display = 'none'
    }, 300)
   
}