export const getNewsByApi = async (query  = 'all') => {

  const response = await fetch(`
  https://newsapi.org/v2/everything?q=${query}&apiKey=f0b8b4b197f2451491e2198c9aa61c2f
  `)

  const data = await response.json();

  return data.articles;
}