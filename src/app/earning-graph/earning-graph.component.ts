import { Component, OnInit} from '@angular/core';

declare const Chart: any;

@Component({
  selector: 'app-earning-graph',
  standalone: true,
  imports: [],
  templateUrl: './earning-graph.component.html',
  styleUrl: './earning-graph.component.scss'
})

export class EarningGraphComponent implements OnInit{
  ngOnInit(): void {
    this.buildChart1()
  }

  async getData1(dataType: any) {
    const response = await fetch('/assets/data.json');
    const jsonData = await response.json();
    
    if (dataType === 'doughnut') {
        return jsonData.doughnutData;
      } else if (dataType === 'line') {
        return jsonData;
      } else {
        throw new Error('Invalid dataType');
      }
  }
  

  async buildChart1() {
    try {
      const lineData = await this.getData1('line');
      console.log(lineData)
  
      const labelShipment = lineData.lineShipmentData.map((item: any) => item.label);
      const valuesRevenue = lineData.lineRevenueData.map((item: any) => item.value);
      const valuesOrder = lineData.lineOrderData.map((item: any) => item.value);
      const valuesTax = lineData.lineTaxData.map((item: any) => item.value);
      const valuesShipment = lineData.lineShipmentData.map((item: any) => item.value);

      console.log(labelShipment, valuesShipment)
        
      const data = {
        labels: labelShipment,
        datasets: [{
          label: "Revenue",
          backgroundColor: '#85c875',
          borderColor: '#85c875',
          data: valuesRevenue,
          fill: 'start',
          pointRadius: 1,
          pointBackgroundColor: '#85c875',
        },
        {
          label: "Order",
          backgroundColor: '#f1a80a',
          borderColor: '#f1a80a',
          data: valuesOrder,
          fill: 'start',
          pointRadius: 1,
          pointBackgroundColor: '#f1a80a',
        },
        {
          label: "Tax",
          backgroundColor: '#0bc4df',
          borderColor: '#0bc4df',
          data: valuesTax,
          fill: 'start',
          pointRadius: 1,
          pointBackgroundColor: '#0bc4df',
        },
        {
          label: 'Shipment',
          backgroundColor: '#3366ff',
          borderColor: '#3366ff',
          data: valuesShipment,
          fill: 'start',
          pointRadius: 1,
          pointBackgroundColor: '#3366ff',
        }]
      };

      const config = {
          type: 'line',
          data: data,
          options: {
              plugins: {
                  legend: {
                      display: false
                  }
              },
              tension: 0.5,
              scales: {
                  x: {
                      grid: {
                          borderWidth: 2,
                          borderDash: [5, 5],
                          borderDashOffset: 3,
                          tickColor: 'white'
                      },
                      ticks: {
                          color: '#777777',
                      }
                  },
                  y: {
                      tickColor: 'white',
                      grid: {
                          borderWidth: 2,
                          borderDash: [5, 5],
                          borderDashOffset: 3,
                      },
                      ticks: {
                          stepSize: 5000,
                          padding: 2,
                      }
                  },
              }
          },
      };

      new Chart(
          document.getElementById('earning_graph'),
          config
      );
          
    } catch (error) {
      console.error('Error processing data:', error);
      // Опрацювання помилки
    }
  }
}
