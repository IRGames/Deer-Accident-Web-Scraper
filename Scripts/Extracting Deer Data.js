function readDeerFile(evt){
  var f = evt.target.files[0];

  if (f) {
    var r = new FileReader();
    r.onload = function(e) {
      var contents = e.target.result;
      urlArray = contents.split('\n');
    }
    r.readAsText(f);
  } else{
    alert("Failed to load file");
  }
}

function searchURLAndDownload(){
  var denominator = urlArray.length;
  var numerator = 0;
  //searching the url for deer incidents
  for(var i = 0; i < urlArray.length; i++){
    $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(urlArray[i]) + '&callback=?', function(data){

      var lines = shortenHTML(data.contents);
      searchForDeer(lines);

    })
    .done(function () {
      //Show the percentage download.  Whe 100%, download the file
      numerator++;

      $('#loadingDeerPercent').html ('' + Math.floor(100*numerator/denominator) + '%');

      if($('#loadingDeerPercent').html() =='100%'){
        downloadData('Deer');
      }
    });
  }
}

function searchForDeer(lines){
  var date = '';

  for(var i = 1; i < lines.length-1; i++){
    if(lines[i].search('(deer)|(Deer)') != -1){

      //check to see if there's already a deer collision for current date
      //if there is, increase number by one
      if(date == lines[i].substr(3, lines[i].indexOf(' ')-3)){
        deerAndDate[deerAndDate.length-1][1] += 1;
      }
      else{
        //if date doesn't already exist, push new date entry with starting
        //collision amount of 1
        date = lines[i].substr(3, lines[i].indexOf(' ')-3);
        deerAndDate.push([date, 1]);
      }
    }
  }
}

document.getElementById('deerInput').addEventListener('change', readDeerFile, false);
