import { Component, OnInit } from '@angular/core';

declare const Chart: any;

@Component({
  selector: 'app-site-visits',
  standalone: true,
  imports: [],
  templateUrl: './site-visits.component.html',
  styleUrl: './site-visits.component.scss'
})

export class SiteVisitsComponent implements OnInit{
  ngOnInit() {
    const paddingBelowLegends = {
      id: 'paddingBelowLegends',
      beforeInit(chart: any, legend: any, options: any) {
        const fitValue = chart.legend.fit;
  
        chart.legend.fit = function fit() {
          fitValue.bind(chart.legend)();
          return this.height += 20;
        };
      }
    };
  
    const canvas = document.getElementById('site_visits') as HTMLCanvasElement;
    if (canvas) {
      const ctx2 = canvas.getContext('2d');
      if (ctx2) {
        const site_visits = new Chart(ctx2, {
          type: 'line',
          data: {
            labels: [
              'Red',
              'Blue',
              'Yellow'
            ],
            datasets: [{
              label: 'New Visitors',
              data: [300, 50, 100],
              backgroundColor: [
                '#00cccc'
              ],
              borderColor: '#00cccc',
              yAxisID: 'y2',
            },
            {
              label: 'Old Visitors',
              data: [300, 400, 100],
              backgroundColor: [
                '#f1a80a'
              ],
              borderColor: '#f1a80a',
              yAxisID: 'y1',
            }
            ]
          },
          plugins: [paddingBelowLegends],
          options: {
            plugins: {
              legend: {
                align: 'start'
              },
              chartAreaBorder: {
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 2,
                borderDash: [5, 5],
                borderDashOffset: 3,
              }
            },
            elements: {
              point: {
                pointBorderColor: "#ffffff",
                borderWidth: 6,
                pointHitRadius: 13,
                hoverBorderWidth: 8,
                pointHoverRadius: 14,
                pointRadius: 10,
              },
  
            },
            scales: {
              x: {
                grid: {
                  color: '#cfcfcf',
                  borderDash: [5, 5],
                  borderDashOffset: 3,
                  borderColor: 'white',
                },
                ticks: {
                  display: false,
                }
              },
              y2: {
                display: false,
              },
              y1: {
                display: false,
              },
            },
          }
        });
      } else {
        console.error('getContext не підтримується на цьому елементі.');
      }
    } else {
      console.error("Елемент з ідентифікатором 'site_visits' не знайдено або не є елементом <canvas>.");
    }
  }  
}