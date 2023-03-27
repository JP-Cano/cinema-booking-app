export interface IBaseUseCase<T, K> {
  create(data: T): Promise<T>;

  findAll(): Promise<T[]>;

  findById(id: K): Promise<T>;

  deleteById(id: K): Promise<void>;

  updateById?(id: K, data: Partial<T>): Promise<T>;
}
