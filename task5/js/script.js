var ctx = document.getElementById('сhart').getContext('2d');
Math.radians = function ( degrees ) {
    return degrees * Math.PI / 100;
}
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Россия', 'Казахстан', 'Узбекистан'],
        datasets: [{
            data: [50, 40, 10],
            backgroundColor: ['#E83C46', '#F9A620', '#474444'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom',
            maxHeight: 100,
            labels: {
                boxWidth: 10,
                fontColor: '#111',
                padding: 15,
                usePointStyle: true,
                pointStyle: 'circle',
            }
        },
        tooltips: {
            enabled: true
        },
        animation: {
            duration: 1000,
            animateScale: false,
        },
        cutoutPercentage: 80,
        rotation: Math.radians(-100),
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCfRgWhhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG5NYXRoLnJhZGlhbnMgPSBmdW5jdGlvbiAoIGRlZ3JlZXMgKSB7XHJcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxMDA7XHJcbn1cclxudmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogWyfQoNC+0YHRgdC40Y8nLCAn0JrQsNC30LDRhdGB0YLQsNC9JywgJ9Cj0LfQsdC10LrQuNGB0YLQsNC9J10sXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IFs1MCwgNDAsIDEwXSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyNFODNDNDYnLCAnI0Y5QTYyMCcsICcjNDc0NDQ0J10sXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLjUgLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNkZGQnXHJcbiAgICAgICAgfV1cclxuICAgIH0sXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgYm94V2lkdGg6IDEwLFxyXG4gICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzExMScsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNSxcclxuICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICBhbmltYXRlU2NhbGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogODAsXHJcbiAgICAgICAgcm90YXRpb246IE1hdGgucmFkaWFucygtMTAwKSxcclxuICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgIGRhdGFsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzExMScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24odmFsdWUsIGN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdHguY2hhcnQuZGF0YS5sYWJlbHNbY3R4LmRhdGFJbmRleF0gKyAnXFxuJyArIHZhbHVlICsgJyUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiXSwiZmlsZSI6InNjcmlwdC5qcyJ9