var express = require('express');
var appli = express();

appli.get('/',
	function (request, response){
	response.send("Je sais renvoyer une réponse, je suis un bon serveur");
	}
);

appli.get('/user',
	function (request, response){
	var retour = {nom : "ruperez", prenom : "romain"};
	response.json(retour);
	}
);

appli.listen(8080,function(){
	console.log("j'écoute rien du tout");
});


