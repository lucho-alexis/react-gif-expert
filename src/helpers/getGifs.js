export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=OatJkx3M8BpGeM8iLkh6TyIYExOaLB2M&q=${ category }&limit=20`;
    const response = await fetch(url);
    const { data = [] } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}