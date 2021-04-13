(function() {
  'use strict';

  var elements = stripe.elements({
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: window.__exampleLocale
  });

  var card = elements.create('card', {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#FFFFFF',
        color: '#FFF',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',

        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#c1c1c1',
        },
      },
      invalid: {
        iconColor: '#A91C22',
        color: '#A91C22',
      },
    },
  });
  card.mount('#example1-card');

  registerElements([card], 'example1');
})();
