import KnowledgeModel from "../../../models/KnowledgeModel.js";

export default async function incrementViews(req, res) {
  try {
    const { id } = req.params;

    const knowledge = await KnowledgeModel.findOne({
      where: {
        id: id,
      },
    });

    if (!knowledge) {
      return res.status(404).json({ message: "Knowledge not found" });
    }

    knowledge.views += 1;
    await knowledge.save();

    return res.json(knowledge);
  } catch (error) {
    console.error("Error in incrementViews", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
