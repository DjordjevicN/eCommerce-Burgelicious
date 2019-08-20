document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({
        easing: 'easeOutExpo'
    })
        .add({
            targets: '.burger-btn',
            rotate: {
                value: 720,
                duration: 3000,
                easing: 'easeInOutQuart',
            }
        })
        .add({
            targets: '.burger-btn',
            opacity: ['1', '0'],
        }, '-=1600')
        .add({
            targets: ".navBar",
            width: ['0px', '580px'],
            opacity: ['0', '1'],

        }, '-=1600')
        .add({
            targets: '.cart-btn, .social',
            translateY: ['-200', '0'],
            opacity: ['0', '1'],
        }, '-=1600')

        .add({
            targets: '.hero-title',
            translateX: ['-200', '0'],
            opacity: ['0', '1'],
        }, '-=1000')

        .add({
            targets: '.next-screen',
            translateY: ['400', '0'],
            opacity: ['0', '1'],
        }, '-=800')
})

