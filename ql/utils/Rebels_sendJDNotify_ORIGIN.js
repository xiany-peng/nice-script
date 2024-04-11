/*
一个强大的推送通知库，主要用于汇总多条账号消息后集中推送通知
默认情况下账号消息指的是单一账号的消息，它由“<前缀><用户名><消息内容>”组成，其中消息内容由一条或多条组成最后用指定字符拼接成一条合并内容
脚本最终汇总多条账号消息后集中触发推送通知业务，每个账号的消息占用一行，排列顺序以优先触发记录为原则
此库封装了多条方法，推送通知业务调用自 sendNotify.js，可引用此模块来平替引用它，支持单消息推送

账号消息自定义功能如下（环境变量）
1。关键词过滤，触发时不推送对应单条账号消息 JD_NOTIFY_FILTER_KEYWORDS
  例：export JD_NOTIFY_FILTER_KEYWORDS="空气@会员"，多个关键词用@分割
2。关键词清除，触发时会清除消息内容中的对应关键字 JD_NOTIFY_CLEAR_KEYWORDS
  例：export JD_NOTIFY_CLEAR_KEYWORDS="" # 例："空气"，多个关键词用|分割，如果你不想在账号消息中看到某些字样则可以使用此功能
3。消息内容分隔符 JD_NOTIFY_SEPARATOR，默认为中文逗号
  例：export JD_NOTIFY_SEPARATOR="、"，此分隔符用于分隔多条账号消息
4。设置用户名昵称 JD_NOTIFY_NICKNAMES
  例：export JD_NOTIFY_NICKNAMES="userpin_α@哥哥,userpin_β@弟弟"，多个昵称配置用英文逗号分割，用户名和昵称用@分割
5。是否展示用户名 JD_NOTIFY_SHOW_USERNAME（true/false），默认展示
  例：export JD_NOTIFY_SHOW_USERNAME="false"
6. 设置推送通知的用户名是否脱敏 JD_NOTIFY_USERNAME_MASKING（true/false），默认不脱敏，根据用户名长度动态将部分字符用*替换
  例：JD_NOTIFY_USERNAME_MASKING="true"
7。设置消息前缀格式 JD_NOTIFY_PREFIX_FORMAT，默认为 "【京东账号<序号>】<用户名>："
  例：export JD_NOTIFY_PREFIX_FORMAT="账号%【@】"，%代表账号序号、@代表用户名
8。设置自动合并消息中用数字开头表示数量的内容 JD_NOTIFY_AUTO_MERGE_TYPE
  例：export JD_NOTIFY_AUTO_MERGE_TYPE="积分"，多个规则用@分割，正则匹配

new Env('Rebels_sendJDNotify');
*/

var iｉl = 'jsjiami.com.v7';
const iI1lII = iii1II;
function Iii11l() {
	const lI111i = (function() {
		return [iｉl, 'MTjIsjriOraxmiE.KcUNJoqmKf.YxvRb7CekXqAF==', 'W6XvWQdcRu4', 'WRfggabMzSk1jvajW7T6', 'o8knW7vmaW', 'W6u3W5eeW5nxvSkVfejdWPvVnSk2h3O', 'FsxdT3maomkem8ovF2Op', 'tdZdLCkD', 'eb19lSoy', 'W6y7W5y5W5Lxqmkph0S', 'W7pdVXFdGXSQWPC', 'd2/cMmkkWRBcLLOjWRjoWP/cOeTt', 'fwdcUmkzWRGdWQ0', 'W5elCry', 'aHT7b8oCfCkp', 'jmo5FwC7tYFcVW', 'neGXEdhdNYRdIbW1W5JdLH/cNa', 'FJVcSCo6W5a', 'ESoCW7BdO8kO', 'WRRdSCocBwy', 'WOSwEwn4xa', 'W6DUW74YW7DMWPy', 'lMJcVSkDWRG9WQ3cRWldRSoIW74pWPC', 'W61kWPVdImk/', 'W4GuDbfE', 'W5dcGCkjz3DEWO3cNxRcU3OnWQxdPc86ovqRWQL9', 'fmo2W5/cSNXN', 'W6VdHmowWQNcReJcVdRdSSkmkCoPWRBcUYL5W5VdGf3dTSo9W5a', 'WQBdSGa', 'WRGwzf51', 'g8oXW5FcO2e', 'q8kPWOVcK2X6W51OjW', 'h0aMDZS', 'W7VcJSksEx8', 'paFdPSki', 'W5mFuM8y', 'CGizEY8', 'i2VcJ8k9WRdcL1Gy', 'W6FdLMrWkW', 'gCkrW6bQmgRcOW', 'W7zvW7BcJq', 'W4tdNmoaWRi', 'WRbTWPPdWOGDb8oEgL9dWPnOnW', 'WRBdPSoub8og', 'z8kzxrVdKG', 'Emkre8klxq', 'WRPWW7pdVSoy', 'WObVWRL6WPa', 'BWqVzsVdUmk5W6O', 'jmoKA3abEIpcRN/dUq', 'WPjVW5BdV8orWP4g', 'W6pcGSkiCM5x', 'zCk1ACkZW4q', 'W4/dVrZdHa0LWOtdPWb9tH/cR8k+WQFcPsC', 'pCkTDmkCW5G', 'W7afgr7cMmozySo8WR7cL8o1pNibW4mOeq', 'f1FcOmoFa8kLaq5MmYhcM1ZcKM7dS8oCr8oN', 'W54kBG', 'rXNcS2ZdQq', 'gq5HnmkWW6RcUCkk', 'W7f7WPpdSSkqoHbP', 'WRisCgrUt3JcJvhcKmobWQ8KW6XQicfGW5fnWOJdKW', 'AHJcImoSW7S', 'W7VdSZJdGsK', 'WRPDWOD9WQC', 'W53dH8oxWR/cPW', 'mxBcKCo2omkz', 'WO3dKtGlxq', 'W7PfvMZdOa', 'W59eBeldL3Ohq1fy', 'rZBcRmoSW5enzmoXAdz3W6FdMcdcLvqVWPr0WRXBsq', 'Bmk9WPDTgc7dT8on', 'pYZdOCkUWQK', 'sYddNmkXW5i', 'smoLW47dTSkh', 'EYFdPa', 'W7JdSmoKWQpcPG', 'WRhdUqy0w37cMW', 'WRGPxNf/', 'bYvoWQbgpSoP', 'a2ZcU8kfWRytWQ0', 'CSkpWRvAnG', 'W6roW6FcHtG', 'W6arwxmWpCkL', 'WQ5cW4ldNSof', 'mWBdUq', 'i8keW7v3jxVcNCkFW6HPW49VeSkz', 'cWzGjCougmkQWOddKMT2W4JcRf0', 'BCkYxsFdG1r9', 's8kTcmkLwWJcLa', 'lZxcOw5hb8oFiCktzJq', 'rbmCemkWW7WTgG', 'tbJdOuur', 'm1u1DdNdUSkwW7u', 'W6bGC2tdLG', 'W7zoW6VcJdK', 'cvxcMHJcOq', 'WP3dVCoVlmoP', 'lmk4uCk3W5m'].concat((function() {
			return ['iHRdPSkl', 'AISQzqe', 'jq3dOCkcWPm4zsxcSYK', 'i8oVAhKuts8', 'yCoMW5tdOCku', 'd2dcKSkkWRlcJvuqWQr8', 'aN3cLSoYj8kFksvAhW', 'W4ddM8ogWR8', 'qs/dVwaFgSkFhmocDxevW5hdTLxdO0qoashdHW', 'WQtcTaxdKCkbW6HdWOJdV8kWo8oNW5Sj', 'DCkXWPbYha', 'W6yjgGlcLSojyG', 'nvJcLSo5bG', 'W5iDuYJdUqLhW5u', 'ihFcMctcTWSjACohW5dcP0yun1uYWRi', 'WQddSXGSx3pcIG', 'W4u/AtRdTq', 'AJVdU38', 'tCk6eCkK', 'pc1iWQrgamoPsNvoWPJcVCo2ya', 'WP/dG8o8vKxcUCoXW44JWRyTWPJcQZO', 'W5hdOSoIWOdcJa', 'DCkQWO1Z', 'BSkQWO15ecFdN8oBr8k2W7hdLJpcNG', 'W4W6DhGEcSkem0efW4LND0KFWQzLx0hdOCovALO', 'bCoyW7X0za', 'ESk4W5NdIXxcPmkkW78+hrS9a8kRWR5iAa', 'abL7kG', 'gCkhW6y', 'pSo0W65hxq', 'WP/dJ8oSuvNcLCoZW5KxWRyjWOdcQt7cPSorWQu', 'jKGhAsS', 'va4p', 'W4fbW7hcOre', 'WO/dT8oqvgW', 'nfKGFJJdGZZdUGagW4FdHqO', 'qmk7W4O', 'W4SzgqVcHCoKzSoqWRFcTSozkgOBW4WO', 'W5XjlujOqxNcRxW', 'W4pdKubf', 'WPRdJ8oSjSoWW7JcTCoaW6BcRLldHHS', 'W5i3Cdbg', 'W5RdLcBdUteqWQRdHaPhCdFcNSkuWP3cIXGrpG', 'BmkMrmkRW7i', 'nmoKBG', 'hqldQmk8WQq', 'W4ztW7JcSbq', 'WQ/dTXumsW', 'WPBcVbpdKmkhW6PRWP4', 'pmo9thW2', 'W6yjgqVcGW', 'pmoNW6ldR8kO', 'W7fxW7pcIt/dRW', 'W5qwgmkW', 'ymomW5ShBa', 'xSkRWOXXdHZdOCoBrSklW7hdNdm', 'WPZdVru7vwJcKmkuvd/cIK3dGmky', 'qf4LCCoMWR/dPmknWOBcSMhcGmkH', 'W4xdHLLeavjs', 'W5K/W4iAW7ZcOf7cK2XJW7tdSXfr', 'W5KttKuIp8kQeeS/W6PosN80WPXe', 'fmo2W53cOG', 'W7BcRKDTccZdHSkjzaBcMLtdHq', 'emkJW4Lidq', 'WQODw0DY', 'sCo5W7mwDW', 'WPH5WODc', 'W6HTWPJdP8kQmW', 'WOVcRbpdIW', 'ESk4W5NdIXxcPmkkW78Ufa49a8kbWQ9EBCoPW4C3WOm', 'jSoNW4nyFG', 'mZLvkSkg', 'uHBcLSorW7S3xSoErqbEW4VdPGBcKMyEWQLO', 'W5TLWPpdS8kToHPPcmkuW5bGCJyDo8ksWPldS30DsW', 'uCkWvIddLvTUkCowW5/dGSkOhSkHtwyA', 'yCo6W5hdQ8ksW4a', 'pc1EWRngomoItgfQWR7cTSoNFa', 'W73dP3zMl2v+svXhv1z3wZ0cWO07dq', 'vSkWW5ldNa', 'W6S6Dr7dOa', 'W5GlDGXpWP1t', 'yhldJSkvW6VcNWvpWR0+WPhdQLytyCopWRbkabjhwSoWs0ddTbVdTq', 'WOKsidJcJsejFKvAqmoy', 'W6jNWOtdHCk/obu', 'AJlcR0/dOGZdJa', 'WOxcMSklW63dQXddR2/dLSkucmo+WQFcUW', 'BXNdLCkjW4S', 'W4OlgmkZ', 'W7DTWOldG8kXnqLPimkj', 'BCk9WOP5dse', 'W7bZW7KR', 'W7D4WPRdQCkQ', 'yCo6W5hdQ8kf', 'WRhdLCoWjCoI', 'W6OBrveLnG', 'eqvK', 'mZThbSot', 'asvDfCkI', 'W4jFWQtdKCk/'].concat((function() {
				return ['zSoGW6byy3BdKq', 'pKmNxZO', 'qsJdP2yDnSkol8ogF1acW5xdOa', 'FJpcPCoSW5e', 'duyGxJ/dIsW', 'CCk2W7xdUZ8', 'bmoaW5ZdNmk9', 'W4HuA2K', 'W7mSsGfI', 'DCkds8ktW5O', 'WRddJ8oHo8ojW4ZcQ8oa', 'W4PhWRRdHSku', 'n3lcGJFcVq', 'W5fpE23dJxawvq', 'WRirFhr2qh7cHxlcIG', 'W5TIWPBcIfq', 'sYhdKCkv', 'W55iygtdNa', 'bWzSi8ojeW', 'W7GjbaNcG8oc', 'DCoIW40OEW', 'o03cLmkNWPGKWOhcMZZdLmoMW5u6WRrAWONdKNdcOmoWDmoSja', 'W4ZcTmkYqe4', 'WRddL8o6sG', 'W4/dSqZdGXejWOBdSdr9AGFcRCk6', 'CbZdJSktW7m', 'yCkVwJtdJ1rekCo2W4NdK8kUcCkZ', 'EYqMlmkXW4KjowBdHZnwusS2uhBcM8kjWO3dNvOVymk0', 'gKRcPmkNWPBcT307WPHqWQNcL2zJumkYWPG8lG', 'W6artJldRc1nW4GSdCo9', 'zcFdV1OL', 'WOGtvXfdWQzj', 'WRBdRXmQDhZcK8kf', 'n8oJDNe', 'cqZdQSkvWRG5yIxcOtK7W5lcHCoxjmomucZcSSkkrmo9', 'iJTBlCkC', '44gF5lI75lQs6lAG5yYRW4FJGiy2772Z', 'W7RdVXddMq', 'hCoPW4VcHh4', 'WR5CWR1aWOK', 'g8oor1S6EGpcNeRdG8kLWRddQJpdNSk7WQGmWQ3cT8kqWOWTCq', 'kWPXjmk+W7JcSSknWQhcUxZcTCkqWPq', 'WQNdV8olbmo3', 'j8o+yhy0', 'dKCK', 'W6TjW7VcHsq', 'h8otW7b/rxFdTJmYWRtcUCkTWRyHWQPnW7FcUfnsWPJcQeLmCG', 'kmklDmkXW77cJa', 'e8oXW4RcG28', 'W7ixx1O0', 'eCoGWOVcJLhdT8ovW645mGqBiq', 'g3RcJIFcVryFqSokW6ZcRKOipMeSWRiDW4HMW6ldIW', 'A8kZrq', 'W5tdJ0XjeNjyyxf9D2S', 'eJjkhCkO', 'owdcN8kmWQe', 'WONcVbddJ8khW65R', 'DtpcVCo8W5W', 'zmkMWP8dpXlcI0mfWOFcNCkAWQSw', 'g8oXW5dcQMXXW55E', 'W5T4WOtdPCk4mGvkiCkpW5f1yW', 'BSkTW7VdJXW', 'W7DKW74IW5XNWPzIW7VdIG', 'W6pdObxdNGO', 'W5Oxut3dGG', 'xqW5ztNdVSk7W7ZcMCo/fSo+W7hdMv8BBq', 'W7tdG8oavx3cG8o3', 'uGWCa8kmW54VeuVdVrTR', 'CSk0WO19ha', 'W5myaq', 'aXP+cSkA', 'W51xW63cHtRdOYvrWO/dRCkMWRddPq', 'CCkTWPD2', 'WO7dM8oSkmoa', 'j8kbDmkIW6/cILi', 'WRRdJSobuKi', 'W5RdLcBdUteqWQRdHaPhBIZcMmkzWPRcKGOsiMjxW6Tl', 'W6zIWQ3cPv9d', 'wmosW48MBG', 'W61vW7BcHZxdPbbYWPpdRmkQWRBdTmof', 'W6CdbWS', 'W6tdG8ovWPBcIW', 'nmkIW4jHjG', 'W6LKW6m1W7nVWOD4', 'iwZcTSk+WR0', 'W7qBw1OWpCkO', 'zSolW7etDKSlrSkEBwJcISkJ', 'Cq4XCW', 'DrVcRmo+W6C', 'W49EW57cJru', 'naT3WQry', 'W7pdVXFdKrCJ', 'B8krW6pdTINcKCkKW5W0jY0vpCkEWO91rConW7akWQFdVI4tW5m', 'qtNdOhCueSktg8ooAgKAW5e', 'nMFcLCkn', 'WPTGWP1jWQe'];
			} ()));
		} ()));
	} ());
	Iii11l = function() {
		return lI111i;
	};
	return Iii11l();
};
function iii1II(_0xa1fa93, _0x5caf95) {
	const _0x1e7aef = Iii11l();
	return iii1II = function(_0x3f364b, _0x8ce1e1) {
		_0x3f364b = _0x3f364b - 0x1d7;
		let _0x3c472e = _0x1e7aef[_0x3f364b];
		if (iii1II['vtakNr'] === undefined) {
			var _0x12778c = function(_0x58f753) {
				const _0xe214d2 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
				let _0x51a36e = '',
				_0x217db0 = '';
				for (let _0x4e478f = 0x0, _0x28705a, _0x466b10, _0x53cf92 = 0x0; _0x466b10 = _0x58f753['charAt'](_0x53cf92++);~_0x466b10 && (_0x28705a = _0x4e478f % 0x4 ? _0x28705a * 0x40 + _0x466b10: _0x466b10, _0x4e478f++%0x4) ? _0x51a36e += String['fromCharCode'](0xff & _0x28705a >> ( - 0x2 * _0x4e478f & 0x6)) : 0x0) {
					_0x466b10 = _0xe214d2['indexOf'](_0x466b10);
				}
				for (let _0x40027a = 0x0, _0xe48bf3 = _0x51a36e['length']; _0x40027a < _0xe48bf3; _0x40027a++) {
					_0x217db0 += '%' + ('00' + _0x51a36e['charCodeAt'](_0x40027a)['toString'](0x10))['slice']( - 0x2);
				}
				return decodeURIComponent(_0x217db0);
			};
			const _0x5afe82 = function(_0x37eb71, _0x288dca) {
				let _0x165f48 = [],
				_0x1f36ab = 0x0,
				_0x21dc94,
				_0x23b7cf = '';
				_0x37eb71 = _0x12778c(_0x37eb71);
				let _0x499084;
				for (_0x499084 = 0x0; _0x499084 < 0x100; _0x499084++) {
					_0x165f48[_0x499084] = _0x499084;
				}
				for (_0x499084 = 0x0; _0x499084 < 0x100; _0x499084++) {
					_0x1f36ab = (_0x1f36ab + _0x165f48[_0x499084] + _0x288dca['charCodeAt'](_0x499084 % _0x288dca['length'])) % 0x100,
					_0x21dc94 = _0x165f48[_0x499084],
					_0x165f48[_0x499084] = _0x165f48[_0x1f36ab],
					_0x165f48[_0x1f36ab] = _0x21dc94;
				}
				_0x499084 = 0x0,
				_0x1f36ab = 0x0;
				for (let _0x133d0b = 0x0; _0x133d0b < _0x37eb71['length']; _0x133d0b++) {
					_0x499084 = (_0x499084 + 0x1) % 0x100,
					_0x1f36ab = (_0x1f36ab + _0x165f48[_0x499084]) % 0x100,
					_0x21dc94 = _0x165f48[_0x499084],
					_0x165f48[_0x499084] = _0x165f48[_0x1f36ab],
					_0x165f48[_0x1f36ab] = _0x21dc94,
					_0x23b7cf += String['fromCharCode'](_0x37eb71['charCodeAt'](_0x133d0b) ^ _0x165f48[(_0x165f48[_0x499084] + _0x165f48[_0x1f36ab]) % 0x100]);
				}
				return _0x23b7cf;
			};
			iii1II['HOGorN'] = _0x5afe82,
			_0xa1fa93 = arguments,
			iii1II['vtakNr'] = !![];
		}
		const _0x25f6ea = _0x1e7aef[0x0],
		_0x5c8527 = _0x3f364b + _0x25f6ea,
		_0x9c51f0 = _0xa1fa93[_0x5c8527];
		return ! _0x9c51f0 ? (iii1II['OuZMMI'] === undefined && (iii1II['OuZMMI'] = !![]), _0x3c472e = iii1II['HOGorN'](_0x3c472e, _0x8ce1e1), _0xa1fa93[_0x5c8527] = _0x3c472e) : _0x3c472e = _0x9c51f0,
		_0x3c472e;
	},
	iii1II(_0xa1fa93, _0x5caf95);
}
if (function(llii1I, iiIiIi, l1lll1, IilI, liIlli, lil11, Iillll) {
	return llii1I = llii1I >> 0x6,
	lil11 = 'hs',
	Iillll = 'hs',
	function(lllI1, III11I, Ilii1, ll11i1, ili1I1) {
		const ll11l = iii1II;
		ll11i1 = 'tfi',
		lil11 = ll11i1 + lil11,
		ili1I1 = 'up',
		Iillll += ili1I1,
		lil11 = Ilii1(lil11),
		Iillll = Ilii1(Iillll),
		Ilii1 = 0x0;
		const Iill = lllI1();
		while ( !! [] && --IilI + III11I) {
			try {
				ll11i1 = -parseInt(ll11l(0x209, 'C&Oe')) / 0x1 * (parseInt(ll11l(0x26a, 'SHBk')) / 0x2) + -parseInt(ll11l(0x1e4, '%KRr')) / 0x3 * (parseInt(ll11l(0x24b, 's#^#')) / 0x4) + -parseInt(ll11l(0x1f8, 'zDld')) / 0x5 * ( - parseInt(ll11l(0x2f0, '#tbh')) / 0x6) + -parseInt(ll11l(0x2c4, 'HkuE')) / 0x7 * ( - parseInt(ll11l(0x1df, 'E5]q')) / 0x8) + parseInt(ll11l(0x1fb, '%CJm')) / 0x9 + parseInt(ll11l(0x1e1, '#Q1t')) / 0xa + -parseInt(ll11l(0x243, 'C&Oe')) / 0xb;
			} catch(ili1II) {
				ll11i1 = Ilii1;
			} finally {
				ili1I1 = Iill[lil11]();
				if (llii1I <= IilI) Ilii1 ? liIlli ? ll11i1 = ili1I1: liIlli = ili1I1: Ilii1 = ili1I1;
				else {
					if (Ilii1 == liIlli['replace'](/[xrXkNMRfbAFYTJOqCUIeEK=]/g, '')) {
						if (ll11i1 === III11I) {
							Iill['un' + lil11](ili1I1);
							break;
						}
						Iill[Iillll](ili1I1);
					}
				}
			}
		}
	} (l1lll1, iiIiIi,
	function(liIllI, ll11i, iI1lI1, I1I1li, l1i11, IlI1li, IlI1ll) {
		return ll11i = '\x73\x70\x6c\x69\x74',
		liIllI = arguments[0x0],
		liIllI = liIllI[ll11i](''),
		iI1lI1 = '\x72\x65\x76\x65\x72\x73\x65',
		liIllI = liIllI[iI1lI1]('\x76'),
		I1I1li = '\x6a\x6f\x69\x6e',
		(0x1625a2, liIllI[I1I1li](''));
	});
} (0x31c0, 0xddd77, Iii11l, 0xc9), Iii11l) {}
class Notification {
	constructor() {
		const III111 = iii1II,
		Ii1iii = {
			'Zostv': III111(0x1f7, 'WXoa'),
			'hKihJ': function(Ii1iil, Ilil1i) {
				return Ii1iil(Ilil1i);
			},
			'Jxqbn': '../sendNotify',
			'HKRdd': III111(0x22d, 'Bw1#')
		},
		iIIilI = Ii1iii[III111(0x2b1, '9JBg')][III111(0x248, '1Y@0')]('|');
		let il1l1 = 0x0;
		while ( !! []) {
			switch (iIIilI[il1l1++]) {
			case '0':
				this[III111(0x203, ']$Fn')] = '';
				continue;
			case '1':
				this[III111(0x1e2, 'SHBk')] = '';
				continue;
			case '2':
				this['sendNotify'] = Ii1iii[III111(0x2d6, 'LRNK')](require, Ii1iii['Jxqbn'])[III111(0x2cc, '11vV')];
				continue;
			case '3':
				this[III111(0x2ef, 'URqu')] = ![];
				continue;
			case '4':
				this[III111(0x2f2, ']$Fn')] = !![];
				continue;
			case '5':
				this[III111(0x2d9, '%KRr')] = '';
				continue;
			case '6':
				this['_autoMergeType'] = '';
				continue;
			case '7':
				this[III111(0x226, 'xUly')]();
				continue;
			case '8':
				this[III111(0x282, '%CJm')] = [];
				continue;
			case '9':
				this['_messageClearKeywords'] = [];
				continue;
			case '10':
				this[III111(0x245, 'b%r0')] = Ii1iii[III111(0x25b, 'av33')];
				continue;
			case '11':
				this[III111(0x2cf, 'WXoa')] = {};
				continue;
			case '12':
				this['_accountsArray'] = [];
				continue;
			}
			break;
		}
	} ['_initConfig']() {
		const liIll1 = iii1II,
		iili1 = {
			'vtxcA': function(II11ii, Iil1iI) {
				return II11ii === Iil1iI;
			},
			'JjMpW': liIll1(0x20c, 'JIJ2'),
			'mIeaS': function(II11il, iIIil1) {
				return II11il === iIIil1;
			},
			'MaUru': liIll1(0x2d1, '%CJm'),
			'KxGwz': function(IlllII, I1il1I) {
				return IlllII === I1il1I;
			},
			'PuMXK': 'uqEkB'
		};
		process['env'][liIll1(0x265, 'zeZ!')] && (this[liIll1(0x1ef, 'b%r0')] = process[liIll1(0x2ee, 'zeZ!')][liIll1(0x224, ')9Ds')]['split']('@')[liIll1(0x24e, 'vWU[')](II111 =>II111[liIll1(0x2f1, 'I34s')]())['filter'](Boolean));
		process[liIll1(0x2e6, 'av33')]['JD_NOTIFY_CLEAR_KEYWORDS'] && (this[liIll1(0x1eb, 'zeZ!')] = process[liIll1(0x205, 'E5]q')][liIll1(0x231, '5gsY')]['split']('|')['filter'](Boolean));
		this['_messageSeparator'] = process[liIll1(0x2f6, '5gsY')][liIll1(0x1ee, 'JIJ2')] || process[liIll1(0x283, '%KRr')][liIll1(0x225, 'WXoa')] || '，';
		if (process['env'][liIll1(0x2f4, '1Y@0')]) {
			const lI1l1I = process['env'][liIll1(0x29f, 'LRNK')][liIll1(0x201, 'b%r0')](',');
			lI1l1I[liIll1(0x1fa, 'Qn5i')](lill11 =>{
				const l1llli = liIll1;
				let liI1i1 = lill11[l1llli(0x27f, 'mKZH')]('@');
				liI1i1['length'] === 0x2 && liI1i1[0x0] && liI1i1[0x1] && (this[l1llli(0x2d0, 'LRNK')][liI1i1[0x0]] = liI1i1[0x1]);
			});
		}
		this['_showUserName'] = !iili1[liIll1(0x234, '5gsY')](process[liIll1(0x23d, 'fEQv')][liIll1(0x2e2, 'SHBk')], iili1['JjMpW']),
		this['_userNameMasking'] = iili1[liIll1(0x261, 'JIJ2')](process[liIll1(0x2ea, ')9Ds')]['JD_NOTIFY_USERNAME_MASKING'] || process[liIll1(0x2bc, '11vV')]['JD_NOTIFY_USERNAME_DESENSITIZATION'], iili1[liIll1(0x2e9, 'KVkv')]),
		process[liIll1(0x235, 'KVkv')][liIll1(0x255, '1Y@0')] && (this[liIll1(0x250, 'V&%r')] = process['env'][liIll1(0x21e, '@oTz')] || process[liIll1(0x2b2, '0EE0')]['JD_NOTIFY_PREFIX_FORMATA']),
		process[liIll1(0x2a0, 'mKZH')]['JD_NOTIFY_AUTO_MERGE_TYPE'] && (iili1[liIll1(0x246, 'zeZ!')](iili1[liIll1(0x28d, 'I34s')], iili1['PuMXK']) ? this[liIll1(0x221, '1Y@0')] = process['env'][liIll1(0x237, 'C&Oe')] : this['_accountsArray'] = []);
	} [iI1lII(0x264, '1Y@0')]({
		title: I1llII,
		content: Iil1il,
		messageSeparator: I11i1i
	}) {
		const ll11iI = iI1lII,
		l1l1iI = {
			'iDnHt': function(I1llI1, I11i1l) {
				return I1llI1 !== I11i1l;
			},
			'BKCMw': ll11iI(0x22f, 'Brnu'),
			'znmHW': ll11iI(0x2a5, 'JIJ2'),
			'GRGmW': function(il1il, Il1i1i) {
				return il1il !== Il1i1i;
			}
		};
		l1l1iI[ll11iI(0x2af, '11vV')](I1llII, undefined) && (l1l1iI[ll11iI(0x293, 'fEQv')](l1l1iI['BKCMw'], l1l1iI[ll11iI(0x227, '0EE0')]) ? this[ll11iI(0x2d4, 'p1aP')] = I1llII: liIi1 = this[ll11iI(0x2ad, 'JIJ2')](lI11II)),
		l1l1iI['iDnHt'](Iil1il, undefined) && (this['content'] = Iil1il),
		l1l1iI[ll11iI(0x1ed, 'E5]q')](I11i1i, undefined) && (this[ll11iI(0x29c, '1Y@0')] = I11i1i);
	} [iI1lII(0x28c, 'WXoa')](Ii1iiI) {
		const l1i1I = iI1lII;
		this[l1i1I(0x288, ')7z5')] = Ii1iiI;
	} ['unsetTitle']() {
		const l1llll = iI1lII;
		this[l1llll(0x23a, 'SHBk')] = '';
	} ['getTitle']() {
		const I1I1ll = iI1lII;
		return this[I1I1ll(0x2c6, 'V&%r')];
	} [iI1lII(0x1fe, 'b%r0')](Ilil1I) {
		const lil1i = iI1lII;
		this[lil1i(0x2bf, 'fEQv')] = Ilil1I;
	} ['appendContent'](iliIiI) {
		const liiiil = iI1lII;
		this[liiiil(0x253, 'LK5B')] += iliIiI;
	} [iI1lII(0x23e, 'I34s')]() {
		const IIIIli = iI1lII;
		this[IIIIli(0x1f6, 'mKZH')] = '';
	} [iI1lII(0x2ac, 'zDld')]() {
		return this['content'];
	} [iI1lII(0x25f, 'qYjc')](II11iI) {
		const lllIi = iI1lII;
		this[lllIi(0x271, '1Y@0')] = II11iI;
	} [iI1lII(0x21b, 'akJ@')](Il1i1l, Iil1ii) {
		const lil1l = iI1lII,
		lill1I = {
			'skHWY': function(i1iIiI, IlllI1, I1il11, lI1l11) {
				return i1iIiI(IlllI1, I1il11, lI1l11);
			},
			'DQgwI': function(II11l, II11i) {
				return II11l + II11i;
			},
			'fkSJN': function(iI1Iii, liI1ii) {
				return iI1Iii(liI1ii);
			},
			'OOvky': function(lIIiIl, iI1Iil) {
				return lIIiIl === iI1Iil;
			},
			'NOLFJ': function(il1iI, i1iIii) {
				return il1iI + i1iIii;
			},
			'VPIjM': function(i1iIil, liI1il) {
				return i1iIil > liI1il;
			},
			'TBUEx': function(llIlIi, llIlIl) {
				return llIlIi !== llIlIl;
			},
			'GdeIA': lil1l(0x233, ']$Fn'),
			'mvJEg': function(II11I, il1i1) {
				return II11I === il1i1;
			},
			'uNORs': lil1l(0x29d, 'LK5B'),
			'UiqIh': lil1l(0x2da, 'xUly'),
			'GbNPo': function(lIIiIi, liI1iI) {
				return lIIiIi !== liI1iI;
			},
			'qbMWd': lil1l(0x2f8, 'V&%r'),
			'POSEn': lil1l(0x239, 'Brnu'),
			'eoqfZ': function(iI1Il1, i1iIl1) {
				return iI1Il1(i1iIl1);
			},
			'CfnAM': function(i1lli1, llIlII) {
				return i1lli1 || llIlII;
			},
			'CrvQV': function(IIlII, lIIiII) {
				return IIlII === lIIiII;
			}
		},
		Ii1ii1 = this[lil1l(0x2a4, '#tbh')],
		Ilil11 = this['_messageClearKeywords'],
		i1ii1 = this[lil1l(0x266, '0EE0')],
		il1ii = this[lil1l(0x217, '#tbh')];
		lill1I['CrvQV'](Il1i1l, undefined) && (Il1i1l = '');
		const llI111 = {
			'index': '' + Il1i1l,
			'userName': Iil1ii,
			'fixed': ![],
			'messages': [],
			'originMessages': [],
			'insert' (i1iIlI) {
				const Iliii = lil1l,
				li111 = {
					'swNun': function(liI1lI, lIIiI1, ll1I1, Ii1ili) {
						return lill1I['skHWY'](liI1lI, lIIiI1, ll1I1, Ii1ili);
					},
					'yGaar': function(iI1Ii1, Ii1ill) {
						return lill1I['DQgwI'](iI1Ii1, Ii1ill);
					},
					'FWRQa': function(llIlI1, iI1IiI) {
						return llIlI1 < iI1IiI;
					},
					'iShHl': function(IIlI1, i1iIli) {
						return lill1I['fkSJN'](IIlI1, i1iIli);
					},
					'KWRZa': function(i1iIll, i1lliI) {
						return lill1I['OOvky'](i1iIll, i1lliI);
					},
					'tsdIX': function(liI1l1, IllIlI) {
						const lllIl = iii1II;
						return lill1I[lllIl(0x214, 'b%r0')](liI1l1, IllIlI);
					}
				};
				if (!i1iIlI) return;
				if (llI111[Iliii(0x21a, 'zDld')]) return;
				llI111[Iliii(0x2be, 'akJ@')][Iliii(0x1e8, '#Q1t')](i1iIlI[Iliii(0x2e5, 'E5]q')]());
				if (lill1I[Iliii(0x22c, 'E5]q')](Ii1ii1['length'], 0x0) && Ii1ii1[Iliii(0x260, 'HkuE')](IiillI =>i1iIlI['includes'](IiillI))) return;
				if (Ilil11[Iliii(0x29a, ')7z5')] > 0x0) {
					if (lill1I[Iliii(0x222, 'um2t')]('adQSi', Iliii(0x294, 'Qs*i'))) {
						const {
							count: li11l,
							name: lliiIl
						} = llliii(IllI11[l1llIi]);
						if (li111[Iliii(0x1dc, 'qYjc')](II1llI, lliiIl, li11l, i11I11)) for (let li11i = li111[Iliii(0x269, 'xnQJ')](i1i1I1, 0x1); li111[Iliii(0x208, 'b%r0')](li11i, IlII1[Iliii(0x2a9, 'LRNK')]); li11i++) {
							const {
								count: lliiIi,
								name: iiIi1I
							} = li111[Iliii(0x2f3, 'mKZH')](iIli1i, iI1lii[li11i]);
							li111[Iliii(0x20f, 'Bw1#')](lliiIl, iiIi1I) && (iIli1l[i1i1II] = '' + li111[Iliii(0x2b0, 'um2t')](li11l, lliiIi) + lliiIl, liiIIl[Iliii(0x1da, 'V&%r')](li11i, 0x1), li11i--);
						}
					} else Ilil11[Iliii(0x299, 'q*Lo')](IllIl1 =>{
						const illlii = Iliii;
						i1iIlI = i1iIlI[illlii(0x2d5, 'URqu')](new RegExp(IllIl1, 'g'), '');
					});
				}
				llI111['messages'][Iliii(0x1ea, 'xv3F')](i1iIlI[Iliii(0x1fd, 'vWU[')]());
			},
			'fix' (ll1Ii) {
				const I1lIIi = lil1l;
				if (!ll1Ii) return;
				llI111[I1lIIi(0x2b9, 'V&%r')] = !![],
				llI111[I1lIIi(0x2e1, 'p1aP')] = [ll1Ii[I1lIIi(0x219, 'um2t')]()];
				if (lill1I[I1lIIi(0x230, '#Q1t')](Ii1ii1[I1lIIi(0x238, 'LK5B')], 0x0) && Ii1ii1[I1lIIi(0x259, 'URqu')](ll1Il =>ll1Ii[I1lIIi(0x244, 'Brnu')](ll1Il))) return;
				Ilil11[I1lIIi(0x238, 'LK5B')] > 0x0 && Ilil11['forEach'](iiIi11 =>{
					const l1i1i = I1lIIi;
					if (lill1I[l1i1i(0x1f5, 'xUly')](lill1I[l1i1i(0x26b, 'av33')], l1i1i(0x20a, 'KVkv'))) ll1Ii = ll1Ii[l1i1i(0x2cd, '5gsY')](new RegExp(iiIi11, 'g'), '');
					else {
						const i1llil = this['_accountsArray'][l1i1i(0x1e3, 'Brnu')](i1llii =>i1llii['index'] === '' + lIIill);
						i1llil && this['dispose'](i1llil);
					}
				}),
				llI111[I1lIIi(0x297, 'HkuE')] = [ll1Ii[I1lIIi(0x2ca, '11vV')]()];
			},
			'updateIndex' (l1i1I1) {
				const I1iI1i = lil1l;
				lill1I['mvJEg'](lill1I[I1iI1i(0x207, 'E5]q')], lill1I[I1iI1i(0x284, '#tbh')]) ? (lI1Iil !== lilIiI && (this[I1iI1i(0x26f, 'akJ@')] = IlI1l), IiilIi !== IiilIl && (this['content'] = lilIil), iii1Il !== lI1IiI && (this[I1iI1i(0x2e4, 'zeZ!')] = i1l11)) : llI111[I1iI1i(0x240, 'WXoa')] = '' + l1i1I1;
			},
			'updateUsername' (llIIii) {
				const l1i1l = lil1l;
				llI111[l1i1l(0x276, '5gsY')] = llIIii;
			},
			'getInlineContent' () {
				const I1iI1l = lil1l;
				let Ii1I1i = this[I1iI1l(0x258, 'V&%r')][I1iI1l(0x274, 'mKZH')](this[I1iI1l(0x24a, 'HkuE')])['trim']();
				this[I1iI1l(0x2dd, 'ESoQ')] && (lill1I[I1iI1l(0x1e6, '#tbh')](lill1I[I1iI1l(0x25d, 'WXoa')], lill1I[I1iI1l(0x2e3, 'C&Oe')]) ? Ii1I1i = this['_mergeMessages'](Ii1I1i, this['_autoMergeType']) : this[I1iI1l(0x2bf, 'fEQv')] += iliIII);
				const llIIlI = lill1I[I1iI1l(0x249, 'xUly')](decodeURIComponent, il1ii[this[I1iI1l(0x213, ']$Fn')]] || this['userName']),
				Ii1I1l = i1ii1['replace'](/%/g, this['index'])[I1iI1l(0x2c0, 'Qs*i')](/@/g, llIIlI);
				return '' + Ii1I1l + lill1I[I1iI1l(0x2eb, 'V&%r')](Ii1I1i, '无');
			}
		};
		return this['_accountsArray']['push'](llI111),
		llI111;
	} [iI1lII(0x2b6, 'ESoQ')](ili11l) {
		const illlil = iI1lII;
		this['_accountsArray'] = this[illlil(0x232, 'E5]q')]['filter'](Iiilll =>Iiilll !== ili11l);
	} [iI1lII(0x2d8, 'lmt(')](Iiilli) {
		const Iliil = iI1lII,
		IIlIi = this[Iliil(0x277, 'KVkv')]['find'](ili11i =>decodeURIComponent(ili11i[Iliil(0x2c2, ')9Ds')]) === decodeURIComponent(Iiilli));
		IIlIi && this[Iliil(0x273, '@oTz')](IIlIi);
	} ['disposeByIndex'](iiIi1l) {
		const I1lIIl = iI1lII,
		li11I = this[I1lIIl(0x1f2, 'ESoQ')][I1lIIl(0x22a, '5gsY')](lliiII =>lliiII['index'] === '' + iiIi1l);
		li11I && this['dispose'](li11I);
	} [iI1lII(0x26c, '&Ce0')]() {
		this['_accountsArray'] = [];
	} ['getMessage'](iiIi1i = ![]) {
		const l1ilI1 = iI1lII,
		liI1ll = {
			'NpWDh': function(ill1Ii, llIIl1) {
				return ill1Ii === llIIl1;
			},
			'RQsWc': l1ilI1(0x292, ']$Fn'),
			'EKYlu': 'NMNSg',
			'kkDPK': function(ill1Il, i1lll1) {
				return ill1Il === i1lll1;
			},
			'iBmHa': l1ilI1(0x257, 'qYjc')
		};
		if (liI1ll[l1ilI1(0x295, 'q*Lo')](this['_accountsArray']['length'], 0x0)) return '';
		this[l1ilI1(0x2d2, '0EE0')]();
		if (liI1ll[l1ilI1(0x218, 'xnQJ')](this[l1ilI1(0x1de, '%KRr')][l1ilI1(0x1ff, 'p1aP')], 0x0)) return '';
		let ll1II = [];
		const IllIii = this['_userNameMasking'],
		liI1li = this[l1ilI1(0x1dd, 'p1aP')],
		IllIil = this[l1ilI1(0x2ed, 'KVkv')];
		for (const {
			userName: Ii1I1I,
			index: l1i1Ii,
			messages: l1iI1
		}
		of this[l1ilI1(0x272, 'WXoa')]) {
			if (liI1ll[l1ilI1(0x2a7, '#Q1t')] === liI1ll[l1ilI1(0x2c3, '0EE0')]) {
				let lliiI1 = '';
				if (liI1li) {
					const IIIiI = decodeURIComponent(this['_nicknames'][Ii1I1I] || Ii1I1I);
					IllIii && iiIi1i ? liI1ll[l1ilI1(0x295, 'q*Lo')](l1ilI1(0x2aa, '%KRr'), liI1ll['EKYlu']) ? lliiI1 = this[l1ilI1(0x23c, 'lmt(')](IIIiI) : this['dispose'](IIlli) : liI1ll['kkDPK'](liI1ll['iBmHa'], liI1ll[l1ilI1(0x27e, 'b%r0')]) ? lliiI1 = IIIiI: I1lIll[l1ilI1(0x2fa, 'xv3F')][l1ilI1(0x210, 'zDld')](...I1lIli);
				}
				const IiiI1 = IllIil[l1ilI1(0x1e0, 'I34s')](/%/g, l1i1Ii)['replace'](/@/g, lliiI1),
				lilII = l1iI1[l1ilI1(0x289, '11vV')](this[l1ilI1(0x1f0, 'fEQv')])[l1ilI1(0x28f, 'V&%r')]();
				ll1II[l1ilI1(0x290, '%CJm')]('' + IiiI1 + lilII);
			} else this['content'] = '';
		}
		return ll1II[l1ilI1(0x22e, '1Y@0')]('\x0a')['trim']();
	} [iI1lII(0x1d8, 'URqu')]() {
		const l1l1Il = iI1lII;
		this[l1l1Il(0x298, '5gsY')](),
		this[l1l1Il(0x24c, ')9Ds')](),
		this['disposeAllMessage']();
	}
	async[iI1lII(0x1f4, 'zeZ!')](llIIi1, iI1IlI) {
		const lil1I = iI1lII;
		await this[lil1I(0x247, 'plg*')](llIIi1, iI1IlI);
	}
	async['sendNotify'](l1i1Il, ill1I1) {
		await this['send'](l1i1Il, ill1I1);
	}
	async['push']() {
		const l1l1Ii = iI1lII;
		let l1i1II = this[l1l1Ii(0x27c, 'plg*')][l1l1Ii(0x2e0, 'p1aP')]();
		const ili111 = this[l1l1Ii(0x270, '&Ce0')]( !! []);
		if (ili111) l1i1II = ili111['trim']() + '\x0a\x0a' + l1i1II;
		await this['send'](this['title'], l1i1II);
	} [iI1lII(0x2bd, 'av33')](Ii1I11, IllIli) {
		const liiil1 = iI1lII,
		ii1Ii = {
			'yXIcA': function(l1iII, iI1Ill) {
				return l1iII(iI1Ill);
			},
			'mwTiC': function(lilI1, IIIi1) {
				return lilI1 || IIIi1;
			},
			'BdNmX': function(i1llli, i1llll) {
				return i1llli !== i1llll;
			},
			'OUYvF': 'ZScbC',
			'CSTUT': function(iI1Ili, llIIiI) {
				return iI1Ili < llIIiI;
			},
			'syXLx': 'zlHph',
			'MyAmI': function(iI1111, IIIl1) {
				return iI1111(IIIl1);
			},
			'eKQZS': function(ii1ii, Iii1, I1I1lI, ii1il) {
				return ii1ii(Iii1, I1I1lI, ii1il);
			},
			'GRsQY': function(l1iIlI, iI111I) {
				return l1iIlI + iI111I;
			},
			'HHRyH': function(IIIlI1, i1lIiI) {
				return IIIlI1 === i1lIiI;
			},
			'XAken': 'tBPKJ'
		},
		ii1Il = Ii1I11;
		try {
			function IiiIl(l1lli1) {
				const IIIIlI = iii1II,
				IiiIi = l1lli1[IIIIlI(0x242, 'JIJ2')](/(\d+)(.+)/);
				return IiiIi ? {
					'count': parseInt(IiiIi[0x1]),
					'name': IiiIi[0x2][IIIIlI(0x2dc, 'Qs*i')]()
				}: {
					'count': null,
					'name': l1lli1
				};
			}
			function ii1l1l(ii1l1i, l1iIl1, ii1iI) {
				const l1i11l = iii1II;
				if (ii1Ii[l1i11l(0x2ab, 'zDld')](ii1Ii[l1i11l(0x2ec, 's#^#')], 'kQqam')) return l1iIl1 !== null && ii1iI[l1i11l(0x1ec, 'C&Oe')]('@')['includes'](ii1l1i);
				else {
					let IIIii = this['originMessages'][l1i11l(0x1db, 'vWU[')](this[l1i11l(0x2e8, 's#^#')])[l1i11l(0x2db, '0EE0')]();
					this['_autoMergeType'] && (IIIii = this[l1i11l(0x2d3, 'xv3F')](IIIii, this[l1i11l(0x2de, 's#^#')]));
					const iI111i = ii1Ii['yXIcA'](ll1il, IiiIiI[this[l1i11l(0x229, '%KRr')]] || this[l1i11l(0x276, '5gsY')]),
					I1I1l1 = lilii[l1i11l(0x2b4, '%KRr')](/%/g, this[l1i11l(0x240, 'WXoa')])[l1i11l(0x2b7, '@oTz')](/@/g, iI111i);
					return '' + I1I1l1 + ii1Ii[l1i11l(0x1d7, '5gsY')](IIIii, '无');
				}
			}
			for (let iI111l = 0x0; ii1Ii['CSTUT'](iI111l, Ii1I11['length']); iI111l++) {
				if (liiil1(0x254, 's#^#') === ii1Ii['syXLx']) {
					const {
						count: i1lIii,
						name: III11i
					} = ii1Ii[liiil1(0x262, 'V&%r')](IiiIl, Ii1I11[iI111l]);
					if (ii1Ii[liiil1(0x2df, '%CJm')](ii1l1l, III11i, i1lIii, IllIli)) for (let i1lIil = ii1Ii['GRsQY'](iI111l, 0x1); ii1Ii[liiil1(0x21f, ')7z5')](i1lIil, Ii1I11['length']); i1lIil++) {
						const {
							count: III11l,
							name: llIl1i
						} = ii1Ii['yXIcA'](IiiIl, Ii1I11[i1lIil]);
						ii1Ii[liiil1(0x211, 'mKZH')](III11i, llIl1i) && (Ii1I11[iI111l] = '' + (i1lIii + III11l) + III11i, Ii1I11[liiil1(0x256, 'xnQJ')](i1lIil, 0x1), i1lIil--);
					}
				} else return this[liiil1(0x287, 'KVkv')];
			}
			return Ii1I11;
		} catch {
			if (ii1Ii[liiil1(0x2c8, ']$Fn')] !== ii1Ii[liiil1(0x2c5, 'zDld')]) this['dispose'](l1l11l);
			else return ii1Il;
		}
	} [iI1lII(0x22b, '11vV')](Iiil) {
		const lllII = iI1lII,
		IIIli = {
			'zSKOL': function(Iiii, llIl11) {
				return Iiii < llIl11;
			},
			'pcEme': function(IIIll, I1I1il) {
				return IIIll !== I1I1il;
			},
			'UulYt': 'EBito',
			'sWQDO': lllII(0x2b3, '%CJm'),
			'ZBfdu': function(l1llii, liII1) {
				return l1llii + liII1;
			},
			'vjZUv': function(I1I1ii, l1llil) {
				return I1I1ii === l1llil;
			},
			'TcICY': lllII(0x296, '#Q1t'),
			'hVKaY': function(IIIlIi, llIl1I) {
				return IIIlIi + llIl1I;
			},
			'UayYI': function(i1lIl1, liIli1) {
				return i1lIl1 - liIli1;
			}
		};
		let ii1i1 = '';
		if (IIIli[lllII(0x27a, 's#^#')](Iiil[lllII(0x1e9, 'b%r0')], 0x5)) {
			if (IIIli[lllII(0x28b, 'HkuE')](IIIli['UulYt'], IIIli[lllII(0x2b8, 'p1aP')])) switch (Iiil[lllII(0x204, 'SHBk')]) {
			case 0x1:
				ii1i1 = Iiil;
				break;
			case 0x2:
				ii1i1 = Iiil[lllII(0x2ce, '9JBg')](0x0, 0x1) + '*';
				break;
			case 0x3:
				ii1i1 = IIIli[lllII(0x1e7, 'qYjc')](Iiil[lllII(0x268, '#Q1t')](0x0, 0x1), '*') + Iiil['slice']( - 0x1);
				break;
			case 0x4:
				ii1i1 = IIIli[lllII(0x2bb, 'q*Lo')](Iiil[lllII(0x24d, 'p1aP')](0x0, 0x2), '**');
				break;
			} else {
				const IIIlI = II11Ii[lllII(0x2e6, 'av33')][lllII(0x1f3, 'I34s')][lllII(0x202, '9JBg')](',');
				IIIlI[lllII(0x2ba, 'SHBk')](IiiI =>{
					let iIi1i = IiiI['split']('@');
					iIi1i['length'] === 0x2 && iIi1i[0x0] && iIi1i[0x1] && (this['_nicknames'][iIi1i[0x0]] = iIi1i[0x1]);
				});
			}
		} else IIIli['vjZUv'](lllII(0x25a, '%CJm'), IIIli[lllII(0x20e, 'zeZ!')]) ? IliI1l[lllII(0x2a8, '%CJm')] = '' + lliiil: ii1i1 = IIIli[lllII(0x279, '9JBg')](IIIli[lllII(0x2c9, 'LK5B')](Iiil[lllII(0x215, 'lmt(')](0x0, 0x2), '*' ['repeat'](IIIli[lllII(0x28a, 'SHBk')](Iiil[lllII(0x21c, 'URqu')], 0x4))), Iiil['slice']( - 0x2));
		return ii1i1;
	} [iI1lII(0x280, ')7z5')]() {
		const l11iII = iI1lII,
		l1iIli = {
			'KjgZy': function(i1lIlI, l1lliI) {
				return i1lIlI + l1lliI;
			},
			'kcAvW': function(I1I1iI, IIIlII) {
				return I1I1iI === IIIlII;
			},
			'hIfCg': l11iII(0x2b5, '#tbh'),
			'NbELY': l11iII(0x2a1, 'Qn5i'),
			'jpHNv': l11iII(0x2c1, '0EE0'),
			'fYXZy': function(iiIiI1, ili1Il) {
				return iiIiI1 > ili1Il;
			},
			'hJvsK': l11iII(0x252, ']$Fn'),
			'WGJtq': l11iII(0x1e5, 'av33'),
			'wqlMK': function(ili1Ii, Iilll1) {
				return ili1Ii > Iilll1;
			},
			'lkcTq': function(ll11I, iIi1I) {
				return ll11I !== iIi1I;
			},
			'MKqLy': 'eDTNo',
			'GqhTo': function(liIIl, IlI1lI) {
				return liIIl === IlI1lI;
			}
		};
		let iIi1l = [];
		for (let {
			userName: liIIi,
			index: IilllI,
			messages: iI1lIi
		}
		of this['_accountsArray']) {
			if (l1iIli[l11iII(0x2a6, '1Y@0')](l11iII(0x1fc, 'um2t'), l1iIli[l11iII(0x2cb, 'HkuE')])) IlIli1[illIiI] = '' + l1iIli[l11iII(0x2f7, '11vV')](lI1lli, Ill1l) + llI1Il,
			ii1iii[l11iII(0x1f1, '9JBg')](i11iil, 0x1),
			Ill1i--;
			else {
				iI1lIi = iI1lIi[l11iII(0x281, 'Brnu')](i1lIli =>i1lIli !== null && i1lIli !== undefined && i1lIli !== '');
				const llliIi = iIi1l[l11iII(0x267, 'WXoa')](i1lIll =>i1lIll[l11iII(0x2a3, 'b%r0')] === liIIi);
				llliIi ? l1iIli[l11iII(0x263, 'ESoQ')] !== l1iIli[l11iII(0x212, ')!Pe')] ? (this['unsetTitle'](), this[l11iII(0x26d, '0EE0')](), this[l11iII(0x29e, 'URqu')]()) : (l1iIli['kcAvW'](llliIi[l11iII(0x285, 'Brnu')], '') && (llliIi[l11iII(0x236, 'V&%r')] = IilllI), l1iIli[l11iII(0x24f, 'E5]q')](iI1lIi['length'], 0x0) && llliIi[l11iII(0x2d7, 'xUly')][l11iII(0x220, 's#^#')](...iI1lIi)) : l1iIli[l11iII(0x2f9, '%KRr')](l1iIli[l11iII(0x2c7, 'lmt(')], l1iIli['MKqLy']) ? iIIl11[l11iII(0x1f9, 'b%r0')](llii1l =>{
					const l1i11i = l11iII;
					llIllI = I1ilI1[l1i11i(0x25e, 'SHBk')](new iillll(llii1l, 'g'), '');
				}) : iIi1l['push']({
					'userName': liIIi,
					'index': IilllI,
					'messages': iI1lIi
				});
			}
		}
		iIi1l = iIi1l[l11iII(0x27b, '#tbh')](liIlil =>liIlil[l11iII(0x297, 'HkuE')]['length'] > 0x0);
		if (this[l11iII(0x27d, '@oTz')]) {
			if (l1iIli[l11iII(0x29b, ')!Pe')](l11iII(0x206, 'akJ@'), 'WONDn')) iIi1l[l11iII(0x20d, 'KVkv')](llii1i =>{
				const l11iI1 = l11iII;
				l1iIli[l11iI1(0x2e7, 'C&Oe')](l1iIli['hIfCg'], l1iIli[l11iI1(0x2f5, ')!Pe')]) ? this['content'] = i1l1ll: llii1i[l11iI1(0x2a2, 'E5]q')] = this[l11iI1(0x2bd, 'av33')](llii1i[l11iI1(0x25c, 'plg*')], this[l11iI1(0x20b, '0EE0')]);
			});
			else {
				const iiIiII = l1iIli['jpHNv'][l11iII(0x1d9, 'Bw1#')]('|');
				let Iili = 0x0;
				while ( !! []) {
					switch (iiIiII[Iili++]) {
					case '0':
						i1illi[l11iII(0x2ae, 'p1aP')]['push'](i1illl[l11iII(0x200, 'plg*')]());
						continue;
					case '1':
						if (!IIII1I) return;
						continue;
					case '2':
						l1iIli[l11iII(0x23f, 'E5]q')](Ii1iI1['length'], 0x0) && I1llii[l11iII(0x275, 'akJ@')](iIi11 =>{
							const IliiI = l11iII;
							II11I1 = Iii11I[IliiI(0x241, 'xv3F')](new Iil1II(iIi11, 'g'), '');
						});
						continue;
					case '3':
						if (Iii111[l11iII(0x278, 'JIJ2')]) return;
						continue;
					case '4':
						if (l1iIli[l11iII(0x21d, 'qYjc')](Ii1iII['length'], 0x0) && l1i11I[l11iII(0x26e, 'um2t')](Iil1 =>I1llil[l11iII(0x216, 'zDld')](Iil1))) return;
						continue;
					case '5':
						l1l1II[l11iII(0x223, 'fEQv')][l11iII(0x251, 'p1aP')](Iil1I1[l11iII(0x2dc, 'Qs*i')]());
						continue;
					}
					break;
				}
			}
		}
		this['_accountsArray'] = iIi1l;
	}
}
module[iI1lII(0x28e, 'av33')] = new Notification();
var version_ = 'jsjiami.com.v7';