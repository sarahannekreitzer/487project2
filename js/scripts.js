console.log('scripts loaded');

$(document).ready(function() {
	$('#pagepiling').pagepiling({
    navigation: {
            'textColor': 'none',
            'bulletsColor': 'white',
            'position': 'right',
            'tooltips': ['Introduction', '', '','','Quiz','Sources']
        },
  });
});

var mySVG = $('#my_svg_element').drawsvg();
mySVG.drawsvg('animate');

/*google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Number Living in Slavery'],
    ['North Korea', 2640000],
    ['Eritrea', 451000],
    ['Burundi', 408000],
    ['Central African Republic', 101000],
    ['Afghanistan', 749000],
    ['Mauritania', 90000],
    ['South Sudan', 243000],
    ['Pakistan', 3186000],
    ['Cambodia', 261000],
    ['Iran', 1289000]
  ]);

  var options = {

    colorAxis: {colors: ['black', 'red']},
    backgroundColor: 'white',
    datalessRegionColor: 'white',
    defaultColor: '#f5f5f5',
    backgroundColor: 'transparent',

  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}*/

var count = 0,
    $svg = $('svg').drawsvg({
      callback: function() {
        $('#log').html('<p>Animation complete! <strong>' + (count++) + '</strong></p>');
        animate();
      }
    });

function animate() {
  $svg.drawsvg('animate');
}

animate();

$('.counter').counterUp({
    delay: 10,
    time: 3000
});

function blinker() {
    $('.blink_me').fadeOut(1000);
    $('.blink_me').fadeIn(1000);
}

setInterval(blinker, 2000);



// Card Flip

$("#card").flip({
  axis: 'x',
  trigger: 'hover'
});

$("#card2").flip({
  axis: 'x',
  trigger: 'hover'
});

$("#card3").flip({
  axis: 'x',
  trigger: 'hover'
});

$("#card4").flip({
  axis: 'x',
  trigger: 'hover'
});
