import * as mongo from '../../lib/mongo';

export default async function getUserByEmail(email: String) {
    const usersCollection = await mongo.collection('users');
    return await usersCollection.findOne({email: email});
}