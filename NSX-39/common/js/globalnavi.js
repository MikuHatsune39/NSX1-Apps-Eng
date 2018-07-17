function setGlobalNavigation(num,status) {
	var level = "";
	// 最新号解説
	var latestMsg = "ふろくは、小さな活版印刷機です。";
	
	if(num == 1) {
		level = "./";
	} else if(num == 2) {
		level = "../";
	} else if(num == 3) {
		level = "../../";
	} else if(num == 4) {
		level = "../../../";
	}
	
	// 最新号お知らせ・次号予告・バックナンバー　開始
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="183" class="b5Mg">');
	document.write('<tr>');
	document.write('<td width="183" valign="top" class="nvNew">');
		document.write('<table border="0" cellpadding="0" cellspacing="0" width="183" class="b10Padd">');
		document.write('<tr>');
		document.write('<td width="183" valign="top" colspan="2"><a href="' + level + 'magazine/vol45/index.html"><img src="' + level + 'common/img/nv_nxttitl.gif" alt="大人の科学マガジン 小さな活版印刷機" width="183" height="46"></a></td></tr><tr>');
		document.write('<td width="71" align="center" valign="top"><a href="' + level + 'magazine/vol45/index.html"><img src="' + level + 'common/img/nv_nxtimg_vol45.jpg" alt="" width="54" height="74"></a></td>');
		document.write('<td width="112" valign="top">');
			document.write('<table border="0" cellpadding="0" cellspacing="0" width="112" class="b4Mg">');
			document.write('<tr><td width="112" valign="top"><p class="fs09">ふろくは、温かくてなつかしい活版印刷、小さな活版印刷機です。</p></td></tr>');
			if(status == 'nv_detail') {
				document.write('<tr><td width="112" height="26" align="right" valign="bottom"><p class="l22Mg"><a href="' + level + 'magazine/vol45/index.html"><img src="' + level + 'common/img/nv_detail_r.gif" alt="詳しくはこちら" width="90" height="16" name="nv_detail"></a></p></td></tr>');
			} else {
				document.write('<tr><td width="112" height="26" align="right" valign="bottom"><p class="l22Mg"><a href="' + level + 'magazine/vol45/index.html" onMouseOver="ImageSwap(&#39;nv_detail&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_detail&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_detail.gif" alt="詳しくはこちら" width="90" height="16" name="nv_detail"></a></p></td></tr>');
			}
			document.write('</table></td></tr>');
		document.write('</table>');
		document.write('<table border="0" cellpadding="0" cellspacing="0" width="183">');
		//しばらくなし
//		if(status == 'nv_next') {
//			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'magazine/vol42/index.html"><img src="' + level + 'common/img/nv_next_r.gif" alt="大人の科学マガジン&nbsp;次号予告" width="183" height="38" name="nv_next"></a></p></td></tr>');
//		} else {
//			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'magazine/vol42/index.html" onMouseOver="ImageSwap(&#39;nv_next&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_next&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_next.gif" alt="大人の科学マガジン&nbsp;次号予告" width="183" height="38" name="nv_next"></a></p></td></tr>');
//		}
		

//
		if(status == 'nv_back') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'magazine/index.html"><img src="' + level + 'common/img/nv_back_r.gif" alt="大人の科学マガジン&nbsp;ラインナップ一覧" width="183" height="32" name="nv_back"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'magazine/index.html" onMouseOver="ImageSwap(&#39;nv_back&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_back&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_back.gif" alt="大人の科学マガジン&nbsp;ラインナップ一覧" width="183" height="32" name="nv_back"></a></p></td></tr>');
		}
		document.write('</table></td></tr>');
	document.write('</table>');
	// 最新号お知らせ・次号予告・バックナンバー　開始





//science live
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="183" class="b5Mg">');
		document.write('<tr><td width="183" valign="top" class="science_live">');
		document.write('<table border="0" cellpadding="0" cellspacing="0" width="183">');
		
		if(status == 'science_live') {
			document.write('<tr><td width="183" valign="top"><p><!--<a href="' + level + 'science_live/index.html">--><img src="' + level + 'common/img/nv_science_live_r.gif" alt="サイエンス・ライブ" width="183" height="30" name="nv_science_live"><!--</a>--></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><!--<a href="' + level + 'science_live/index.html" onMouseOver="ImageSwap(&#39;nv_soundgadget&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_soundgadget&#39;,&#39;out&#39;);">--><img src="' + level + 'common/img/nv_science_live.gif" alt="サイエンス・ライブ" width="183" height="30" name="nv_science_live"><!--</a>--></p></td></tr>');
		}
		
		
		if(status == 'nv_sl02') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'science_live/vol02/index.html"><img src="' + level + 'common/img/nv_sl02_r.gif" alt="東大素粒子講座　ヒッグス粒子" width="183" height="33" name="nv_sl02"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'science_live/vol02/index.html" onMouseOver="ImageSwap(&#39;nv_sl02&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_sl02&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_sl02.gif" alt="東大素粒子講座　ヒッグス粒子" width="183" height="33" name="nv_sl02"></a></p></td></tr>');
		}


		if(status == 'nv_sl01') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'science_live/vol01/index.html"><img src="' + level + 'common/img/nv_sl01_r.gif" alt="東大天文講座　星と銀河と宇宙の進化" width="183" height="33" name="nv_sl01"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'science_live/vol01/index.html" onMouseOver="ImageSwap(&#39;nv_sl01&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_sl01&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_sl01.gif" alt="東大天文講座　星と銀河と宇宙の進化" width="183" height="33" name="nv_sl01"></a></p></td></tr>');
		}


		
		document.write('</table></td></tr>');
	document.write('</table>');













//handmade
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="183" class="b5Mg">');
		document.write('<tr><td width="183" valign="top" class="nv_handmade">');
		document.write('<table border="0" cellpadding="0" cellspacing="0" width="183">');
		
		if(status == 'nv_handmade') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'phm/index.html"><img src="' + level + 'common/img/nv_handmade_r.gif" alt="プチ・ハンドメイド シリーズご紹介" width="182" height="38" name="nv_handmade"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'phm/index.html" onMouseOver="ImageSwap(&#39;nv_handmade&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_handmade&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_handmade.gif" alt="プチ・ハンドメイド シリーズご紹介" width="182" height="38" name="nv_handmade"></a></p></td></tr>');
		}
		
		

		
		document.write('</table></td></tr>');
	document.write('</table>');

//soundgadget
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="183" class="b5Mg">');
		document.write('<tr><td width="183" valign="top" class="soundgadget">');
		document.write('<table border="0" cellpadding="0" cellspacing="0" width="183">');
		
		if(status == 'soundgadget') {
			document.write('<tr><td width="183" valign="top"><p><!--<a href="' + level + 'soundgadget/index.html">--><img src="' + level + 'common/img/nv_soundgadget_r.gif" alt="大人の科学製品版ご紹介" width="183" height="30" name="nv_soundgadget"><!--</a>--></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><!--<a href="' + level + 'soundgadget/index.html" onMouseOver="ImageSwap(&#39;nv_soundgadget&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_soundgadget&#39;,&#39;out&#39;);">--><img src="' + level + 'common/img/nv_soundgadget.gif" alt="サウンドガジェットシリーズご紹介" width="183" height="30" name="nv_soundgadget"><!--</a>--></p></td></tr>');
		}
		
		

		if(status == 'nv_01sx150m2') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'soundgadget/01sx150m2/index.html"><img src="' + level + 'common/img/nv_01sx150m2_r.gif" alt="アナログ・シンセサイザー SX-150 MARKII" width="183" height="33" name="nv_01sx150m2"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'soundgadget/01sx150m2/index.html" onMouseOver="ImageSwap(&#39;nv_01sx150m2&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_01sx150m2&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_01sx150m2.gif" alt="アナログ・シンセサイザー SX-150 MARKII" width="183" height="33" name="nv_01sx150m2"></a></p></td></tr>');
		}

		if(status == 'nv_thereminplus') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'soundgadget/thereminplus/index.html"><img src="' + level + 'common/img/nv_thereminplus_r.gif" alt="テルミンミニプラス　組立完成品" width="183" height="33" name="nv_thereminplus"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'soundgadget/thereminplus/index.html" onMouseOver="ImageSwap(&#39;nv_thereminplus&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_thereminplus&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_thereminplus.gif" alt="テルミンミニプラス　組立完成品" width="183" height="33" name="nv_thereminplus"></a></p></td></tr>');
		}

		
		document.write('</table></td></tr>');
	document.write('</table>');

//大人のひみつ
//himitsu
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="183" class="b5Mg">');
		document.write('<tr><td width="183" valign="top" class="himitsu">');
		document.write('<table border="0" cellpadding="0" cellspacing="0" width="183">');
		
//		if(status == 'himitsu') {
//			document.write('<tr><td width="183" valign="top"><p><!--<a href="' + level + 'himitsu/index.html">--><img src="' + level + 'common/img/nv_himitsu_r.gif" alt="学研まんが「大人のひみつシリーズ」" width="183" height="30" name="nv_himitsu"><!--</a>--></p></td></tr>');
//		} else {
//			document.write('<tr><td width="183" valign="top"><p><!--<a href="' + level + 'himitsu/index.html" onMouseOver="ImageSwap(&#39;nv_himitsu&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_himitsu&#39;,&#39;out&#39;);">--><img src="' + level + 'common/img/nv_himitsu.gif" alt="学研まんが「大人のひみつシリーズ」" width="183" height="30" name="nv_himitsu"><!--</a>--></p></td></tr>');
//		}
		
		

		if(status == 'nv_himitsu_karada') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'himitsu/karada/index.html"><img src="' + level + 'common/img/nv_himitsu_karada_r.gif" alt="大人のひみつシリーズ「からだのひみつ」" width="183" height="33" name="nv_himitsu_karada"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'himitsu/karada/index.html" onMouseOver="ImageSwap(&#39;nv_himitsu_karada&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_himitsu_karada&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_himitsu_karada.gif" alt="大人のひみつシリーズ「からだのひみつ」" width="183" height="33" name="nv_himitsu_karada"></a></p></td></tr>');
		}


		
		document.write('</table></td></tr>');
	document.write('</table>');


	// ナビゲーション　開始
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="183" class="b27Mg">');
		if(status == 'nv_feature') {
			document.write('<tr><td width="183" valign="top" class="topLine4px"><a href="' + level + 'feature/index.html"><img src="' + level + 'common/img/nv_feature_r.gif" alt="特集記事" width="183" height="22" name="nv_feature"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top" class="topLine4px"><a href="' + level + 'feature/index.html" onMouseOver="ImageSwap(&#39;nv_feature&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_feature&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_feature.gif" alt="特集記事" width="183" height="22" name="nv_feature"></a></p></td></tr>');
		}
		
		if(status == 'nv_issue') {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><p><a href="' + level + 'issue/index.html"><img src="' + level + 'common/img/nv_issue_r.gif" alt="WEB連載" width="183" height="22" name="nv_issue"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><p><a href="' + level + 'issue/index.html" onMouseOver="ImageSwap(&#39;nv_issue&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_issue&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_issue.gif" alt="WEB連載" width="183" height="22" name="nv_issue"></a></p></td></tr>');
		}
		
		if(status == 'nv_depo') {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><p><a href="' + level + 'depo/index.html"><img src="' + level + 'common/img/nv_depo_r.gif" alt="サイエンスデポ" width="183" height="22" name="nv_depo"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><p><a href="' + level + 'depo/index.html" onMouseOver="ImageSwap(&#39;nv_depo&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_depo&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_depo.gif" alt="サイエンスデポ" width="183" height="22" name="nv_depo"></a></p></td></tr>');
		}
//annex ins 2007.12.13
		if(status == 'nv_annex') {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><p><a href="' + level + 'annex/index.html"><img src="' + level + 'common/img/nv_annex_r.gif" alt="「ふろく」の思い出" width="183" height="40" name="nv_annex"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><p><a href="' + level + 'annex/index.html" onMouseOver="ImageSwap(&#39;nv_annex&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_annex&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_annex.gif" alt="「ふろく」の思い出" width="183" height="40" name="nv_annex"></a></p></td></tr>');
		}
//2012.03.29
//		if(status == 'nv_wanpaku') {
//			document.write('<tr><td width="183" valign="top" class="topLine1px"><a href="' + level + 'wanpaku/index.html"><img src="' + level + 'common/img/nv_wanpaku_r.gif" alt="投稿わんぱく倶楽部" width="183" height="40" name="nv_wanpaku"></a></p></td></tr>');
//		} else {
//			document.write('<tr><td width="183" valign="top" class="topLine1px"><a href="' + level + 'wanpaku/index.html" onMouseOver="ImageSwap(&#39;nv_wanpaku&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_wanpaku&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_wanpaku.gif" alt="投稿わんぱく倶楽部" width="183" height="40" name="nv_wanpaku"></a></p></td></tr>');
//		}

		if(status == 'nv_dl') {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><a href="' + level + 'download/index.html"><img src="' + level + 'common/img/nv_dl_r.gif" alt="ダウンロード" width="183" height="40" name="nv_dl"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><a href="' + level + 'download/index.html" onMouseOver="ImageSwap(&#39;nv_dl&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_dl&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_dl.gif" alt="ダウンロード" width="183" height="40" name="nv_dl"></a></p></td></tr>');
		}
		
		if(status == 'nv_master') {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><a href="' + level + 'webmaster/index.html"><img src="' + level + 'common/img/nv_master_r.gif" alt="WEBマスタープログラム" width="183" height="44" name="nv_master"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><a href="' + level + 'webmaster/index.html" onMouseOver="ImageSwap(&#39;nv_master&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_master&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_master.gif" alt="WEBマスタープログラム" width="183" height="44" name="nv_master"></a></p></td></tr>');
		}

		if(status == 'nv_qa') {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><p><a href="' + level + 'qa/index.html"><img src="' + level + 'common/img/nv_qa_r.gif" alt="大人の科学Q&amp;A" width="183" height="44" name="nv_qa"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><p><a href="' + level + 'qa/index.html" onMouseOver="ImageSwap(&#39;nv_qa&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_qa&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_qa.gif" alt="大人の科学Q&amp;A" width="183" height="44" name="nv_qa"></a></p></td></tr>');
		}

		if(status == 'nv_mail') {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><p><a href="https://pf.gakken.jp/user/entry.gsp?sid=OTN&mid=000211yZ&hid=0Ao11EUk9_0&step=front_1-1"><img src="' + level + 'common/img/nv_mail_r.gif" alt="メールマガジン購読" width="183" height="44" name="nv_mail"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top" class="topLine1px"><p><a href="https://pf.gakken.jp/user/entry.gsp?sid=OTN&mid=000211yZ&hid=0Ao11EUk9_0&step=front_1-1" onMouseOver="ImageSwap(&#39;nv_mail&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_mail&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_mail.gif" alt="メールマガジン購読" width="183" height="44" name="nv_mail"></a></p></td></tr>');
		}
		



		document.write('<tr><td width="183" valign="top" class="topLine1px">');
		document.write('<table border="0" cellpadding="0" cellspacing="0" width="183" class="tb5Mg">');
		
		if(status == 'mecha') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/index.html"><img src="' + level + 'common/img/nv_prod_r.gif" alt="大人の科学製品版ご紹介" width="183" height="28" name="nv_prod"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/index.html" onMouseOver="ImageSwap(&#39;nv_prod&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_prod&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_prod.gif" alt="大人の科学製品版ご紹介" width="183" height="28" name="nv_prod"></a></p></td></tr>');
		}
		
		

		if(status == 'nv_living') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/living/index.html"><img src="' + level + 'common/img/nv_living_r.jpg" alt="リビングサイエンス" width="183" height="33" name="nv_living"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/living/index.html" onMouseOver="ImageSwap(&#39;nv_living&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_living&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_living.jpg" alt="リビングサイエンス" width="183" height="33" name="nv_living"></a></p></td></tr>');
		}


		
		
		if(status == 'nv_kit') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/kit/index.html"><img src="' + level + 'common/img/nv_kit_r.jpg" alt="回路を作る実験キット：実験キットシリーズ" width="183" height="33" name="nv_kit"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/kit/index.html" onMouseOver="ImageSwap(&#39;nv_kit&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_kit&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_kit.jpg" alt="回路を作る実験キット：実験キットシリーズ" width="183" height="33" name="nv_kit"></a></p></td></tr>');
		}
		
		if(status == 'nv_karakuri') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/karakuri/index.html"><img src="' + level + 'common/img/nv_karakuri_r.jpg" alt="江戸時代の匠の技が甦る！：からくりシリーズ" width="183" height="33" name="nv_karakuri"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/karakuri/index.html" onMouseOver="ImageSwap(&#39;nv_karakuri&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_karakuri&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_karakuri.jpg" alt="江戸時代の匠の技が甦る！：からくりシリーズ" width="183" height="33" name="nv_karakuri"></a></p></td></tr>');
		}
		
		if(status == 'nv_mecha') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/mechanic/index.html"><img src="' + level + 'common/img/nv_mecha_r.jpg" alt="メカのしくみがわかる：機械工学シリーズ" width="183" height="33" name="nv_mecha"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/mechanic/index.html" onMouseOver="ImageSwap(&#39;nv_mecha&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_mecha&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_mecha.jpg" alt="メカのしくみがわかる：機械工学シリーズ" width="183" height="33" name="nv_mecha"></a></p></td></tr>');
		}
		
		if(status == 'nv_invent') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/invent/index.html"><img src="' + level + 'common/img/nv_invent_r.jpg" alt="歴史の名品を再現！：発明・発見シリーズ" width="183" height="33" name="nv_invent"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/invent/index.html" onMouseOver="ImageSwap(&#39;nv_invent&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_invent&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_invent.jpg" alt="歴史の名品を再現！：発明・発見シリーズ" width="183" height="33" name="nv_invent"></a></p></td></tr>');
		}
		
		if(status == 'nv_others') {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/others/index.html"><img src="' + level + 'common/img/nv_others_r.jpg" alt="様々な実験が楽しめる：その他の実験シリーズ" width="183" height="33" name="nv_others"></a></p></td></tr>');
		} else {
			document.write('<tr><td width="183" valign="top"><p><a href="' + level + 'products/others/index.html" onMouseOver="ImageSwap(&#39;nv_others&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_others&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_others.jpg" alt="様々な実験が楽しめる：その他の実験シリーズ" width="183" height="33" name="nv_others"></a></p></td></tr>');
		}
		
		document.write('</table></td></tr>');
	
	if(status == 'nv_top') {
		document.write('<tr><td width="183" valign="top" class="topBtmLine1px"><p><a href="/"><img src="' + level + 'common/img/nv_top_r.gif" alt="大人の科学トップページ" width="183" height="20" name="nv_top"></a></p></td></tr>');
	} else {
		document.write('<tr><td width="183" valign="top" class="topBtmLine1px"><p><a href="' + level + 'index.html" onMouseOver="ImageSwap(&#39;nv_top&#39;,&#39;over&#39;);" onMouseOut="ImageSwap(&#39;nv_top&#39;,&#39;out&#39;);"><img src="' + level + 'common/img/nv_top.gif" alt="大人の科学トップページ" width="183" height="20" name="nv_top"></a></p></td></tr>');
	}
	document.write('</table>');
	// ナビゲーション　終了

	// バナー
	document.write('<table border="0" cellpadding="0" cellspacing="0" width="183">');
	document.write('<tr><td width="183" valign="top"><p class="t10Mg"><a href="http://kids.gakken.co.jp/kagaku/index.html" target="_blank"><img src="' + level + 'common/img/nv_siencekids.gif" alt="サイエンスキッズ" width="183" height="22" class="imgover"></a></p></td></tr>');
	document.write('</table>');

	document.write('<table border="0" cellpadding="0" cellspacing="0" width="183" class="b27Mg">');
	document.write('<tr><td width="183" valign="top"><p class="t10Mg"><a href="http://www.itbs-sem.jp/" target="_blank"><img src="' + level + 'common/img/nv_itabashi.gif" alt="板橋区立教育科学館" width="183" height="22" class="imgover"></a></p></td></tr>');
	document.write('</table>');





	// バナー　終了

}