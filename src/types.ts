// types.ts
export interface Country {
    name: string;
    continent: string;
    code?: string;
    iso2?: string;
    iso3?: string;
    href: {
        flag: string;
        self?: string;
    }
}

export interface CountriesState {
    countries: Country[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    lastPage: number;
    perPage: number;
    hasMore: boolean;
    total: number;
    selectedContinent: string;
}

export interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface PaginationLinks {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface PaginatedResponse {
    data: Country[];
    meta: PaginationMeta;
    links: PaginationLinks;
}

export interface FetchCountriesParams {
    page?: number;
    continent?: string;
}
