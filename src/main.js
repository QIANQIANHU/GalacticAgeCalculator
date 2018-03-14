import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import { Triangle } from './triangle';

$(document).ready(function() {
  $('#triangle-form').submit(function(event) {
    event.preventDefault();
    var sideOne = $('#sideOne').val();
    var sideTwo = $('#sideTwo').val();
    var sideThree = $('#sideThree').val();

    var output = Triangle(sideOne,sideTwo,sideThree);

    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
