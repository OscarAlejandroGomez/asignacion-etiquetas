import { getGeoJson, isPointInPolygon, convertMultiPolygonToPolygon } from "./polygon.service.js";

export async function findLabel(payload){
    const { latitud, longitud } = payload;

    if(!global.GeoJson) global.GeoJson = convertMultiPolygonToPolygon(await getGeoJson());

    const geojson = global.GeoJson;
    
    for (let i = 0; i < geojson.length; i++) {
        const polygon = geojson[i];
        if(isPointInPolygon([longitud, latitud], polygon.coordinates[0])){
            return polygon.properties;
        }
        
    }
    return null

}
