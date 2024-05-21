import KnowledgeModel from "../../../models/KnowledgeModel.js";

export default async function deleteKnowledge(req, res) {
  try {
    const { id } = req.params;

    const knowledge = await KnowledgeModel.findByPk(id);

    if (!knowledge) {
      return res.status(404).json({ message: "Knowledge not found" });
    }

    await knowledge.destroy();

    return res.status(200).json({ message: "Knowledge deleted" });
  } catch (error) {
    console.error("Error in deleteKnowledge", error);
    return res.status(500).json(error);
  }
}
