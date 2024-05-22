import KnowledgeModel from "../../../models/KnowledgeModel.js";

export default async function getKnowledge(req, res) {
  try {
    const { id } = req.params;

    const knowledge = await KnowledgeModel.findOne({
      where: {
        id: id,
      },
      include: [
        {
          association: "categories",
          attributes: ["id", "name", "hexadecimal_color"],
        },
        {
          association: "additionalInformation",
          attributes: ["id", "applicability", "references", "importance_level"],
        },
      ],
    });

    if (!knowledge) {
      return res.status(404).json({ message: "Knowledge not found" });
    }

    // Increment quantity_views
    await knowledge.increment("quantity_views");

    return res.status(200).json({ knowledge });
  } catch (error) {
    console.error("Error in getKnowledge", error);
    return res.status(500).json({ error });
  }
}
