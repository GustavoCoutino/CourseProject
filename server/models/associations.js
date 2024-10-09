import User from "./User.js";
import Template from "./Template.js";
import Question from "./Question.js";
import Form from "./Form.js";
import Answer from "./Answer.js";
import Comment from "./Comment.js";
import Like from "./Like.js";
import Tag from "./Tag.js";
import TemplateTag from "./TemplateTag.js";
import Topic from "./Topic.js";

User.hasMany(Template, { foreignKey: "userId" });
Template.belongsTo(User, { foreignKey: "userId" });

Topic.hasMany(Template, { foreignKey: "topicId" });
Template.belongsTo(Topic, { foreignKey: "topicId" });

Template.hasMany(Question, { foreignKey: "templateId" });
Question.belongsTo(Template, { foreignKey: "templateId" });

Template.hasMany(Form, { foreignKey: "templateId" });
Form.belongsTo(Template, { foreignKey: "templateId" });

Template.hasMany(Comment, { foreignKey: "templateId" });
Comment.belongsTo(Template, { foreignKey: "templateId" });

User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Form, { foreignKey: "userId" });
Form.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Like, { foreignKey: "userId" });
Like.belongsTo(User, { foreignKey: "userId" });

Template.hasMany(Like, { foreignKey: "templateId" });
Like.belongsTo(Template, { foreignKey: "templateId" });

Question.hasMany(Answer, { foreignKey: "questionId" });
Answer.belongsTo(Question, { foreignKey: "questionId" });

Form.hasMany(Answer, { foreignKey: "formId" });
Answer.belongsTo(Form, { foreignKey: "formId" });

Template.belongsToMany(Tag, {
  through: TemplateTag,
  foreignKey: "templateId",
  otherKey: "tagId",
});
Tag.belongsToMany(Template, {
  through: TemplateTag,
  foreignKey: "tagId",
  otherKey: "templateId",
});
