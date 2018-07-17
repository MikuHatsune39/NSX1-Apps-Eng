function setFooter(num) {
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

	document.write('<table border="0" cellpadding="0" cellspacing="0" width="782"><tr>');
	document.write('<td width="64" valign="top"><a href="' + level + 'rule/index.html"><img src="' + level + 'common/img/ftr_kiyaku.gif" alt="利用規約" width="51" height="13"></a></td>');
	document.write('<td width="64" valign="top"><a href="' + level + 'browser/index.html"><img src="' + level + 'common/img/ftr_env.gif" alt="推奨環境" width="51" height="13"></a></td>');
	document.write('<td width="84" valign="top"><a href="' + level + 'inquiry/index.html"><img src="' + level + 'common/img/ftr_inq.gif" alt="お問い合わせ" width="71" height="13"></a></td>');
	document.write('<td width="81" valign="top"><a href="' + level + 'map/index.html"><img src="' + level + 'common/img/ftr_map.gif" alt="サイトマップ" width="71" height="13"></a></td>');
	document.write('<td width="110" valign="top"><a href="http://gakken-plus.co.jp/privacypolicy/" target="_blank"><img src="' + level + 'common/img/ftr_policy.gif" alt="プライバシーポリシー" width="110" height="13"></a></td>');
	document.write('<td width="379" align="right" valign="top"><p class="fs09">Copyright &copy; <a href="http://gakken-plus.co.jp/" target="_blank">Gakken Plus Co.,Ltd.</a></p></td>');
	document.write('</tr></table>');
}