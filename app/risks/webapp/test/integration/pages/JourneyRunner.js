sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"risks/test/integration/pages/risksList",
	"risks/test/integration/pages/risksObjectPage"
], function (JourneyRunner, risksList, risksObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('risks') + '/test/flp.html#app-preview',
        pages: {
			onTherisksList: risksList,
			onTherisksObjectPage: risksObjectPage
        },
        async: true
    });

    return runner;
});

