var express = require('express');
var appli = express();

appli.get('/',
	function (request, response){
            response.sendFile( __dirname + '/views/newview.html');
//	response.send("Je sais renvoyer une réponse, je suis un bon serveur");
	}
);

appli.get('/user',
	function (request, response){
	var retour = {nom : "ruperez", prenom : "romain"};
	response.json(retour);
	}
);

appli.listen(process.env.PORT || 8080,function(){
	console.log("j'écoute rien du tout");
});


