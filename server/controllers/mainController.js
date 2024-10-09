// controllers/mainController.js

import Template from "../models/Template.js";
import User from "../models/User.js";
import Tag from "../models/Tag.js";
import sequelize from "../config/db.js";

const mainController = {
  getMainPage: async (req, res) => {
    try {
      const latestTemplates = await Template.findAll({
        order: [["createdAt", "DESC"]],
        limit: 10,
        include: [
          {
            model: User,
            attributes: ["userId", "username"],
          },
        ],
      });
      const popularTemplates = await Template.findAll({
        attributes: {
          include: [
            [
              sequelize.literal(`(
                SELECT COUNT(*)
                FROM "Form" AS form
                WHERE
                  form."templateId" = "Template"."templateId"
              )`),
              "formCount",
            ],
          ],
        },
        order: [[sequelize.literal("formCount"), "DESC"]],
        limit: 5,
        include: [
          {
            model: User,
            attributes: ["userId", "username"],
          },
        ],
      });
      const tags = await Tag.findAll({
        attributes: [
          "name",
          [
            sequelize.literal(`(
              SELECT COUNT(*)
              FROM "TemplateTag" AS tt
              WHERE
                tt."tagId" = "Tag"."id"
            )`),
            "templateCount",
          ],
        ],
        order: [["name", "ASC"]],
      });
      res.json({
        latestTemplates,
        popularTemplates,
        tags,
      });
    } catch (error) {
      console.error("Error fetching main page data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getTemplatesByTag: async (req, res) => {
    try {
      const { tagName } = req.params;
      const tag = await Tag.findOne({
        where: { name: tagName },
        include: [
          {
            model: Template,
            include: [
              {
                model: User,
                attributes: ["userId", "username"],
              },
            ],
          },
        ],
      });

      if (!tag) {
        return res.status(404).json({ error: "Tag not found" });
      }
      const templates = tag.Templates;
      res.json({
        templates,
        searchQuery: `Tag: ${tagName}`,
      });
    } catch (error) {
      console.error("Error fetching templates by tag:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default mainController;