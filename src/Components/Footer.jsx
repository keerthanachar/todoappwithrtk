import React from 'react'

function Footer() {
    return (
        <footer class="bg-primary text-light text-center text-lg-start" style={{ position: 'fixed', width: '100%', bottom: '0' }}>
            <div class="container p-4">
                <div class="row">
                    <h4>ToDo App</h4>
                    <span>Made with Redux-toolkit</span>
                </div>
            </div>
            <div class="text-center p-3" >
                © 2024 Copyright:
                <a class="text-dark" href="https://guthub.com/keerthan">keerthan.com</a>
            </div>
        </footer>

    )
}

export default Footer