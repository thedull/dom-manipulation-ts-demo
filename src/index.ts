import 'regenerator-runtime/runtime';
import getZipInfo from './zipInfo';

const app = document.getElementById('app');
const header = document.createElement('h1');
header.textContent = 'Hello, from TypeScript';
app?.appendChild(header);

const code = '20500';
const zipData = getZipInfo(code)
    .then(response => response.json())
    .then(data => console.log(data));
