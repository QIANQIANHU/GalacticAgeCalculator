import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import { AgeCalculator } from './ageCalculator';

$(document).ready(function() {
  $('#ageCalculator-form').submit(function(event) {
    event.preventDefault();
    let birthday = $('#userBirthday').val();
    let expectancyLife = $('#averageLife').val();
    let secondBirthday = $('#secondUserBirthday').val();

    let newAgeCalculator = new AgeCalculator(birthday, expectancyLife, secondBirthday);
    let earthAge = newAgeCalculator.earthAgeChecker();
    $("#ageInYears").text(earthAge);

    let diffOfPartners = newAgeCalculator.diffOfPartnersChecker();
    $("#differentsInSeconds").text(diffOfPartners);

    let planetAge = newAgeCalculator.planetAgeChecker();
    $("#planetAge").text(planetAge);

    let expectancyLifeYears = newAgeCalculator.expectancyLifeChecker();
    $("#expectancyLife").text(expectancyLifeYears);
    });
  });
