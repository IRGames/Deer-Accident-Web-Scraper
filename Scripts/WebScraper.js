var deerAndDate = [];
var urlArray = [];
var datesArray = [];
var weatherData = [['']];


function shortenHTML(html){
  html = html.substr(html.search('pf-content'));
  html = html.substr(0, html.search('END ENTRY'));
  html = html.split('\n');
  return html;
}

function downloadData(type){
  var array = [];
  if(type == 'Deer'){
    array = deerAndDate;
  } else{
    array = weatherData;
  }
  let csvContent = "data:text/csv;charset=utf-8,";

  array.forEach(function (rowArray){
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
  });

  var encodedUri = encodeURI(csvContent);
  window.open(encodedUri);
}
