
(function main(win,doc){
	'use strict';

	let btVendas = document.getElementById('vendas');
	let btEstorno = document.getElementById('estorno');
        let btPlanilha = document.getElementById('export');
//eventos

	btVendas.addEventListener('click',venda,false);
	btEstorno.addEventListener('click',estorno,false);
	btPlanilha.addEventListener('click',planilha,false);




//VARIAVEIS DAS FERRAMENTAS


//BATERIAS
	let somaBateria18 = 0;
	let somaBateria14 = 0;
	let somaBateria12 = 0;

//FERRAMENTAS MANUAL
	let somaGuia = 0;
	let somaMesaPantografica1 = 0;
	let somaMesaPantografica2 = 0;
	let somaMesaPantografica3 = 0;
	let somaCarrinho1 = 0;
	let somaCarrinho2 = 0;
	let somaCarrinho3 = 0;
	let somaGrampeador2 = 0;
	let somaGrampeador3 = 0;
	let somaGrampeador17 = 0;
	let somaGrampeador21 = 0;
	let somaGrampeador22 = 0;
	let somaGrampeador26 = 0;
	let somaGrampeador31 = 0;
	let somaGrampeador37 = 0;
	let somaGrampeador45 = 0;
	let somaGrampeador46 = 0;
	let somaGrampeador47 = 0;
	let somaGrampeador48 = 0;
	let somaGrampeador49 = 0;
	let somaGrampeador50 = 0;
	let somaGrampeador51 = 0;
	let somaGrampeador52 = 0;
	let somaGrampeador53 = 0;

//FERRAMENTAS Á BATERIA E ELÉTRICA
	let somaChaveImpacto = 0;
	let somaEsmerilhadeira121 = 0;
	let somaEsmerilhadeira116 = 0;
	let somaEsmerilhadeira117 = 0;
	let somaFuradeira200 = 0;
	let somaFuradeira205 = 0;
	let somaFuradeira231 = 0;
	let somaLixadeiraCinta105 = 0;
	let somaLixadeiraCinta107 = 0;
	let somaLixadeiraCinta585 = 0;
	let somaLixadeiraPolitriz118 = 0;
	let somaLixadeiraPolitriz119 = 0;
	let somaLixadeiraPolitriz120 = 0;
	let somaLixadeiraPolitriz581 = 0;
	let somaNivelLaser1000 = 0;
	let somaParafusadeira78 = 0;
	let somaParafusadeira126 = 0;
	let somaParafusadeira149 = 0;
	let somaParafusadeira163 = 0;
	let somaParafusadeira177 = 0;
	let somaParafusadeira199 = 0;
	let somaParafusadeira219 = 0;
	let somaParafusadeira221 = 0;
	let somaParafusadeira236 = 0;
	let somaParafusadeira237 = 0;
	let somaParafusadeira238 = 0;
	let somaParafusadeira242 = 0;
	let somaParafusadeira564 = 0;
	let somaParafusadeira2020 = 0;
	let somaParafusadeira2023 = 0;
	let somaParafusadeira2031 = 0;
	let somaPinador2 = 0;
	let somaPinador5 = 0;
	let somaPinador16 = 0;
	let somaPinador18 = 0;
	let somaPinador22 = 0;
	let somaPinador124 = 0;
	let somaPinador128 = 0;
	let somaPinador308 = 0;
	let somaPinador575 = 0;
	let somaPinador597 = 0;
	let somaPinador598 = 0;
	let somaPistola111 = 0;
	let somaPistola112 = 0;
	let somaPlaina95 = 0;
	let somaPlaina96 = 0;
	let somaPlaina97 = 0;
	let somaPlaina98 = 0;
	let somaPlaina99 = 0;
	let somaPlaina100 = 0;
	let somaPlaina101 = 0;
	let somaPlaina102 = 0;
	let somaPlaina188 = 0;
	let somaPlaina583 = 0;
	let somaPlaina584 = 0;
	let somaRefletor613 = 0;
	let somaRefletor615 = 0;
	let somaRefletor617 = 0;
	let somaRefletor618 = 0;
	let somaRefletor624 = 0;
	let somaRefletor625 = 0;
	let somaRefletor626 = 0;
	let somaRefletor222 = 0;
	let somaRefletor1005 = 0;
	let somaRefletor1006 = 0;
	let somaSerraSabre89 = 0;
	let somaSerraSabre90 = 0;
	let somaSerraSabre91 = 0;
	let somaSerraSabre92 = 0;
	let somaSerraSabre574 = 0;
	let somaSerraSabre88 = 0;
	let somaSerraSabre195 = 0;
	let somaSerraTicoTico168 = 0;
	let somaSerraTicoTico197 = 0;
	let somaSerraTicoTico210 = 0;
	let somaSerraTicoTico211 = 0;
	let somaSerraTicoTico212 = 0;
	let somaSerraTicoTico214 = 0;
	let somaSerraTicoTico608 = 0;
	let somaSerraTicoTico609 = 0;
	let somaSerraTicoTico610 = 0;
	let somaSerraTicoTico586 = 0;
	let somaSerraTicoTico587 = 0;
	let somaSerraTicoTico590 = 0;
	let somaSerraTico610 = 0;
	let somaSoprador215 = 0;
	let somaSoprador216 = 0;
	let somaSoprador558 = 0;
	let somaTracador81 = 0;
	let somaTracador133 = 0;
	let somaTracador135 = 0;
	let somaTracador139 = 0;
	let somaTracador182 = 0;
	let somaTracador602 = 0;
	let somaTracador604 = 0;
	let somaTracador605 = 0;
	let somaTracador606 = 0;
	let somaTracador607 = 0;
	let somaTracador82 = 0;
	let somaTracador184 = 0;
	let somaTracador187 = 0;
	let somaTracador300 = 0;

//ESCADA 10 DEGRAUS
	let somaEscadaG1 = 0;
	let somaEscadaG2 = 0;
	let somaEscadaG3 = 0;
	let somaEscadaG5 = 0;
	let somaEscadaG7 = 0;

//ESCADA 8 DEGRAUS
	let somaEscadaM2 = 0;
	let somaEscadaM3 = 0;
	let somaEscadaM4 = 0;
	let somaEscadaM5 = 0;
	let somaEscadaM7 = 0;
	let somaEscadaM8 = 0;
	let somaEscadaM9 = 0;
	let somaEscadaM10 = 0;
	let somaEscadaM13 = 0;
	let somaEscadaM15 = 0;
	let somaEscadaM17 = 0;
	let somaEscadaM18 = 0;
	let somaEscadaM19 = 0;
	let somaEscadaM20 = 0;
	let somaEscadaM21 = 0;
	let somaEscadaM22 = 0;
	let somaEscadaM23 = 0;
	let somaEscadaM27 = 0;
	let somaEscadaM28 = 0;
	let somaEscadaM29 = 0;
	let somaEscadaM31 = 0;
	let somaEscadaM33 = 0;
	let somaEscadaM34 = 0;
	let somaEscadaM35 = 0;
	let somaEscadaM36 = 0;
	let somaEscadaM37 = 0;
	let somaEscadaM39 = 0;
	let somaEscadaM41 = 0;
	let somaEscadaM43 = 0;
	let somaEscadaM44 = 0;
	let somaEscadaM45 = 0;
	let somaEscadaM46 = 0;

//ESCADA 6 DEGRAUS
	let somaEscadaP2 = 0;
	let somaEscadaP5 = 0;
	let somaEscadaP7 = 0;
	let somaEscadaP10 = 0;
	let somaEscadaP11 = 0;
	let somaEscadaP12 = 0;
	let somaEscadaP13 = 0;
	let somaEscadaP14 = 0;
	let somaEscadaP15 = 0;
	let somaEscadaP17 = 0;
	let somaEscadaP18 = 0;
	let somaEscadaP19 = 0;
	let somaEscadaP21 = 0;
	let somaEscadaP23 = 0;
	let somaEscadaP26 = 0;
	let somaEscadaP28 = 0;
	let somaEscadaP31 = 0;
	let somaEscadaP33 = 0;
	let somaEscadaP34 = 0;
	let somaEscadaP35 = 0;
	let somaEscadaP36 = 0;
	let somaEscadaP37 = 0;
	let somaEscadaP38 = 0;
	let somaEscadaP39 = 0;
	let somaEscadaP40 = 0;

//FUN&Ccedil;&Oacute;ES

	function venda(e) 
	{
	
	    if(document.getElementById('bateria-18').checked)
	    {
		somaBateria18 = somaBateria18 + 1;
                document.getElementById("resultadoBateria18").innerHTML = somaBateria18;

	    }else if(document.getElementById("bateria-14").checked)
	    {
		somaBateria14 = somaBateria14 + 1;
		document.getElementById("resultadoBateria14").innerHTML = somaBateria14;

	    }else if(document.getElementById('bateria-12').checked)
	    {
		somaBateria12 = somaBateria12 + 1;
		document.getElementById("resultadoBateria12").innerHTML = somaBateria12;

	    }else if(document.getElementById('guia-copo').checked)
	    {
		somaGuia = somaGuia + 1;
		document.getElementById("resultadoGuia").innerHTML = somaGuia;

	    }else if(document.getElementById('mesa1').checked)
	    {
		somaMesaPantografica1 = somaMesaPantografica1 + 1;
		document.getElementById("resultadoMesaPantografica1").innerHTML = somaMesaPantografica1;

	    }else if(document.getElementById('mesa2').checked)
	    {
		somaMesaPantografica2 = somaMesaPantografica2 + 1;
		document.getElementById("resultadoMesaPantografica2").innerHTML = somaMesaPantografica2;

	    }else if(document.getElementById('mesa3').checked)
	    {
		somaMesaPantografica3 = somaMesaPantografica3 + 1;
		document.getElementById("resultadoMesaPantografica3").innerHTML = somaMesaPantografica3;

	    }else if(document.getElementById('carrinho1').checked)
	    {
		somaCarrinho1 = somaCarrinho1 + 1;
		document.getElementById("resultadoCarrinho1").innerHTML = somaCarrinho1;

	    }else if(document.getElementById('grampeador2').checked)
	    {
		somaGrampeador2 = somaGrampeador2 + 1;
		document.getElementById("resultadoGrampeador2").innerHTML = somaGrampeador2;

	    }else if(document.getElementById('grampeador3').checked)
	    {
		somaGrampeador3 = somaGrampeador3 + 1;
		document.getElementById("resultadoGrampeador3").innerHTML = somaGrampeador3;

	    }else if(document.getElementById('grampeador17').checked)
	    {
		somaGrampeador17 = somaGrampeador17 + 1;
		document.getElementById("resultadoGrampeador17").innerHTML = somaGrampeador17;

	    }else if(document.getElementById('grampeador21').checked)
	    {
		somaGrampeador21 = somaGrampeador21 + 1;
		document.getElementById("resultadoGrampeador21").innerHTML = somaGrampeador21;

	    }else if(document.getElementById('grampeador22').checked)
	    {
		somaGrampeador22 = somaGrampeador22 + 1;
		document.getElementById("resultadoGrampeador22").innerHTML = somaGrampeador22;

	    }else if(document.getElementById('grampeador26').checked)
	    {
		somaGrampeador26 = somaGrampeador26 + 1;
		document.getElementById("resultadoGrampeador26").innerHTML = somaGrampeador26;

	    }else if(document.getElementById('grampeador31').checked)
	    {
		somaGrampeador31 = somaGrampeador31 + 1;
		document.getElementById("resultadoGrampeador31").innerHTML = somaGrampeador31;

	    }else if(document.getElementById('grampeador37').checked)
	    {
		somaGrampeador37 = somaGrampeador37 + 1;
		document.getElementById("resultadoGrampeador37").innerHTML = somaGrampeador37;

	    }else if(document.getElementById('grampeador45').checked)
	    {
		somaGrampeador45 = somaGrampeador45 + 1;
		document.getElementById("resultadoGrampeador45").innerHTML = somaGrampeador45;

	    }else if(document.getElementById('grampeador46').checked)
	    {
		somaGrampeador46 = somaGrampeador46 + 1;
		document.getElementById("resultadoGrampeador46").innerHTML = somaGrampeador46;

	    }else if(document.getElementById('grampeador47').checked)
	    {
		somaGrampeador47 = somaGrampeador47 + 1;
		document.getElementById("resultadoGrampeador47").innerHTML = somaGrampeador47;

	    }else if(document.getElementById('grampeador48').checked)
	    {
		somaGrampeador48 = somaGrampeador48 + 1;
		document.getElementById("resultadoGrampeador48").innerHTML = somaGrampeador48;

	    }else if(document.getElementById('grampeador49').checked)
	    {
		somaGrampeador49 = somaGrampeador49 + 1;
		document.getElementById("resultadoGrampeador49").innerHTML = somaGrampeador49;

	    }else if(document.getElementById('grampeador50').checked)
	    {
		somaGrampeador50 = somaGrampeador50 + 1;
		document.getElementById("resultadoGrampeador50").innerHTML = somaGrampeador50;

	    }else if(document.getElementById('grampeador51').checked)
	    {
		somaGrampeador51 = somaGrampeador51 + 1;
		document.getElementById("resultadoGrampeador51").innerHTML = somaGrampeador51;

	    }else if(document.getElementById('grampeador52').checked)
	    {
		somaGrampeador52 = somaGrampeador52 + 1;
		document.getElementById("resultadoGrampeador52").innerHTML = somaGrampeador52;

	    }else if(document.getElementById('grampeador53').checked)
	    {
		somaGrampeador53 = somaGrampeador53 + 1;
		document.getElementById("resultadoGrampeador53").innerHTML = somaGrampeador53;

	    }else if(document.getElementById('chave-impacto').checked)
	    {
		somaChaveImpacto = somaChaveImpacto + 1;
		document.getElementById("resultadoChaveImpacto").innerHTML = somaChaveImpacto;

	    }else if(document.getElementById('esmerilhadeira121').checked)
	    {
		somaEsmerilhadeira121 = somaEsmerilhadeira121 + 1;
		document.getElementById("resultadoEsmerilhadeira121").innerHTML = somaEsmerilhadeira121;

	    }else if(document.getElementById('esmerilhadeira116').checked)
	    {
		somaEsmerilhadeira116 = somaEsmerilhadeira116 + 1;
		document.getElementById("resultadoEsmerilhadeira116").innerHTML = somaEsmerilhadeira116;

	    }else if(document.getElementById('esmerilhadeira117').checked)
	    {
		somaEsmerilhadeira117 = somaEsmerilhadeira117 + 1;
		document.getElementById("resultadoEsmerilhadeira117").innerHTML = somaEsmerilhadeira117;

	    }else if(document.getElementById('furadeira200').checked)
	    {
		somaFuradeira200 = somaFuradeira200 + 1;
		document.getElementById("resultadoFuradeira200").innerHTML = somaFuradeira200;

	    }else if(document.getElementById('furadeira231').checked)
	    {
		somaFuradeira231 = somaFuradeira231 + 1;
		document.getElementById("resultadoFuradeira231").innerHTML = somaFuradeira231;

	    }else if(document.getElementById('lixadeira-cinta105').checked)
	    {
		somaLixadeiraCinta105 = somaLixadeiraCinta105 + 1;
		document.getElementById("resultadoLixadeiraCinta105").innerHTML = somaLixadeiraCinta105;

	    }else if(document.getElementById('lixadeira-cinta107').checked)
	    {
		somaLixadeiraCinta107 = somaLixadeiraCinta107 + 1;
		document.getElementById("resultadoLixadeiraCinta107").innerHTML = somaLixadeiraCinta107;

	    }else if(document.getElementById('lixadeira-cinta585').checked)
	    {
		somaLixadeiraCinta585 = somaLixadeiraCinta585 + 1;
		document.getElementById("resultadoLixadeiraCinta585").innerHTML = somaLixadeiraCinta585;

	    }else if(document.getElementById('lixadeira-politriz118').checked)
	    {
		somaLixadeiraPolitriz118 = somaLixadeiraPolitriz118 + 1;
		document.getElementById("resultadoLixadeiraPolitriz118").innerHTML = somaLixadeiraPolitriz118;

	    }else if(document.getElementById('lixadeira-politriz119').checked)
	    {
		somaLixadeiraPolitriz119 = somaLixadeiraPolitriz119 + 1;
		document.getElementById("resultadoLixadeiraPolitriz119").innerHTML = somaLixadeiraPolitriz119;

	    }else if(document.getElementById('lixadeira-politriz120').checked)
	    {
		somaLixadeiraPolitriz120 = somaLixadeiraPolitriz120 + 1;
		document.getElementById("resultadoLixadeiraPolitriz120").innerHTML = somaLixadeiraPolitriz120;

	    }else if(document.getElementById('lixadeira-politriz581').checked)
	    {
		somaLixadeiraPolitriz581 = somaLixadeiraPolitriz581 + 1;
		document.getElementById("resultadoLixadeiraPolitriz581").innerHTML = somaLixadeiraPolitriz581;

	    }else if(document.getElementById('nivel-laser1000').checked)
	    {
		somaNivelLaser1000 = somaNivelLaser1000 + 1;
		document.getElementById("resultadoNivelLaser1000").innerHTML = somaNivelLaser1000;

	    }else if(document.getElementById('parafusadeira78').checked)
	    {
		somaParafusadeira78 = somaParafusadeira78 + 1;
		document.getElementById("resultadoParafusadeira78").innerHTML = somaParafusadeira78;

	    }else if(document.getElementById('parafusadeira126').checked)
	    {
		somaParafusadeira126 = somaParafusadeira126 + 1;
		document.getElementById("resultadoParafusadeira126").innerHTML = somaParafusadeira126;

	    }else if(document.getElementById('parafusadeira149').checked)
	    {
		somaParafusadeira149 = somaParafusadeira149 + 1;
		document.getElementById("resultadoParafusadeira149").innerHTML = somaParafusadeira149;

	    }else if(document.getElementById('parafusadeira163').checked)
	    {
		somaParafusadeira163 = somaParafusadeira163 + 1;
		document.getElementById("resultadoParafusadeira163").innerHTML = somaParafusadeira163;

	    }else if(document.getElementById('parafusadeira177').checked)
	    {
		somaParafusadeira177 = somaParafusadeira177 + 1;
		document.getElementById("resultadoParafusadeira177").innerHTML = somaParafusadeira177;

	    }else if(document.getElementById('parafusadeira199').checked)
	    {
		somaParafusadeira199 = somaParafusadeira199 + 1;
		document.getElementById("resultadoParafusadeira199").innerHTML = somaParafusadeira199;

	    }else if(document.getElementById('parafusadeira221').checked)
	    {
		somaParafusadeira221 = somaParafusadeira221 + 1;
		document.getElementById("resultadoParafusadeira221").innerHTML = somaParafusadeira221;

	    }else if(document.getElementById('parafusadeira236').checked)
	    {
		somaParafusadeira236 = somaParafusadeira236 + 1;
		document.getElementById("resultadoParafusadeira236").innerHTML = somaParafusadeira236;

	    }else if(document.getElementById('parafusadeira237').checked)
	    {
		somaParafusadeira237 = somaParafusadeira237 + 1;
		document.getElementById("resultadoParafusadeira237").innerHTML = somaParafusadeira237;

	    }else if(document.getElementById('parafusadeira238').checked)
	    {
		somaParafusadeira238 = somaParafusadeira238 + 1;
		document.getElementById("resultadoParafusadeira238").innerHTML = somaParafusadeira238;

	    }else if(document.getElementById('parafusadeira242').checked)
	    {
		somaParafusadeira242 = somaParafusadeira242 + 1;
		document.getElementById("resultadoParafusadeira242").innerHTML = somaParafusadeira242;

	    }else if(document.getElementById('parafusadeira564').checked)
	    {
		somaParafusadeira564 = somaParafusadeira564 + 1;
		document.getElementById("resultadoParafusadeira564").innerHTML = somaParafusadeira564;

	    }else if(document.getElementById('parafusadeira2020').checked)
	    {
		somaParafusadeira2020 = somaParafusadeira2020 + 1;
		document.getElementById("resultadoParafusadeira2020").innerHTML = somaParafusadeira2020;

	    }else if(document.getElementById('parafusadeira2023').checked)
	    {
		somaParafusadeira2023 = somaParafusadeira2023 + 1;
		document.getElementById("resultadoParafusadeira2023").innerHTML = somaParafusadeira2023;

	    }else if(document.getElementById('parafusadeira2031').checked)
	    {
		somaParafusadeira2031 = somaParafusadeira2031 + 1;
		document.getElementById("resultadoParafusadeira2031").innerHTML = somaParafusadeira2031;

	    }else if(document.getElementById('pinador16').checked)
	    {
		somaPinador16 = somaPinador16 + 1;
		document.getElementById("resultadoPinador16").innerHTML = somaPinador16;

	    }else if(document.getElementById('pinador128').checked)
	    {
		somaPinador128 = somaPinador128 + 1;
		document.getElementById("resultadoPinador128").innerHTML = somaPinador128;

	    }else if(document.getElementById('pinador308').checked)
	    {
		somaPinador308 = somaPinador308 + 1;
		document.getElementById("resultadoPinador308").innerHTML = somaPinador308;

	    }else if(document.getElementById('pinador597').checked)
	    {
		somaPinador597 = somaPinador597 + 1;
		document.getElementById("resultadoPinador597").innerHTML = somaPinador597;

	    }else if(document.getElementById('pistola111').checked)
	    {
		somaPistola111 = somaPistola111 + 1;
		document.getElementById("resultadoPistola111").innerHTML = somaPistola111;

	    }else if(document.getElementById('pistola112').checked)
	    {
		somaPistola112 = somaPistola112 + 1;
		document.getElementById("resultadoPistola112").innerHTML = somaPistola112;

	    }else if(document.getElementById('plaina95').checked)
	    {
		somaPlaina95 = somaPlaina95 + 1;
		document.getElementById("resultadoPlaina95").innerHTML = somaPlaina95;

	    }else if(document.getElementById('plaina96').checked)
	    {
		somaPlaina96 = somaPlaina96 + 1;
		document.getElementById("resultadoPlaina96").innerHTML = somaPlaina96;

	    }else if(document.getElementById('plaina97').checked)
	    {
		somaPlaina97 = somaPlaina97 + 1;
		document.getElementById("resultadoPlaina97").innerHTML = somaPlaina97;

	    }else if(document.getElementById('plaina98').checked)
	    {
		somaPlaina98 = somaPlaina98 + 1;
		document.getElementById("resultadoPlaina98").innerHTML = somaPlaina98;

	    }else if(document.getElementById('plaina99').checked)
	    {
		somaPlaina99 = somaPlaina99 + 1;
		document.getElementById("resultadoPlaina99").innerHTML = somaPlaina99;

	    }else if(document.getElementById('plaina100').checked)
	    {
		somaPlaina100 = somaPlaina100 + 1;
		document.getElementById("resultadoPlaina100").innerHTML = somaPlaina100;

	    }else if(document.getElementById('plaina101').checked)
	    {
		somaPlaina101 = somaPlaina101 + 1;
		document.getElementById("resultadoPlaina101").innerHTML = somaPlaina101;

	    }else if(document.getElementById('plaina102').checked)
	    {
		somaPlaina102 = somaPlaina102 + 1;
		document.getElementById("resultadoPlaina102").innerHTML = somaPlaina102;

	    }else if(document.getElementById('plaina188').checked)
	    {
		somaPlaina188 = somaPlaina188 + 1;
		document.getElementById("resultadoPlaina188").innerHTML = somaPlaina188;

	    }else if(document.getElementById('plaina583').checked)
	    {
		somaPlaina583 = somaPlaina583 + 1;
		document.getElementById("resultadoPlaina583").innerHTML = somaPlaina583;

	    }else if(document.getElementById('plaina584').checked)
	    {
		somaPlaina584 = somaPlaina584 + 1;
		document.getElementById("resultadoPlaina584").innerHTML = somaPlaina584;

	    }else if(document.getElementById('carrinho2').checked)
	    {
		somaCarrinho2 = somaCarrinho2 + 1;
		document.getElementById("resultadoCarrinho2").innerHTML = somaCarrinho2;

	    }else if(document.getElementById('carrinho3').checked)
	    {
		somaCarrinho3 = somaCarrinho3 + 1;
		document.getElementById("resultadoCarrinho3").innerHTML = somaCarrinho3;

	    }else if(document.getElementById('refletor613').checked)
	    {
		somaRefletor613 = somaRefletor613 + 1;
		document.getElementById("resultadoRefletor613").innerHTML = somaRefletor613;

	    }else if(document.getElementById('refletor615').checked)
	    {
		somaRefletor615 = somaRefletor615 + 1;
		document.getElementById("resultadoRefletor615").innerHTML = somaRefletor615;

	    }else if(document.getElementById('refletor617').checked)
	    {
		somaRefletor617 = somaRefletor617 + 1;
		document.getElementById("resultadoRefletor617").innerHTML = somaRefletor617;

	    }else if(document.getElementById('refletor618').checked)
	    {
		somaRefletor618 = somaRefletor618 + 1;
		document.getElementById("resultadoRefletor618").innerHTML = somaRefletor618;

	    }else if(document.getElementById('refletor624').checked)
	    {
		somaRefletor624 = somaRefletor624 + 1;
		document.getElementById("resultadoRefletor624").innerHTML = somaRefletor624;

	    }else if(document.getElementById('refletor625').checked)
	    {
		somaRefletor625 = somaRefletor625 + 1;
		document.getElementById("resultadoRefletor625").innerHTML = somaRefletor625;

	    }else if(document.getElementById('refletor626').checked)
	    {
		somaRefletor626 = somaRefletor626 + 1;
		document.getElementById("resultadoRefletor626").innerHTML = somaRefletor626;

	    }else if(document.getElementById('refletor222').checked)
	    {
		somaRefletor222 = somaRefletor222 + 1;
		document.getElementById("resultadoRefletor222").innerHTML = somaRefletor222;

	    }else if(document.getElementById('refletor1005').checked)
	    {
		somaRefletor1005 = somaRefletor1005 + 1;
		document.getElementById("resultadoRefletor1005").innerHTML = somaRefletor1005;

	    }else if(document.getElementById('refletor1006').checked)
	    {
		somaRefletor1006 = somaRefletor1006 + 1;
		document.getElementById("resultadoRefletor1006").innerHTML = somaRefletor1006;

	    }else if(document.getElementById('serra-sabre89').checked)
	    {
		somaSerraSabre89 = somaSerraSabre89 + 1;
		document.getElementById("resultadoSerraSabre89").innerHTML = somaSerraSabre89;

	    }else if(document.getElementById('serra-sabre90').checked)
	    {
		somaSerraSabre90 = somaSerraSabre90 + 1;
		document.getElementById("resultadoSerraSabre90").innerHTML = somaSerraSabre90;

	    }else if(document.getElementById('serra-sabre91').checked)
	    {
		somaSerraSabre91 = somaSerraSabre91 + 1;
		document.getElementById("resultadoSerraSabre91").innerHTML = somaSerraSabre91;

	    }else if(document.getElementById('serra-sabre92').checked)
	    {
		somaSerraSabre92 = somaSerraSabre92 + 1;
		document.getElementById("resultadoSerraSabre92").innerHTML = somaSerraSabre92;

	    }else if(document.getElementById('serra-sabre574').checked)
	    {
		somaSerraSabre574 = somaSerraSabre574 + 1;
		document.getElementById("resultadoSerraSabre574").innerHTML = somaSerraSabre574;

	    }else if(document.getElementById('serra-sabre88').checked)
	    {
		somaSerraSabre88 = somaSerraSabre88 + 1;
		document.getElementById("resultadoSerraSabre88").innerHTML = somaSerraSabre88;

	    }else if(document.getElementById('serra-sabre195').checked)
	    {
		somaSerraSabre195 = somaSerraSabre195 + 1;
		document.getElementById("resultadoSerraSabre195").innerHTML = somaSerraSabre195;

	    }else if(document.getElementById('tico-tico168').checked)
	    {
		somaSerraTicoTico168 = somaSerraTicoTico168 + 1;
		document.getElementById("resultadoSerraTicoTico168").innerHTML = somaSerraTicoTico168;

	    }else if(document.getElementById('tico-tico197').checked)
	    {
		somaSerraTicoTico197 = somaSerraTicoTico197 + 1;
		document.getElementById("resultadoSerraTicoTico197").innerHTML = somaSerraTicoTico197;

	    }else if(document.getElementById('tico-tico210').checked)
	    {
		somaSerraTicoTico210 = somaSerraTicoTico210 + 1;
		document.getElementById("resultadoSerraTicoTico210").innerHTML = somaSerraTicoTico210;

	    }else if(document.getElementById('tico-tico211').checked)
	    {
		somaSerraTicoTico211 = somaSerraTicoTico211 + 1;
		document.getElementById("resultadoSerraTicoTico211").innerHTML = somaSerraTicoTico211;

	    }else if(document.getElementById('tico-tico212').checked)
	    {
		somaSerraTicoTico212 = somaSerraTicoTico212 + 1;
		document.getElementById("resultadoSerraTicoTico212").innerHTML = somaSerraTicoTico212;

	    }else if(document.getElementById('tico-tico214').checked)
	    {
		somaSerraTicoTico214 = somaSerraTicoTico214 + 1;
		document.getElementById("resultadoSerraTicoTico214").innerHTML = somaSerraTicoTico214;

	    }else if(document.getElementById('tico-tico608').checked)
	    {
		somaSerraTicoTico608 = somaSerraTicoTico608 + 1;
		document.getElementById("resultadoSerraTicoTico608").innerHTML = somaSerraTicoTico608;

	    }else if(document.getElementById('tico-tico609').checked)
	    {
		somaSerraTicoTico609 = somaSerraTicoTico609 + 1;
		document.getElementById("resultadoSerraTicoTico609").innerHTML = somaSerraTicoTico609;

	    }else if(document.getElementById('tico-tico586').checked)
	    {
		somaSerraTicoTico586 = somaSerraTicoTico586 + 1;
		document.getElementById("resultadoSerraTicoTico586").innerHTML = somaSerraTicoTico586;

	    }else if(document.getElementById('tico-tico587').checked)
	    {
		somaSerraTicoTico587 = somaSerraTicoTico587 + 1;
		document.getElementById("resultadoSerraTicoTico587").innerHTML = somaSerraTicoTico587;

	    }else if(document.getElementById('tico-tico590').checked)
	    {
		somaSerraTicoTico590 = somaSerraTicoTico590 + 1;
		document.getElementById("resultadoSerraTicoTico590").innerHTML = somaSerraTicoTico590;

	    }else if(document.getElementById('tico-tico610').checked)
	    {
		somaSerraTico610 = somaSerraTico610 + 1;
		document.getElementById("resultadoSerraTico610").innerHTML = somaSerraTico610;

	    }else if(document.getElementById('soprador215').checked)
	    {
		somaSoprador215 = somaSoprador215 + 1;
		document.getElementById("resultadoSoprador215").innerHTML = somaSoprador215;

	    }else if(document.getElementById('soprador216').checked)
	    {
		somaSoprador216 = somaSoprador216 + 1;
		document.getElementById("resultadoSoprador216").innerHTML = somaSoprador216;

	    }else if(document.getElementById('soprador558').checked)
	    {
		somaSoprador558 = somaSoprador558 + 1;
		document.getElementById("resultadoSoprador558").innerHTML = somaSoprador558;

	    }else if(document.getElementById('tracador133').checked)
	    {
		somaTracador133 = somaTracador133 + 1;
		document.getElementById("resultadoTracador133").innerHTML = somaTracador133;

	    }else if(document.getElementById('tracador135').checked)
	    {
		somaTracador135 = somaTracador135 + 1;
		document.getElementById("resultadoTracador135").innerHTML = somaTracador135;

	    }else if(document.getElementById('tracador182').checked)
	    {
		somaTracador182 = somaTracador182 + 1;
		document.getElementById("resultadoTracador182").innerHTML = somaTracador182;

	    }else if(document.getElementById('tracador602').checked)
	    {
		somaTracador602 = somaTracador602 + 1;
		document.getElementById("resultadoTracador602").innerHTML = somaTracador602;

	    }else if(document.getElementById('tracador604').checked)
	    {
		somaTracador604 = somaTracador604 + 1;
		document.getElementById("resultadoTracador604").innerHTML = somaTracador604;

	    }else if(document.getElementById('tracador605').checked)
	    {
		somaTracador605 = somaTracador605 + 1;
		document.getElementById("resultadoTracador605").innerHTML = somaTracador605;

	    }else if(document.getElementById('tracador606').checked)
	    {
		somaTracador606 = somaTracador606 + 1;
		document.getElementById("resultadoTracador606").innerHTML = somaTracador606;

	    }else if(document.getElementById('tracador607').checked)
	    {
		somaTracador607 = somaTracador607 + 1;
		document.getElementById("resultadoTracador607").innerHTML = somaTracador607;

	    }else if(document.getElementById('tracador82').checked)
	    {
		somaTracador82 = somaTracador82 + 1;
		document.getElementById("resultadoTracador82").innerHTML = somaTracador82;

	    }else if(document.getElementById('tracador184').checked)
	    {
		somaTracador184 = somaTracador184 + 1;
		document.getElementById("resultadoTracador184").innerHTML = somaTracador184;

	    }else if(document.getElementById('tracador187').checked)
	    {
		somaTracador187 = somaTracador187 + 1;
		document.getElementById("resultadoTracador187").innerHTML = somaTracador187;

	    }else if(document.getElementById('tracador300').checked)
	    {
		somaTracador300 = somaTracador300 + 1;
		document.getElementById("resultadoTracador300").innerHTML = somaTracador300;

	    }else if(document.getElementById('escadaG1').checked)
	    {
		somaEscadaG1 = somaEscadaG1 + 1;
		document.getElementById("resultadoEscadaG1").innerHTML = somaEscadaG1;

	    }else if(document.getElementById('escadaG2').checked)
	    {
		somaEscadaG2 = somaEscadaG2 + 1;
		document.getElementById("resultadoEscadaG2").innerHTML = somaEscadaG2;

	    }else if(document.getElementById('escadaG3').checked)
	    {
		somaEscadaG3 = somaEscadaG3 + 1;
		document.getElementById("resultadoEscadaG3").innerHTML = somaEscadaG3;

	    }else if(document.getElementById('escadaG5').checked)
	    {
		somaEscadaG5 = somaEscadaG5 + 1;
		document.getElementById("resultadoEscadaG5").innerHTML = somaEscadaG5;

	    }else if(document.getElementById('escadaG7').checked)
	    {
		somaEscadaG7 = somaEscadaG7 + 1;
		document.getElementById("resultadoEscadaG7").innerHTML = somaEscadaG7;

	    }else if(document.getElementById('escadaM2').checked)
	    {
		somaEscadaM2 = somaEscadaM2 + 1;
		document.getElementById("resultadoEscadaM2").innerHTML = somaEscadaM2;

	    }else if(document.getElementById('escadaM3').checked)
	    {
		somaEscadaM3 = somaEscadaM3 + 1;
		document.getElementById("resultadoEscadaM3").innerHTML = somaEscadaM3;

	    }else if(document.getElementById('escadaM4').checked)
	    {
		somaEscadaM4 = somaEscadaM4 + 1;
		document.getElementById("resultadoEscadaM4").innerHTML = somaEscadaM4;

	    }else if(document.getElementById('escadaM5').checked)
	    {
		somaEscadaM5 = somaEscadaM5 + 1;
		document.getElementById("resultadoEscadaM5").innerHTML = somaEscadaM5;

	    }else if(document.getElementById('escadaM7').checked)
	    {
		somaEscadaM7 = somaEscadaM7 + 1;
		document.getElementById("resultadoEscadaM7").innerHTML = somaEscadaM7;

	    }else if(document.getElementById('escadaM8').checked)
	    {
		somaEscadaM8 = somaEscadaM8 + 1;
		document.getElementById("resultadoEscadaM8").innerHTML = somaEscadaM8;

	    }else if(document.getElementById('escadaM9').checked)
	    {
		somaEscadaM9 = somaEscadaM9 + 1;
		document.getElementById("resultadoEscadaM9").innerHTML = somaEscadaM9;

	    }else if(document.getElementById('escadaM10').checked)
	    {
		somaEscadaM10 = somaEscadaM10 + 1;
		document.getElementById("resultadoEscadaM10").innerHTML = somaEscadaM10;

	    }else if(document.getElementById('escadaM13').checked)
	    {
		somaEscadaM13 = somaEscadaM13 + 1;
		document.getElementById("resultadoEscadaM13").innerHTML = somaEscadaM13;

	    }else if(document.getElementById('escadaM15').checked)
	    {
		somaEscadaM15 = somaEscadaM15 + 1;
		document.getElementById("resultadoEscadaM15").innerHTML = somaEscadaM15;

	    }else if(document.getElementById('escadaM17').checked)
	    {
		somaEscadaM17 = somaEscadaM17 + 1;
		document.getElementById("resultadoEscadaM17").innerHTML = somaEscadaM17;

	    }else if(document.getElementById('escadaM18').checked)
	    {
		somaEscadaM18 = somaEscadaM18 + 1;
		document.getElementById("resultadoEscadaM18").innerHTML = somaEscadaM18;

	    }else if(document.getElementById('escadaM19').checked)
	    {
		somaEscadaM19 = somaEscadaM19 + 1;
		document.getElementById("resultadoEscadaM19").innerHTML = somaEscadaM19;

	    }else if(document.getElementById('escadaM20').checked)
	    {
		somaEscadaM20 = somaEscadaM20 + 1;
		document.getElementById("resultadoEscadaM20").innerHTML = somaEscadaM20;

	    }else if(document.getElementById('escadaM21').checked)
	    {
		somaEscadaM21 = somaEscadaM21 + 1;
		document.getElementById("resultadoEscadaM21").innerHTML = somaEscadaM21;

	    }else if(document.getElementById('escadaM22').checked)
	    {
		somaEscadaM22 = somaEscadaM22 + 1;
		document.getElementById("resultadoEscadaM22").innerHTML = somaEscadaM22;

	    }else if(document.getElementById('escadaM23').checked)
	    {
		somaEscadaM23 = somaEscadaM23 + 1;
		document.getElementById("resultadoEscadaM23").innerHTML = somaEscadaM23;

	    }else if(document.getElementById('escadaM27').checked)
	    {
		somaEscadaM27 = somaEscadaM27 + 1;
		document.getElementById("resultadoEscadaM27").innerHTML = somaEscadaM27;

	    }else if(document.getElementById('escadaM28').checked)
	    {
		somaEscadaM28 = somaEscadaM28 + 1;
		document.getElementById("resultadoEscadaM28").innerHTML = somaEscadaM28;

	    }else if(document.getElementById('escadaM29').checked)
	    {
		somaEscadaM29 = somaEscadaM29 + 1;
		document.getElementById("resultadoEscadaM29").innerHTML = somaEscadaM29;

	    }else if(document.getElementById('escadaM31').checked)
	    {
		somaEscadaM31 = somaEscadaM31 + 1;
		document.getElementById("resultadoEscadaM31").innerHTML = somaEscadaM31;

	    }else if(document.getElementById('escadaM33').checked)
	    {
		somaEscadaM33 = somaEscadaM33 + 1;
		document.getElementById("resultadoEscadaM33").innerHTML = somaEscadaM33;

	    }else if(document.getElementById('escadaM34').checked)
	    {
		somaEscadaM34 = somaEscadaM34 + 1;
		document.getElementById("resultadoEscadaM34").innerHTML = somaEscadaM34;

	    }else if(document.getElementById('escadaM35').checked)
	    {
		somaEscadaM35 = somaEscadaM35 + 1;
		document.getElementById("resultadoEscadaM35").innerHTML = somaEscadaM35;

	    }else if(document.getElementById('escadaM36').checked)
	    {
		somaEscadaM36 = somaEscadaM36 + 1;
		document.getElementById("resultadoEscadaM36").innerHTML = somaEscadaM36;

	    }else if(document.getElementById('escadaM37').checked)
	    {
		somaEscadaM37 = somaEscadaM37 + 1;
		document.getElementById("resultadoEscadaM37").innerHTML = somaEscadaM37;

	    }else if(document.getElementById('escadaM39').checked)
	    {
		somaEscadaM39 = somaEscadaM39 + 1;
		document.getElementById("resultadoEscadaM39").innerHTML = somaEscadaM39;

	    }else if(document.getElementById('escadaM41').checked)
	    {
		somaEscadaM41 = somaEscadaM41 + 1;
		document.getElementById("resultadoEscadaM41").innerHTML = somaEscadaM41;

	    }else if(document.getElementById('escadaM43').checked)
	    {
		somaEscadaM43 = somaEscadaM43 + 1;
		document.getElementById("resultadoEscadaM43").innerHTML = somaEscadaM43;

	    }else if(document.getElementById('escadaM44').checked)
	    {
		somaEscadaM44 = somaEscadaM44 + 1;
		document.getElementById("resultadoEscadaM44").innerHTML = somaEscadaM44;

	    }else if(document.getElementById('escadaM45').checked)
	    {
		somaEscadaM45 = somaEscadaM45 + 1;
		document.getElementById("resultadoEscadaM45").innerHTML = somaEscadaM45;

	    }else if(document.getElementById('escadaM46').checked)
	    {
		somaEscadaM46 = somaEscadaM46 + 1;
		document.getElementById("resultadoEscadaM46").innerHTML = somaEscadaM46;

	    }else if(document.getElementById('escadaP2').checked)
	    {
		somaEscadaP2 = somaEscadaP2 + 1;
		document.getElementById("resultadoEscadaP2").innerHTML = somaEscadaP2;

	    }else if(document.getElementById('escadaP5').checked)
	    {
		somaEscadaP5 = somaEscadaP5 + 1;
		document.getElementById("resultadoEscadaP5").innerHTML = somaEscadaP5;

	    }else if(document.getElementById('escadaP7').checked)
	    {
		somaEscadaP7 = somaEscadaP7 + 1;
		document.getElementById("resultadoEscadaP7").innerHTML = somaEscadaP7;

	    }else if(document.getElementById('escadaP10').checked)
	    {
		somaEscadaP10 = somaEscadaP10 + 1;
		document.getElementById("resultadoEscadaP10").innerHTML = somaEscadaP10;

	    }else if(document.getElementById('escadaP11').checked)
	    {
		somaEscadaP11 = somaEscadaP11 + 1;
		document.getElementById("resultadoEscadaP11").innerHTML = somaEscadaP11;

	    }else if(document.getElementById('escadaP12').checked)
	    {
		somaEscadaP12 = somaEscadaP12 + 1;
		document.getElementById("resultadoEscadaP12").innerHTML = somaEscadaP12;

	    }else if(document.getElementById('escadaP13').checked)
	    {
		somaEscadaP13 = somaEscadaP13 + 1;
		document.getElementById("resultadoEscadaP13").innerHTML = somaEscadaP13;

	    }else if(document.getElementById('escadaP14').checked)
	    {
		somaEscadaP14 = somaEscadaP14 + 1;
		document.getElementById("resultadoEscadaP14").innerHTML = somaEscadaP14;

	    }else if(document.getElementById('escadaP15').checked)
	    {
		somaEscadaP15 = somaEscadaP15 + 1;
		document.getElementById("resultadoEscadaP15").innerHTML = somaEscadaP15;

	    }else if(document.getElementById('escadaP17').checked)
	    {
		somaEscadaP17 = somaEscadaP17 + 1;
		document.getElementById("resultadoEscadaP17").innerHTML = somaEscadaP17;

	    }else if(document.getElementById('escadaP18').checked)
	    {
		somaEscadaP18 = somaEscadaP18 + 1;
		document.getElementById("resultadoEscadaP18").innerHTML = somaEscadaP18;

	    }else if(document.getElementById('escadaP19').checked)
	    {
		somaEscadaP19 = somaEscadaP19 + 1;
		document.getElementById("resultadoEscadaP19").innerHTML = somaEscadaP19;

	    }else if(document.getElementById('escadaP21').checked)
	    {
		somaEscadaP21 = somaEscadaP21 + 1;
		document.getElementById("resultadoEscadaP21").innerHTML = somaEscadaP21;

	    }else if(document.getElementById('escadaP23').checked)
	    {
		somaEscadaP23 = somaEscadaP23 + 1;
		document.getElementById("resultadoEscadaP23").innerHTML = somaEscadaP23;

	    }else if(document.getElementById('escadaP26').checked)
	    {
		somaEscadaP26 = somaEscadaP26 + 1;
		document.getElementById("resultadoEscadaP26").innerHTML = somaEscadaP26;

	    }else if(document.getElementById('escadaP28').checked)
	    {
		somaEscadaP28 = somaEscadaP28 + 1;
		document.getElementById("resultadoEscadaP28").innerHTML = somaEscadaP28;

	    }else if(document.getElementById('escadaP31').checked)
	    {
		somaEscadaP31 = somaEscadaP31 + 1;
		document.getElementById("resultadoEscadaP31").innerHTML = somaEscadaP31;

	    }else if(document.getElementById('escadaP33').checked)
	    {
		somaEscadaP33 = somaEscadaP33 + 1;
		document.getElementById("resultadoEscadaP33").innerHTML = somaEscadaP33;

	    }else if(document.getElementById('escadaP34').checked)
	    {
		somaEscadaP34 = somaEscadaP34 + 1;
		document.getElementById("resultadoEscadaP34").innerHTML = somaEscadaP34;

	    }else if(document.getElementById('escadaP35').checked)
	    {
		somaEscadaP35 = somaEscadaP35 + 1;
		document.getElementById("resultadoEscadaP35").innerHTML = somaEscadaP35;

	    }else if(document.getElementById('escadaP36').checked)
	    {
		somaEscadaP36 = somaEscadaP36 + 1;
		document.getElementById("resultadoEscadaP36").innerHTML = somaEscadaP36;

	    }else if(document.getElementById('escadaP37').checked)
	    {
		somaEscadaP37 = somaEscadaP37 + 1;
		document.getElementById("resultadoEscadaP37").innerHTML = somaEscadaP37;

	    }else if(document.getElementById('escadaP38').checked)
	    {
		somaEscadaP38 = somaEscadaP38 + 1;
		document.getElementById("resultadoEscadaP38").innerHTML = somaEscadaP38;

	    }else if(document.getElementById('escadaP39').checked)
	    {
		somaEscadaP39 = somaEscadaP39 + 1;
		document.getElementById("resultadoEscadaP39").innerHTML = somaEscadaP39;

	    }else if(document.getElementById('escadaP40').checked)
	    {
		somaEscadaP40 = somaEscadaP40 + 1;
		document.getElementById("resultadoEscadaP40").innerHTML = somaEscadaP40;

	    }else if(document.getElementById('tracador81').checked)
	    {
		somaTracador81 = somaTracador81 + 1;
		document.getElementById("resultadoTracador81").innerHTML = somaTracador81;

	    }else if(document.getElementById('tracador139').checked)
	    {
		somaTracador139 = somaTracador139 + 1;
		document.getElementById("resultadoTracador139").innerHTML = somaTracador139;

	    }else if(document.getElementById('parafusadeira219').checked)
	    {
		somaParafusadeira219 = somaParafusadeira219 + 1;
		document.getElementById("resultadoParafusadeira219").innerHTML = somaParafusadeira219;

            }else if(document.getElementById('furadeira205').checked)
	    {
		somaFuradeira205 = somaFuradeira205 + 1;
		document.getElementById("resultadoFuradeira205").innerHTML = somaFuradeira205;

            }else if(document.getElementById('pinador2').checked)
	    {
		somaPinador2 = somaPinador2 + 1;
		document.getElementById("resultadoPinador2").innerHTML = somaPinador2;

	    }else if(document.getElementById('pinador5').checked)
	    {
		somaPinador5 = somaPinador5 + 1;
		document.getElementById("resultadoPinador5").innerHTML = somaPinador5;

	    }else if(document.getElementById('pinador18').checked)
	    {
		somaPinador18 = somaPinador18 + 1;
		document.getElementById("resultadoPinador18").innerHTML = somaPinador18;

	    }else if(document.getElementById('pinador22').checked)
	    {
		somaPinador22 = somaPinador22 + 1;
		document.getElementById("resultadoPinador22").innerHTML = somaPinador22;

	    }else if(document.getElementById('pinador575').checked)
	    {
		somaPinador575 = somaPinador575 + 1;
		document.getElementById("resultadoPinador575").innerHTML = somaPinador575;

	    }else if(document.getElementById('pinador598').checked)
	    {
		somaPinador598 = somaPinador598 + 1;
		document.getElementById("resultadoPinador598").innerHTML = somaPinador598;

	    }
	}

	function estorno(e) 
	{
	    if(document.getElementById('bateria-18').checked)
	    {
		somaBateria18 = somaBateria18 - 1;

                if(somaBateria18 < 0)
                  { 
                   somaBateria18 = 0;
                  }  

		document.getElementById("resultadoBateria18").innerHTML = somaBateria18;               

	    }else if(document.getElementById("bateria-14").checked)
	    {
		somaBateria14 = somaBateria14 - 1;

                if(somaBateria14 < 0)
                  { 
                   somaBateria14 = 0;
                  } 

		document.getElementById("resultadoBateria14").innerHTML = somaBateria14;

	    }else if(document.getElementById('bateria-12').checked)
	    {
		somaBateria12 = somaBateria12 - 1;

                if(somaBateria12 < 0)
                  { 
                   somaBateria12 = 0;
                  } 

		document.getElementById("resultadoBateria12").innerHTML = somaBateria12;

	    }else if(document.getElementById('guia-copo').checked)
	    {
		somaGuia = somaGuia - 1;

                if(somaGuia < 0)
                  { 
                   somaGuia = 0;
                  } 

		document.getElementById("resultadoGuia").innerHTML = somaGuia;

	    }else if(document.getElementById('mesa1').checked)
	    {
		somaMesaPantografica1 = somaMesaPantografica1 - 1;

                if(somaMesaPantografica1 < 0)
                  { 
                   somaMesaPantografica1 = 0;
                  } 

		document.getElementById("resultadoMesaPantografica1").innerHTML = somaMesaPantografica1;

	    }else if(document.getElementById('mesa2').checked)
	    {
		somaMesaPantografica2 = somaMesaPantografica2 - 1;

                if(somaMesaPantografica2 < 0)
                  { 
                   somaMesaPantografica2 = 0;
                  } 

		document.getElementById("resultadoMesaPantografica2").innerHTML = somaMesaPantografica2;

	    }else if(document.getElementById('mesa3').checked)
	    {
		somaMesaPantografica3 = somaMesaPantografica3 - 1;

                if(somaMesaPantografica3 < 0)
                  { 
                   somaMesaPantografica3 = 0;
                  } 

		document.getElementById("resultadoMesaPantografica3").innerHTML = somaMesaPantografica3;

	    }else if(document.getElementById('carrinho1').checked)
	    {
		somaCarrinho1 = somaCarrinho1 - 1;

                if(somaCarrinho1 < 0)
                  { 
                   somaCarrinho1 = 0;
                  } 

		document.getElementById("resultadoCarrinho1").innerHTML = somaCarrinho1;

	    }else if(document.getElementById('grampeador2').checked)
	    {
		somaGrampeador2 = somaGrampeador2 - 1;

                if(somaGrampeador2 < 0)
                  { 
                   somaGrampeador2 = 0;
                  } 

		document.getElementById("resultadoGrampeador2").innerHTML = somaGrampeador2;

	    }else if(document.getElementById('grampeador3').checked)
	    {
		somaGrampeador3 = somaGrampeador3 - 1;

                if(somaGrampeador3 < 0)
                  { 
                   somaGrampeador3 = 0;
                  } 

		document.getElementById("resultadoGrampeador3").innerHTML = somaGrampeador3;

	    }else if(document.getElementById('grampeador17').checked)
	    {
		somaGrampeador17 = somaGrampeador17 - 1;

                if(somaGrampeador17 < 0)
                  { 
                   somaGrampeador17 = 0;
                  } 

		document.getElementById("resultadoGrampeador17").innerHTML = somaGrampeador17;

	    }else if(document.getElementById('grampeador21').checked)
	    {
		somaGrampeador21 = somaGrampeador21 - 1;

                if(somaGrampeador21 < 0)
                  { 
                   somaGrampeador21 = 0;
                  } 

		document.getElementById("resultadoGrampeador21").innerHTML = somaGrampeador21;

	    }else if(document.getElementById('grampeador22').checked)
	    {
		somaGrampeador22 = somaGrampeador22 - 1;

                if(somaGrampeador22 < 0)
                  { 
                   somaGrampeador22 = 0;
                  } 

		document.getElementById("resultadoGrampeador22").innerHTML = somaGrampeador22;

	    }else if(document.getElementById('grampeador26').checked)
	    {
		somaGrampeador26 = somaGrampeador26 - 1;

                if(somaGrampeador26 < 0)
                  { 
                   somaGrampeador26 = 0;
                  } 

		document.getElementById("resultadoGrampeador26").innerHTML = somaGrampeador26;

	    }else if(document.getElementById('grampeador31').checked)
	    {
		somaGrampeador31 = somaGrampeador31 - 1;

                if(somaGrampeador31 < 0)
                  { 
                   somaGrampeador31 = 0;
                  } 

		document.getElementById("resultadoGrampeador31").innerHTML = somaGrampeador31;

	    }else if(document.getElementById('grampeador37').checked)
	    {
		somaGrampeador37 = somaGrampeador37 - 1;

                if(somaGrampeador37 < 0)
                  { 
                   somaGrampeador37 = 0;
                  } 

		document.getElementById("resultadoGrampeador37").innerHTML = somaGrampeador37;

	    }else if(document.getElementById('grampeador45').checked)
	    {
		somaGrampeador45 = somaGrampeador45 - 1;

                if(somaGrampeador45 < 0)
                  { 
                   somaGrampeador45 = 0;
                  } 

		document.getElementById("resultadoGrampeador45").innerHTML = somaGrampeador45;

	    }else if(document.getElementById('grampeador46').checked)
	    {
		somaGrampeador46 = somaGrampeador46 - 1;

                if(somaGrampeador46 < 0)
                  { 
                   somaGrampeador46 = 0;
                  } 

		document.getElementById("resultadoGrampeador46").innerHTML = somaGrampeador46;

	    }else if(document.getElementById('grampeador47').checked)
	    {
		somaGrampeador47 = somaGrampeador47 - 1;

                if(somaGrampeador47 < 0)
                  { 
                   somaGrampeador47 = 0;
                  } 

		document.getElementById("resultadoGrampeador47").innerHTML = somaGrampeador47;

	    }else if(document.getElementById('grampeador48').checked)
	    {
		somaGrampeador48 = somaGrampeador48 - 1;

                if(somaGrampeador48 < 0)
                  { 
                   somaGrampeador48 = 0;
                  } 

		document.getElementById("resultadoGrampeador48").innerHTML = somaGrampeador48;

	    }else if(document.getElementById('grampeador49').checked)
	    {
		somaGrampeador49 = somaGrampeador49 - 1;

                if(somaGrampeador49 < 0)
                  { 
                   somaGrampeador49 = 0;
                  } 

		document.getElementById("resultadoGrampeador49").innerHTML = somaGrampeador49;

	    }else if(document.getElementById('grampeador50').checked)
	    {
		somaGrampeador50 = somaGrampeador50 - 1;

                if(somaGrampeador50 < 0)
                  { 
                   somaGrampeador50 = 0;
                  } 

		document.getElementById("resultadoGrampeador50").innerHTML = somaGrampeador50;

	    }else if(document.getElementById('grampeador51').checked)
	    {
		somaGrampeador51 = somaGrampeador51 - 1;

                if(somaGrampeador51 < 0)
                  { 
                   somaGrampeador51 = 0;
                  } 

		document.getElementById("resultadoGrampeador51").innerHTML = somaGrampeador47;

	    }else if(document.getElementById('grampeador52').checked)
	    {
		somaGrampeador52 = somaGrampeador52 - 1;

                if(somaGrampeador52 < 0)
                  { 
                   somaGrampeador52 = 0;
                  } 

		document.getElementById("resultadoGrampeador52").innerHTML = somaGrampeador52;

	    }else if(document.getElementById('grampeador53').checked)
	    {
		somaGrampeador53 = somaGrampeador53 - 1;

                if(somaGrampeador53 < 0)
                  { 
                   somaGrampeador53 = 0;
                  } 

		document.getElementById("resultadoGrampeador53").innerHTML = somaGrampeador53;

	    }else if(document.getElementById('chave-impacto').checked)
	    {
		somaChaveImpacto = somaChaveImpacto - 1;

                if(somaChaveImpacto < 0)
                  { 
                   somaChaveImpacto = 0;
                  } 

		document.getElementById("resultadoChaveImpacto").innerHTML = somaChaveImpacto;

	    }else if(document.getElementById('esmerilhadeira121').checked)
	    {
		somaEsmerilhadeira121 = somaEsmerilhadeira121 - 1;

                if(somaEsmerilhadeira121 < 0)
                  { 
                   somaEsmerilhadeira121 = 0;
                  } 

		document.getElementById("resultadoEsmerilhadeira121").innerHTML = somaEsmerilhadeira121;

	    }else if(document.getElementById('esmerilhadeira116').checked)
	    {
		somaEsmerilhadeira116 = somaEsmerilhadeira116 - 1;

                if(somaEsmerilhadeira116 < 0)
                  { 
                   somaEsmerilhadeira116 = 0;
                  } 

		document.getElementById("resultadoEsmerilhadeira116").innerHTML = somaEsmerilhadeira116;

	    }else if(document.getElementById('esmerilhadeira117').checked)
	    {
		somaEsmerilhadeira117 = somaEsmerilhadeira117 - 1;

                if(somaEsmerilhadeira117 < 0)
                  { 
                   somaEsmerilhadeira117 = 0;
                  } 

		document.getElementById("resultadoEsmerilhadeira117").innerHTML = somaEsmerilhadeira117;

	    }else if(document.getElementById('furadeira200').checked)
	    {
		somaFuradeira200 = somaFuradeira200 - 1;

                if(somaFuradeira200 < 0)
                  { 
                   somaFuradeira200 = 0;
                  } 

		document.getElementById("resultadoFuradeira200").innerHTML = somaFuradeira200;

	    }else if(document.getElementById('furadeira231').checked)
	    {
		somaFuradeira231 = somaFuradeira231 - 1;

                if(somaFuradeira231 < 0)
                  { 
                   somaFuradeira231 = 0;
                  } 

		document.getElementById("resultadoFuradeira231").innerHTML = somaFuradeira231;

	    }else if(document.getElementById('lixadeira-cinta105').checked)
	    {
		somaLixadeiraCinta105 = somaLixadeiraCinta105 - 1;

                if(somaLixadeiraCinta105 < 0)
                  { 
                   somaLixadeiraCinta105 = 0;
                  } 

		document.getElementById("resultadoLixadeiraCinta105").innerHTML = somaLixadeiraCinta105;

	    }else if(document.getElementById('lixadeira-cinta107').checked)
	    {
		somaLixadeiraCinta107 = somaLixadeiraCinta107 - 1;

                if(somaLixadeiraCinta107 < 0)
                  { 
                   somaLixadeiraCinta107 = 0;
                  } 

		document.getElementById("resultadoLixadeiraCinta107").innerHTML = somaLixadeiraCinta107;

	    }else if(document.getElementById('lixadeira-cinta585').checked)
	    {
		somaLixadeiraCinta585 = somaLixadeiraCinta585 - 1;

                if(somaLixadeiraCinta585 < 0)
                  { 
                   somaLixadeiraCinta585 = 0;
                  } 

		document.getElementById("resultadoLixadeiraCinta585").innerHTML = somaLixadeiraCinta585;

	    }else if(document.getElementById('lixadeira-politriz118').checked)
	    {
		somaLixadeiraPolitriz118 = somaLixadeiraPolitriz118 - 1;

                if(somaLixadeiraPolitriz118 < 0)
                  { 
                   somaLixadeiraPolitriz118 = 0;
                  } 

		document.getElementById("resultadoLixadeiraPolitriz118").innerHTML = somaLixadeiraPolitriz118;

	    }else if(document.getElementById('lixadeira-politriz119').checked)
	    {
		somaLixadeiraPolitriz119 = somaLixadeiraPolitriz119 - 1;

                if(somaLixadeiraPolitriz119 < 0)
                  { 
                   somaLixadeiraPolitriz119 = 0;
                  } 

		document.getElementById("resultadoLixadeiraPolitriz119").innerHTML = somaLixadeiraPolitriz119;

	    }else if(document.getElementById('lixadeira-politriz120').checked)
	    {
		somaLixadeiraPolitriz120 = somaLixadeiraPolitriz120 - 1;

                if(somaLixadeiraPolitriz120 < 0)
                  { 
                   somaLixadeiraPolitriz120 = 0;
                  } 

		document.getElementById("resultadoLixadeiraPolitriz120").innerHTML = somaLixadeiraPolitriz120;

	    }else if(document.getElementById('lixadeira-politriz581').checked)
	    {
		somaLixadeiraPolitriz581 = somaLixadeiraPolitriz581 - 1;

                if(somaLixadeiraPolitriz581 < 0)
                  { 
                   somaLixadeiraPolitriz581 = 0;
                  } 

		document.getElementById("resultadoLixadeiraPolitriz581").innerHTML = somaLixadeiraPolitriz581;

	    }else if(document.getElementById('nivel-laser1000').checked)
	    {
		somaNivelLaser1000 = somaNivelLaser1000 - 1;

                if(somaNivelLaser1000 < 0)
                  { 
                   somaNivelLaser1000 = 0;
                  } 

		document.getElementById("resultadoNivelLaser1000").innerHTML = somaNivelLaser1000;

	    }else if(document.getElementById('parafusadeira78').checked)
	    {
		somaParafusadeira78 = somaParafusadeira78 - 1;

                if(somaParafusadeira78 < 0)
                  { 
                   somaParafusadeira78 = 0;
                  } 

		document.getElementById("resultadoParafusadeira78").innerHTML = somaParafusadeira78;

	    }else if(document.getElementById('parafusadeira126').checked)
	    {
		somaParafusadeira126 = somaParafusadeira126 - 1;

                if(somaParafusadeira126 < 0)
                  { 
                   somaParafusadeira126 = 0;
                  } 

		document.getElementById("resultadoParafusadeira126").innerHTML = somaParafusadeira126;

	    }else if(document.getElementById('parafusadeira149').checked)
	    {
		somaParafusadeira149 = somaParafusadeira149 - 1;

                if(somaParafusadeira149 < 0)
                  { 
                   somaParafusadeira149 = 0;
                  } 
		document.getElementById("resultadoParafusadeira149").innerHTML = somaParafusadeira149;

	    }else if(document.getElementById('parafusadeira163').checked)
	    {
		somaParafusadeira163 = somaParafusadeira163 - 1;

                if(somaParafusadeira163 < 0)
                  { 
                   somaParafusadeira163 = 0;
                  } 

		document.getElementById("resultadoParafusadeira163").innerHTML = somaParafusadeira163;

	    }else if(document.getElementById('parafusadeira177').checked)
	    {
		somaParafusadeira177 = somaParafusadeira177 - 1;

                if(somaParafusadeira177 < 0)
                  { 
                   somaParafusadeira177 = 0;
                  } 

		document.getElementById("resultadoParafusadeira177").innerHTML = somaParafusadeira177;

	    }else if(document.getElementById('parafusadeira199').checked)
	    {
		somaParafusadeira199 = somaParafusadeira199 - 1;

                if(somaParafusadeira199 < 0)
                  { 
                   somaParafusadeira199 = 0;
                  } 

		document.getElementById("resultadoParafusadeira199").innerHTML = somaParafusadeira199;

	    }else if(document.getElementById('parafusadeira221').checked)
	    {
		somaParafusadeira221 = somaParafusadeira221 - 1;

                if(somaParafusadeira221 < 0)
                  { 
                   somaParafusadeira221 = 0;
                  } 

		document.getElementById("resultadoParafusadeira221").innerHTML = somaParafusadeira221;

	    }else if(document.getElementById('parafusadeira236').checked)
	    {
		somaParafusadeira236 = somaParafusadeira236 - 1;

                if(somaParafusadeira236 < 0)
                  { 
                   somaParafusadeira236 = 0;
                  } 

		document.getElementById("resultadoParafusadeira236").innerHTML = somaParafusadeira236;

	    }else if(document.getElementById('parafusadeira237').checked)
	    {
		somaParafusadeira237 = somaParafusadeira237 - 1;

                if(somaParafusadeira237 < 0)
                  { 
                   somaParafusadeira237 = 0;
                  } 

		document.getElementById("resultadoParafusadeira237").innerHTML = somaParafusadeira237;

	    }else if(document.getElementById('parafusadeira238').checked)
	    {
		somaParafusadeira238 = somaParafusadeira238 - 1;

                if(somaParafusadeira238 < 0)
                  { 
                   somaParafusadeira238 = 0;
                  } 

		document.getElementById("resultadoParafusadeira238").innerHTML = somaParafusadeira238;

	    }else if(document.getElementById('parafusadeira242').checked)
	    {
		somaParafusadeira242 = somaParafusadeira242 - 1;

                if(somaParafusadeira242 < 0)
                  { 
                   somaParafusadeira242 = 0;
                  } 

		document.getElementById("resultadoParafusadeira242").innerHTML = somaParafusadeira242;

	    }else if(document.getElementById('parafusadeira564').checked)
	    {
		somaParafusadeira564 = somaParafusadeira564 - 1;

                if(somaParafusadeira564 < 0)
                  { 
                   somaParafusadeira564 = 0;
                  } 

		document.getElementById("resultadoParafusadeira564").innerHTML = somaParafusadeira564;

	    }else if(document.getElementById('parafusadeira2020').checked)
	    {
		somaParafusadeira2020 = somaParafusadeira2020 - 1;

                if(somaParafusadeira2020 < 0)
                  { 
                   somaParafusadeira2020 = 0;
                  } 

		document.getElementById("resultadoParafusadeira2020").innerHTML = somaParafusadeira2020;

	    }else if(document.getElementById('parafusadeira2023').checked)
	    {
		somaParafusadeira2023 = somaParafusadeira2023 - 1;

                if(somaParafusadeira2023 < 0)
                  { 
                   somaParafusadeira2023 = 0;
                  } 

		document.getElementById("resultadoParafusadeira2023").innerHTML = somaParafusadeira2023;

	    }else if(document.getElementById('parafusadeira2031').checked)
	    {
		somaParafusadeira2031 = somaParafusadeira2031 - 1;

                if(somaParafusadeira2031 < 0)
                  { 
                   somaParafusadeira2031 = 0;
                  } 

		document.getElementById("resultadoParafusadeira2031").innerHTML = somaParafusadeira2031;

	    }else if(document.getElementById('pinador16').checked)
	    {
		somaPinador16 = somaPinador16 - 1;

                if(somaPinador16 < 0)
                  { 
                   somaPinador16 = 0;
                  } 

		document.getElementById("resultadoPinador16").innerHTML = somaPinador16;

	    }else if(document.getElementById('pinador128').checked)
	    {
		somaPinador128 = somaPinador128 - 1;

                if(somaPinador128 < 0)
                  { 
                   somaPinador128 = 0;
                  } 

		document.getElementById("resultadoPinador128").innerHTML = somaPinador128;

	    }else if(document.getElementById('pinador308').checked)
	    {
		somaPinador308 = somaPinador308 - 1;

                if(somaPinador308 < 0)
                  { 
                   somaPinador308 = 0;
                  } 

		document.getElementById("resultadoPinador308").innerHTML = somaPinador308;

	    }else if(document.getElementById('pinador597').checked)
	    {
		somaPinador597 = somaPinador597 - 1;

                if(somaPinador597 < 0)
                  { 
                   somaPinador597 = 0;
                  } 

		document.getElementById("resultadoPinador597").innerHTML = somaPinador597;

	    }else if(document.getElementById('pistola111').checked)
	    {
		somaPistola111 = somaPistola111 - 1;

                if(somaPistola111 < 0)
                  { 
                   somaPistola111 = 0;
                  } 

		document.getElementById("resultadoPistola111").innerHTML = somaPistola111;

	    }else if(document.getElementById('pistola112').checked)
	    {
		somaPistola112 = somaPistola112 - 1;

                if(somaPistola112 < 0)
                  { 
                   somaPistola112 = 0;
                  } 

		document.getElementById("resultadoPistola112").innerHTML = somaPistola112;

	    }else if(document.getElementById('plaina95').checked)
	    {
		somaPlaina95 = somaPlaina95 - 1;

                if(somaPlaina95 < 0)
                  { 
                   somaPlaina95 = 0;
                  } 

		document.getElementById("resultadoPlaina95").innerHTML = somaPlaina95;

	    }else if(document.getElementById('plaina96').checked)
	    {
		somaPlaina96 = somaPlaina96 - 1;

                if(somaPlaina96 < 0)
                  { 
                   somaPlaina96 = 0;
                  } 

		document.getElementById("resultadoPlaina96").innerHTML = somaPlaina96;

	    }else if(document.getElementById('plaina97').checked)
	    {
		somaPlaina97 = somaPlaina97 - 1;

                if(somaPlaina97 < 0)
                  { 
                   somaPlaina97 = 0;
                  } 

		document.getElementById("resultadoPlaina97").innerHTML = somaPlaina97;

	    }else if(document.getElementById('plaina98').checked)
	    {
		somaPlaina98 = somaPlaina98 - 1;

                if(somaPlaina98 < 0)
                  { 
                   somaPlaina98 = 0;
                  } 

		document.getElementById("resultadoPlaina98").innerHTML = somaPlaina98;

	    }else if(document.getElementById('plaina99').checked)
	    {
		somaPlaina99 = somaPlaina99 - 1;

                if(somaPlaina99 < 0)
                  { 
                   somaPlaina99 = 0;
                  } 

		document.getElementById("resultadoPlaina99").innerHTML = somaPlaina99;

	    }else if(document.getElementById('plaina100').checked)
	    {
		somaPlaina100 = somaPlaina100 - 1;

                if(somaPlaina100 < 0)
                  { 
                   somaPlaina100 = 0;
                  } 

		document.getElementById("resultadoPlaina100").innerHTML = somaPlaina100;

	    }else if(document.getElementById('plaina101').checked)
	    {
		somaPlaina101 = somaPlaina101 - 1;

                if(somaPlaina101 < 0)
                  { 
                   somaPlaina101 = 0;
                  } 

		document.getElementById("resultadoPlaina101").innerHTML = somaPlaina101;

	    }else if(document.getElementById('plaina102').checked)
	    {
		somaPlaina102 = somaPlaina102 - 1;

                if(somaPlaina102 < 0)
                  { 
                   somaPlaina102 = 0;
                  } 

		document.getElementById("resultadoPlaina102").innerHTML = somaPlaina102;

	    }else if(document.getElementById('plaina188').checked)
	    {
		somaPlaina188 = somaPlaina188 - 1;

                if(somaPlaina188 < 0)
                  { 
                   somaPlaina188 = 0;
                  } 

		document.getElementById("resultadoPlaina188").innerHTML = somaPlaina188;

	    }else if(document.getElementById('plaina583').checked)
	    {
		somaPlaina583 = somaPlaina583 - 1;

                if(somaPlaina583 < 0)
                  { 
                   somaPlaina583 = 0;
                  } 

		document.getElementById("resultadoPlaina583").innerHTML = somaPlaina583;

	    }else if(document.getElementById('plaina584').checked)
	    {
		somaPlaina584 = somaPlaina584 - 1;

                if(somaPlaina584 < 0)
                  { 
                   somaPlaina584 = 0;
                  } 

		document.getElementById("resultadoPlaina584").innerHTML = somaPlaina584;

	    }else if(document.getElementById('carrinho2').checked)
	    {
		somaCarrinho2 = somaCarrinho2 - 1; 

                if(somaCarrinho2 < 0)
                  { 
                   somaCarrinho2 = 0;
                  } 

		document.getElementById("resultadoCarrinho2").innerHTML = somaCarrinho2;

	    }else if(document.getElementById('carrinho3').checked)
	    {
		somaCarrinho3 = somaCarrinho3 - 1;

                if(somaCarrinho3 < 0)
                  { 
                   somaCarrinho3 = 0;
                  } 

		document.getElementById("resultadoCarrinho3").innerHTML = somaCarrinho3;

	    }else if(document.getElementById('refletor613').checked)
	    {
		somaRefletor613 = somaRefletor613 - 1;

                if(somaRefletor613 < 0)
                  { 
                   somaRefletor613 = 0;
                  } 

		document.getElementById("resultadoRefletor613").innerHTML = somaRefletor613;

	    }else if(document.getElementById('refletor615').checked)
	    {
		somaRefletor615 = somaRefletor615 - 1;

                if(somaRefletor615 < 0)
                  { 
                   somaRefletor615 = 0;
                  } 
		document.getElementById("resultadoRefletor615").innerHTML = somaRefletor615;

	    }else if(document.getElementById('refletor617').checked)
	    {
		somaRefletor617 = somaRefletor617 - 1;

                if(somaRefletor617 < 0)
                  { 
                   somaRefletor617 = 0;
                  } 
		document.getElementById("resultadoRefletor617").innerHTML = somaRefletor617;

	    }else if(document.getElementById('refletor618').checked)
	    {
		somaRefletor618 = somaRefletor618 - 1;

                if(somaRefletor618 < 0)
                  { 
                   somaRefletor618 = 0;
                  } 
		document.getElementById("resultadoRefletor618").innerHTML = somaRefletor618;

	    }else if(document.getElementById('refletor624').checked)
	    {
		somaRefletor624 = somaRefletor624 - 1;

                if(somaRefletor624 < 0)
                  { 
                   somaRefletor624 = 0;
                  } 
		document.getElementById("resultadoRefletor624").innerHTML = somaRefletor624;

	    }else if(document.getElementById('refletor625').checked)
	    {
		somaRefletor625 = somaRefletor625 - 1;

                if(somaRefletor625 < 0)
                  { 
                   somaRefletor625 = 0;
                  } 
		document.getElementById("resultadoRefletor625").innerHTML = somaRefletor625;

	    }else if(document.getElementById('refletor626').checked)
	    {
		somaRefletor626 = somaRefletor626 - 1;

                if(somaRefletor626 < 0)
                  { 
                   somaRefletor626 = 0;
                  } 
		document.getElementById("resultadoRefletor626").innerHTML = somaRefletor626;

	    }else if(document.getElementById('refletor222').checked)
	    {
		somaRefletor222 = somaRefletor222 - 1;

                if(somaRefletor222 < 0)
                  { 
                   somaRefletor222 = 0;
                  } 
		document.getElementById("resultadoRefletor222").innerHTML = somaRefletor222;

	    }else if(document.getElementById('refletor1005').checked)
	    {
		somaRefletor1005 = somaRefletor1005 - 1;

                if(somaRefletor1005 < 0)
                  { 
                   somaRefletor1005 = 0;
                  } 
		document.getElementById("resultadoRefletor1005").innerHTML = somaRefletor1005;

	    }else if(document.getElementById('refletor1006').checked)
	    {
		somaRefletor1006 = somaRefletor1006 - 1;

                if(somaRefletor1006 < 0)
                  { 
                   somaRefletor1006 = 0;
                  } 
		document.getElementById("resultadoRefletor1006").innerHTML = somaRefletor1006;

	    }else if(document.getElementById('serra-sabre89').checked)
	    {
		somaSerraSabre89 = somaSerraSabre89 - 1;

                if(somaSerraSabre89 < 0)
                  { 
                   somaSerraSabre89 = 0;
                  }
 
		document.getElementById("resultadoSerraSabre89").innerHTML = somaSerraSabre89;

	    }else if(document.getElementById('serra-sabre90').checked)
	    {
		somaSerraSabre90 = somaSerraSabre90 - 1;

                if(somaSerraSabre90 < 0)
                  { 
                   somaSerraSabre90 = 0;
                  }
 
		document.getElementById("resultadoSerraSabre90").innerHTML = somaSerraSabre90;

	    }else if(document.getElementById('serra-sabre91').checked)
	    {
		somaSerraSabre91 = somaSerraSabre91 - 1;

                if(somaSerraSabre91 < 0)
                  { 
                   somaSerraSabre91 = 0;
                  }
 
		document.getElementById("resultadoSerraSabre91").innerHTML = somaSerraSabre91;

	    }else if(document.getElementById('serra-sabre92').checked)
	    {
		somaSerraSabre92 = somaSerraSabre92 - 1;

                if(somaSerraSabre92 < 0)
                  { 
                   somaSerraSabre92 = 0;
                  }
 
		document.getElementById("resultadoSerraSabre92").innerHTML = somaSerraSabre92;

	    }else if(document.getElementById('serra-sabre574').checked)
	    {
		somaSerraSabre574 = somaSerraSabre574 - 1;

                if(somaSerraSabre574 < 0)
                  { 
                   somaSerraSabre574 = 0;
                  }
 
		document.getElementById("resultadoSerraSabre574").innerHTML = somaSerraSabre574;

	    }else if(document.getElementById('serra-sabre88').checked)
	    {
		somaSerraSabre88 = somaSerraSabre88 - 1;

                if(somaSerraSabre88 < 0)
                  { 
                   somaSerraSabre88 = 0;
                  }
 
		document.getElementById("resultadoSerraSabre88").innerHTML = somaSerraSabre88;

	    }else if(document.getElementById('serra-sabre195').checked)
	    {
		somaSerraSabre195 = somaSerraSabre195 - 1;

                if(somaSerraSabre195 < 0)
                  { 
                   somaSerraSabre195 = 0;
                  }
 
		document.getElementById("resultadoSerraSabre195").innerHTML = somaSerraSabre195;

	    }else if(document.getElementById('tico-tico168').checked)
	    {
		somaSerraTicoTico168 = somaSerraTicoTico168 - 1;

                if(somaSerraTicoTico168 < 0)
                  { 
                   somaSerraTicoTico168 = 0;
                  }
 
		document.getElementById("resultadoSerraTicoTico168").innerHTML = somaSerraTicoTico168;

	    }else if(document.getElementById('tico-tico197').checked)
	    {
		somaSerraTicoTico197 = somaSerraTicoTico197 - 1;

                if(somaSerraTicoTico197 < 0)
                  { 
                   somaSerraTicoTico197 = 0;
                  }
 
		document.getElementById("resultadoSerraTicoTico197").innerHTML = somaSerraTicoTico197;

	    }else if(document.getElementById('tico-tico210').checked)
	    {
		somaSerraTicoTico210 = somaSerraTicoTico210 - 1;

                if(somaSerraTicoTico210 < 0)
                  { 
                   somaSerraTicoTico210 = 0;
                  }
 
		document.getElementById("resultadoSerraTicoTico210").innerHTML = somaSerraTicoTico210;

	    }else if(document.getElementById('tico-tico211').checked)
	    {
		somaSerraTicoTico211 = somaSerraTicoTico211 - 1;

                if(somaSerraTicoTico211 < 0)
                  { 
                   somaSerraTicoTico211 = 0;
                  }
 
		document.getElementById("resultadoSerraTicoTico211").innerHTML = somaSerraTicoTico211;

	    }else if(document.getElementById('tico-tico212').checked)
	    {
		somaSerraTicoTico212 = somaSerraTicoTico212 - 1;

                if(somaSerraTicoTico212 < 0)
                  { 
                   somaSerraTicoTico212 = 0;
                  }
 
		document.getElementById("resultadoSerraTicoTico212").innerHTML = somaSerraTicoTico212;

	    }else if(document.getElementById('tico-tico214').checked)
	    {
		somaSerraTicoTico214 = somaSerraTicoTico214 - 1;

                if(somaSerraTicoTico214 < 0)
                  { 
                   somaSerraTicoTico214 = 0;
                  }
 
		document.getElementById("resultadoSerraTicoTico214").innerHTML = somaSerraTicoTico214;

	    }else if(document.getElementById('tico-tico608').checked)
	    {
		somaSerraTicoTico608 = somaSerraTicoTico608 - 1;

                if(somaSerraTicoTico608 < 0)
                  { 
                   somaSerraTicoTico608 = 0;
                  }
 
		document.getElementById("resultadoSerraTicoTico608").innerHTML = somaSerraTicoTico608;

	    }else if(document.getElementById('tico-tico609').checked)
	    {
		somaSerraTicoTico609 = somaSerraTicoTico609 - 1;

                if(somaSerraTicoTico609 < 0)
                  { 
                   somaSerraTicoTico609 = 0;
                  }
 
		document.getElementById("resultadoSerraTicoTico609").innerHTML = somaSerraTicoTico609;

	    }else if(document.getElementById('tico-tico586').checked)
	    {
		somaSerraTicoTico586 = somaSerraTicoTico586 - 1;

                if(somaSerraTicoTico586 < 0)
                  { 
                   somaSerraTicoTico586 = 0;
                  }
 
		document.getElementById("resultadoSerraTicoTico586").innerHTML = somaSerraTicoTico586;

	    }else if(document.getElementById('tico-tico587').checked)
	    {
		somaSerraTicoTico587 = somaSerraTicoTico587 - 1;

                if(somaSerraTicoTico587 < 0)
                  { 
                   somaSerraTicoTico587 = 0;
                  }
 
		document.getElementById("resultadoSerraTicoTico587").innerHTML = somaSerraTicoTico587;

	    }else if(document.getElementById('tico-tico590').checked)
	    {
		somaSerraTicoTico590 = somaSerraTicoTico590 - 1;

                if(somaSerraTicoTico590 < 0)
                  { 
                   somaSerraTicoTico590 = 0;
                  }
 
		document.getElementById("resultadoSerraTicoTico590").innerHTML = somaSerraTicoTico590;

	    }else if(document.getElementById('tico-tico610').checked)
	    {
		somaSerraTico610 = somaSerraTico610 - 1;

                if(somaSerraTico610 < 0)
                  { 
                   somaSerraTico610 = 0;
                  }
 
		document.getElementById("resultadoSerraTico610").innerHTML = somaSerraTico610;

	    }else if(document.getElementById('soprador215').checked)
	    {
		somaSoprador215 = somaSoprador215 - 1;

                if(somaSoprador215 < 0)
                  { 
                   somaSoprador215 = 0;
                  }
 
		document.getElementById("resultadoSoprador215").innerHTML = somaSoprador215;

	    }else if(document.getElementById('soprador216').checked)
	    {
		somaSoprador216 = somaSoprador216 - 1;

                if(somaSoprador216 < 0)
                  { 
                   somaSoprador216 = 0;
                  }
 
		document.getElementById("resultadoSoprador216").innerHTML = somaSoprador216;

	    }else if(document.getElementById('soprador558').checked)
	    {
		somaSoprador558 = somaSoprador558 - 1;

                if(somaSoprador558 < 0)
                  { 
                   somaSoprador558 = 0;
                  }
 
		document.getElementById("resultadoSoprador558").innerHTML = somaSoprador558;

	    }else if(document.getElementById('tracador133').checked)
	    {
		somaTracador133 = somaTracador133 - 1;

                if(somaTracador133 < 0)
                  { 
                   somaTracador133 = 0;
                  }
 
		document.getElementById("resultadoTracador133").innerHTML = somaTracador133;

	    }else if(document.getElementById('tracador135').checked)
	    {
		somaTracador135 = somaTracador135 - 1;

                if(somaTracador135 < 0)
                  { 
                   somaTracador135 = 0;
                  }
 
		document.getElementById("resultadoTracador135").innerHTML = somaTracador135;

	    }else if(document.getElementById('tracador182').checked)
	    {
		somaTracador182 = somaTracador182 - 1;

                if(somaTracador182 < 0)
                  { 
                   somaTracador182 = 0;
                  }
 
		document.getElementById("resultadoTracador182").innerHTML = somaTracador182;

	    }else if(document.getElementById('tracador602').checked)
	    {
		somaTracador602 = somaTracador602 - 1;

                if(somaTracador602 < 0)
                  { 
                   somaTracador602 = 0;
                  }
 
		document.getElementById("resultadoTracador602").innerHTML = somaTracador602;

	    }else if(document.getElementById('tracador604').checked)
	    {
		somaTracador604 = somaTracador604 - 1;

                if(somaTracador604 < 0)
                  { 
                   somaTracador604 = 0;
                  }
 
		document.getElementById("resultadoTracador604").innerHTML = somaTracador604;

	    }else if(document.getElementById('tracador605').checked)
	    {
		somaTracador605 = somaTracador605 - 1;

                if(somaTracador605 < 0)
                  { 
                   somaTracador605 = 0;
                  }
 
		document.getElementById("resultadoTracador605").innerHTML = somaTracador605;

	    }else if(document.getElementById('tracador606').checked)
	    {
		somaTracador606 = somaTracador606 - 1;

                if(somaTracador606 < 0)
                  { 
                   somaTracador606 = 0;
                  }
 
		document.getElementById("resultadoTracador606").innerHTML = somaTracador606;

	    }else if(document.getElementById('tracador607').checked)
	    {
		somaTracador607 = somaTracador607 - 1;

                if(somaTracador607 < 0)
                  { 
                   somaTracador607 = 0;
                  }
 
		document.getElementById("resultadoTracador607").innerHTML = somaTracador607;

	    }else if(document.getElementById('tracador82').checked)
	    {
		somaTracador82 = somaTracador82 - 1;

                if(somaTracador82 < 0)
                  { 
                   somaTracador82 = 0;
                  }
 
		document.getElementById("resultadoTracador82").innerHTML = somaTracador82;

	    }else if(document.getElementById('tracador184').checked)
	    {
		somaTracador184 = somaTracador184 - 1;

                if(somaTracador184 < 0)
                  { 
                   somaTracador184 = 0;
                  }
 
		document.getElementById("resultadoTracador184").innerHTML = somaTracador184;

	    }else if(document.getElementById('tracador187').checked)
	    {
		somaTracador187 = somaTracador187 - 1;

                if(somaTracador187 < 0)
                  { 
                   somaTracador187 = 0;
                  }
 
		document.getElementById("resultadoTracador187").innerHTML = somaTracador187;

	    }else if(document.getElementById('tracador300').checked)
	    {
		somaTracador300 = somaTracador300 - 1;

                if(somaTracador300 < 0)
                  { 
                   somaTracador300 = 0;
                  }
 
		document.getElementById("resultadoTracador300").innerHTML = somaTracador300;

	    }else if(document.getElementById('escadaG1').checked)
	    {
		somaEscadaG1 = somaEscadaG1 - 1;

                if(somaEscadaG1 < 0)
                  { 
                   somaEscadaG1 = 0;
                  } 

		document.getElementById("resultadoEscadaG1").innerHTML = somaEscadaG1;

	    }else if(document.getElementById('escadaG2').checked)
	    {
		somaEscadaG2 = somaEscadaG2 - 1;

                if(somaEscadaG2 < 0)
                  { 
                   somaEscadaG2 = 0;
                  } 

		document.getElementById("resultadoEscadaG2").innerHTML = somaEscadaG2;

	    }else if(document.getElementById('escadaG3').checked)
	    {
		somaEscadaG3 = somaEscadaG3 - 1;

                if(somaEscadaG3 < 0)
                  { 
                   somaEscadaG3 = 0;
                  } 

		document.getElementById("resultadoEscadaG3").innerHTML = somaEscadaG3;

	    }else if(document.getElementById('escadaG5').checked)
	    {
		somaEscadaG5 = somaEscadaG5 - 1;

                if(somaEscadaG5 < 0)
                  { 
                   somaEscadaG5 = 0;
                  } 

		document.getElementById("resultadoEscadaG5").innerHTML = somaEscadaG5;

	    }else if(document.getElementById('escadaG7').checked)
	    {
		somaEscadaG7 = somaEscadaG7 - 1;

                if(somaEscadaG7 < 0)
                  { 
                   somaEscadaG7 = 0;
                  } 

		document.getElementById("resultadoEscadaG7").innerHTML = somaEscadaG7;

	    }else if(document.getElementById('escadaM2').checked)
	    {
		somaEscadaM2 = somaEscadaM2 - 1;

                if(somaEscadaM2 < 0)
                  { 
                   somaEscadaM2 = 0;
                  } 

		document.getElementById("resultadoEscadaM2").innerHTML = somaEscadaM2;

	    }else if(document.getElementById('escadaM3').checked)
	    {
		somaEscadaM3 = somaEscadaM3 - 1;

                if(somaEscadaM3 < 0)
                  { 
                   somaEscadaM3 = 0;
                  } 

		document.getElementById("resultadoEscadaM3").innerHTML = somaEscadaM3;

	    }else if(document.getElementById('escadaM4').checked)
	    {
		somaEscadaM4 = somaEscadaM4 - 1;

                if(somaEscadaM4 < 0)
                  { 
                   somaEscadaM4 = 0;
                  } 

		document.getElementById("resultadoEscadaM4").innerHTML = somaEscadaM4;

	    }else if(document.getElementById('escadaM5').checked)
	    {
		somaEscadaM5 = somaEscadaM5 - 1;

                if(somaEscadaM5 < 0)
                  { 
                   somaEscadaM5 = 0;
                  } 

		document.getElementById("resultadoEscadaM5").innerHTML = somaEscadaM5;

	    }else if(document.getElementById('escadaM7').checked)
	    {
		somaEscadaM7 = somaEscadaM7 - 1;

                if(somaEscadaM7 < 0)
                  { 
                   somaEscadaM7 = 0;
                  } 

		document.getElementById("resultadoEscadaM7").innerHTML = somaEscadaM7;

	    }else if(document.getElementById('escadaM8').checked)
	    {
		somaEscadaM8 = somaEscadaM8 - 1;

                if(somaEscadaM8 < 0)
                  { 
                   somaEscadaM8 = 0;
                  } 

		document.getElementById("resultadoEscadaM8").innerHTML = somaEscadaM8;

	    }else if(document.getElementById('escadaM9').checked)
	    {
		somaEscadaM9 = somaEscadaM9 - 1;

                if(somaEscadaM9 < 0)
                  { 
                   somaEscadaM9 = 0;
                  } 

		document.getElementById("resultadoEscadaM9").innerHTML = somaEscadaM9;

	    }else if(document.getElementById('escadaM10').checked)
	    {
		somaEscadaM10 = somaEscadaM10 - 1;

                if(somaEscadaM10 < 0)
                  { 
                   somaEscadaM10 = 0;
                  } 

		document.getElementById("resultadoEscadaM10").innerHTML = somaEscadaM10;

	    }else if(document.getElementById('escadaM13').checked)
	    {
		somaEscadaM13 = somaEscadaM13 - 1;

                if(somaEscadaM13 < 0)
                  { 
                   somaEscadaM13 = 0;
                  } 

		document.getElementById("resultadoEscadaM13").innerHTML = somaEscadaM13;

	    }else if(document.getElementById('escadaM15').checked)
	    {
		somaEscadaM15 = somaEscadaM15 - 1;

                if(somaEscadaM15 < 0)
                  { 
                   somaEscadaM15 = 0;
                  } 

		document.getElementById("resultadoEscadaM15").innerHTML = somaEscadaM15;

	    }else if(document.getElementById('escadaM17').checked)
	    {
		somaEscadaM17 = somaEscadaM17 - 1;

                if(somaEscadaM17 < 0)
                  { 
                   somaEscadaM17 = 0;
                  } 

		document.getElementById("resultadoEscadaM17").innerHTML = somaEscadaM17;

	    }else if(document.getElementById('escadaM18').checked)
	    {
		somaEscadaM18 = somaEscadaM18 - 1;

                if(somaEscadaM18 < 0)
                  { 
                   somaEscadaM18 = 0;
                  } 

		document.getElementById("resultadoEscadaM18").innerHTML = somaEscadaM18;

	    }else if(document.getElementById('escadaM19').checked)
	    {
		somaEscadaM19 = somaEscadaM19 - 1;

                if(somaEscadaM19 < 0)
                  { 
                   somaEscadaM19 = 0;
                  } 

		document.getElementById("resultadoEscadaM19").innerHTML = somaEscadaM19;

	    }else if(document.getElementById('escadaM20').checked)
	    {
		somaEscadaM20 = somaEscadaM20 - 1;

                if(somaEscadaM20 < 0)
                  { 
                   somaEscadaM20 = 0;
                  } 

		document.getElementById("resultadoEscadaM20").innerHTML = somaEscadaM20;

	    }else if(document.getElementById('escadaM21').checked)
	    {
		somaEscadaM21 = somaEscadaM21 - 1;

                if(somaEscadaM21 < 0)
                  { 
                   somaEscadaM21 = 0;
                  } 

		document.getElementById("resultadoEscadaM21").innerHTML = somaEscadaM21;

	    }else if(document.getElementById('escadaM22').checked)
	    {
		somaEscadaM22 = somaEscadaM22 - 1;

                if(somaEscadaM22 < 0)
                  { 
                   somaEscadaM22 = 0;
                  } 

		document.getElementById("resultadoEscadaM22").innerHTML = somaEscadaM22;

	    }else if(document.getElementById('escadaM23').checked)
	    {
		somaEscadaM23 = somaEscadaM23 - 1;

                if(somaEscadaM23 < 0)
                  { 
                   somaEscadaM23 = 0;
                  } 

		document.getElementById("resultadoEscadaM23").innerHTML = somaEscadaM23;

	    }else if(document.getElementById('escadaM27').checked)
	    {
		somaEscadaM27 = somaEscadaM27 - 1;

                if(somaEscadaM27 < 0)
                  { 
                   somaEscadaM27 = 0;
                  } 

		document.getElementById("resultadoEscadaM27").innerHTML = somaEscadaM27;

	    }else if(document.getElementById('escadaM28').checked)
	    {
		somaEscadaM28 = somaEscadaM28 - 1;

                if(somaEscadaM28 < 0)
                  { 
                   somaEscadaM28 = 0;
                  } 

		document.getElementById("resultadoEscadaM28").innerHTML = somaEscadaM28;

	    }else if(document.getElementById('escadaM29').checked)
	    {
		somaEscadaM29 = somaEscadaM29 - 1;

                if(somaEscadaM29 < 0)
                  { 
                   somaEscadaM29 = 0;
                  } 

		document.getElementById("resultadoEscadaM29").innerHTML = somaEscadaM29;

	    }else if(document.getElementById('escadaM31').checked)
	    {
		somaEscadaM31 = somaEscadaM31 - 1;

                if(somaEscadaM31 < 0)
                  { 
                   somaEscadaM31 = 0;
                  } 

		document.getElementById("resultadoEscadaM31").innerHTML = somaEscadaM31;

	    }else if(document.getElementById('escadaM33').checked)
	    {
		somaEscadaM33 = somaEscadaM33 - 1;

                if(somaEscadaM33 < 0)
                  { 
                   somaEscadaM33 = 0;
                  } 

		document.getElementById("resultadoEscadaM33").innerHTML = somaEscadaM33;

	    }else if(document.getElementById('escadaM34').checked)
	    {
		somaEscadaM34 = somaEscadaM34 - 1;

                if(somaEscadaM34 < 0)
                  { 
                   somaEscadaM34 = 0;
                  } 

		document.getElementById("resultadoEscadaM34").innerHTML = somaEscadaM34;

	    }else if(document.getElementById('escadaM35').checked)
	    {
		somaEscadaM35 = somaEscadaM35 - 1;

                if(somaEscadaM35 < 0)
                  { 
                   somaEscadaM35 = 0;
                  } 

		document.getElementById("resultadoEscadaM35").innerHTML = somaEscadaM35;

	    }else if(document.getElementById('escadaM36').checked)
	    {
		somaEscadaM36 = somaEscadaM36 - 1;

                if(somaEscadaM36 < 0)
                  { 
                   somaEscadaM36 = 0;
                  } 

		document.getElementById("resultadoEscadaM36").innerHTML = somaEscadaM36;

	    }else if(document.getElementById('escadaM37').checked)
	    {
		somaEscadaM37 = somaEscadaM37 - 1;

                if(somaEscadaM37 < 0)
                  { 
                   somaEscadaM37 = 0;
                  } 

		document.getElementById("resultadoEscadaM37").innerHTML = somaEscadaM37;

	    }else if(document.getElementById('escadaM39').checked)
	    {
		somaEscadaM39 = somaEscadaM39 - 1;

                if(somaEscadaM39 < 0)
                  { 
                   somaEscadaM39 = 0;
                  } 

		document.getElementById("resultadoEscadaM39").innerHTML = somaEscadaM39;

	    }else if(document.getElementById('escadaM41').checked)
	    {
		somaEscadaM41 = somaEscadaM41 - 1;

                if(somaEscadaM41 < 0)
                  { 
                   somaEscadaM41 = 0;
                  } 

		document.getElementById("resultadoEscadaM41").innerHTML = somaEscadaM41;

	    }else if(document.getElementById('escadaM43').checked)
	    {
		somaEscadaM43 = somaEscadaM43 - 1;

                if(somaEscadaM43 < 0)
                  { 
                   somaEscadaM43 = 0;
                  } 

		document.getElementById("resultadoEscadaM43").innerHTML = somaEscadaM43;

	    }else if(document.getElementById('escadaM44').checked)
	    {
		somaEscadaM44 = somaEscadaM44 - 1;

                if(somaEscadaM44 < 0)
                  { 
                   somaEscadaM44 = 0;
                  } 

		document.getElementById("resultadoEscadaM44").innerHTML = somaEscadaM44;

	    }else if(document.getElementById('escadaM45').checked)
	    {
		somaEscadaM45 = somaEscadaM45 - 1;

                if(somaEscadaM45 < 0)
                  { 
                   somaEscadaM45 = 0;
                  } 

		document.getElementById("resultadoEscadaM45").innerHTML = somaEscadaM45;

	    }else if(document.getElementById('escadaM46').checked)
	    {
		somaEscadaM46 = somaEscadaM46 - 1;

                if(somaEscadaM46 < 0)
                  { 
                   somaEscadaM46 = 0;
                  } 

		document.getElementById("resultadoEscadaM46").innerHTML = somaEscadaM46;

	    }else if(document.getElementById('escadaP2').checked)
	    {
		somaEscadaP2 = somaEscadaP2 - 1;

                if(somaEscadaP2 < 0)
                  { 
                   somaEscadaP2 = 0;
                  } 

		document.getElementById("resultadoEscadaP2").innerHTML = somaEscadaP2;

	    }else if(document.getElementById('escadaP5').checked)
	    {
		somaEscadaP5 = somaEscadaP5 - 1;

                if(somaEscadaP5 < 0)
                  { 
                   somaEscadaP5 = 0;
                  } 

		document.getElementById("resultadoEscadaP5").innerHTML = somaEscadaP5;

	    }else if(document.getElementById('escadaP7').checked)
	    {
		somaEscadaP7 = somaEscadaP7 - 1;

                if(somaEscadaP7 < 0)
                  { 
                   somaEscadaP7 = 0;
                  } 

		document.getElementById("resultadoEscadaP7").innerHTML = somaEscadaP7;

	    }else if(document.getElementById('escadaP10').checked)
	    {
		somaEscadaP10 = somaEscadaP10 - 1;

                if(somaEscadaP10 < 0)
                  { 
                   somaEscadaP10 = 0;
                  } 
		document.getElementById("resultadoEscadaP10").innerHTML = somaEscadaP10;

	    }else if(document.getElementById('escadaP11').checked)
	    {
		somaEscadaP11 = somaEscadaP11 - 1;

                if(somaEscadaP11 < 0)
                  { 
                   somaEscadaP11 = 0;
                  } 
		document.getElementById("resultadoEscadaP11").innerHTML = somaEscadaP11;

	    }else if(document.getElementById('escadaP12').checked)
	    {
		somaEscadaP12 = somaEscadaP12 - 1;

                if(somaEscadaP12< 0)
                  { 
                   somaEscadaP12 = 0;
                  } 
		document.getElementById("resultadoEscadaP12").innerHTML = somaEscadaP12;

	    }else if(document.getElementById('escadaP13').checked)
	    {
		somaEscadaP13 = somaEscadaP13 - 1;

                if(somaEscadaP13 < 0)
                  { 
                   somaEscadaP13 = 0;
                  } 
		document.getElementById("resultadoEscadaP13").innerHTML = somaEscadaP13;

	    }else if(document.getElementById('escadaP14').checked)
	    {
		somaEscadaP14 = somaEscadaP14 - 1;

                if(somaEscadaP14 < 0)
                  { 
                   somaEscadaP14 = 0;
                  } 
		document.getElementById("resultadoEscadaP14").innerHTML = somaEscadaP14;

	    }else if(document.getElementById('escadaP15').checked)
	    {
		somaEscadaP15 = somaEscadaP15 - 1;

                if(somaEscadaP15 < 0)
                  { 
                   somaEscadaP15 = 0;
                  }

		document.getElementById("resultadoEscadaP15").innerHTML = somaEscadaP15;

	    }else if(document.getElementById('escadaP17').checked)
	    {
		somaEscadaP17 = somaEscadaP17 - 1;

                if(somaEscadaP17 < 0)
                  { 
                   somaEscadaP17 = 0;
                  }

		document.getElementById("resultadoEscadaP17").innerHTML = somaEscadaP17;

	    }else if(document.getElementById('escadaP18').checked)
	    {
		somaEscadaP18 = somaEscadaP18 - 1;

                if(somaEscadaP18 < 0)
                  { 
                   somaEscadaP18 = 0;
                  }

		document.getElementById("resultadoEscadaP18").innerHTML = somaEscadaP18;

	    }else if(document.getElementById('escadaP19').checked)
	    {
		somaEscadaP19 = somaEscadaP19 - 1;

                if(somaEscadaP19 < 0)
                  { 
                   somaEscadaP19 = 0;
                  }

		document.getElementById("resultadoEscadaP19").innerHTML = somaEscadaP19;

	    }else if(document.getElementById('escadaP21').checked)
	    {
		somaEscadaP21 = somaEscadaP21 - 1;

                if(somaEscadaP21 < 0)
                  { 
                   somaEscadaP21 = 0;
                  }

		document.getElementById("resultadoEscadaP21").innerHTML = somaEscadaP21;

	    }else if(document.getElementById('escadaP23').checked)
	    {
		somaEscadaP23 = somaEscadaP23 - 1;

                if(somaEscadaP23 < 0)
                  { 
                   somaEscadaP23 = 0;
                  }

		document.getElementById("resultadoEscadaP23").innerHTML = somaEscadaP23;

	    }else if(document.getElementById('escadaP26').checked)
	    {
		somaEscadaP26 = somaEscadaP26 - 1;

                if(somaEscadaP26 < 0)
                  { 
                   somaEscadaP26 = 0;
                  }

		document.getElementById("resultadoEscadaP26").innerHTML = somaEscadaP26;

	    }else if(document.getElementById('escadaP28').checked)
	    {
		somaEscadaP28 = somaEscadaP28 - 1;

                if(somaEscadaP28 < 0)
                  { 
                   somaEscadaP28 = 0;
                  }

		document.getElementById("resultadoEscadaP28").innerHTML = somaEscadaP28;

	    }else if(document.getElementById('escadaP31').checked)
	    {
		somaEscadaP31 = somaEscadaP31 - 1;

                if(somaEscadaP31 < 0)
                  { 
                   somaEscadaP31 = 0;
                  }

		document.getElementById("resultadoEscadaP31").innerHTML = somaEscadaP31;

	    }else if(document.getElementById('escadaP33').checked)
	    {
		somaEscadaP33 = somaEscadaP33 - 1;

                if(somaEscadaP33 < 0)
                  { 
                   somaEscadaP33 = 0;
                  }

		document.getElementById("resultadoEscadaP33").innerHTML = somaEscadaP33;

	    }else if(document.getElementById('escadaP34').checked)
	    {
		somaEscadaP34 = somaEscadaP34 - 1;

                if(somaEscadaP34 < 0)
                  { 
                   somaEscadaP34 = 0;
                  }

		document.getElementById("resultadoEscadaP34").innerHTML = somaEscadaP34;

	    }else if(document.getElementById('escadaP35').checked)
	    {
		somaEscadaP35 = somaEscadaP35 - 1;

                if(somaEscadaP35 < 0)
                  { 
                   somaEscadaP35 = 0;
                  }

		document.getElementById("resultadoEscadaP35").innerHTML = somaEscadaP35;

	    }else if(document.getElementById('escadaP36').checked)
	    {
		somaEscadaP36 = somaEscadaP36 - 1;

                if(somaEscadaP36 < 0)
                  { 
                   somaEscadaP36 = 0;
                  }

		document.getElementById("resultadoEscadaP36").innerHTML = somaEscadaP36;

	    }else if(document.getElementById('escadaP37').checked)
	    {
		somaEscadaP37 = somaEscadaP37 - 1;

                if(somaEscadaP37 < 0)
                  { 
                   somaEscadaP37 = 0;
                  }

		document.getElementById("resultadoEscadaP37").innerHTML = somaEscadaP37;

	    }else if(document.getElementById('escadaP38').checked)
	    {
		somaEscadaP38 = somaEscadaP38 - 1;

                if(somaEscadaP38 < 0)
                  { 
                   somaEscadaP38 = 0;
                  }

		document.getElementById("resultadoEscadaP38").innerHTML = somaEscadaP38;

	    }else if(document.getElementById('escadaP39').checked)
	    {
		somaEscadaP39 = somaEscadaP39 - 1;

                if(somaEscadaP39 < 0)
                  { 
                   somaEscadaP39 = 0;
                  }

		document.getElementById("resultadoEscadaP39").innerHTML = somaEscadaP39;

	    }else if(document.getElementById('escadaP40').checked)
	    {
		somaEscadaP40 = somaEscadaP40 - 1;

                if(somaEscadaP40 < 0)
                  { 
                   somaEscadaP40 = 0;
                  }

		document.getElementById("resultadoEscadaP40").innerHTML = somaEscadaP40;

	    }else if(document.getElementById('tracador81').checked)
	    {
		somaTracador81 = somaTracador81 - 1;

                if(somaTracador81 < 0)
                  { 
                   somaTracador81 = 0;
                  }

		document.getElementById("resultadoTracador81").innerHTML = somaTracador81;

	    }else if(document.getElementById('tracador139').checked)
	    {
		somaTracador139 = somaTracador139 - 1;

                if(somaTracador139 < 0)
                  { 
                   somaTracador139 = 0;
                  }

		document.getElementById("resultadoTracador139").innerHTML = somaTracador139;

	    }else if(document.getElementById('parafusadeira219').checked)
	    {
		somaParafusadeira219 = somaParafusadeira219 - 1;

                if(somaParafusadeira219 < 0)
                  { 
                   somaParafusadeira219 = 0;
                  }

		document.getElementById("resultadoParafusadeira219").innerHTML = somaParafusadeira219;

            }else if(document.getElementById('furadeira205').checked)
	    {
		somaFuradeira205 = somaFuradeira205 - 1;

                if(somaFuradeira205 < 0)
                  { 
                   somaFuradeira205 = 0;
                  }

		document.getElementById("resultadoFuradeira205").innerHTML = somaFuradeira205;

            }else if(document.getElementById('pinador2').checked)
	    {
		somaPinador2 = somaPinador2 - 1;

                if(somaPinador2 < 0)
                  { 
                   somaPinador2 = 0;
                  }

		document.getElementById("resultadoPinador2").innerHTML = somaPinador2;

	    }else if(document.getElementById('pinador5').checked)
	    {
		somaPinador5 = somaPinador5 - 1;

                if(somaPinador5 < 0)
                  { 
                   somaPinador5 = 0;
                  }

		document.getElementById("resultadoPinador5").innerHTML = somaPinador5;

	    }else if(document.getElementById('pinador18').checked)
	    {
		somaPinador18 = somaPinador18 - 1;

                if(somaPinador18 < 0)
                  { 
                   somaPinador18 = 0;
                  }

		document.getElementById("resultadoPinador18").innerHTML = somaPinador18;

	    }else if(document.getElementById('pinador22').checked)
	    {
		somaPinador22 = somaPinador22 - 1;

                if(somaPinador22 < 0)
                  { 
                   somaPinador22 = 0;
                  }

		document.getElementById("resultadoPinador22").innerHTML = somaPinador22;

	    }else if(document.getElementById('pinador575').checked)
	    {
		somaPinador575 = somaPinador575 - 1;

                if(somaPinador575 < 0)
                  { 
                   somaPinador575 = 0;
                  }

		document.getElementById("resultadoPinador575").innerHTML = somaPinador575;

	    }else if(document.getElementById('pinador598').checked)
	    {
		somaPinador598 = somaPinador598 - 1;

                if(somaPinador598 < 0)
                  { 
                   somaPinador598 = 0;
                  }

		document.getElementById("resultadoPinador598").innerHTML = somaPinador598;

	    }
	}

	function planilha(e) {
		    
	    TableToExcel.convert(document.getElementById("table"), {
	    name: "Inventario Rotativo.xlsx",
	    sheet: {
		name: "Inventario Rotativo"
	    }
	    });
	}

})(window,document);
 