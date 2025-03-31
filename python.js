const apiKey = 'AIzaSyDBCvQOQpCwkAzJKMXZ4kFCi025jh7gcCw';
const spreadsheetId = '1niaYMjngBcN0HuZd-wlS3ZQvruSrlPWgMSBI0h7RCzc';
const range = 'Sheet1!G4:G51'; // Диапазон данных

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.values && data.values.length > 0) {
      // Привязываем данные к ячейкам таблицы
      document.getElementById('g1').textContent = data.values[0]; 
      document.getElementById('g2').textContent = data.values[1]; 
      document.getElementById('g3').textContent = data.values[2]; 
      document.getElementById('g4').textContent = data.values[3]; 
      document.getElementById('g5').textContent = data.values[4];
      document.getElementById('g6').textContent = data.values[5];
      document.getElementById('g7').textContent = data.values[6];
      document.getElementById('g8').textContent = data.values[7];
      document.getElementById('g9').textContent = data.values[8];
      document.getElementById('f1').textContent = data.values[14];   
      document.getElementById('f2').textContent = data.values[15]; 
      document.getElementById('f3').textContent = data.values[16]; 
      document.getElementById('f4').textContent = data.values[17]; 
      document.getElementById('f5').textContent = data.values[18]; 
      document.getElementById('f6').textContent = data.values[19];
      document.getElementById('f7').textContent = data.values[20];
      document.getElementById('f8').textContent = data.values[21];
      document.getElementById('f9').textContent = data.values[22];
      document.getElementById('f10').textContent = data.values[23];  
      document.getElementById('f11').textContent = data.values[24];  
      document.getElementById('f12').textContent = data.values[25];
      document.getElementById('a1').textContent = data.values[29]; 
      document.getElementById('a2').textContent = data.values[30]; 
      document.getElementById('a3').textContent = data.values[31]; 
      document.getElementById('a4').textContent = data.values[32]; 
      document.getElementById('a5').textContent = data.values[33]; 
      document.getElementById('a6').textContent = data.values[34]; 
      document.getElementById('a7').textContent = data.values[35]; 
      document.getElementById('b1').textContent = data.values[39]; 
      document.getElementById('b2').textContent = data.values[40]; 
      document.getElementById('b3').textContent = data.values[41]; 
      document.getElementById('b4').textContent = data.values[42]; 
      document.getElementById('b5').textContent = data.values[43]; 
      document.getElementById('b6').textContent = data.values[44]; 
      document.getElementById('b7').textContent = data.values[45]; 
      document.getElementById('b8').textContent = data.values[46]; 
      document.getElementById('b9').textContent = data.values[47]; 

    
    } else {
      console.error('Нет данных в диапазоне');
    }
  })
  .catch(error => console.error('Ошибка:', error));
