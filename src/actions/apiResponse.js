export const parseResponse = (media, results) => {
    let parsedResults = [];

    results.forEach(result => {
        let id;
        let name;

        switch (media) {
            case 'music':
                id = result.collectionId;
                let explicit = (result.collectionExplicitness === 'explicit');
                name = `${result.collectionCensoredName} ${(explicit ? '(Explicit)' : '')}`;
                break;
            case 'movie':
            case 'tvShow':
                id = result.trackId ? result.trackId : result.collectionId;
                name = result.trackName ? result.trackName : result.collectionName;
                break;
            default:
                return [];
        }

        parsedResults.push({
            id: id,
            name: name,
            artworkSrc: result.artworkUrl100,
            price: result.collectionPrice,
            genre: result.primaryGenreName,
            date: new Date(result.releaseDate)
        });
    });

    return parsedResults;
};
