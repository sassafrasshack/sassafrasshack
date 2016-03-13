var labels = [];
var man = [];
var woman = [];
var kommun = [];

var labels2 = [];
var man2 = [];
var woman2 = [];
var kommun2 = [];

function start() {
   var chart = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: 'rightCont',
            backgroundColor: 'rgba(255, 255, 255, 0)'
            
        },
       
       legend: {
           title: "Kön",
           rtl: true,
           enabled: true,
           reversed: true ,
                      itemStyle: {
            fontWeight: "bold",
            fontSize: "15px",
            color: "rgba(255,255,255,1)"
            }
       },
        title: {
            text: kommun,
            style: {
            color: "rgba(255,255,255,1)",
            fontWeight: "bold",
            fontSize: "18px"
           }
        },
       
       subtitle: {
          text: "2013",
           style: {
            color: "rgba(255,255,255,1)",
            fontWeight: "bold",
            fontSize: "15px"
           }
       },
        xAxis: {
            categories: labels,
            labels: {
                style: {
                    color: '#fff',
                    fontSize: "15px"
                },
            }
                
            },
            
        yAxis: [{
            min: 0,
            title: {
                text: ''
            },
            opposite: true
            
        }],
        tooltip: {
            pointFormat: '<span style="color:{series.color}"><b>{series.name}</b></span>: <b>({point.percentage:.0f}%)</b><br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent',
                events: {
                  legendItemClick: function () {
                    return false;
            },
          },
        },
              allowPointSelect: false
        },
        series: [{
            name: 'Male',
            data: man,
            color: "#e8574d"
        }, {
            name: 'Female',
            data: woman,
            color: "#eacf13"
        }]
    });
    /*labels = [];
    man = [];
    woman = [];
    kommun = [];*/
    
    
};

function start2() {
   var chart = new Highcharts.Chart({
        chart: {
            type: 'column',
            renderTo: 'container',
            backgroundColor: 'rgba(255, 255, 255, 0)'
            
        },
          legend: {
           title: "Kön",
           rtl: true,
           enabled: true,
           reversed: false,
                itemStyle: {
            fontWeight: "bold",
            fontSize: "15px",
            color: "rgba(255,255,255,1)"

           }},


        title: {
            text: kommun2,
            style: {
            color: "rgba(255,255,255,1)",
            fontWeight: "bold",
            fontSize: "18px"
           }
            
        },
        subtitle: {
          text: "2001",
            style: {
            color: "rgba(255,255,255,1)",
            fontWeight: "bold",
            fontSize: "15px"
           }
       },
        xAxis: {
            categories: labels2,
            labels: {
                style: {
                    color: '#fff',
                    fontSize: "15px"
                },
            }
                
            },
            
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}"><b>{series.name}</b></span>: <b>({point.percentage:.0f}%)</b><br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent',
                events: {
                  legendItemClick: function () {
                    return false;
            },
          },
        },
              allowPointSelect: false
        },
        series: [{
            name: 'Male',
            data: man2,
            color: "#e8574d"
        }, {
            name: 'Female',
            data: woman2,
            color: "#eacf13"
        }]
    });
    labels2 = [];
    man2 = [];
    woman2 = [];
    kommun2 = [];
    
    
};


$("#kommunen").keypress(function(e) {
  if( e.which == 13) {
    labels = [];
    man = [];
    woman = [];
    kommun = [];
    var kommunInput = $(this).val();
    }
      for(var key in data){
          if (key.toLocaleLowerCase().substring(0,kommunInput.length)==kommunInput.toLowerCase())
              {
                  kommun.push(kommunInput);
                  for (jobbrow in data[key]){
                      for(jobbname in data[key][jobbrow]){
                            labels.push(jobbname);
                            woman.push(data[key][jobbrow][jobbname][1]);
                            man.push(data[key][jobbrow][jobbname][0]);
                              }
                              }
                                  
                          }
                      }
                      start();
                      });



$("#kommunen").keypress(function(e) {
  if( e.which == 13) {
    labels2 = [];
    man2 = [];
    woman2 = [];
    kommun2 = [];
    var kommunInput = $(this).val();
      for(var key in olddata){
          if (key.toLocaleLowerCase().substring(0,kommunInput.length)==kommunInput.toLowerCase())
              {
                  kommun2.push(kommunInput);
                  for (jobbrow in olddata[key]){
                      for(jobbname in olddata[key][jobbrow]){
                            labels2.push(jobbname);
                            woman2.push(olddata[key][jobbrow][jobbname][1]);
                            man2.push(olddata[key][jobbrow][jobbname][0]);
                              }
                              }
                                  
                          }
                      }
                      start2();
                      }
                  });



$(function(){
    for(var key in riket){
        for (jobrow in riket[key]){
                      for(jobname in riket[key][jobrow]){
                            labels.push(jobname);
                            woman.push(riket[key][jobrow][jobname][1]);
                            man.push(riket[key][jobrow][jobname][0]);
                            kommun = "Riket";
                                }
                            }
                                  
                            start();
    }
                      });
$(function(){
    for(var key in oldriket){
        for (jobrow in oldriket[key]){
                      for(jobname in oldriket[key][jobrow]){
                            labels2.push(jobname);
                            woman2.push(oldriket[key][jobrow][jobname][1]);
                            man2.push(oldriket[key][jobrow][jobname][0]);
                            kommun2 = "Riket";
                                }
                            }
                            start2();
    }
  });
