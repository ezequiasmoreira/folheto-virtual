
window.onload = function(){
//____________________________________________LOGO DO TOPO__________________________________________________________________________________

	document.getElementById("topo480").onclick= function() {		
		document.getElementById("topo480").href="../../../index.html";
	}
	document.getElementById("topo").onclick= function() {		
		document.getElementById("topo").href="../../../index.html";
	}
	document.getElementById("topocadastre").onclick= function() {		
		document.getElementById("topocadastre").href="../../../cadastre.html";
	}
	document.getElementById("topoindique").onclick= function() {		
		document.getElementById("topoindique").href="../../../indiqueloja.html";
	}
//___________________________________________MEU HORIZONTAL__________________________________________________________________________________

	document.getElementById("inicio").onclick= function() {		
		document.getElementById("inicio").href="../../../index.html";
	}
	document.getElementById("destaque").onclick= function() {
		document.getElementById("destaque").href="../../../destaques1.html";
	}
	document.getElementById("sobre").onclick= function() {
		document.getElementById("sobre").href="../../../sobre.html";
	}
	document.getElementById("cadastre").onclick= function() {
		document.getElementById("cadastre").href="../../../login.html";
	}
	document.getElementById("contato").onclick= function() {
		document.getElementById("contato").href="../../../contato.html";
	}
	document.getElementById("ajuda").onclick= function() {
		document.getElementById("ajuda").href="../../../ajuda1.html";
	}
//____________________________________________RODAPE__________________________________________________________________________________
	document.getElementById("rindex").onclick= function() {
		document.getElementById("rindex").href="../../../index.html";
	}
	document.getElementById("rsobre").onclick= function() {
		document.getElementById("rsobre").href="../../../sobre.html";
	}
	
	document.getElementById("rtermo").onclick= function() {
		document.getElementById("rtermo").href="../../../trabalheconosco.html";
	}
	document.getElementById("rcontato").onclick= function() {
		document.getElementById("rcontato").href="../../../contato.html";
	}
	
	
	document.getElementById("rcomofunciona").onclick= function() {
		document.getElementById("rcomofunciona").href="../../../ajuda1.html";
	}
	
	document.getElementById("rface").onclick= function() {
		document.getElementById("rface").href="www.facebook.com";
	}	
	
//____________________________________________Voltar__________________________________________________________________________________
	document.getElementsByClassName("voltarservico")[0].onclick= function() {
		document.getElementsByClassName("voltarservico")[0].href="../farmacia.html#ini";
	}
	document.getElementsByClassName("voltarsercicop")[0].onclick= function() {
			document.getElementsByClassName("voltarsercicop")[0].href="../farmacia.html#ini";
		}

	//codigo para verificar se a data do encarte está em vigor		
	var datas = document.getElementsByClassName("edata");
	for (var i = 0; i < datas.length; i++){
		var strData = datas[i].innerHTML;
		var partesData = strData.split("/");
		var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);		
		if (data > new Date()){			
			
		}else{
			document.getElementsByClassName("folheto")[i].style.display = 'none';			
		}
	}
		
}