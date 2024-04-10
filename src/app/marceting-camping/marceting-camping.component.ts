import { Component, OnInit } from '@angular/core';

declare const Chart: any;

@Component({
  selector: 'app-marceting-camping',
  standalone: true,
  imports: [],
  templateUrl: './marceting-camping.component.html',
  styleUrl: './marceting-camping.component.scss'
})
export class MarcetingCampingComponent implements OnInit {
  ngOnInit() {
    this.buildChart()
  }
  async getData(dataType: any) {
    try {
      const response = await fetch('/assets/data.json');
      const jsonData = await response.json();
  
      if (jsonData.doughnutData && Array.isArray(jsonData.doughnutData)) {
        return jsonData.doughnutData;
      } else {
        throw new Error('Invalid or missing doughnutData in the data file.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  async buildChart() {
    try {
      const doughnutData = await this.getData('doughnut');
  
      const labels = doughnutData.map((item: any) => item.label);
      const values = doughnutData.map((item: any) => item.value);
  
      const canvas = document.getElementById('marceting_camping') as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets: [{
                label: 'My First Dataset',
                data: values,
                backgroundColor: [
                  '#85c875',
                  '#00cccc',
                  '#3366ff',
                  '#f1a80a'
                ],
              }]
            },
            options: {
              plugins: {
                legend: {
                  display: false,
                }
              }
            },
            plugins: [{
              id: 'text',
              beforeDraw: function (chart: any, a: any, b: any) {
                let width = chart.width,
                  height = chart.height,
                  ctx = chart.ctx;
  
                ctx.restore();
                let fontSize = (height / 114).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
  
                let text = 'MC',
                  textX = Math.round((width - ctx.measureText(text).width) / 2),
                  textY = height / 2;
  
                ctx.fillText(text, textX, textY);
                ctx.save();
              }
            }],
          });
        } else {
          console.error('getContext не підтримується на цьому елементі.');
        }
      } else {
        console.error("Елемент з ідентифікатором 'marceting_camping' не знайдено або не є елементом <canvas>.");
      }
    } catch (error) {
      console.error('Error processing data:', error);
      // Опрацювання помилки
    }
  }  
}