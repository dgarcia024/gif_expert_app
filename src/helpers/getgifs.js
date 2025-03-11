export const getGifs = async (input) => {
  const apiKey = "XItqM3hZKWphE2KH8viUF0nC3rzKuQJh";
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${input}&limit=5`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
