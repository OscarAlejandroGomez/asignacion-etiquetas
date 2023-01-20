import s3Client from "../config/s3Client.config.js";
import { GetObjectCommand } from "@aws-sdk/client-s3";

async function getObject(bucket, key){
    try{
        const data = await s3Client.send(new GetObjectCommand({Bucket: bucket, Key: key}));
        return data.Body.transformToString();
    }catch(err){
        next(err);
    }
}

export { getObject };
