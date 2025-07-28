document.addEventListener('DOMContentLoaded', () => {
    updateTable();
});

function updateTable() {

    const country = document.getElementById('country').value;
    const transport = document.getElementById('transport').value;
    const city = document.getElementById('city').value;

    const tables = {
        'Atlanta' :{
        'Kinshasa': {
            'Air Freight': `
                <div class="fees">
                    <p><strong>Price per Kg / prix par Kilo : $19.99</strong></p>
                    <p><strong>23Kg Suitcase / valise de 23Kg :</strong>$400.00</p>
                </div>
    
            `,
               
        },
        'Lubumbashi': {
            'Air Freight': `
                <div class="fees">
                    <p><strong>Price per Kg / prix par Kilo : $24.99</strong></p>
                    <p><strong>23Kg Suitcase / valise de 23Kg :</strong>$550.00</p>
                </div>
            `,
               
        },
        'Matadi': {
            'Air Freight': `
                <div class="fees">
                    <p><strong>Price per Kg / prix par Kilo : $24.99</strong></p>
                    <p><strong>23Kg Suitcase / valise de 23Kg :</strong>$550.00</p>
                </div>
            `,
               
        },
        'Kolwezi': {
            'Air Freight': `
            <div class="fees">
            <p><strong>Price per Kg / prix par Kilo : $29.99</strong></p>
            <p><strong>23Kg Suitcase / valise de 23Kg :</strong>$660.00</p>
        </div>
        
       
    `,
 
   
           
        }}, 
    };

    const tarifDiv = document.getElementById('tarif');
    tarifDiv.innerHTML = tables[city][country][transport] || '<p></p>'; 
}