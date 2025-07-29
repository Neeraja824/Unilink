 function table1() {
      var row = parseInt(document.getElementsByTagName('input')[0].value);
      var column = parseInt(document.getElementsByTagName('input')[1].value);
      
      let table = document.createElement("table");
      table.border = "1"; 

      for (let i = 0; i < row; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < column; j++) {
          let td = document.createElement("td");
        //   td.textContent = `Row ${i + 1} Col ${j + 1}`; 
          tr.appendChild(td);
          
        }
        table.appendChild(tr);
        let img = document.createElement("img");
       
      }

      document.body.appendChild(table);
    }

