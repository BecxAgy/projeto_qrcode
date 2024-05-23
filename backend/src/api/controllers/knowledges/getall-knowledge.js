/**
 * @swagger
 * /knowledge:
 *   get:
 *     summary: Retrieve a list of knowledge
 *     tags: [Knowledge]
 *     responses:
 *       200:
 *         description: A list of knowledge
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Knowledge'
 *       500:
 *         description: An error occurred while retrieving knowledge
 */
import KnowledgeModel from "../../../models/KnowledgeModel.js";

export default async function getAllKnowledge(req, res) {
  try {
    const knowledges = await KnowledgeModel.findAll({
      order: [["title", "ASC"]],
      attributes: ["id", "title", "description", "quantity_views"],

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

    return res.status(200).json({ knowledges });
  } catch (error) {
    console.error("Error in getAllKnowledge", error);
    return res.status(500).json({ error });
  }
}
