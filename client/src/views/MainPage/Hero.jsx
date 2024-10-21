import { useEffect, useState } from "react";
import SliderTemplates from "./SliderTemplates";
import TagCloudComponent from "./TagCloudComponent";
import templateService from "../../services/templateService";

function Hero() {
  const [latestTemplates, setLatestTemplates] = useState([]);
  const [popularTemplates, setPopularTemplates] = useState([]);
  const [tags, setTags] = useState([]);
  const [templatesByTag, setTemplatesByTag] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  useEffect(() => {
    async function getTemplates() {
      try {
        const data = await templateService.getLatestTemplates();
        setLatestTemplates(data.latestTemplates);
        setPopularTemplates(data.popularTemplates);
        setTags(
          data.tags.map((tag) => ({
            value: tag.name,
            count: tag.templateCount,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch templates:", error);
      }
    }
    getTemplates();
  }, []);

  const handleTagClick = async (tagName) => {
    setSelectedTag(tagName);

    try {
      const data = await templateService.getTemplatesByTag(tagName);
      setTemplatesByTag(data.templates);
    } catch (error) {
      console.error("Failed to fetch templates by tag:", error);
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Quizzer</h1>
      <p className="text-lg text-gray-700 mb-8">Create and fill out quizzes!</p>
      <SliderTemplates templates={latestTemplates} title="Latest Templates" />
      <SliderTemplates templates={popularTemplates} title="Popular Templates" />
      <TagCloudComponent tags={tags} onTagClick={handleTagClick} />
      {selectedTag && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Templates for "{selectedTag}"
          </h2>
          <SliderTemplates templates={templatesByTag} />
        </div>
      )}
    </div>
  );
}

export default Hero;
