import UseCaseInterface from "../../@shared/usecase/use-case.interface";
import ProductAdmFacadeInterface, { AddProductFacadeInputDto, ChecckStockFacadeInputDto, CheckStockFacadeOutputDto } from "./product-adm.facade.interface";

export interface UseCasesProps {
    addUseCase: UseCaseInterface;
    stockUseCase: UseCaseInterface;
}

export default class ProductAdmFacade implements ProductAdmFacadeInterface {
    private _addUseCase: UseCaseInterface;
    private _checkStockUseCase: UseCaseInterface;

    constructor(usecaseProps: UseCasesProps){
        this._addUseCase = usecaseProps.addUseCase;
        this._checkStockUseCase = usecaseProps.stockUseCase;
    }   

    addProduct(input: AddProductFacadeInputDto): Promise<void> {
        return this._addUseCase.execute(input);
    }

    checkStock(input: ChecckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto> {
        return this._checkStockUseCase.execute(input);
    }
    
}