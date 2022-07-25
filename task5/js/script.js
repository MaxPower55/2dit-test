var сhart1 = document.getElementById('сhart1').getContext('2d');
var сhart2 = document.getElementById('сhart2').getContext('2d');
var сhart3 = document.getElementById('сhart3').getContext('2d');
var сhart4 = document.getElementById('сhart4').getContext('2d');
var countries = [['Россия', 'Казахстан', 'Узбекистан'],
                 ['Тюмень','Нур-султан','Ташкент','Петербург','Алма-аты']];
var countriesData = [[50,40,10],
                     [10,40,15,25,10]];
var colors = ['#E83C46', '#c7ec95', '#474444', '#f0a917', '#62bcf8'];


var chart1 = new Chart(сhart1, {
    type: 'doughnut',
    data: {
        labels: countries[0],
        datasets: [{
            data: countriesData[0],
            backgroundColor: colors,
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
            },
            title: {
                padding: 45,
            },
        },
        tooltips: {
            enabled: true
        },
        animation: {
            duration: 1000,
            animateScale: false,
        },
        cutoutPercentage: 80,
        rotation: 3.1,
    }
});

var chart2 = new Chart(сhart2, {
    type: 'doughnut',
    data: {
        labels: countries[1],
        datasets: [{
            data: countriesData[1],
            backgroundColor: colors,
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
            },
            title: {
                padding: 45,
            },
        },
        tooltips: {
            enabled: true
        },
        animation: {
            duration: 1000,
            animateScale: false,
        },
        cutoutPercentage: 80,
        rotation: 3.1,
    }
});

var chart3 = new Chart(сhart3, {
    type: 'doughnut',
    data: {
        labels: countries[0],
        datasets: [{
            data: countriesData[0],
            backgroundColor: colors,
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
            },
            title: {
                padding: 45,
            },
        },
        tooltips: {
            enabled: true
        },
        animation: {
            duration: 1000,
            animateScale: false,
        },
        cutoutPercentage: 80,
        rotation: 3.1,
    }
});

var chart4 = new Chart(сhart4, {
    type: 'doughnut',
    data: {
        labels: countries[1],
        datasets: [{
            data: countriesData[1],
            backgroundColor: colors,
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
            },
            title: {
                padding: 45,
            },
        },
        tooltips: {
            enabled: true
        },
        animation: {
            duration: 1000,
            animateScale: false,
        },
        cutoutPercentage: 80,
        rotation: 3.1,
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyINGBaGFydDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgn0YFoYXJ0MScpLmdldENvbnRleHQoJzJkJyk7XHJcbnZhciDRgWhhcnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ9GBaGFydDInKS5nZXRDb250ZXh0KCcyZCcpO1xyXG52YXIg0YFoYXJ0MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCfRgWhhcnQzJykuZ2V0Q29udGV4dCgnMmQnKTtcclxudmFyINGBaGFydDQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgn0YFoYXJ0NCcpLmdldENvbnRleHQoJzJkJyk7XHJcbnZhciBjb3VudHJpZXMgPSBbWyfQoNC+0YHRgdC40Y8nLCAn0JrQsNC30LDRhdGB0YLQsNC9JywgJ9Cj0LfQsdC10LrQuNGB0YLQsNC9J10sXHJcbiAgICAgICAgICAgICAgICAgWyfQotGO0LzQtdC90YwnLCfQndGD0YAt0YHRg9C70YLQsNC9Jywn0KLQsNGI0LrQtdC90YInLCfQn9C10YLQtdGA0LHRg9GA0LMnLCfQkNC70LzQsC3QsNGC0YsnXV07XHJcbnZhciBjb3VudHJpZXNEYXRhID0gW1s1MCw0MCwxMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgIFsxMCw0MCwxNSwyNSwxMF1dO1xyXG52YXIgY29sb3JzID0gWycjRTgzQzQ2JywgJyNjN2VjOTUnLCAnIzQ3NDQ0NCcsICcjZjBhOTE3JywgJyM2MmJjZjgnXTtcclxuXHJcblxyXG52YXIgY2hhcnQxID0gbmV3IENoYXJ0KNGBaGFydDEsIHtcclxuICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBjb3VudHJpZXNbMF0sXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IGNvdW50cmllc0RhdGFbMF0sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMC41ICxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZGRkJ1xyXG4gICAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGJveFdpZHRoOiAxMCxcclxuICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogJyMxMTEnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTUsXHJcbiAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRTdHlsZTogJ2NpcmNsZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0NSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICAgICAgYW5pbWF0ZVNjYWxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgICAgIHJvdGF0aW9uOiAzLjEsXHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIGNoYXJ0MiA9IG5ldyBDaGFydCjRgWhhcnQyLCB7XHJcbiAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogY291bnRyaWVzWzFdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBkYXRhOiBjb3VudHJpZXNEYXRhWzFdLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycyxcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAuNSAsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2RkZCdcclxuICAgICAgICB9XVxyXG4gICAgfSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IDEwMCxcclxuICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBib3hXaWR0aDogMTAsXHJcbiAgICAgICAgICAgICAgICBmb250Q29sb3I6ICcjMTExJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1LFxyXG4gICAgICAgICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNDUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmltYXRpb246IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgICAgIGFuaW1hdGVTY2FsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA4MCxcclxuICAgICAgICByb3RhdGlvbjogMy4xLFxyXG4gICAgfVxyXG59KTtcclxuXHJcbnZhciBjaGFydDMgPSBuZXcgQ2hhcnQo0YFoYXJ0Mywge1xyXG4gICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBsYWJlbHM6IGNvdW50cmllc1swXSxcclxuICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgZGF0YTogY291bnRyaWVzRGF0YVswXSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLjUgLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNkZGQnXHJcbiAgICAgICAgfV1cclxuICAgIH0sXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICAgICAgYm94V2lkdGg6IDEwLFxyXG4gICAgICAgICAgICAgICAgZm9udENvbG9yOiAnIzExMScsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNSxcclxuICAgICAgICAgICAgICAgIHVzZVBvaW50U3R5bGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICBhbmltYXRlU2NhbGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogODAsXHJcbiAgICAgICAgcm90YXRpb246IDMuMSxcclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgY2hhcnQ0ID0gbmV3IENoYXJ0KNGBaGFydDQsIHtcclxuICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBjb3VudHJpZXNbMV0sXHJcbiAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IGNvdW50cmllc0RhdGFbMV0sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMC41ICxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZGRkJ1xyXG4gICAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgICAgIGJveFdpZHRoOiAxMCxcclxuICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogJyMxMTEnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTUsXHJcbiAgICAgICAgICAgICAgICB1c2VQb2ludFN0eWxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRTdHlsZTogJ2NpcmNsZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0NSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICAgICAgYW5pbWF0ZVNjYWxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgICAgIHJvdGF0aW9uOiAzLjEsXHJcbiAgICB9XHJcbn0pO1xyXG4iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
