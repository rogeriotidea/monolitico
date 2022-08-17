import { Column, Model, Table, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName: "products",
    timestamps: false
})

export class ProductModel extends Model {
    
    @PrimaryKey
    @Column({allowNull: false})
    id: string;

    @Column({allowNull: false})
    name: string;

    @Column({allowNull: false})
    description: string;

    @Column({allowNull: false})
    purchasePrice: number;

    @Column({allowNull: false})
    stock: number;

    @Column({allowNull: false})
    createdAt: Date;

}