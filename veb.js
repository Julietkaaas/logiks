const apiKey = 'AIzaSyDBCvQOQpCwkAzJKMXZ4kFCi025jh7gcCw';
const spreadsheetId = '1niaYMjngBcN0HuZd-wlS3ZQvruSrlPWgMSBI0h7RCzc';
const range = 'Sheet1!G43:G65'; // Диапазон данных

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.values && data.values.length > 0) {
      // Привязываем данные к ячейкам таблицы
      document.getElementById('a1').textContent = data.values[0]; 
      document.getElementById('a2').textContent = data.values[1]; 
      document.getElementById('a3').textContent = data.values[2]; 
      document.getElementById('a4').textContent = data.values[3]; 
      document.getElementById('a5').textContent = data.values[4];
      document.getElementById('a6').textContent = data.values[5];
      document.getElementById('a7').textContent = data.values[6];
      document.getElementById('a8').textContent = data.values[7];
      document.getElementById('a9').textContent = data.values[8];
      document.getElementById('a10').textContent = data.values[9];
      document.getElementById('d1').textContent = data.values[13]; 
      document.getElementById('d2').textContent = data.values[14]; 
      document.getElementById('d3').textContent = data.values[15]; 
      document.getElementById('d4').textContent = data.values[16];
      document.getElementById('d5').textContent = data.values[17];
      document.getElementById('d6').textContent = data.values[18];
      document.getElementById('f1').textContent = data.values[21]; 
    } else {
      console.error('Нет данных в диапазоне');
    }
  })
  .catch(error => console.error('Ошибка:', error));
