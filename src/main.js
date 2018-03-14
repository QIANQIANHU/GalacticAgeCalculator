import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import { triangle } from './triangle';

$(document).ready(function() {
  $('#triangle-form').submit(function(event) {
    event.preventDefault();
    var sideOne = $('#sideOne').val();
    var sideTwo = $('#sideTwo').val();
    var sideThree = $('#sideThree').val();
    console.log(sideOne);
    var output = triangle(sideOne,sideTwo,sideThree);
    console.log(output);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
