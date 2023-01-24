import { getGeoJson, isPointInPolygon, convertMultiPolygonToPolygon } from "./polygon.service.js";

export async function findLabel(payload){
    const { latitud, longitud } = payload;

    const geojson = global.GeoJson ?? await getGeoJson();
    
    const geojsonPolygon = convertMultiPolygonToPolygon(geojson);

    for (let i = 0; i < geojsonPolygon.length; i++) {
        const polygon = geojsonPolygon[i];
        if(isPointInPolygon([longitud, latitud], polygon.coordinates[0])){
            return polygon.properties;
        }
        
    }
    return null

}
