var app = new Framework7({
    
    root: '#app',
    routes: [
    {
    path: '/',
    url: 'index.html'
},
                         {
    
    path: '/page1/',
    url: 'pages/page1.html'
}
    ]
    
})

var mainView = app.views.create(".view-main");