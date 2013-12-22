var snapper;

  Template.hello.events({
    'click .js-openLeft' : function () {
      // console.log(snapper)
      snapper.open('left')
  },
  'focus input' :function () {
      console.log("fucus")
      $( "#body" ).addClass( "fixfixed" );
  },
    'blur input' :function (e) {
      console.log("blur")
      e.stopImmediatePropagation();
      $( "#body" ).removeClass( "fixfixed" );
      $(window).scrollTop(0);
  },
    'click #openModal-1, tap #openModal-1' :function () {
      $( "#modal-1" ).toggleClass( "md-show" );
  },
    'click .md-close' :function () {
      $( "#modal-1" ).removeClass( "md-show" );
  }
  });




Template.hello.created = function () {
  Meteor.defer(function () {
    console.log('created')
     snapper = new Snap({
        element: document.getElementById('content')           
    });
    //      window.scroller = new AppScroll({
    //      toolbar: document.getElementById('toolbar'),
    //      scroller: document.getElementById('content')
    //  });
    //     window.scroller2 = new AppScroll({
    //     toolbar: document.getElementById('toolbar'),
    //     scroller: document.getElementById('draw-left')
    // });
    // window.scroller.on();
  })}
