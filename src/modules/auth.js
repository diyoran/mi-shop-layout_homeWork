import { openModal, closeModal } from "./modals"
import { getData } from "./api"

export const authFunc = () => {
    const authBtn = document.getElementById('open-auth-btn')
    const modal = document.getElementById('auth-modal')
    const closeBtn = modal.querySelectorAll('.close-btn')
    const loginBtn = modal.querySelector('.login-btn')
    const logoutBtn = document.querySelector('#logout-btn')
    const openCartBtn = document.getElementById('open-cart-btn')
    const cartModal = document.getElementById('cart-modal')


    const login = () => {
        authBtn.style.display = 'none'
        logoutBtn.classList.remove('d-none')
        openCartBtn.classList.remove('d-none')
        closeModal(modal)
    }

    const logout = () => {
        authBtn.style.display = 'block'
        logoutBtn.classList.add('d-none')
        openCartBtn.classList.add('d-none')
    }

    const checkAuth = () => {
        const user = JSON.parse(localStorage.getItem('auth'))

        if (user) {
            getData('/profile').then((data) => {
                if (
                    (data.login && data.login === user.login) &&
                    (data.password && data.password === user.password)
                ) {
                    login()
                } 
            })
        }
    }


    authBtn.addEventListener('click', () => {
        openModal(modal)
    })

    closeBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            closeModal(modal)
        })
    })

    loginBtn.addEventListener('click', () => {
        const loginInput = modal.querySelector('#login-control')
        const passwordInput = modal.querySelector('#password-control')

        const user = {
            login: loginInput.value,
            password: passwordInput.value
        }

        getData('/profile').then((data) => {
            if (
                (data.login && data.login === user.login) &&
                (data.password && data.password === user.password)
            ) {
                localStorage.setItem('auth', JSON.stringify(data))
                login()
            } 
        })

    })

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('auth')
        logout()
    })

    // openCartBtn.addEventListener('click', () => {
    //     openModal(cartModal)
    // })

    checkAuth()
} 