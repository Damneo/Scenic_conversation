(function( $ ){
	
	$.fn.scenicConversation = function(options) {

	  	settings = $.extend( {
	      'type' 				: 'fixed',
	      'charactersId'		: 'characters',
	      'dialogsId' 			: 'conversation',
	      'onlyDisplayTalker' 	: false,
	      'characterName'		: false,
	      'keyNextDialog'		: 32 //Space by default
	    }, options);

	    dialogs = options.dialogs;

	    methods.init();
  	};

	//-----Methods-----
	var methods = {

		init : function() { 
			methods.setConvDiv();
			methods.initPersosBehaviour();
			methods.launch();
		},

		setConvDiv : function() {
			$("body").append("<div id='" + settings.dialogsId + "'></div>");
			$("#" + settings.dialogsId).css({"position":"absolute"}).hide();
		},

		setPersoBehaviour : function(perso, behaviour) {
			if (behaviour != undefined) {
				$("#"+perso).removeClass().addClass(behaviour);
			}
		},

		initPersosBehaviour : function() {
			$("#" + settings.charactersId + " div").each(function() {
				$(this).removeClass().addClass("normal");
			});
		},

		displayText : function(persoId, text) {
			$("#" + settings.dialogsId).fadeOut(function() {
				var characterName = (settings.characterName) ? "<b>" + persoId + "</b>: " : "";

				$("#" + settings.dialogsId).empty().append(characterName + text);

				if (settings.onlyDisplayTalker) {
					methods.onlyDisplayTalker(persoId);
				}

				if (settings.type != "fixed") {
					methods.setConvPosition(persoId);
				}

				$("#" + settings.dialogsId).fadeIn();
			});
		},

		setConvPosition : function(divPersoId) {
			var left 	= $("#" + divPersoId).position().left;
			var top 	= $("#" + divPersoId).position().top;
			var height	= methods.getTotalHeight(settings.dialogsId);
			top -= height + 10;

			$("#" + settings.dialogsId).css({"top":top+"px", "left":left+"px"});
		},

		talk : function(persoId, text) {
			methods.displayText(persoId, text);
		},

		onlyDisplayTalker : function(persoId) {
			$("#" + settings.charactersId + " div").each(function() {
				if ($(this).attr('id') != persoId) {
					$(this).hide();
				} else {
					$(this).show();
				}
			});
		},

		getTotalHeight : function(divId) {
			var height = $("#" + divId).height();
			height += parseInt($("#" + divId).css("border-top-width").slice(0,-2));
			height += parseInt($("#" + divId).css("border-bottom-width").slice(0,-2));
			height += parseInt($("#" + divId).css("padding-top").slice(0,-2));
			height += parseInt($("#" + divId).css("padding-top").slice(0,-2));
			return(height);
		},

		launch : function() {
			var cpt = -1;

			$("body").keyup(function(event) {
				if (event.which == settings.keyNextDialog) {
					cpt += 1;
					if (cpt < dialogs.length) {
						methods.setPersoBehaviour(dialogs[cpt].perso, dialogs[cpt].behaviour);
						methods.talk(dialogs[cpt].perso, dialogs[cpt].text);
					} else {
						$("#" + settings.dialogsId).fadeOut();
						methods.initPersosBehaviour();
					}
				}
			});
		}
	};

})( jQuery );