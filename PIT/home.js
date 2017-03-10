var app = angular.module('myApp', []);

app.controller("industry", function ($scope) {

    $scope.industries = [{
        definition: 'Aerospace & Defence',
        text: 'Hmm i like Aerospaceeee',
        images: ["icons/industries/aerospace.png"]
    }, {
        definition: 'Industrial Products',
        text: 'Love industrial',
        images: ["icons/industries/industrial.png"]
    }, {
        definition: 'Automotive',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Insurance',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Banking & Capital Markets',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Life Sciences',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Consumer Products & Retail',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Manufacturing',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Distribution & Transportation',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Oil & Gas, Chemicals',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Healthcare',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Public Sector',
        text: 'BLABLABLABLA'
    }, {
        definition: 'High Tech',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Telecoms & Entertainment',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Utilities',
        text: 'BLABLABLABLA'
    }, {
        definition: 'Other',
        text: 'BLABLABLABLA'

    }];
});
