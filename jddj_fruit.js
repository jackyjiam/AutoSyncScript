/*
京东到家果园任务脚本,支持qx,loon,shadowrocket,surge,nodejs
用抓包抓 https://daojia.jd.com/html/index.html 页面cookie填写到下面,暂时不知cookie有效期
抓多账号直接清除浏览器缓存再登录新账号,千万别点退出登录,否则cookie失效
cookie只要里面的deviceid_pdj_jd=xxx-xxx-xxx;o2o_m_h5_sid=xxx-xxx-xxx关键信息,填写整个cookie也是可以的
手机设备在boxjs里填写cookie,nodejs在jddj_cookie.js文件里填写cookie
boxjs订阅地址:https://gitee.com/passerby-b/javascript/raw/master/JD/passerby-b.boxjs.json
TG群:https://t.me/passerbyb2021

[task_local]
10 0,8,11,17 * * * https://raw.githubusercontent.com/passerby-b/JDDJ/main/jddj_fruit.js

*/

let isNotify = true;//是否通知,仅限nodejs
let ckPath = './jddj_cookie.js';//ck路径

eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([34acdf-hj-mo-qsu-wyzA-WYZ]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('28 $=k API("jddj_fruit");f 1R=\'\',a=\'\',1c=\'\';f 1i=\'30.\'+m.u(m.21()*(2j-23)+23);f 1j=\'114.\'+m.u(m.21()*(2j-23)+23);f 1S=m.u(m.21()*(1500-H)+H);f 1k=[],K=\'\';1d=0,1w=0,1F=\'\',1G=\'\';!(v()=>{d(1k.1l==0){d($.1x.1y){delete 24.cache[2k];1k=24(2k)}1m{f 1T=$.2l(\'#jddj_cookies\');d(!!1T){d(1T.29(\',\')<0){1k.push(1T)}1m{1k=1T.1z(\',\')}}}}d(1k.1l==0){o.p(\'\\r\\n请先填写1U\');1e}d(!$.1x.1y){1V=$.2l(\'#jddj_isNotify\')}1m{K=24(\'./1A\')}1H(f i=0;i<1k.1l;i++){o.p(\'\\r\\n★★★★★开始执行第\'+(i+1)+\'个账号,共\'+1k.1l+\'个账号★★★★★\');1R=1k[i];1d=0,1w=0;d(!1R.2a())2m;1o 2b={};1o 2n=1R.1z(\';\');2n.forEach(c=>{d(c.29(\'=\')>-1)2b[c.1z(\'=\')[0].2a()]=c.1z(\'=\')[1].2a()});a=2b.deviceid_pdj_jd;g 2o();g $.L(H);g 25(0);g $.L(H);f M=g 2c();d(M.14==1){$.K(\'第\'+(i+1)+\'个账号1U过期\',\'请访问A://B.C.y/1I/F.1I抓取1U\',{1J:\'A://B.C.y/1I/F.1I\'});d($.1x.1y&&\'\'+1V+\'\'==\'D\'){g K.1A(\'第\'+(i+1)+\'个账号1U过期\',\'请访问A://B.C.y/1I/F.1I抓取1U\')}2m}g 2p();g $.L(H);g $.L(H);g 2q();g $.L(H);g 25(1);g $.L(H);g 2r();g $.L(H);g 2s(M);g $.L(H);1G=\'\';M=g 2c();1H(f F=0;F<M.h.1K.1l;F++){f 1W=M.h.1K[F];d(1W.1B==\'23eee1c043c01bc\'){1F+=\'@\'+1W.uniqueId+\',\';o.p(\'\\n好友互助码:\'+1F);1G=\',助力\'+1W.finishNum+\'/\'+1W.totalNum}}g 25(2);g $.L(H)}$.K(\'京东到家果园互助码:\',\'\',1F);d($.1x.1y){f K=24(\'./1A\');K.1A(\'京东到家果园互助码:\',1F)}})().16(v(e)=>{o.p(\'\',\'❌失败! 原因:\'+e+\'!\',\'\');d($.1x.1y&&\'\'+1V+\'\'==\'D\'){K.1A(\'京东到家果园\',\'❌失败! 原因:\'+e+\'!\')}}).2t(()=>{$.done()});v 1n 2o(){1e k 1p(v s=>{1f{f q=J(\'A://B.C.y/N?17=\'+m.u(k w())+\'&O=H5&P=Q&R=&S=8.7.6&jdDevice=&T=mine%2FgetUserAccountInfo&j=%U%22refPageSource%22:%22%22,%22fromSource%22:2,%22pageSource%22:%2u%22,%22ref%22:%22%22,%22ctp%22:%2u%22%V&jda=&18=\'+a+m.u(k w())+\'&W=\'+a+\'&Y=\'+a,\'\');$.G.Z(q).I(l=>{f 3=11.12(l.j);d(3.14==0){1f{1c=3.h.userInfo.userBaseInfo.nickName;o.p("●●●"+1c+"●●●")}16(z){1c=\'昵称获取失败\'}}});s()}16(z){o.p(\'\\n【个人信息】:\'+z);s()}})}v 1n 2c(){1e k 1p(v s=>{1f{f q=J(\'A://B.C.y/N?17=\'+m.u(k w())+\'&T=1q%2Flist&19=D&j=%U%1r%22%3A%2v%22%2C%1s%22%1t%V&R=1g&13=6.6.0&O=h5&S=6.6.0&P=Q&1a=1b&18=\'+a+\'&W=\'+a+\'&Y=\'+a,\'\');$.G.Z(q).I(l=>{f 3=11.12(l.j);s(3)})}16(z){o.p(\'\\n【任务列表】:\'+z);s({})}})}v 1n 2r(){1e k 1p(v s=>{1f{f q=J(\'A://B.C.y/N?17=\'+m.u(k w()),\'T=2w%2Fwatering&19=D&2x=2y&j=%U%22waterTime%22%1t%V&R=1g&13=6.6.0&O=h5&S=6.6.0&P=Q&1a=1b&18=\'+a+\'&W=\'+a+\'&Y=\'+a);f 2d=1,2e=0;do{2e++;o.p(\'\\n**********开始执行第\'+2e+\'次浇水**********\');$.G.2z(q).I(l=>{f 3=11.12(l.j);o.p(\'\\n【浇水】:\'+3.4);2d=3.14;d(3.14==0)1w++});g $.L(H)}while(2d==0);s()}16(z){o.p(\'\\n【浇水】:\'+z);s()}})}v 1n 2p(){1e k 1p(v s=>{1f{f q=J(\'A://B.C.y/N?17=\'+m.u(k w())+\'&T=signin%2FuserSigninNew&19=D&j=%U%22channel%22%3A%22daojiaguoyuan%22%2C%2A%22%3A\'+1S+\'%2C%2B%22%3A\'+1j+\'%2C%2D%22%3A\'+1i+\'%2C%22ifCic%22%3A0%V&R=1g&13=6.6.0&O=h5&S=6.6.0&P=Q&1a=1b&18=\'+a+\'&W=\'+a+\'&Y=\'+a,\'\');$.G.Z(q).I(l=>{f 3=11.12(l.j);o.p(\'\\n【到家签到】:\'+3.4);s()})}16(z){o.p(\'\\n【到家签到领水滴】:\'+z);s()}})}v 1n 2q(){1e k 1p(v s=>{1f{f 26=[],1u=\'\';g $.G.Z({1J:\'A://gitee.y/passerby-b/javascript/raw/master/test/sharecode.js\'}).I(l=>{1u=l.j});1f{g $.G.Z({1J:\'G://107.172.97.176:8080/queryJddjCode\'}).I(l=>{1u+=l.j})}16(z){}d(!!1u){1u=1u.substr(0,1u.1l-1);26=1u.1z(\',\')}f 2f=26[m.u(m.21()*(26.1l-1)+0)];f q=J(\'A://B.C.y/N?1i=\'+1i+\'&1j=\'+1j+\'&2E=\'+1i+\'&2F=\'+1j+\'&2G=\'+1S+\'&W=\'+a+\'&Y=\'+a+\'&R=2H&mpChannel=2H&13=5.0.0&O=mini&S=5.0.0&P=Q&1a=1b&xcxVersion=9.2.0&19=D&business=djgyzhuli&T=1q%2g&j=%U%1r%22%3A%2v%22%2C%1C%22%3A1201%2C%1D%22%3A%2223eee1c043c01bc%22%2C%1s%22%3A5%2C%22assistTargetPin%22%3A%22\'+2f.1z(\'@\')[0]+\'%22%2C%22uniqueId%22%3A%22\'+2f.1z(\'@\')[1]+\'%22%V\',\'\');$.G.Z(q).I(l=>{f 3=11.12(l.j);o.p(\'\\n【助力】:\'+3.4);s()})}16(z){o.p(\'\\n【助力】:\'+z);s()}})}v 1n runTask(M){1e k 1p(v s=>{1f{1H(f F=0;F<M.h.1K.1l;F++){28 c=M.h.1K[F];d(c.1v==307||c.1v==901){f q=J(\'A://B.C.y/N?17=\'+m.u(k w())+\'&T=1q%2I&19=D&j=%U%1r%22%3A%22\'+c.1L+\'%22%2C%1D%22%3A%22\'+1M(c.1B)+\'%22%2C%1C%22%3A\'+c.1v+\'%2C%1s%22%1t%2C%1N%22%1O%V&R=1g&13=6.6.0&O=h5&S=6.6.0&P=Q&1a=1b&18=\'+a+m.u(k w())+\'&W=\'+a+\'&Y=\'+a,\'\');g $.G.Z(q).I(l=>{1o 3=11.12(l.j),4=\'\';d(3.14==0){4=3.4+\',奖励:\'+3.h.1P}1m{4=3.4}o.p(\'\\n领取任务【\'+c.1E+\'】:\'+4)})}d(c.27>-1){1H(f t=0;t<2J(c.27);t++){g $.L(H);o.p(\'计时:\'+(t+1)+\'秒...\')}};q=J(\'A://B.C.y/N?17=\'+m.u(k w())+\'&T=1q%2g&19=D&j=%U%1r%22%3A%22\'+c.1L+\'%22%2C%1D%22%3A%22\'+1M(c.1B)+\'%22%2C%1C%22%3A\'+c.1v+\'%2C%1s%22%1t%2C%1N%22%1O%V&R=1g&13=6.6.0&O=h5&S=6.6.0&P=Q&1a=1b&18=\'+a+m.u(k w())+\'&W=\'+a+\'&Y=\'+a,\'\');g $.G.Z(q).I(l=>{1o 3=11.12(l.j),4=\'\';d(3.14==0){4=3.4+\',奖励:\'+3.h.1P}1m{4=3.4}o.p(\'\\n任务完成【\'+c.1E+\'】:\'+4)});q=J(\'A://B.C.y/N?17=\'+m.u(k w())+\'&T=1q%2K&19=D&j=%U%1r%22%3A%22\'+c.1L+\'%22%2C%1D%22%3A%22\'+1M(c.1B)+\'%22%2C%1C%22%3A\'+c.1v+\'%2C%1s%22%1t%2C%1N%22%1O%V&R=1g&13=6.6.0&O=h5&S=6.6.0&P=Q&1a=1b&18=\'+a+m.u(k w())+\'&W=\'+a+\'&Y=\'+a,\'\');g $.G.Z(q).I(l=>{1o 3=11.12(l.j),4=\'\';d(3.14==0){4=3.4+\',奖励:\'+3.h.1P}1m{4=3.4}o.p(\'\\n领取奖励【\'+c.1E+\'】:\'+4)})}s()}16(z){o.p(\'\\n【执行任务】:\'+z);s()}})}v 1n 2s(M){1e k 1p(v s=>{1f{1H(f F=0;F<M.h.1K.1l;F++){28 c=M.h.1K[F];d(c.1E.29(\'限时\')>-1){f q=J(\'A://B.C.y/N?17=\'+m.u(k w())+\'&T=1q%2I&19=D&j=%U%1r%22%3A%22\'+c.1L+\'%22%2C%1D%22%3A%22\'+1M(c.1B)+\'%22%2C%1C%22%3A\'+c.1v+\'%2C%1s%22%1t%2C%1N%22%1O%V&R=1g&13=6.6.0&O=h5&S=6.6.0&P=Q&1a=1b&18=\'+a+m.u(k w())+\'&W=\'+a+\'&Y=\'+a,\'\');g $.G.Z(q).I(l=>{1o 3=11.12(l.j),4=\'\';d(3.14==0){4=3.4+\',奖励:\'+3.h.1P}1m{4=3.4}o.p(\'\\n领取任务【\'+c.1E+\'】:\'+4)});d(c.27>-1){1H(f t=0;t<2J(c.27);t++){g $.L(H);o.p(\'计时:\'+(t+1)+\'秒...\')}};q=J(\'A://B.C.y/N?17=\'+m.u(k w())+\'&T=1q%2g&19=D&j=%U%1r%22%3A%22\'+c.1L+\'%22%2C%1D%22%3A%22\'+1M(c.1B)+\'%22%2C%1C%22%3A\'+c.1v+\'%2C%1s%22%1t%2C%1N%22%1O%V&R=1g&13=6.6.0&O=h5&S=6.6.0&P=Q&1a=1b&18=\'+a+m.u(k w())+\'&W=\'+a+\'&Y=\'+a,\'\');g $.G.Z(q).I(l=>{1o 3=11.12(l.j),4=\'\';d(3.14==0){4=3.4+\',奖励:\'+3.h.1P}1m{4=3.4}o.p(\'\\n任务完成【\'+c.1E+\'】:\'+4)});q=J(\'A://B.C.y/N?17=\'+m.u(k w())+\'&T=1q%2K&19=D&j=%U%1r%22%3A%22\'+c.1L+\'%22%2C%1D%22%3A%22\'+1M(c.1B)+\'%22%2C%1C%22%3A\'+c.1v+\'%2C%1s%22%1t%2C%1N%22%1O%V&R=1g&13=6.6.0&O=h5&S=6.6.0&P=Q&1a=1b&18=\'+a+m.u(k w())+\'&W=\'+a+\'&Y=\'+a,\'\');g $.G.Z(q).I(l=>{1o 3=11.12(l.j),4=\'\';d(3.14==0){4=3.4+\',奖励:\'+3.h.1P}1m{4=3.4}o.p(\'\\n领取奖励【\'+c.1E+\'】:\'+4)})}}s()}16(z){o.p(\'\\n【执行任务】:\'+z);s()}})}v 1n 25(2h){1e k 1p(v s=>{1f{f q=J(\'A://B.C.y:443/N?17=\'+m.u(k w()),\'T=2w%2FinitFruit&19=D&2x=2y&j=%U%2A%22%3A\'+1S+\'%2C%2B%22%3A\'+1j+\'%2C%2D%22%3A\'+1i+\'%V&1i=\'+1i+\'&1j=\'+1j+\'&2E=\'+1i+\'&2F=\'+1j+\'&2G=\'+1S+\'&R=1g&13=6.6.0&O=h5&S=6.6.0&P=Q&1a=1b&18=\'+a+m.u(k w())+\'&W=\'+a+\'&Y=\'+a);g $.G.2z(q).I(v l=>{f 3=11.12(l.j);d(3.14==0){d(2h==0){1d=3.h.1X.1Y;1F+=3.h.E.userPin}d(2h==2){1d=(1w*10)+3.h.1X.1Y-1d;d(1d<0)1d=0;d(3.h.E.1Z==0){o.p(\'\\n京东到家果园【\'+1c+\'】:\'+3.h.E.1Q+\'已成熟,快去收取!\');$.K(\'京东到家果园\',\'【\'+1c+\'】\',\'京东到家果园\'+3.h.E.1Q+\'已成熟,快去收取!\');d($.1x.1y&&\'\'+1V+\'\'==\'D\'){g K.1A(\'京东到家果园【\'+1c+\'】\',\'京东到家果园\'+3.h.E.1Q+\'已成熟,快去收取!\')}}d(3.h.E.1Z>0){f 20=\'次\';d(3.h.E.growingStage==5)20=\'%\';o.p(\'\\n京东到家果园【\'+1c+\'】:\'+3.h.E.1Q+\',本次领取\'+1d+\'滴水,浇水\'+1w+\'次,还需浇水\'+3.h.E.1Z+20+3.h.E.2i+\',还剩\'+3.h.1X.1Y+\'滴水\'+1G);$.K(\'京东到家果园\',\'【\'+1c+\'】\',\'【果树信息】:\'+3.h.E.1Q+\',本次领取\'+1d+\'滴水,浇水\'+1w+\'次,还需浇水\'+3.h.E.1Z+20+3.h.E.2i+\',还剩\'+3.h.1X.1Y+\'滴水\'+1G);d($.1x.1y&&\'\'+1V+\'\'==\'D\'){g K.1A(\'京东到家果园【\'+1c+\'】\',\'【果树信息】:\'+3.h.E.1Q+\',本次领取\'+1d+\'滴水,浇水\'+1w+\'次,还需浇水\'+3.h.E.1Z+20+3.h.E.2i+\',还剩\'+3.h.1X.1Y+\'滴水\'+1G)}}}}s()})}16(z){o.p(\'\\n【果树信息】:\'+z);s()}2t{treeInfoTimes=D}})}1n J(1J,j){f q={1J:1J,headers:{\'Host\':\'B.C.y\',\'Content-Type\':\'application/x-www-form-urlencoded;\',\'Origin\':\'A://B.C.y\',\'Cookie\':1R,\'Connection\':\'keep-alive\',\'2L\':\'*/*\',\'User-Agent\':\'Mozilla/5.0 (2M; CPU 2M OS 14_1 2O Mac OS X) AppleWebKit/605.1.15 (KHTML, 2O Gecko) Mobile/15E148________appName=jdLocal&13=iOS&commonParams={"sharePackageVersion":"2"}&djAppVersion=8.7.5&supportDJSHWK\',\'2L-Language\':\'zh-cn\'},j:j};1e q}',[],175,'|||data|msg||||||deviceid||item|if||let|await|result||body|new|response|Math||console|log|option||resolve||round|async|Date||com|error|https|daojia|jd|true|activityInfoResponse|index|http|1000|then|urlTask|notify|wait|tslist|client|platCode|appName|paidaojia|channel|appVersion|functionId|7B|7D|deviceToken||deviceId|get||JSON|parse|platform|code||catch|_jdrandom|traceId|isNeedDealError|deviceModel|appmodel|nickname|waterNum|return|try|ios||lat|lng|cookies|length|else|function|var|Promise|task|22modelId|22plateCode|3A1|codestr|taskType|waterTimes|env|isNode|split|sendNotify|taskId|22taskType|22taskId|taskTitle|shareCode|hzstr|for|html|url|taskInfoList|modelId|encodeURIComponent|22subNode|3Anull|awardValue|fruitName|thiscookie|cityid|ckstr|cookie|isNotify|element|userResponse|waterBalance|curStageLeftProcess|unit|random||10000|require|treeInfo|scodes|browseTime|const|indexOf|trim|jsonlist|taskList|waterStatus|waterCount|scode|2Ffinished|step|stageName|99999|ckPath|read|continue|params|userinfo|sign|zhuLi|water|runTask2|finally|22myinfo|22M10007|fruit|method|POST|post|22cityId|22longitude||22latitude|lat_pos|lng_pos|city_id|wx_xcx|2Freceived|parseInt|2FsendPrize|Accept|iPhone||like'.split('|'),0,{}))

/*********************************** API *************************************/
function ENV() { const e = "undefined" != typeof $task, t = "undefined" != typeof $loon, s = "undefined" != typeof $httpClient && !t, i = "function" == typeof require && "undefined" != typeof $jsbox; return { isQX: e, isLoon: t, isSurge: s, isNode: "function" == typeof require && !i, isJSBox: i, isRequest: "undefined" != typeof $request, isScriptable: "undefined" != typeof importModule } } function HTTP(e = { baseURL: "" }) { const { isQX: t, isLoon: s, isSurge: i, isScriptable: n, isNode: o } = ENV(), r = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/; const u = {}; return ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"].forEach(l => u[l.toLowerCase()] = (u => (function (u, l) { l = "string" == typeof l ? { url: l } : l; const h = e.baseURL; h && !r.test(l.url || "") && (l.url = h ? h + l.url : l.url); const a = (l = { ...e, ...l }).timeout, c = { onRequest: () => { }, onResponse: e => e, onTimeout: () => { }, ...l.events }; let f, d; if (c.onRequest(u, l), t) f = $task.fetch({ method: u, ...l }); else if (s || i || o) f = new Promise((e, t) => { (o ? require("request") : $httpClient)[u.toLowerCase()](l, (s, i, n) => { s ? t(s) : e({ statusCode: i.status || i.statusCode, headers: i.headers, body: n }) }) }); else if (n) { const e = new Request(l.url); e.method = u, e.headers = l.headers, e.body = l.body, f = new Promise((t, s) => { e.loadString().then(s => { t({ statusCode: e.response.statusCode, headers: e.response.headers, body: s }) }).catch(e => s(e)) }) } const p = a ? new Promise((e, t) => { d = setTimeout(() => (c.onTimeout(), t(`${u} URL: ${l.url} exceeds the timeout ${a} ms`)), a) }) : null; return (p ? Promise.race([p, f]).then(e => (clearTimeout(d), e)) : f).then(e => c.onResponse(e)) })(l, u))), u } function API(e = "untitled", t = !1) { const { isQX: s, isLoon: i, isSurge: n, isNode: o, isJSBox: r, isScriptable: u } = ENV(); return new class { constructor(e, t) { this.name = e, this.debug = t, this.http = HTTP(), this.env = ENV(), this.node = (() => { if (o) { return { fs: require("fs") } } return null })(), this.initCache(); Promise.prototype.delay = function (e) { return this.then(function (t) { return ((e, t) => new Promise(function (s) { setTimeout(s.bind(null, t), e) }))(e, t) }) } } initCache() { if (s && (this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}")), (i || n) && (this.cache = JSON.parse($persistentStore.read(this.name) || "{}")), o) { let e = "root.json"; this.node.fs.existsSync(e) || this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.root = {}, e = `${this.name}.json`, this.node.fs.existsSync(e) ? this.cache = JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)) : (this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.cache = {}) } } persistCache() { const e = JSON.stringify(this.cache, null, 2); s && $prefs.setValueForKey(e, this.name), (i || n) && $persistentStore.write(e, this.name), o && (this.node.fs.writeFileSync(`${this.name}.json`, e, { flag: "w" }, e => console.log(e)), this.node.fs.writeFileSync("root.json", JSON.stringify(this.root, null, 2), { flag: "w" }, e => console.log(e))) } write(e, t) { if (this.log(`SET ${t}`), -1 !== t.indexOf("#")) { if (t = t.substr(1), n || i) return $persistentStore.write(e, t); if (s) return $prefs.setValueForKey(e, t); o && (this.root[t] = e) } else this.cache[t] = e; this.persistCache() } read(e) { return this.log(`READ ${e}`), -1 === e.indexOf("#") ? this.cache[e] : (e = e.substr(1), n || i ? $persistentStore.read(e) : s ? $prefs.valueForKey(e) : o ? this.root[e] : void 0) } delete(e) { if (this.log(`DELETE ${e}`), -1 !== e.indexOf("#")) { if (e = e.substr(1), n || i) return $persistentStore.write(null, e); if (s) return $prefs.removeValueForKey(e); o && delete this.root[e] } else delete this.cache[e]; this.persistCache() } notify(e, t = "", l = "", h = {}) { const a = h["open-url"], c = h["media-url"]; if (s && $notify(e, t, l, h), n && $notification.post(e, t, l + `${c ? "\n多媒体:" + c : ""}`, { url: a }), i) { let s = {}; a && (s.openUrl = a), c && (s.mediaUrl = c), "{}" === JSON.stringify(s) ? $notification.post(e, t, l) : $notification.post(e, t, l, s) } if (o || u) { const s = l + (a ? `\n点击跳转: ${a}` : "") + (c ? `\n多媒体: ${c}` : ""); if (r) { require("push").schedule({ title: e, body: (t ? t + "\n" : "") + s }) } else console.log(`${e}\n${t}\n${s}\n\n`) } } log(e) { this.debug && console.log(`[${this.name}]LOG: ${this.stringify(e)}`) } info(e) { console.log(`[${this.name}]INFO: ${this.stringify(e)}`) } error(e) { console.log(`[${this.name}]ERROR: ${this.stringify(e)}`) } wait(e) { return new Promise(t => setTimeout(t, e)) } done(e = {}) { console.log('done!'); s || i || n ? $done(e) : o && !r && "undefined" != typeof $context && ($context.headers = e.headers, $context.statusCode = e.statusCode, $context.body = e.body) } stringify(e) { if ("string" == typeof e || e instanceof String) return e; try { return JSON.stringify(e, null, 2) } catch (e) { return "[object Object]" } } }(e, t) }
/*****************************************************************************/
