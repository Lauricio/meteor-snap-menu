var snapper;

  Template.hello.events({
    'click .js-openLeft' : function () {
      // console.log(snapper)
      snapper.open('left')
  }
  });

Template.hello.created = function () {
  Meteor.defer(function () {
    console.log('created')
     snapper = new Snap({
        element: document.getElementById('content')           
    });
         window.scroller = new AppScroll({
         toolbar: document.getElementById('toolbar'),
         scroller: document.getElementById('content')
     });
        window.scroller2 = new AppScroll({
        toolbar: document.getElementById('toolbar'),
        scroller: document.getElementById('draw-left')
    });
    window.scroller.on();
  })}
