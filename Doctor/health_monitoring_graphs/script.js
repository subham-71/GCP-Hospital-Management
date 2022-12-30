

var xArray = ['20/9/22', '25/9/22', '30/9/22', '16/10/22', '23/10/22', '30/11/22', '12/12/22'];
var yArray_Heart_rate = [94,87,88,91,119,129,111];
var yArray_SpO2 = [90, 99, 96, 97, 96, 98, 97];
var yArray_Temperature = [98.6, 98.7, 98.8, 98.6, 98.8, 98.7, 98.9];
var y1Array_BP = [69, 68, 74, 76, 70, 78, 80];
var y2Array_BP= [90, 95, 100, 96, 100, 99, 95];

// Define Data
var data_Heart_rate = [{
  x: xArray,
  y: yArray_Heart_rate,
  mode:"lines",
  line: {
    color: 'rgb(219, 64, 82)',
    width: 3
  }
}];

var data_SpO2 = [{
    x : xArray,
    y : yArray_SpO2,
    mode:"lines",
    line:{
        width : 3
    }
}];

var data_temperature = [{
    x: xArray,
    y: yArray_Temperature,
    mode:"lines",
    line :{
        width : 3
    }
  }];

var data_bp = [{
    x : xArray,
    y : y1Array_BP,
    mode:"lines",
    name : "Systolic",
    line: {
        color: 'rgb(55, 128, 191)',
        width: 3
      }
},
{
    x : xArray,
    y : y2Array_BP,
    mode:"lines",
    name : "Diastolic",
    line: {
        color: 'rgb(219, 64, 82)',
        width: 3
      }
} 

];


var layout_heart_rate = {
  xaxis: {title: "Dates of Visit"},
  yaxis: {range: [60, 150], title: "Heart Rate(bpm)"},  
  title: "Heart Rate History"
};

var layout_SpO2_rate = {
    xaxis: {title: "Dates of Visit"},
    yaxis: {range: [40, 100], title: "SpO2 Levels (%)"},  
    title: "SpO2 Level History"
  };

var layout_BP = {
    xaxis: {title: "Dates of Visit"},
    yaxis: {range: [20, 200], title: "Blood Pressure(mm Hg)"},  
    title: "Blood Pressure History",
    
}

var layout_temp = {
    xaxis: {title: "Dates of Visit"},
    yaxis: {range: [90, 120], title: "Temperature (Celcius)"},  
    title: "Body Temperature History"
}


Plotly.newPlot("Heart_rate", data_Heart_rate, layout_heart_rate);

Plotly.newPlot("SpO2", data_SpO2, layout_SpO2_rate);

Plotly.newPlot("BP", data_bp, layout_BP);

Plotly.newPlot("Temperature", data_temperature, layout_temp);



