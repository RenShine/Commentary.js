;(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD模式
        define([ "jquery" ], factory);
    } else {
        // 全局模式
        factory(jQuery);
    }
}(function ($) {
    $.fn.Commentary = function (config) {
        //插件代码
        var defaults = {
            	addCommentary : function(element){ } //添加评注的回调; 

	    },
           opts = $.extend(defaults,config),
            _this = this,
            offset = _this.position();

        $(document).on("mouseenter",'.tip-point',function(){
		var tipx = $(this).position().left,
    		    tipy = $(this).position().top;
	    	$(this).parent().find('.tip-comments').css({
			"top" : tipy + 15,
			"left" : tipx + 15
		}).show();	    
	})
        _this.dblclick(function(e){

            var x = getX(e),
                y = getY(e),
                color = 'background:rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ','+ Math.round(Math.random()*255) + ')',
                tipsnode = '<a class="tip-point" style="top:' + y + 'px;left:' + x + 'px;' + color + '"><div class="pulse-inner1"></div><div class="pulse-inner2"></div></a>'
            _this.append(tipsnode);
	    opts.addCommentary(tipsnode);
            function getX(e) {
                e = e || window.event;

                return e.pageX || e.clientX + document.body.scroolLeft;
            }

            function getY(e) {
                e = e|| window.event;
                return e.pageY || e.clientY + document.boyd.scrollTop;
            }
        })
	_this.click(function(){
	   $('.tip-comments').hide();
	})
    };
}));
