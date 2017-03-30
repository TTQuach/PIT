'use strict';

var app = angular.module('classification', []);

app.service('serviceClassification', function () {
    var industries = [];
    var categories = [];
});


//Controller
app.controller("myCtrlMain", function($scope, serviceClassification){
    $scope.industrieText = "";
    $scope.setIndustrieText = function (text) {
        $scope.industrieText = text;
    }
    $scope.industrieDefinition = "";
    $scope.setIndustrieDefinition = function (definition) {
        $scope.industrieDefinition = definition;
    }
    $scope.industries = [{
        definition: 'Aerospace & Defence',
        text: 'Hmm I like Aerospaceeee.',
        images: ["icons/industries/aerospace.png"]
    }, {
        definition: 'Industrial Products',
        text: 'Love industrial.',
        images: ["icons/industries/industrial.png"]
    }, {
        definition: 'Automotive',
        text: 'CARSSS.',
        images: ["icons/industries/automotive.png"]
    }, {
        definition: 'Insurance',
        text: 'Insurancee lala.',
        images: ["icons/industries/insurance.png"]
    }, {
        definition: 'Banking & Capital Markets',
        text: 'Moneysss.',
        images: ["icons/industries/banking_0.png"]
    }, {
        definition: 'Life Sciences',
        text: 'BLABLABLABLA.',
        images: ["icons/industries/lifescience.png"]
    }, {
        definition: 'Consumer Products & Retail',
        text: 'BLABLABLABLA.',
        images: ["icons/industries/consumerprod_0.png"]
    }, {
        definition: 'Manufacturing',
        text: 'BLABLABLABLA.',
        images: ["icons/industries/manufacture.png"]
    }, {
        definition: 'Distribution & Transportation',
        text: 'BLABLABLABLA.',
        images: ["icons/industries/insightsdata_0.png"]
    }, {
        definition: 'Oil & Gas, Chemicals',
        text: 'Hmm..I like oil. That is good for my body.',
        images: ["icons/industries/oil.png"]
    }, {
        definition: 'Healthcare',
        text: 'Healthhh.',
        images: ["icons/industries/healthcare.png"]
    }, {
        definition: 'Public Sector',
        text: 'Publicaaa.',
        images: ["icons/industries/publicsec.png"]
    }, {
        definition: 'High Tech',
        text: 'HITECH.',
        images: ["icons/industries/hightech.png"]
    }, {
        definition: 'Telecoms & Entertainment',
        text: 'Telecomss.',
        images: ["icons/industries/telecom.png"]
    }, {
        definition: 'Utilities',
        text: 'Utilities.',
        images: ["icons/industries/utilities.png"]
    }, {
        definition: 'Other',
        text: 'Other.',
        images: ["icons/industries/telecom.png"]

    }];

    $scope.categorieText = "";
    $scope.setCategorieText = function (text) {
        $scope.categorieText = text;
    }
    $scope.categorieDefinition = "";
    $scope.setCategorieDefinition = function (definition) {
        $scope.categorieDefinition = definition;
    }
    $scope.categories = [{
        definition: 'Application Services',
        text: 'Application Services.',
        images: ["icons/services/applife.png"]
    }, {
        definition: 'Digital Customer Experience',
        text: 'DCE.',
        images: ["icons/services/icon_connectivity_50x50px_0.png"]
    }, {
        definition: 'Business Services',
        text: 'Business Services.',
        images: ["icons/services/businessprocess.png"]
    }, {
        definition: 'Cloud Choice',
        text: 'We are really good at Cloud services. Actually if I am looking in my database...We have answered 300 questions about Cloud Services.',
        images: ["icons/services/cloud.png"]
    }, {
        definition: 'Insights & Data',
        text: 'Insights and Data.',
        images: ["icons/services/insightsdata.png"]
    }, {
        definition: 'Consulting Services',
        text: 'Consulting Services.',
        images: ["icons/services/conserve.png"]
    }, {
        definition: 'Technology and Engineering',
        text: 'Tech & Engineering.',
        images: ["icons/services/profserv.png"]
    }, {
        definition: 'Digital Services',
        text: 'Digital Services.',
        images: ["icons/services/digiservices.png"]
    }, {
        definition: 'Ready2Series',
        text: 'Ready2Series.',
        images: ["icons/services/bpo.png"]
    }, {
        definition: 'Digital Manufacturing',
        text: 'Digital Manufacturing.',
        images: ["icons/services/digitalmfg.png"]
    }, {
        definition: 'Secure your assets',
        text: 'secure your assets.',
        images: ["icons/services/secureyourassets.png"]
    }, {
        definition: 'Testing Services',
        text: 'Testing Services.',
        images: ["icons/services/testserve.png"]
    }, {

        definition: 'Other',
        text: 'Other.',
        images: ["icons/services/telecom.png"]
    }, {

    }];

});
   
       