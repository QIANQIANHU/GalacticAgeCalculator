import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import { AgeCalculator } from './ageCalculator';

$(document).ready(function() {
  $('#ageCalculator-form').submit(function(event) {
    event.preventDefault();
    var birthday = $('#userBirthday').val();
    var expectancyLife = $('#averageLife').val();
    var secondBirthday = $('#secondUserBirthday').val();

    var output = AgeCalculator(birthday,expectancyLife,secondBirthday);

    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    // });
  });
});
