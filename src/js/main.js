'use strict';
$(document).ready(function(){
    //init css
    $("head").prepend('<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=cyrillic" rel="stylesheet">');
    $("head").prepend('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">');
    $("head").prepend('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">');
    $("head").prepend('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">');
});

//content
var projects = [
    {
        name: 'Remount',
        date: 'October - November 2017',
        type: 'Website',
        text: 'The task was set to make the site of a service center with convenient access to prices for a reduced service, a blog and feedback. WordPress was chosen for this purpose.',
        technologies: 'Technologies: HTML5, PHP, WordPress',
        url: 'http://remount.me',
        logo: 'assets/img/remount-text.png',
        slider: [
            {
                type: 'content__device',
                image: {url: 'assets/img/sketch-remount.png', alt: 'Remount Sketch'},
                description: 'First of all I made a layout in Sketch. UI/UX was designed for mobile and desktop versions.',
            },
            {
                type: 'content__mobile',
                image: {url: 'assets/img/remount-mobile.gif', alt: 'Remount Mobile'},
                description: 'Mobile first and Responsive design.',
            },
            {
                type: 'content__browser',
                image: {url: 'assets/img/remount-grid.gif', alt: 'Remount Hovers'},
                description: 'Convert our HTML template to WordPress theme.',
            },
            {
                type: 'content__browser',
                image: {url: 'assets/img/remount-admin.png', alt: 'Remount Admin'},
                description: 'The content of the site can be managed via WordPress and ACF plugin.',
            },
        ]
    },
    {
        name: 'MaxData',
        date: 'December 2017 - February 2018',
        type: 'DApp',
        text: "MaxData is a startup in the field of advertising telecommunications and it is still under development. The mission of MaxData is to build system where consumers and service providers interact directly. In this project we used Ethereum blockchain technoligies to create ERC20 tokens (MXD). MXD coins will be issued to the user for share his private infotmation.",
        technologies: 'Technologies: HTML5, React, Mobx, Node.js, Web3, Solidity, Ethereum',
        url: 'http://maxdata.io',
        logo: 'assets/img/maxdata-logo.png',
        slider: [
            {
                type: 'content__browser',
                image: {url: 'assets/img/maxdata-remix.png', alt: 'MaxData Solidity'},
                description: 'The tokens contract was upload to blockchain of according to the ERC20 standard with additional functionality.',
            },
            {
                type: 'content__device',
                image: {url: 'assets/img/maxdata-deploy.png', alt: 'MaxData Mist'},
                description: 'Using web3 library and geth (Ethereum node) we made transactions in the Ethereum network and call functions of the contract.',
            },
            {
                type: 'content__browser',
                image: {url: 'assets/img/maxdata-rfp.gif', alt: 'MaxData Chat'},
                description: 'With the help of a chat it is suggested to buy a tariff with certain conditions. This information is stored in the blockchain.',
            },
            {
                type: 'content__browser',
                image: {url: 'assets/img/maxdata-ui.gif', alt: 'MaxData UI'},
                description: 'MaxData is a single page application. In the end, the app will work through webview on the desktop and mobile devices.',
            },
        ]
    },
    {
        name: 'Tehnofon',
        date: 'December 2016',
        type: '',
        text: 'Tehnofon: just good web store, based on Opecart engine. Some features were developed exclusively for client accordingly to company needs, such accessories management and communication with supplier systems.',
        technologies: 'Technologies: HTML5, PHP, OpenCart',
        url: 'http://tehnofon.com.ua',
        logo: 'assets/img/tehnofon-logo.png',
        slider: [
            {
                type: 'content__browser',
                image: {url: 'assets/img/tehnofon.gif', alt: 'Tehnofon goods'},
                description: "The template was purchased and it was completed for client's tasks.",
            },
            {
                type: 'content__mobile',
                image: {url: 'assets/img/tehnofon-mobile.gif', alt: 'Tehnofon Mobile'},
                description: 'The site is fully accessible on mobile devices.',
            },
            {
                type: 'content__browser',
                image: {url: 'assets/img/providers.png', alt: 'Tehnofon Admin'},
                description: 'After the client has issued an order, a list of prices of all vendors is displayed in the admin panel.',
            },
        ]
    },
    {
        name: 'Art-insurance',
        date: 'December 2016',
        type: 'WebApp',
        text: "It's the company internal system, which allows insurance brokers to serve all of their customer in one place. The system contains calculators for different types of car and healthcare insurance policies, prints out filled documents, stores the data about them, reminds customers about expiration of the contract.",
        technologies: 'Technologies: HTML5, Bootstrap, PHP',
        url: '',
        logo: 'assets/img/art-insurance-logo.png',
        slider: [
            {
                type: 'content__browser',
                image: {url: 'assets/img/art-insurance.png', alt: 'Art-insurance Page'},
                description: 'Filtering contracts in real time.',
            },
            {
                type: 'content__mobile',
                image: {url: 'assets/img/art-insurance-mobile.gif', alt: 'Art-insurance Mobile'},
                description: 'All functionality is available on the mobile device.',
            },
            {
                type: 'content__browser',
                image: {url: 'assets/img/art-insurance.gif', alt: 'Art-insurance Calculator'},
                description: 'The system calculates the price of the contract, depending on the coefficients and selected parameters.',
            },
            {
                type: 'content__browser',
                image: {url: 'assets/img/art-insurance-list.gif', alt: 'Art-insurance List'},
                description: 'In the end, the contract and receipt are printed.',
            },
        ]
    },

];

Vue.component('project', {
    template: '#project-template',
    props: {
        item: Object,
        index: Number
    },
    methods: {
        openModal: function (event, index, item) {
            this.$root.openModal(event, index, item);
            
        },
        closeModal: function () {
            this.$root.closeModal();
        }
        
    }
});

Vue.component('modal', {
    template: '#modal-template',
    props: {
        projects: Array,
        projectitem: Object
    },
    mounted: function() {
        //init slider with settings
        $('#slider').slick({
            draggable: true,
            infinite: false,
            prevArrow: null,
            nextArrow: null,
            slidesToShow: 1,
            dots: true,
            centerMode: true,
            centerPadding: '8%',
            focusOnSelect: true
        });
    },
    methods: {
        closeModal: function () {
            this.$root.closeModal();
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        projects: projects,
        modal: false,
        projectitem: {}
    },
    methods: {
        openModal: function(event, key, item) {
            var e = event;
            var self = this;
            
            
            self.projectitem = item;
            self.modal = true;

            //ripple set coordinates x y
            $('.ripple').ready(function() {
                $('.ripple').css({
                    left: e.clientX,
                    top: e.clientY
                })
            })

            $('body').addClass('fixed');

            //esc to close modal
            $(document).on('keyup', function(ev) {
                if (ev.keyCode === 27) {
                    self.modal = false;
                    $('body').removeClass('fixed');
                }
            })
        },
        closeModal: function(e) {            
            this.modal = false;
            $('body').removeClass('fixed');
        }
    }
});