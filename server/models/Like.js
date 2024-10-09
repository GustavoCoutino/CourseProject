import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";

const Like = sequelize.define(
  "Like",
  {
    likeId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    templateId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Like;
