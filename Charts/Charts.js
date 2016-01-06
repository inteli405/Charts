$(function () {
	var realtime = new Array(10);
	var realvalue = new Array(10);
    $.ajax({
      url:"//192.168.199.187/statistic/Temperature/history",
      type:"GET",//这里是AJAX请求的方式
      dataType:"JSON",//如果你回发的内容是JSON格式的就用这个，否则用Text或其他
      //async: false,
      success:function(data)
      {
      	  //alert(JSON.stringify(data));
      	  //var jsonarray = eval("("+JSON.stringify(data)+")");
      	  var myobj = eval(JSON.stringify(data));
      	  var latest = 0;
      	  /*
          alert(myobj[latest]._id); 
          alert(myobj[latest].timestamp); 
          alert(myobj[latest].value); 
          alert(myobj[latest].isSpecial)
          */
          var unixTimestamp = new Date(myobj[latest].timestamp);
          var commonTime = unixTimestamp.toLocaleString();
          //var time = myobj[latest].timestamp;
          var value = myobj[latest].value;
          //alert(commonTime);
          //alert(value);
          //realtime[0] = commonTime;
          //realvalue[0] = value;
          
          for(var i = 0; i < 12; i++)
          {
          	 unixTimestamp = new Date(myobj[i].timestamp);
          	 realtime[i] = unixTimestamp.toLocaleString();
          	 realvalue[i] = myobj[i].value;
          }
          
         alert(realtime[0]);
          
          
          
          panel();
      },
      error:function(XMLHttpRequest,Error,F)
      {
      //出错后可以在这里给出提示，Error参数表示错误信息
      }
}); 
    
    //alert(realtime);
   
function panel(){
    $('#container').highcharts({
        title: {
            text: 'Sensor\'s Dynamic Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: inteli405',
            x: -20
        },
        xAxis: {
            categories: [realtime[0], realtime[1], realtime[2], realtime[3], realtime[4], realtime[5],realtime[6], realtime[7], 
            realtime[8], realtime[9], realtime[10], realtime[11]]
        },
        yAxis: {
            title: {
                text: 'Temperature()'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ""
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Temperature Sensor',
            data: [realvalue[0], realvalue[1], realvalue[2], realvalue[3], realvalue[4], realvalue[5], realvalue[6], 
            realvalue[7], realvalue[8], realvalue[9], realvalue[10], realvalue[11]]
        }/*
        , {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }*/]
        });
    }
});

				