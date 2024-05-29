let total=0;
const newBtn=document.querySelector(".new-item-btn");
const inputsection=document.querySelector(".input-section");
const totalmsg=document.querySelector(".totalmsg");
const showTableBtn = document.querySelector('.show-table-btn');

let createItem=()=>{
    const itemNameInput = document.createElement('input');
    itemNameInput.classList.add('item');
    itemNameInput.classList.add('col-6');
    itemNameInput.classList.add('col-sm-4');

    itemNameInput.type = 'text';
    itemNameInput.placeholder = 'Item Name';

    const itemAmountInput = document.createElement('input');
    itemAmountInput.classList.add('amount');
    itemAmountInput.classList.add('col-6');
    itemAmountInput.classList.add('col-sm-3');

    itemAmountInput.type = 'number';
    itemAmountInput.placeholder = 'Amount';
    const Dateinput = document.createElement('input');
    Dateinput.type = 'date';

    Dateinput.classList.add('date');
    Dateinput.classList.add('col-6');
    Dateinput.classList.add('col-sm-3');
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);  // Months are zero-based, so add 1
    var day = ("0" + date.getDate()).slice(-2);
    var formattedDate = year + '-' + month + '-' + day;

    Dateinput.value = formattedDate;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('col-sm-1');
    deleteBtn.classList.add('col-4');
    deleteBtn.classList.add('delete-btn');

    const totalmsg=document.createElement('span');
    totalmsg.classList.add('total-msg');
    totalmsg.classList.add('col-12');


    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        itemNameInput.remove();
        itemAmountInput.remove();
        deleteBtn.remove();
        Dateinput.remove();
        updateTotal();
    });
deleteBtn.innerHTML=`<i class="fa-solid fa-trash fa-beat fa-lg"></i>`;

    
    inputsection.appendChild(itemNameInput);
    inputsection.appendChild(itemAmountInput);

    inputsection.appendChild(Dateinput);
    inputsection.appendChild(deleteBtn);
    inputsection.appendChild(totalmsg);
    // bodyContainer.appendChild(itemDiv);
    itemAmountInput.addEventListener('input', updateTotal);
    var dateInput = document.querySelector('.date');
    var date = new Date();  // Current date
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);  // Months are zero-based, so add 1
    var day = ("0" + date.getDate()).slice(-2);

    var formattedDate = year + '-' + month + '-' + day;
    dateInput.value = formattedDate;

}
    const updateTotal = () => {
        const amounts = document.querySelectorAll('.input-section input[type="number"]');
        totalAmount = Array.from(amounts).reduce((sum, input) => sum + parseFloat(input.value || 0), 0);
        total=totalAmount.toFixed(2);
        totalmsg.innerHTML = `<span style=" font-size: 20px;
        font-weight: 800;">Total Amount <i class="fa-solid fa-indian-rupee-sign fa-fade fa-lg"></i> ${totalAmount.toFixed(2)}</span>`;
       
    };
    newBtn.addEventListener('click',createItem);

    showTableBtn.addEventListener('click',()=>{
        const showtbl=document.querySelector('.hidden');
       if( showtbl.className=='hidden'){
       showtbl.style.display='block';
       }
        
        let data = [];
        $('.item').each(function(index) {
            let itemName = $(this).val();
            let amount = $('.amount').eq(index).val();
             let  date_time=$('.date').eq(index).val();
            
              
                if (itemName && amount) {
                    
                data.push([itemName, amount,total,date_time]);
        
            }     
        });
        $('#item-table').DataTable({
        
            data: data,
            destroy: true,
            scrollX: true,
            columns: [
                { title: "Item" },
                { title: "Amount" },
                { title: "Total" },
                {title:"Date"}
            ],
            layout: {
        topStart: {
            buttons: ['copyHtml5', 'excelHtml5', 'csvHtml5', 'pdfHtml5']
        }
    },
        });
       
    });
   

  
    createItem();