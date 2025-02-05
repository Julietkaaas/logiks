const apiKey = 'AIzaSyDBCvQOQpCwkAzJKMXZ4kFCi025jh7gcCw';
const spreadsheetId = '1niaYMjngBcN0HuZd-wlS3ZQvruSrlPWgMSBI0h7RCzc';
const range = 'Sheet1!G67:G78'; // Диапазон данных

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.values && data.values.length > 0) {
      // Привязываем данные к ячейкам таблицы
      document.getElementById('f1').textContent = data.values[0]; 
      document.getElementById('f2').textContent = data.values[1]; 
      document.getElementById('f3').textContent = data.values[2]; 
      document.getElementById('f4').textContent = data.values[3]; 
      document.getElementById('f5').textContent = data.values[4];
      document.getElementById('f6').textContent = data.values[5];
      document.getElementById('f7').textContent = data.values[6];
      document.getElementById('f8').textContent = data.values[7];
      document.getElementById('f9').textContent = data.values[8];
      document.getElementById('f10').textContent = data.values[9];   
      document.getElementById('f11').textContent = data.values[10]; 
      document.getElementById('f12').textContent = data.values[11]; 
    } else {
      console.error('Нет данных в диапазоне');
    }
  })
  .catch(error => console.error('Ошибка:', error));
