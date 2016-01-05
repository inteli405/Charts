<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <%-- <base href="<%=basePath%>"> --%>
    <title>My JSP 'index.jsp' starting page</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- 引入jQuery -->
    <script type="text/javascript" language="javascript" src="<%=basePath%>/js/jquery-1.3.1.js">
    $(document).ready(function(){
    var $oDiv = $("#ajax");
    $oDiv.click(function(){
       $.ajax({
            type:"GET",//发送请求类型
            url:"User/add",//请求路径
            //async:false,//默认为true,是异步请求
            //传参给后台的形式(两种方式)
            //data:{"username":"test","password":"123456"},
            data:"username=test&password=123456",
            dataType:"script",//返回类型
            cache: false,//不使用当前浏览器的缓存
            success:function(msg){//请求成功后调用的回调函数
                //请求成功
                alert("msg="+msg);
                alert("success");
            },
            error:function(){
                //Exception
                alert("error");
            }
        });
   });
});</script>
</head>
         
  <body>
    <input  id="ajax" type="button" value="添加用户">
  </body>
</html>