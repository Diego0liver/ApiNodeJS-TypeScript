import { Model, DataTypes } from "sequelize";
import {sequelize} from './mysql'

export interface TabelaTypes extends Model {
    id_1: number,
    titulo: string,
    preco: Number
}

export const Entradas = sequelize.define<TabelaTypes>('entrada',{
    id_1: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    preco:{
        type: DataTypes.NUMBER,
        allowNull:false
    }
},{
    tableName: 'entrada',
    timestamps: false
})