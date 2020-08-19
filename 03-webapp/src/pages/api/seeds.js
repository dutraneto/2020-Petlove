export const seeds = [
    {
        title: 'petlove',
        logo:
            'https://res.cloudinary.com/duim1pyqp/image/upload/v1597103045/petlove/content/petlove-logo_n4koxa.png',
        bgImg:
            'https://res.cloudinary.com/duim1pyqp/image/upload/v1597103045/petlove/content/hero-bg_ktx74n.png',
        routes: [
            {
                link: '/shopping-list.html',
                label: 'dogs',
            },
            {
                link: '/shopping-list.html',
                label: 'cats',
            },
            {
                link: '/shopping-list.html',
                label: 'birds',
            },
            {
                link: '/shopping-list.html',
                label: 'fish',
            },
            {
                link: '/shopping-list.html',
                label: 'small pets',
            },
            {
                link: '/page-services.html',
                label: 'services',
            },
            {
                link: '/page-about-us.html',
                label: 'about us',
            },
        ],

        deals: [
            {
                suffix: 'deals',
                path:
                    'https://res.cloudinary.com/duim1pyqp/image/upload/v1596550359/petlove/content/bat-dog-toy_mrylbb.png',
                width: '350',
                height: '370',
                desc: 'bat dog toy',
                price: 1.99,
                discount: true,
                discountAmount: 10,
            },
            {
                suffix: 'deals',
                path:
                    'https://res.cloudinary.com/duim1pyqp/image/upload/v1596550359/petlove/content/dog-food_fs1upo.png',
                width: '350',
                height: '370',
                desc: 'savory wet dog food',
                price: 4.99,
                discount: true,
                discountAmount: 20,
            },
            {
                suffix: 'deals',
                path:
                    'https://res.cloudinary.com/duim1pyqp/image/upload/v1596550363/petlove/content/cat-tunnel_w78omz.png',
                width: '350',
                height: '370',
                desc: 'cat tunnel',
                price: 10.99,
                discount: true,
                discountAmount: 25,
            },
            {
                suffix: 'deals',
                path:
                    'https://res.cloudinary.com/duim1pyqp/image/upload/v1596550360/petlove/content/ewok-hallowen-costume_ortqac.png',
                width: '350',
                height: '370',
                desc: 'ewok hallowen costume',
                price: 15.99,
                discount: true,
                discountAmount: 20,
            },
            {
                suffix: 'deals',
                path:
                    'https://res.cloudinary.com/duim1pyqp/image/upload/v1596550360/petlove/content/batman-hallowen-costume_ymrwmc.png',
                width: '350',
                height: '370',
                desc: 'batman costume',
                price: 15.99,
                discount: true,
                discountAmount: 20,
            },
            {
                suffix: 'deals',
                path:
                    'https://res.cloudinary.com/duim1pyqp/image/upload/v1596550360/petlove/content/superman-hallowen-costume_ojd6lk.png',
                width: '350',
                height: '370',
                desc: 'superman costume',
                price: 10.99,
                discount: true,
                discountAmount: 20,
            },
        ],
        pets: [
            {
                suffix: 'pets',
                path: 'content/images/elephant-costume.png',
                width: '262',
                height: '276',
                desc: 'elephant costume',
                price: 16.99,
                discount: false,
            },
            {
                suffix: 'pets',
                path: 'content/images/super-girl-costume.png',
                width: '262',
                height: '276',
                desc: 'supergirl costume',
                price: 10.99,
                discount: false,
            },
            {
                suffix: 'pets',
                path: 'content/images/wonder-woman-costume.png',
                width: '262',
                height: '276',
                desc: 'wonder woman costume',
                price: 12.99,
                discount: false,
            },
            {
                suffix: 'pets',
                path: 'content/images/super-rat-costume.png',
                width: '262',
                height: '276',
                desc: 'super rat costume',
                price: 9.99,
                discount: false,
            },
            {
                suffix: 'pets',
                path: 'content/images/witch-costume.png',
                width: '262',
                height: '276',
                desc: 'witch costume',
                price: 9.99,
                discount: false,
            },
            {
                suffix: 'pets',
                path: 'content/images/dragon-costume.png',
                width: '262',
                height: '276',
                desc: 'dragon costume',
                price: 16.99,
                discount: false,
            },
            {
                suffix: 'pets',
                path: 'content/images/marmaid-costume.png',
                width: '262',
                height: '276',
                desc: 'mermaid costume',
                price: 12.99,
                discount: false,
            },
            {
                suffix: 'pets',
                path: 'content/images/tortilla-costume.png',
                width: '262',
                height: '276',
                desc: 'tortilla costume',
                price: 18.99,
                discount: false,
            },
            {
                suffix: 'pets',
                path: 'content/images/prisioner-costume.png',
                width: '262',
                height: '276',
                desc: 'prisoner costume',
                price: 10.99,
                discount: false,
            },
        ],

        // Page Services
        service: [
            {
                suffix: 'services',
                service: 'gromming',
                path: '/assets/images/card-img-grooming.jpg',
                desc: 'dog gromming services',
            },
            {
                suffix: 'services',
                service: 'adoption',
                path: '/assets/images/card-img-adoption.jpg',
                desc: 'dog adoption services',
            },
            {
                suffix: 'services',
                service: 'pet wash',
                path: '/assets/images/card-img-wash.jpg',
                desc: 'dog pet wash services',
            },
            {
                suffix: 'services',
                service: 'events',
                path: '/assets/images/card-img-events.jpg',
                desc: 'dog event services',
            },
        ],
        // Page Services
        aboutUs: [
            {
                suffix: 'aboutus',
                label: 'our history',
                link: './page-single-content.html',
                path: '/assets/images/card-img-history.jpg',
                desc: 'our history picture',
            },
            {
                suffix: 'aboutus',
                label: 'mission and values',
                link: './page-mission-values.html',
                path: '/assets/images/card-img-mission.jpg',
                desc: 'mission and values picture',
            },
            {
                suffix: 'aboutus',
                label: 'contact us',
                link: 'page-single-forms.html',
                path: '/assets/images/card-img-contact.jpg',
                desc: 'contact picture',
            },
            {
                suffix: 'aboutus',
                label: 'out team',
                link: 'page-our-team.html',
                path: '/assets/images/card-img-team.jpg',
                desc: 'our team picture',
            },
        ],
        // Page Our Team
        ourTeam: [
            {
                name: 'sergiana freitas',
                path: '/assets/images/teammate1.jpg',
            },
            {
                name: 'mansi sojitra',
                path: '/assets/images/teammate2.jpg',
            },
            {
                name: 'juliana bastos',
                path: '/assets/images/teammate3.jpg',
            },
            {
                name: 'hui yang',
                path: '/assets/images/teammate4.jpg',
            },
        ],
    },
]
