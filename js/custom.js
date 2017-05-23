$(function () {
    window.fbAsyncInit = function () {
        FB.init({
            appId: '300262433757017',
            xfbml: true,
            version: 'v2.9'
        });
        FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        
    }(document, 'script', 'facebook-jssdk'));

    
});
var counter = 5;
$(function () {
    $("#reserver").click(function () {
        counter++;
        var obj = {
            id: counter,
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            date: $('#date').val(),
            days: $('#days').val()

        }
        var res = JSON.parse(localStorage.getItem('phebus_reservation'));
        res.push(obj);
        localStorage.setItem('phebus_reservation', JSON.stringify(res));
    });
    $("#share").click(function () {
        
        FB.ui({
            method: 'share',
            href: 'http://www.hotel-phebus.com/',
        title: 'Hotel Phebus', 
        picture: 'http://q-ec.bstatic.com/images/hotel/max1024x768/261/26173749.jpg',  
        description: 'Situé à La Marsa, dans le nord-est de la Tunisie, le Phebus Hotel Gammarth propose un hébergement 4 étoiles contemporain avec un balcon privé. Il possède 2 piscines dont une intérieure.',
        }, function (response) { });
    });
});

$(function () {
    if (!localStorage.getItem('phebus_reservation')) {
        localStorage.setItem('phebus_reservation', JSON.stringify(
            [
                {
                    id: 1,
                    firstName: "Khaled",
                    lastName: "Romdhane",
                    email: "redcarpetsolutions2017@gmail.com",
                    phone: "50020098",
                    date: new Date(),
                    days: 3
                },
                {
                    id: 2,
                    firstName: "Mahdi",
                    lastName: "Kahia",
                    email: "redcarpetsolutions2017@gmail.com",
                    phone: "50020098",
                    date: new Date(),
                    days: 7
                },
                {
                    id: 3,
                    firstName: "Seif",
                    lastName: "Kardous",
                    email: "redcarpetsolutions2017@gmail.com",
                    phone: "50020098",
                    date: new Date(),
                    days: 9
                }, {
                    id: 4,
                    firstName: "Yesmine",
                    lastName: "Sayah",
                    email: "redcarpetsolutions2017@gmail.com",
                    phone: "50020098",
                    date: new Date(),
                    days: 11
                }

            ]
        ));
    }
});
