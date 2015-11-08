$(function() {
    var chartData = [];
    var endDate = new Date();
    var startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);
    while(startDate <= endDate) {
        var period = startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate();
        var expense = Math.random() * 100;
        var income = Math.random() * 100;
        chartData.push({
            period: period,
            Expense: expense,
            Income: income
        })
        startDate.setDate(startDate.getDate() + 1);
    }
    var chart = Morris.Area({
        element: 'morris-area-chart',
        data: chartData,
        parseTime: true,
        xkey: 'period',
        ykeys: ['Expense', 'Income'],
        labels: ['<a href="timeline.html">Expense</a>', '<a href="timeline.html">Income</a>'],
        pointSize: 2,
        hideHover: 'auto',
        dataFormat: function (x) {
            return new Date(x).toString();
        },
        yLabelFormat: function(y) {
            if(y >= 1000) {
                y = (y/1000).toFixed(1) + "k";
            }
            return y.toFixed(1);
        },
        xLabels: "day",
        resize: true
    });

    chart.options.labels.forEach(function(label, i){
        var textLabel = label.indexOf("Expense") > -1 ? "Expense" : label.indexOf("Income") > -1 ? "Income" : "";
        var legendItem = $('<span></span>').text(textLabel).css('color', chart.options.lineColors[i]);
        $('#legend').append(legendItem);
    })

    // Morris.Donut({
    //     element: 'morris-donut-chart',
    //     data: [{
    //         label: "Download Sales 1",
    //         value: 12
    //     }, {
    //         label: "In-Store Sales 2",
    //         value: 30
    //     }, {
    //         label: "Mail-Order Sales 3",
    //         value: 20
    //     }],
    //     resize: true
    // });

    // Morris.Bar({
    //     element: 'morris-bar-chart',
    //     data: [{
    //         y: '2006',
    //         a: 100,
    //         b: 90
    //     }, {
    //         y: '2007',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2008',
    //         a: 50,
    //         b: 40
    //     }, {
    //         y: '2009',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2010',
    //         a: 50,
    //         b: 40
    //     }, {
    //         y: '2011',
    //         a: 75,
    //         b: 65
    //     }, {
    //         y: '2012',
    //         a: 100,
    //         b: 90
    //     }],
    //     xkey: 'y',
    //     ykeys: ['a', 'b'],
    //     labels: ['Series A', 'Series B'],
    //     hideHover: 'auto',
    //     resize: true
    // });

});
