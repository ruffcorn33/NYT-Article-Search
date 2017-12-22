$(document).ready(function() {

  $(".submit").click(function(event) {

    event.preventDefault();

    var searchTerm = $("#searchTerm").val();
    var searchLimit = $("#searchLimit").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    console.log(searchTerm);
    console.log(searchLimit);
    console.log(startYear);
    console.log(endYear);

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "7758b3d867ef439a816c22882b37dd7c",
      'q': searchTerm,
      'fq': searchLimit,
      'begin_date': startYear,
      'end_date': endYear,
      'page': 1
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(url);
      console.log(result);

    });

  });

});
