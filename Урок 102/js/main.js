(function() {
    
    document.addEventListener('click', burgerInit)
    function burgerInit (e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav-link')

        if(!burgerIcon) return
        if(!burgerNavLink) return

        document.body.classList.add('body--opened-menu')

    }
}) ()