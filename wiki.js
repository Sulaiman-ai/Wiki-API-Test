$.get( "https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&page=pizza", function( data ) {
    // $( ".result" ).html( data );
    // alert( "Load was performed." );
    console.log(data)
  });