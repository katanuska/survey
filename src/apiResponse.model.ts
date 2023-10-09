export interface Relationship {}

export interface ApiResponse<T> {
  type: string;
  id: string;
  attributes: T;
  relationships?: Relationship[];
}
