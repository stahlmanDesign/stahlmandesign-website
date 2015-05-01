var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.Router.map(function() {
  this.route('newsgraphics', { path: '/newsgraphics' });
  this.route('en5minutes', { path: '/en5minutes' });
  this.route('html5', { path: '/html5' });
  this.route('flash', { path: '/flash' });
  this.route('games', { path: '/games' });
  this.route('animation', { path: '/animation' });
  this.route('art', { path: '/art' });
  this.route('music', { path: '/music' });
  /*
this.resource('products', function() {
    this.resource('product', { path: '/:title' });
  });
  this.resource('contacts',function(){
  	this.resource('contact', { path: '/:name' });
  });
*/

});

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'http://courseware.codeschool.com/ember/images/logo-small.png',
  time: function() {
    return (new Date()).toDateString();
  }.property()
});
App.ContactsIndexController = Ember.Controller.extend({
  contactName: 'Anostagia',
  avatar: 'http://courseware.codeschool.com/ember/images/avatar.png',
  open: function() {
    return ((new Date()).getDay() === 0) ? "Closed" : "Open";
  }.property()
});


/*
App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
});
App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return App.PRODUCTS.findBy('title', params.title);
  }
});

App.ContactsRoute = Ember.Route.extend({
  model: function() {
    return App.CONTACTS;
  }
});
App.ContactRoute = Ember.Route.extend({
  model: function(params) {
    return App.CONTACTS.findBy('name', params.name);
  }
});

App.PRODUCTS = [
  {
    title: 'Flint',
    price: 99,
    description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
    isOnSale: true,
    image: 'http://courseware.codeschool.com/ember/images/products/flint.png'
  },
  {
    title: 'Kindling',
    price: 249,
    description: 'Easily combustible small sticks or twigs used for starting a fire.',
    isOnSale: false,
    image: 'http://courseware.codeschool.com/ember/images/products/kindling.png'
  }
];

App.CONTACTS = [
  {
    name: 'Giamia',
    about: 'Although Giamia came from a humble spark of lightning, he quickly grew to be a great craftsman, providing all the warming instruments needed by those close to him.',
    avatar: 'http://courseware.codeschool.com/ember/images/contacts/giamia.png'
  },
  {
    name: 'Anostagia',
    about: 'Knowing there was a need for it, Anostagia drew on her experience and spearheaded the Flint & Flame storefront. In addition to coding the site, she also creates a few products available in the store.',
    avatar: 'http://courseware.codeschool.com/ember/images/contacts/anostagia.png'
  }
];
*/
