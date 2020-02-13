var app = new Framework7({

    root: '#app',
    routes: [
        {
            path: '/',
            url: 'index.html'
},
        {

            path: '/page2/',
            url: 'pages/page2.html'
},
        {

            path: '/page3/',
            url: 'pages/page3.html'
},
        {

            path: '/page4/',
            url: 'pages/page4.html'
},
        {

            path: '/page5/',
            url: 'pages/page5.html'
},
        {

            path: '/page6/',
            url: 'pages/page6.html'
},
        {

            path: '/page7/',
            url: 'pages/page7.html'
},
        
    ]

})

var mainView = app.views.create(".view-main");

console.log("choice");

var needs = [""]
var counter = 0;
var cSrc;
var $$ = Dom7;
var city;


$(".location").on("click", function () {
    //these will run when event happens 

    cSrc = $(this).attr("src");
})

//this function only runs when second page is initialized 
$$(document).on('page:init', '.page[data-name="home"]', function () {
    $("#city-field").show();



    $("#city-field").on("keypress", function (e) {
        if (e.key == "Enter") {
            var city = $(this).val();
            console.log(city-field);
            $('.page-content').prepend("<h2>" + city-field + "</h2>");
            $(this).hide();
            $("#save").on("click", function(){
                var city = $('#city-field').val();
            } )
        }
    })

})
