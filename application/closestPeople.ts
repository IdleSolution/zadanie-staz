import { IUserWithPosts } from "../models/users";
import { getDistance } from 'geolib';

export const getClosestPeople = (users: IUserWithPosts[]) => {
    for (let i = 0; i < users.length; i++) {
        let closestPerson: IUserWithPosts;
        let minDistance = Number.MAX_SAFE_INTEGER;
        
        for (let j = 0; j < users.length; j++) {
            if (i !== j) {
                const { lat, lng } = users[i].address.geo;
                const { lat: lat2, lng: lng2 } = users[j].address.geo;

                let distance = getDistance({ latitude: lat, longitude: lng }, { latitude: lat2, longitude: lng2 });

                if (minDistance > distance) {
                    minDistance = distance;
                    closestPerson = users[j];
                }
            }
        }
        users[i].closestPersonId = closestPerson!.id;
    }
}