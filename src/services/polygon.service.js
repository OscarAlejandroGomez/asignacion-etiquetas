import * as testPoint from 'robust-point-in-polygon'
import { getObject } from "../repositories/s3.repository.js";

export async function getGeoJson(){
    try{
        const geojson = await getObject('xcrime-ml-ponal-dev-mdp', 'UnidadesBase/UnidadesBase.geojson');
        return JSON.parse(geojson.Body.toString());
    }catch(err){
        next(err);
    }
}

export const isPointInPolygon = (point, polygon) => {
    return testPoint(polygon, point) <= 0
}

export function convertMultiPolygonToPolygon(geoJSON) {
    let polygonArray = [];
    geoJSON.features.forEach(function (feat) {
        var geom = feat.geometry;
        var props = feat.properties;
        if (geom.type === 'MultiPolygon') {
            for (var i = 0; i < geom.coordinates.length; i++) {
                var polygon = {
                    'type': 'Polygon',
                    'coordinates': geom.coordinates[i],
                    'properties': props
                };
                polygonArray.push(polygon);
            }
        }
    });

    return polygonArray;
}


