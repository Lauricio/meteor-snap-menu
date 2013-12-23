var snapper;

  Template.hello.events({
    'click .js-openLeft' : function () {
      // console.log(snapper)
      snapper.open('left')
  },
  'focus input' :function () {
      console.log("fucus")
      // $( "#body" ).addClass( "fixfixed" );
  },
    'blur input' :function (e) {
      console.log("blur")
      e.stopImmediatePropagation();
      // $( "#body" ).removeClass( "fixfixed" );
      // $(window).scrollTop(0);
  },
    'click #open-modal, tap #open-modal' :function () {
      $( "#mainModal" ).addClass( "is-visible" );
      StatusBar.hide();
  },
    'click #close-modal, tap #close-modal' :function () {
      $( "#mainModal" ).removeClass( "is-visible" );
      StatusBar.show();
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
    // window.scroller.on();
  })}
