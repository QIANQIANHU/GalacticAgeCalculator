import './styles.css';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import { triangle } from './triangle';

$(document).ready(function() {
  $('#triangle-form').submit(function(event) {
    event.preventDefault();
    var sideOne = $('#sideOne').val();
    var sideTwo = $('#sideTwo').val();
    var sideThree = $('#sideThree').val();
    var output = triangle(sideOne,sideTwo,sideThree);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
