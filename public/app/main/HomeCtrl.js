app.controller('HomeCtrl',function($scope){

    $scope.courses = [
        {name: 'Best2', featured: true, published: new Date('10/1/2014')},
        {name: 'Better2', featured: false, published: new Date('9/2/2014')},
        {name: 'Best1', featured: true, published: new Date('10/5/2014')},
        {name: 'Better1', featured: false, published: new Date('9/6/2014')}

    ]
    $scope.myInterval = 2000;
    $scope.slides = [
        {image:'../../images/carousel_large_01.jpg',textHeader:'Школа за бармани "БАР МЕНИДЖЪР"', textContent:'.'},
        {image: '../../images/carousel_large_02.jpg',textHeader:'second cocktail',textContent: '.'},
        {image: '../../images/carousel_large_03.jpg', textHeader:'third cocktail', textContent: '.'}
    ];


//    function CarouselDemoCtrl($scope) {
//        $scope.myInterval = 5000;
//        var slides = $scope.slides = [];
//        $scope.addSlide = function() {
//            var newWidth = 600 + slides.length;
//            slides.push({
//                image: 'http://placekitten.com/' + newWidth + '/300',
//                text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
//                    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
//            });
//        };
//        for (var i=0; i<4; i++) {
//            $scope.addSlide();
//        }
//    }
});
