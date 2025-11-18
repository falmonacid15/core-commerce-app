export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}

export type Pagination = {
  totalCount: number;
  page: number;
  perPage: number;
  skip: number;
};
