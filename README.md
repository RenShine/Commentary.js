Commentary.js 是仿前端乱炖的评注功能，可以给文章的某一个部分添加评论。

=======

[点击查看demo](http://121.40.124.60/Commentary/Commentary.html)


###使用方法

	<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js"></script>
    <script src="js/Commentary.js"></script>
    <script>
	$('.article').Commentary({
	    addCommentary : function(element){
	    	console.log(element)
			//添加评注的回调，用来跟后端交互
			// element为添加的那枚评注的DOM元素
	    }	
	});
    </script>

支持AMD方式调用
