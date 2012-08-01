var conv = [
	{
		perso 	: "Pierre",
		text 	: "Hello les amis ! On fait quoi ce soir ?"
	},
	{
		perso 	: "Gaelle",
		text 	: "Normalerment on doit aller manger chez les parents. Ils nous invitent tous les 4 avec Alex."
	},
	{
		perso 		: "Dam",
		text 		: "...",
		behaviour 	: "angry"
	},
	{
		perso 	: "Pierre",
		text 	: "Qu'est-ce qu'il y a Dam ?"
	},
	{
		perso 		: "Dam",
		text 		: "Ils vont finir par croire qu'on squatte chez eux non ?",
		behaviour 	: "normal"
	},
	{
		perso 	: "Gaelle",
		text 	: "Mais non mi amor! Ils sont content de nous recevoir."
	},
	{
		perso 	: "Dam",
		text 	: "Et si on allait se faire un ciné après ?"
	},
	{
		perso 	: "Pierre",
		text 	: "Ben si vous voulez, on pourrait aller voir Blanche-Neige."
	},
	{
		perso 	: "Gaelle",
		text 	: "Oui bonne idée ! Vous croyez que babe voudra ?"
	},
	{
		perso 	: "Pierre",
		text 	: "C'est tiré d'un Disney, donc ça passe. :)"
	},
	{
		perso 		: "Dam",
		text 		: "Lol",
		behaviour 	: "happy"
	}
];

var options = {
	"dialogs"			: conv,
	"dialogsId"			: "dialogs",
	"type"				: "normal",
	"onlyDisplayTalker" : true,
	"characterName"		: true,
	"keyNextDialog"		: 32
};

//================================//
$(document).ready(function() {
	$("body").scenicConversation(options);
});
