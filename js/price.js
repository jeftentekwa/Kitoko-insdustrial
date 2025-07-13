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
                    <p><strong>Frais de Dossier : 5,00$ (+5,00$ si paiement en différé)</strong></p>
                    <p><strong>FRAIS EXPORT :</strong> LTA : 145,00 $ - Handling : 0,20 $/KG - Frais Export : 150,00 $ - OCC : 100,00 $ - FERE : 100,00 $</p>
                    <p><strong>FRAIS IMPORT :</strong> Frais à l’arrivée Compagnie : 121,00 € - Passage en magasin sous douane : 84,70 € - Frais de Dédouanement : 175,45 € - Frais de stockage Compagnie : 55,00 € HT / jour de stockage - Droit de Douane : Pourcentage sur le CIF en fonction du type de marchandises + TVA 20 %</p>
                </div>
                
                <table>
                    <thead>
                    <th colspan="5" id="th1"> Air Freight </th>
                        <tr>
                            <th>De 2kg à 15kg</th>
                            <th>De 15kg à 500kg</th>
                            <th>De 500kg à 1000kg</th>
                            <th>A partir de 1000kg</th>
                            <th>Oeuvre d'art/Objet artisanal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10,50$/kg + frais de livraison</td>
                            <td>10,25$/kg + frais de livraison</td>
                            <td>10,00$/kg + frais de livraison</td>
                            <td>9,75$/kg + frais de livraison</td>
                            <td>15,00$/kg + frais de livraison</td>
                        </tr>
                    </tbody>
                </table>
                <div class="details">
                    <p><strong>CLÔTURE ET RETRAITS</strong></p>
                    <p><span>Jours de clôture : Mardi avant 16h00</span></p>
                    <p><span>Délais : 15 jours</span></p>
                </div>
            `,
            'Ocean Freight': `
                <div class="fees">
                    <p><strong>Frais de Dossier : 10,00$ (+5,00$ si paiement en différé)</strong></p>
                    <p><strong>FRAIS EXPORT :</strong> LTA : 200,00 $ - Handling : 0,30 $/KG - Frais Export : 250,00 $ - OCC : 150,00 $ - FERE : 150,00 $</p>
                    <p><strong>FRAIS IMPORT :</strong> Frais à l’arrivée Compagnie : 150,00 € - Passage en magasin sous douane : 90,00 € - Frais de Dédouanement : 200,00 € - Frais de stockage Compagnie : 60,00 € HT / jour de stockage - Droit de Douane : Pourcentage sur le CIF en fonction du type de marchandises + TVA 20 %</p>
                </div>
                <table>
                    <thead>
                    <th colspan="5" id="th2"> Air Freight </th>
                        <tr>
                            <th>De 2kg à 15kg</th>
                            <th>De 15kg à 500kg</th>
                            <th>De 500kg à 1000kg</th>
                            <th>A partir de 1000kg</th>
                            <th>Oeuvre d'art/Objet artisanal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>15,50$/kg + frais de livraison</td>
                            <td>15,25$/kg + frais de livraison</td>
                            <td>15,00$/kg + frais de livraison</td>
                            <td>14,75$/kg + frais de livraison</td>
                            <td>20,00$/kg + frais de livraison</td>
                        </tr>
                    </tbody>
                </table>
                <div class="details">
                    <p><strong>CLÔTURE ET RETRAITS</strong></p>
                    <p><span>Jours de clôture : Lundi avant 16h00</span></p>
                    <p><span>Délais : 20 jours</span></p>
                </div>
            `,
            'Express Freight': `
                <div class="fees">
                    <p><strong>Frais de Dossier : 10,00$ (+5,00$ si paiement en différé)</strong></p>
                    <p><strong>FRAIS EXPORT :</strong> LTA : 200,00 $ - Handling : 0,30 $/KG - Frais Export : 250,00 $ - OCC : 150,00 $ - FERE : 150,00 $</p>
                    <p><strong>FRAIS IMPORT :</strong> Frais à l’arrivée Compagnie : 150,00 € - Passage en magasin sous douane : 90,00 € - Frais de Dédouanement : 200,00 € - Frais de stockage Compagnie : 60,00 € HT / jour de stockage - Droit de Douane : Pourcentage sur le CIF en fonction du type de marchandises + TVA 20 %</p>
                </div>
                <table>
                    <thead>
                    <th colspan="5" id="th3"> Air Freight </th>
                        <tr>
                            <th>De 2kg à 15kg</th>
                            <th>De 15kg à 500kg</th>
                            <th>De 500kg à 1000kg</th>
                            <th>A partir de 1000kg</th>
                            <th>Oeuvre d'art/Objet artisanal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>15,50$/kg + frais de livraison</td>
                            <td>15,25$/kg + frais de livraison</td>
                            <td>15,00$/kg + frais de livraison</td>
                            <td>14,75$/kg + frais de livraison</td>
                            <td>20,00$/kg + frais de livraison</td>
                        </tr>
                    </tbody>
                </table>
                <div class="details">
                    <p><strong>CLÔTURE ET RETRAITS</strong></p>
                    <p><span>Jours de clôture : Lundi avant 16h00</span></p>
                    <p><span>Délais : 20 jours</span></p>
                </div>
            `
        },
        'Lubumbashi': {
            'Air Freight': `
            <div class="fees">
            <p><strong>Frais de Dossier : 5,00$ (+5,00$ si paiement en différé)</strong></p>
            <p><strong>FRAIS EXPORT :</strong> LTA : 145,00 $ - Handling : 0,20 $/KG - Frais Export : 150,00 $ - OCC : 100,00 $ - FERE : 100,00 $</p>
            <p><strong>FRAIS IMPORT :</strong> Frais à l’arrivée Compagnie : 121,00 € - Passage en magasin sous douane : 84,70 € - Frais de Dédouanement : 175,45 € - Frais de stockage Compagnie : 55,00 € HT / jour de stockage - Droit de Douane : Pourcentage sur le CIF en fonction du type de marchandises + TVA 20 %</p>
        </div>
        
        <table>
            <thead>
            <th colspan="5" id="th1"> Air Freight </th>
                <tr>
                    <th>De 2kg à 15kg</th>
                    <th>De 15kg à 500kg</th>
                    <th>De 500kg à 1000kg</th>
                    <th>A partir de 1000kg</th>
                    <th>Oeuvre d'art/Objet artisanal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10,50$/kg + frais de livraison</td>
                    <td>10,25$/kg + frais de livraison</td>
                    <td>10,00$/kg + frais de livraison</td>
                    <td>9,75$/kg + frais de livraison</td>
                    <td>15,00$/kg + frais de livraison</td>
                </tr>
            </tbody>
        </table>
        <div class="details">
            <p><strong>CLÔTURE ET RETRAITS</strong></p>
            <p><span>Jours de clôture : Mardi avant 16h00</span></p>
            <p><span>Délais : 15 jours</span></p>
        </div>
    `,
    'Ocean Freight': `
        <div class="fees">
            <p><strong>Frais de Dossier : 10,00$ (+5,00$ si paiement en différé)</strong></p>
            <p><strong>FRAIS EXPORT :</strong> LTA : 200,00 $ - Handling : 0,30 $/KG - Frais Export : 250,00 $ - OCC : 150,00 $ - FERE : 150,00 $</p>
            <p><strong>FRAIS IMPORT :</strong> Frais à l’arrivée Compagnie : 150,00 € - Passage en magasin sous douane : 90,00 € - Frais de Dédouanement : 200,00 € - Frais de stockage Compagnie : 60,00 € HT / jour de stockage - Droit de Douane : Pourcentage sur le CIF en fonction du type de marchandises + TVA 20 %</p>
        </div>
        <table>
            <thead>
            <th colspan="5" id="th2"> Air Freight </th>
                <tr>
                    <th>De 2kg à 15kg</th>
                    <th>De 15kg à 500kg</th>
                    <th>De 500kg à 1000kg</th>
                    <th>A partir de 1000kg</th>
                    <th>Oeuvre d'art/Objet artisanal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>15,50$/kg + frais de livraison</td>
                    <td>15,25$/kg + frais de livraison</td>
                    <td>15,00$/kg + frais de livraison</td>
                    <td>14,75$/kg + frais de livraison</td>
                    <td>20,00$/kg + frais de livraison</td>
                </tr>
            </tbody>
        </table>
        <div class="details">
            <p><strong>CLÔTURE ET RETRAITS</strong></p>
            <p><span>Jours de clôture : Lundi avant 16h00</span></p>
            <p><span>Délais : 20 jours</span></p>
        </div> 
    `,
    'Express Freight': `
        <div class="fees">
            <p><strong>Frais de Dossier : 10,00$ (+5,00$ si paiement en différé)</strong></p>
            <p><strong>FRAIS EXPORT :</strong> LTA : 200,00 $ - Handling : 0,30 $/KG - Frais Export : 250,00 $ - OCC : 150,00 $ - FERE : 150,00 $</p>
            <p><strong>FRAIS IMPORT :</strong> Frais à l’arrivée Compagnie : 150,00 € - Passage en magasin sous douane : 90,00 € - Frais de Dédouanement : 200,00 € - Frais de stockage Compagnie : 60,00 € HT / jour de stockage - Droit de Douane : Pourcentage sur le CIF en fonction du type de marchandises + TVA 20 %</p>
        </div>
        <table>
            <thead>
            <th colspan="5" id="th3"> Air Freight </th>
                <tr>
                    <th>De 2kg à 15kg</th>
                    <th>De 15kg à 500kg</th>
                    <th>De 500kg à 1000kg</th>
                    <th>A partir de 1000kg</th>
                    <th>Oeuvre d'art/Objet artisanal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>15,50$/kg + frais de livraison</td>
                    <td>15,25$/kg + frais de livraison</td>
                    <td>15,00$/kg + frais de livraison</td>
                    <td>14,75$/kg + frais de livraison</td>
                    <td>20,00$/kg + frais de livraison</td>
                </tr>
            </tbody>
        </table>
        <div class="details">
            <p><strong>CLÔTURE ET RETRAITS</strong></p>
            <p><span>Jours de clôture : Lundi avant 16h00</span></p>
            <p><span>Délais : 20 jours</span></p>
        </div> 
            `
           
        }}, 
    };

    const tarifDiv = document.getElementById('tarif');
    tarifDiv.innerHTML = tables[city][country][transport] || '<p></p>'; 
}