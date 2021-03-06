(function($) {
	var jqueryLink = '//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
		dfpLink = '//d3clqjla00sltp.cloudfront.net/programatic/jquery.dfp.min.js',
		dfpTag = {
			id: '175265624',
			unitId:'MobileKoimoi_BelowImage_300x250_Mob',
			dimention: {
				width: 300,
				height: 250
			}
		};
	
	var setAttributes = function(el, attrs) {
		for(var key in attrs) { if (attrs.hasOwnProperty(key)) el.setAttribute(key, attrs[key]); }
	};

	var container = $('body'),
		iframe = document.createElement('iframe'),
		width = container.width,
		scale = ((width / dfpTag.dimention.width) <= 1) ? (width / dfpTag.dimention.width) : 1,
		left = Math.round((dfpTag.dimention.width - width)/2),
		cssText = "height:"+ dfpTag.dimention.height +"px !important;left:-"+ left +"px;width:"+ dfpTag.dimention.width +"px !important; overflow:hidden; bottom:0px; border: 0px; position:relative; background: transparent; z-index: 2; -moz-transform: scale("+ scale +"); -o-transform: scale("+ scale +"); -webkit-transform: scale("+ scale +"); transform: scale("+ scale +"); max-width:initial !important;";
  		
	setAttributes(iframe, {
		"height": dfpTag.dimention.height,
		"scrolling": "no",
		"frameBorder": 0,
		"allowtransparency": "true",
		"class": "adunit",
		"width": dfpTag.dimention.width,
		"loadStatus": 0,
		"data-width": dfpTag.dimention.width,
		"data-height": dfpTag.dimention.height,
		"style": cssText,
		"data-style": cssText,
		"data-dimensions": dfpTag.dimention.width+'x'+dfpTag.dimention.height
	});
  	container.append(iframe);
    
	try{
		console.log('Log : Setting html content in try block !!');
		var doc = iframe.contentDocument || iframe.contentWindow.document,
		//content = '<head><style>html{margin:0 !important;background:transparent;}body{margin:0 !important;position:relative !important; padding:0 !important;border:0;background-color:transparent;}img{width:100% !important;}object{width:100% !important;}body iframe{width:100% !important;background:transparent;}</style><script type="text/javascript">var d=document,w=window,interval,el=w.frameElement,mIn,vIn;function init(){interval=setInterval(function(){if(d.getElementsByTagName("iframe").length>0||d.getElementsByTagName("img").length>0||d.getElementsByTagName("object").length>0||d.getElementsByTagName("embed").length>0){w.clearInterval(interval);var ip=d.getElementsByTagName("iframe");if(ip.length==0){ani();}else{ip[0].onload=ani();}}},200);}function ani(){ el.setAttribute("loadStatus",1); d.body.style.display="block"; } function bdn(){el.style.display="none";} \x3C/script><script type="text/javascript" src="'+ jqueryLink +'">\x3C/script><script type="text/javascript" src="'+ dfpLink +'">\x3C/script></head><body onload="init()"><div class="adunit" id="'+ dfpTag.unitId +'" data-dimensions="'+ dfpTag.dimention.width+'x'+dfpTag.dimention.height +'"></div><span id="adSenceImagePushClose" style="position:absolute;top: -2px;right: -2px;height: 15px;width: 15px;text-align:center;cursor:pointer;font-size: 15px;line-height: 1;color: rgba(175, 172, 172, 0.83);z-index:2147483648;" onClick="bdn()" title="Close">&times</span><script type="text/javascript">$.dfp({dfpID:'+ dfpTag.id +',enableSingleRequest: true,collapseEmptyDivs: true});</script></body>';
		
		// content = '<head><style>html{margin:0 !important;background:transparent;}body{margin:0 !important;position:relative !important; padding:0 !important;border:0;background-color:transparent;}img{width:100%;}object{width:100% !important;}body iframe{width:100% !important;background:transparent;}</style><script type="text/javascript">var d=document,w=window,interval,el=w.frameElement,mIn,vIn;function init(){interval=setInterval(function(){if(d.getElementsByTagName("iframe").length>0||d.getElementsByTagName("img").length>0||d.getElementsByTagName("object").length>0||d.getElementsByTagName("embed").length>0){w.clearInterval(interval);var ip=d.getElementsByTagName("iframe");if(ip.length==0){ani();}else{ip[0].onload=ani();}}},200);}function ani(){ el.setAttribute("loadStatus",1); d.body.style.display="block"; } function bdn(){el.style.display="none";} \x3C/script><script type="text/javascript" src="'+ jqueryLink +'">\x3C/script></head><body onload="init()"><script type="text/javascript">var _ptclick=undefined,_width=300,_height=250,_ppid="koovs_koimoi",_gaObject={required:false};</script><script src="http://d3clqjla00sltp.cloudfront.net/latest/programatic.js"></script></body>';
		
		content = '<head><style>html{margin:0 !important;background:transparent;}body{margin:0 !important;position:relative !important; padding:0 !important;border:0;background-color:transparent;}img{width:100%;}object{width:100% !important;}body iframe{width:100% !important;background:transparent;}</style><script type="text/javascript">var d=document,w=window,interval,el=w.frameElement,mIn,vIn;function init(){interval=setInterval(function(){if(d.getElementsByTagName("iframe").length>0||d.getElementsByTagName("img").length>0||d.getElementsByTagName("object").length>0||d.getElementsByTagName("embed").length>0){w.clearInterval(interval);var ip=d.getElementsByTagName("iframe");if(ip.length==0){ani();}else{ip[0].onload=ani();}}},200);}function ani(){ el.setAttribute("loadStatus",1); d.body.style.display="block"; } function bdn(){el.style.display="none";} \x3C/script><script type="text/javascript" src="'+ jqueryLink +'">\x3C/script></head><body onload="init()"><script type="text/javascript">var _ptclick=undefined,_width=300,_height=250,_ppid="koovs_koimoi",_gaObject={tag:"<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\'//www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'PM_IP_DL\',\'GTM-K6TXRQ\');\x3C/scr"+"ipt>",event:{eventTrigger:"koimoiMobileEventTrigger",eventAction: "koimoiMobileClickAction",eventCategory:"koimoiMobileClickCategory",eventLabel:"koimoiMobileClickLabel"},campaignId:"koimoiMobile_Koovs",required: true};</script><script src="http://d3clqjla00sltp.cloudfront.net/latest/programatic.js"></script></body>';

		doc.open();
		doc.write(content);
		doc.close();
    }
    catch(e){ console.log(e); }
    
})($ || jQuery);
