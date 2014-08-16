app.controller('CoursesCtrl',function($scope){

    $scope.courses = [
        {title:'Коктейл барман',
           explenation:{ first:'Oбучението за коктейл-барман, което предлагаме е по програма на I.B.A - International Bartenders Association',
                        second:''}
        },
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
});