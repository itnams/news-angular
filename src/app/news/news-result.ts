export interface NewsResult {
    sources: News[]
}

export interface News {
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string
}