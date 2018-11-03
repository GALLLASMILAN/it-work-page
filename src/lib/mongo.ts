/**
 * @description Modul for global app connection to MongoDB RS
 * @author Josef Podany pepa@onio.cz
 */

import { Db, MongoClient, Collection } from 'mongodb'; // Collection fuck it
import config from '../config';

let db: Db | undefined = undefined;
let client: MongoClient | undefined = undefined;

export const mongoClose = () => {
    if (db) {
        if (client) {
            client.close(true);
        }
        db = undefined;
    }
};

export const connect = (cb: ((err: Error | undefined, db: Db | undefined) => void)) => {
    if (db) {
        cb(undefined, db);
    } else {
        MongoClient.connect(config.mongo.uri, { useNewUrlParser: true }, (err: Error, mongoClient: MongoClient) => {
            if (err) {
                cb(err, undefined);
            } else {
                client = mongoClient;
                db = mongoClient.db(config.mongo.database);
                cb(undefined, db);
            }
        });
    }
};


export function collection(collectionName: string): Promise<Collection> {
    return new Promise((resolve, reject) => {
        collectionCb(collectionName, (err, collection) => {
            if (err || typeof collection === 'undefined') reject(err);
            else resolve(collection);
        });
    });
}

export function collectionCb(collectionName: string, cb: ((err: Error | undefined, collection: Collection | undefined) => void)): void {
    getCb((err, db) => {
        if (err || typeof db === 'undefined') cb(err, undefined);
        else cb(undefined, db.collection(collectionName));
    });
}

export function get(): Promise<Db> {
    return new Promise((resolve, reject) => {
        getCb((err, db) => {
            if (err || typeof db === 'undefined') reject(err);
            else resolve(db);
        });
    });
}
export function getCb(cb: ((err: Error | undefined, db: Db | undefined) => void)): void {
    if (db) cb(undefined, db);
    else {
        connect((err: Error | undefined, res: Db | undefined) => {
            if (err) cb(err, undefined);
            else {
                db = res;
                cb(undefined, db);
            }
        });
    }
}
