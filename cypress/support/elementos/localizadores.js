const localizador = {
    login: {
        username: '[data-test="username"]',
        password: '[data-test="password"]',
        btn_login: '[data-test="login-button"]'
    },

    menu: {
        setting: '#react-burger-menu-btn',
        logout: '#logout_sidebar_link'
    },

    inventory: {
        titulo_products: '[class="title"]',
        btn_add_cart: '[data-test="add-to-cart-sauce-labs-backpack"]',
        btn_carrinho: '[class="shopping_cart_link"]'
    },

    card: {
        btn_checkout: '[data-test="checkout"]'
    },

    checkout: {
        first_name: '[data-test="firstName"]',
        last_name: '[data-test="lastName"]',
        postal_code: '[data-test="postalCode"]',
        btn_continue: '[data-test="continue"]',
        btn_finish: '[data-test="finish"]'
    },
    checkout_complete: {
        text_thank_you_for_your_order: '[class="complete-header"]'
        
    }
    
}

export default localizador
