export interface NewsHeadearResult {
    sources: Headers[]
}

export interface NewsEverythingResult {
    articles: Everything[]
}

export interface Headers {
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string
}

export interface Everything {
    source: {
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}