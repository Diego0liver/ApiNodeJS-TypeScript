import { Model, DataTypes } from "sequelize";
import {sequelize} from './mysql'

export interface TabelaTypes extends Model {
    id_2: number,
    titulo: string,
    preco: Number
}

export const Saidas = sequelize.define<TabelaTypes>('saida',{
    id_2: {
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
    tableName: 'saida',
    timestamps: false
})