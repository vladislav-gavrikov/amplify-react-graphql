connect.core.initCCP(containerDiv, {
   ccpUrl:        'https://vladgavrcallcenter.my.connect.aws/connect/ccp-v2/',        /*REQUIRED (*** has been replaced) */
   loginPopup:    true,          /*optional, default TRUE*/
   softphone:     {              /*optional*/
      allowFramedSoftphone: true
   }
});
connect.contact(function(contact) {

        contact.onIncoming(function(contact) {
		
        });

        contact.onRefresh(function(contact) {
		var checkerString = "OUT";
		var attributeMap = contact.getAttributes();
		var popup = JSON.stringify(attributeMap["popup"]["value"]);
		if (popup === "\"OUT\""){
			console.log("HELLO");
  			window.alert("Out of office");	
		}
		console.log(popup);
		console.log("==========================================");
        });

        contact.onAccepted(function(contact) {

        });

        contact.onEnded(function() {

        });

        contact.onConnected(function() {
  

        });

	contact.onError(function() {

        });

});