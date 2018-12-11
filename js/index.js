var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();
  if (!countryName.length) countryName = 'Poland';
  var url = 'https://restcountries.eu/rest/v1/name/';
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: function showCountriesList(resp) {
      countriesList.empty();
      resp.forEach(function (item) {
        $('<li>').text(item.name).appendTo(countriesList);
      });
    }
  });
}
