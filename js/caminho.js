
window.onload = function(){
//____________________________________________LOGO DO TOPO__________________________________________________________________________________

	document.getElementById("topo480").onclick= function() {		
		document.getElementById("topo480").href="index.html";
	}
	document.getElementById("topo").onclick= function() {		
		document.getElementById("topo").href="index.html";
	}
	document.getElementById("topocadastre").onclick= function() {		
		document.getElementById("topocadastre").href="cadastre.html";
	}
	document.getElementById("topoindique").onclick= function() {		
		document.getElementById("topoindique").href="indiqueloja.html";
	}
//___________________________________________MEU HORIZONTAL__________________________________________________________________________________

	document.getElementById("inicio").onclick= function() {		
		document.getElementById("inicio").href="index.html";
	}
	document.getElementById("destaque").onclick= function() {
		document.getElementById("destaque").href="destaques1.html";
	}
	document.getElementById("sobre").onclick= function() {
		document.getElementById("sobre").href="sobre.html";
	}
	document.getElementById("cadastre").onclick= function() {
		document.getElementById("cadastre").href="login.html";
	}
	document.getElementById("contato").onclick= function() {
		document.getElementById("contato").href="contato.html";
	}
	document.getElementById("ajuda").onclick= function() {
		document.getElementById("ajuda").href="ajuda1.html";
	}
//____________________________________________RODAPE__________________________________________________________________________________
	document.getElementById("rindex").onclick= function() {
		document.getElementById("rindex").href="index.html";
	}
	document.getElementById("rsobre").onclick= function() {
		document.getElementById("rsobre").href="sobre.html";
	}
	document.getElementById("rsobre").onclick= function() {
		document.getElementById("rsobre").href="sobre.html";
	}
	document.getElementById("rtermo").onclick= function() {
		document.getElementById("rtermo").href="trabalheconosco.html";
	}
	document.getElementById("rcontato").onclick= function() {
		document.getElementById("rcontato").href="contato.html";
	}
	
	
	document.getElementById("rcomofunciona").onclick= function() {
		document.getElementById("rcomofunciona").href="ajuda1.html";
	}
	
	document.getElementById("rface").onclick= function() {
		document.getElementById("rface").href="www.facebook.com";
	}

//____________________________________________Menu Lateral__________________________________________________________________________________
	// index.html e destaque.html
	document.getElementById("supermercado").onclick= function() {
		document.getElementById("supermercado").href="categorias/supermercado/supermercado.html#ini";
	}
	document.getElementById("sapataria").onclick= function() {
		document.getElementById("sapataria").href="categorias/sapataria/sapataria.html#ini";
	}
	document.getElementById("farmacia").onclick= function() {
		document.getElementById("farmacia").href="categorias/farmacia/farmacia.html#ini";
	}
	document.getElementById("papelaria").onclick= function() {
		document.getElementById("papelaria").href="categorias/papelaria/papelaria.html#ini";
	}
	document.getElementById("cosmetico").onclick= function() {
		document.getElementById("cosmetico").href="categorias/cosmetico/cosmetico.html#ini";
	}
	document.getElementById("construcao").onclick= function() {
		document.getElementById("construcao").href="categorias/construcao/construcao.html#ini";
	}
	document.getElementById("salao").onclick= function() {
		document.getElementById("salao").href="categorias/salao/salao.html#ini";
	}
	document.getElementById("automoveis").onclick= function() {
		document.getElementById("automoveis").href="categorias/automoveis/automoveis.html#ini";
	}
	document.getElementById("alimentacao").onclick= function() {
		document.getElementById("alimentacao").href="categorias/alimentacao/alimentacao.html#ini";
	}
	document.getElementById("joias").onclick= function() {
		document.getElementById("joias").href="categorias/joias/joias.html#ini";
	}
	document.getElementById("outros").onclick= function() {
		document.getElementById("outros").href="categorias/outros/outros.html#ini";
	}
	if (isMobile()){
		document.getElementsByClassName("rodape")[0].style.display = 'none';	
	}
	
	
	
	
}

function isMobile()
{
	var userAgent = navigator.userAgent.toLowerCase();
	if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 )
		return true;
}
	
		
				
			


