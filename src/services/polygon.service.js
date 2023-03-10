import robustPoint from 'robust-point-in-polygon'
import { getObject } from "../repositories/s3.repository.js";
import { S3_NAME, POLYGONS_KEY } from '../config/env.config.js';

export async function getGeoJson(){
    const geojson = await getObject(S3_NAME, POLYGONS_KEY);
    console.log("Retrieved GeoJson")
    return JSON.parse(geojson);
}

export const isPointInPolygon = (point, polygon) => {
    const result = robustPoint(polygon, point);
    return result <= 0;
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


