import 'regenerator-runtime/runtime';
import getZipInfo from './zipInfo';

interface geoPoint {
    display_name?: string;
    lat?: string;
    lon?: string;
} 

const app = document.getElementById('app');
const header = document.createElement('h1');
header.textContent = 'Hello, from TypeScript';
app?.appendChild(header);

const code = '20500';
const zipData = getZipInfo(code)
    .then(response => response.json())
    .then(data => console.log(data));

const searchButton = document.getElementById('search');
searchButton?.addEventListener('click', onSearch);

function onSearch(): void {
    const address = (document.getElementById('address') as HTMLInputElement).value;
    if (address) {
        console.log(address);
        let geoData: string[];
        fetch('https://nominatim.geocoding.ai/search.php?q='+ encodeURI(address))
            .then(response => response.json())
            .then(data => {
                console.log(data);
                geoData = data.map((item: geoPoint) => item.display_name);                
                console.log(geoData);
                clearGeoData();
                renderGeoData(geoData);
            });
    }
}

function renderGeoData(geoData: string[]): void {
    const list = document.createElement('ul');
    list.classList.add("list-group");
    geoData.forEach(entry => {
        const item = document.createElement('li');
        item.classList.add("list-group-item", "list-group-item-action")
        item.textContent = entry;
        list.appendChild(item);    
    });
    document.getElementById('data')?.appendChild(list);
}

function clearGeoData(): void {
    document.getElementById('data')?.firstChild?.remove();
}
