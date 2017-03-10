var app = angular.module('myApp', []);

app.controller("industry", function ($scope) {
    this.industrieText = "";
    this.setIndustrieText = function (text) {
    this.industrieText = text;
    }
    this.industries = [{
        definition: 'Aerospace & Defence',
        text: 'Hmm i like Aerospaceeee.',
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
        text: 'BLABLABLABLA.',
        images: ["icons/industries/healthcare.png"]
    }, {
        definition: 'Public Sector',
        text: 'BLABLABLABLA.',
        images: ["icons/industries/publicsec.png"]
    }, {
        definition: 'High Tech',
        text: 'BLABLABLABLA.',
        images: ["icons/industries/hightech.png"]
    }, {
        definition: 'Telecoms & Entertainment',
        text: 'BLABLABLABLA.',
        images: ["icons/industries/telecom.png"]
    }, {
        definition: 'Utilities',
        text: 'BLABLABLABLA.',
        images: ["icons/industries/utilities.png"]
    }, {
        definition: 'Other',
        text: 'BLABLABLABLA.',
        images: ["icons/industries/telecom.png"]

    }];
});
