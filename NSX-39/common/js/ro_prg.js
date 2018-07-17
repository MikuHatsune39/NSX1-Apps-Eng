/*
=============================================
[c!]COLORS -Think Innovation!-
http://www.colors.gr.jp/
info@colors.gr.jp
(C)2005 COLORS Co.,Ltd. All Rights Reserved.
--
Author: MIKI @ COLORS! Coding Division
Version: 2006-
---------------------------------------------

File Name : ro_prg.js

=============================================
*/

var data = new Array();
var Flg = new Array();
var BasePath = '';

function ImgInit(nm, sta, img){
    if(Flg[nm] != 1){
        data[nm] = new Array();
        Flg[nm] = 1;
    }
    data[nm][sta] = new Image();
    data[nm][sta].src = BasePath + img;
}

function ImageSwap(nm, sta){
    document.images[nm].src = data[nm][sta].src;
}

function ImageSwap2(dst, src, sta){
    document.images[dst].src = data[src][sta].src;
}

function open_window01(spass){
	window.open(spass,"01","scrollbars=1,resizable=1,width=445,height=570");
}

function open_window02(spass){
	window.open(spass,"02","scrollbars=1,resizable=1,width=445,height=270");
}

function open_window03(spass){
	window.open(spass,"03","scrollbars=1,resizable=1,width=445,height=450");
}

function open_window04(spass,nm){
	window.open(spass,nm,"scrollbars=1,resizable=1,width=445,height=530");
}

function open_window05(spass,nm){
	window.open(spass,nm,"scrollbars=1,resizable=1,width=580,height=530");
}

function open_window06(spass,nm){
	window.open(spass,nm,"scrollbars=1,resizable=1,width=750,height=620");
}

function open_window07(spass,nm){
	window.open(spass,nm,"scrollbars=1,resizable=1,width=580,height=580");
}

function open_window08(spass,nm){
	window.open(spass,nm,"scrollbars=1,resizable=1,width=580,height=800");
}

function open_window09(spass,nm){
	window.open(spass,nm,"scrollbars=1,resizable=1,width=580,height=450");
}



function openCatalog( strURL ){
	var screen_width = 1000;
	var screen_height = 650;
	strFeatures = "left=0,top=0,width=" + screen_width + ",height=" + screen_height + ",";
	strFeatures += "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes";
	windowname=window.open( strURL, "catalog", strFeatures );
	windowname.focus();
	return;
}