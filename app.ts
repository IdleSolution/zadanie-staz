import { getData } from "./application/data";
import { getPostCounts } from "./application/postCounts";
import { getPostDuplicates } from "./application/postDuplicates";
import { getClosestPeople } from "./application/closestPeople";

// Pobieranie i laczenie danych
getData().then(res => {
    const [users, posts] = res;

    // Liczenie postow uzytkownikow
    console.log("Liczba postów każdego użytkownika:");
    console.log(getPostCounts(users));

    // Szukanie tytulow postow ktore nie sa unikalne
    const duplicatePosts = getPostDuplicates(posts);
    if(duplicatePosts.length === 0) {
        console.log("Wszystkie tytuły postów mają unikalne nazwy!");
    } else {
        console.log("Lista tytułów postów których nazwa nie jest unikalna:");
        console.log(posts);
    }

    // Dla kazdego uzytkownika znajdowanie uzytkownika najblizej niego i zapisywanie jego id w objekcie
    getClosestPeople(users);
    
}).catch(err => {
    throw err;
})

