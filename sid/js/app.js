$(function() {
 
    //Set up instafeed
    var feed = new Instafeed({
        clientId: '2087c51c4d644da1bef8660fa8204a93',
        target: 'instafeed',
        get: 'user',
//        userId: 186040369,
        accessToken: '186040369.467ede5.2c7261dc355e411fb972e9d516a181c5',
        useHttp: true,
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();
 
});