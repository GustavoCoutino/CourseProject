import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";

const TemplateTag = sequelize.define(
  "TemplateTag",
  {
    templateId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    tagId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default TemplateTag;
