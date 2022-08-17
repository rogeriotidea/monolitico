export interface AddProductFacadeInputDto {
    id?: string;
    name: string;
    description: string;
    purchasePrice: number;
    stock: number;
}

export interface ChecckStockFacadeInputDto {
    productId: string;
}

export interface CheckStockFacadeOutputDto {
    productId: string;
    stock: number;
}

export default interface ProductAdmFacadeInterface {
    addProduct(input: AddProductFacadeInputDto): Promise<void>;
    checkStock(input: ChecckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto>;
}