function setHeader(num) {
	var level = "";
	// 最新号解説
	
	if(num == 1) {
		level = "./";
	} else if(num == 2) {
		level = "../";
	} else if(num == 3) {
		level = "../../";
	} else if(num == 4) {
		level = "../../../";
	}

	document.write('<table border="0" cellpadding="0" cellspacing="0" width="778">');
	document.write('<tr>');
	document.write('<td width="778" class="hdrBG">');
		document.write('<table border="0" cellpadding="0" cellspacing="0" width="778">');
		document.write('<tr>');
		document.write('<td width="268" valign="top"><h1><a href="' + level + 'index.html"><img src="' + level + 'common/img/hdr_logo.gif" alt="大人の科学.net" width="268" height="79"></a></h1></td>');
		document.write('<td width="510" valign="top" align="right">');
			document.write('<table border="0" cellpadding="0" cellspacing="0" width="271">');
			document.write('<tr>');
			document.write('<td width="271" align="right" valign="top"><a href="http://www.gakken.co.jp/" target="_blank"><img src="' + level + 'common/img/hdr_comnm.gif" alt="Gakken" width="60" height="25"></a></td></tr>');
			document.write('</table>');

			document.write('<table border="0" cellpadding="0" cellspacing="0" width="271">');
			// document.write('<tr><td width="85" valign="top"><a href="#"><img src="' + level + 'common/img/hdr_top.gif" alt="総合トップ" width="70" height="20" name="hdr_top"></a></td>');
			document.write('<tr><td width="85" valign="top"><a href="' + level + 'english/index.html"><img src="' + level + 'common/img/hdr_eng.gif" alt="English" width="70" height="20"></a></td>');
			document.write('<td width="106" valign="top"><a href="' + level + 'inquiry/index.html"><img src="' + level + 'common/img/hdr_inq.gif" alt="お問い合わせ" width="90" height="20" name="hdr_inq"></a></td>');
			document.write('<td width="80" valign="top"><a href="' + level + 'map/index.html"><img src="' + level + 'common/img/hdr_map.gif" alt="サイトマップ" width="80" height="20"></a></td></tr>');
			document.write('</table>');

			document.write('<table border="0" cellpadding="0" cellspacing="0" width="510">');
			document.write('<tr>');
			document.write('<td width="510" height="30" align="right">');
			document.write('<div id="searchArea">');
			document.write('<form method="get" action="http://www.google.co.jp/custom" target="google_window">');
			document.write('<input type="hidden" name="domains" value="otonanokagaku.net"></input>');
			document.write('<input type="text" name="q" size="30" maxlength="255" value=""></input>');
			document.write('<input type="radio" name="sitesearch" value="" checked="checked"></input>&nbsp;&nbsp;Web&nbsp;&nbsp;<input type="radio" name="sitesearch" value="otonanokagaku.net"></input>&nbsp;&nbsp;otonanokagaku.net&nbsp;&nbsp;<input type="submit" name="sa" value="Google 検索"></input>');
			document.write('<input type="hidden" name="client" value="pub-4146133737943106"></input>');
			document.write('<input type="hidden" name="forid" value="1"></input>');
			document.write('<input type="hidden" name="ie" value="UTF-8"></input>');
			document.write('<input type="hidden" name="oe" value="UTF-8"></input>');
			document.write('<input type="hidden" name="cof" value="GALT:#008000;GL:1;DIV:#336699;VLC:663399;AH:center;BGC:FFFFFF;LBGC:FFFFFF;ALC:0000FF;LC:0000FF;T:000000;GFNT:0000FF;GIMP:0000FF;FORID:1"></input>');
			document.write('<input type="hidden" name="hl" value="ja"></input>');
			document.write('</form>');
			document.write('</div>');
			document.write('</td></tr>');
			document.write('</table></td></tr>');
		document.write('</table></td></tr>');
	document.write('</table>');
}