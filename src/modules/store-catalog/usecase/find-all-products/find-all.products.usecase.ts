import UseCaseInterface from "../../../@shared/usecase/use-case.interface";
import ProductGateway from "../../gateway/product.gateway";

export default class FindAllProductsUseCase implements UseCaseInterface {
    constructor(private productRepository: ProductGateway){}

    async execute(): Promise<any> {
       const products = await this.productRepository.findAll();
       return {
        products: products.map((product) => ({
            id: product.id.id,
            name: product.name,
            salesPrice: product.salesPrice,
            description: product.description
        }))
       } 

    }
}