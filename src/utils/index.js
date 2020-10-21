
let lastId = 0;

export function getNewId (prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}

export function applyFilters (items, filters) {
    let filteredItems = [...items];
    filters.forEach(filter => {
        switch (filter.name) {
            case "rating":
                {
                    filteredItems = filter.operator === '>' ?  filteredItems.filter(f=> f[filter.name] > filter.value+0.5) : filteredItems.filter(f=> f[filter.name] < filter.value+0.5);
                    break;
                }
            case "released":
                {
                    filteredItems = filter.operator === '>' ?  filteredItems.filter(f=> f[filter.name] > filter.value+1) : filteredItems.filter(f=> f[filter.name] < filter.value+1);
                    break;
                }
            case "title": {
                filteredItems = filteredItems.filter(f=> f[filter.name].toLowerCase().includes(filter.value.toLowerCase()));
                break;
            }
            default:
                break;
        }
    });
    return filteredItems;
}

export const SERVER_URL = 'http://localHost:3000';
export const ROUTS = {  
    getMovies: '/movies'
}