import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";

const Topic = sequelize.define(
  "Topic",
  {
    topicId: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Topic;
