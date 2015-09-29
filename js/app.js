$(function() {
 
    //Set up instafeed
    var feed = new Instafeed({
        clientId: '2087c51c4d644da1bef8660fa8204a93',
        target: 'instafeed',
        get: 'user',
        userId: 1575786723,
        accessToken: '1575786723.467ede5.e91ee4a0ab4d40eeaa69f50db82eb4a4',
        useHttp: true,
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}" target="blank"><img src="{{image}}"></a></div><div class="description">{{caption}}</div></div></div>'
    });
    feed.run();
 
});