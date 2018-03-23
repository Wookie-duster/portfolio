'use strict'
$(document).ready(function(){
    console.log('Hello world!');
    
})

var projects = [
    {
        name: 'Remount',
        date: 'September - November 2017',
        text: 'The task was set to make the site of a service center with convenient access to prices for a reduced service, a blog and feedback. WordPress was chosen for this purpose. Frontend was made by a team of two people: Eugene Moroz and me. I did rest of the work.',
        technologies: 'Technologies: HTML5, Gulp, PHP, WordPress',
        url: 'http://remount.me',
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
        text: 'MaxData is a startup and it is still under development. Three people worked on it: Eugene Moroz, Kirill Beldiaga and myself. In this project, I set up Geth on Azure, wrote Smartcontracts on Solidity, developed a frontend on React, sent transactions to the Ethereum network, and worked with contracts through Web3.',
        technologies: 'Technologies: HTML5, React, Mobx, Node, Web3, Solidity, Ethereum',
        url: 'http://maxdata.io',
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
        text: 'Это интернет магазин на OpenCart.',
        technologies: 'Technologies: HTML5, PHP, OpenCart',
        url: 'http://tehnofon.com.ua',
        slider: [
            {
                type: 'content__browser',
                image: {url: 'assets/img/tehnofone.png', alt: 'Tehnofon Page'},
                description: 'The tokens contract was upload to blockchain of according to the ERC20 standard with additional functionality.',
            },
            {
                type: 'content__browser',
                image: {url: 'assets/img/tehnofon.gif', alt: 'Tehnofon goods'},
                description: 'Using web3 library and geth (Ethereum node) we made transactions in the Ethereum network and call functions of the contract.',
            },
            {
                type: 'content__browser',
                image: {url: 'assets/img/providers.png', alt: 'Tehnofon Admin'},
                description: 'With the help of a chat it is suggested to buy a tariff with certain conditions. This information is stored in the blockchain.',
            },
        ]
    },
    {
        name: 'Art-insurance',
        date: 'December 2016',
        text: "It's the company internal system system, which allows insurance brokers to serve all of their customer in one place. The system contains calculators for different types of car and healthcare insurance policies, prints out filled documents, stores the data about them, reminds customers about expiration of the contract.",
        technologies: 'Technologies: HTML5, Bootstrap, PHP',
        url: '',
        slider: [
            {
                type: 'content__browser',
                image: {url: 'assets/img/art-insurance.png', alt: 'Art-insurance Page'},
                description: 'The tokens contract was upload to blockchain of according to the ERC20 standard with additional functionality.',
            },
            {
                type: 'content__mobile',
                image: {url: 'assets/img/art-insurance-mobile.gif', alt: 'Art-insurance Mobile'},
                description: 'Using web3 library and geth (Ethereum node) we made transactions in the Ethereum network and call functions of the contract.',
            },
            {
                type: 'content__browser',
                image: {url: 'assets/img/art-insurance.gif', alt: 'Art-insurance Calculator'},
                description: 'With the help of a chat it is suggested to buy a tariff with certain conditions. This information is stored in the blockchain.',
            },
            {
                type: 'content__browser',
                image: {url: 'assets/img/art-insurance-list.gif', alt: 'Art-insurance List'},
                description: 'With the help of a chat it is suggested to buy a tariff with certain conditions. This information is stored in the blockchain.',
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
        openModal: function (index, item) {
            this.$root.openModal(index, item);
            
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
        openModal: function(key, item) {
            console.log(item);
            var e = event;
            
            this.projectitem = item;
            this.modal = true;

            setTimeout(function(){
                $('.ripple').css({
                    left: e.clientX,
                    top: e.clientY
                })
            }, 1)

            $('body').addClass('fixed');

            $(document).ready(function () {
                $('.slider').slick({
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
            });
        },
        closeModal: function(e) {
            this.modal = false;
            $('body').removeClass('fixed');
        }
    }
});