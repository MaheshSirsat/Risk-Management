sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"mitigation/test/integration/pages/mitigationList",
	"mitigation/test/integration/pages/mitigationObjectPage"
], function (JourneyRunner, mitigationList, mitigationObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('mitigation') + '/test/flp.html#app-preview',
        pages: {
			onThemitigationList: mitigationList,
			onThemitigationObjectPage: mitigationObjectPage
        },
        async: true
    });

    return runner;
});

