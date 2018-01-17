const parseAlbums = results => {
    let albums = [];
    results.forEach(result => {
        let explicit = (result.collectionExplicitness === 'explicit');

        albums.push({
            id: result.collectionId,
            name: result.collectionCensoredName,
            explicit: explicit,
            artworkSrc: result.artworkUrl100
        });
    });
    return albums;
};

const parseMovies = results => {
    let movies = [];
    results.forEach(result => {
        let id = result.trackId ? result.trackId : result.collectionId;
        let name = result.trackName ? result.trackName : result.collectionName;

        movies.push({
            id: id,
            name: name,
            artworkSrc: result.artworkUrl100
        });
    });
    return movies;
};

const parseTv = results => {
    let tv = [];
    results.forEach(result => {
        let id = result.trackId ? result.trackId : result.collectionId;
        let name = result.trackName ? result.trackName : result.collectionName;

        tv.push({
            id: id,
            name: name,
            artworkSrc: result.artworkUrl100
        });
    });
    return tv;
};

export const parseResponse = (media, results) => {
    switch (media) {
        case 'music':
            return parseAlbums(results);
        case 'movie':
            return parseMovies(results);
        case 'tvShow':
            return parseTv(results);
        default:
            return [];
    }
};
