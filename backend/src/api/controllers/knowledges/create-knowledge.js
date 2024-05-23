import AddtionalInformationModel from "../../../models/AdditionalInformationModel.js";
import KnowledgeModel from "../../../models/KnowledgeModel.js";

/**
 * @swagger
 * /knowledge:
 *   post:
 *     summary: Create a new knowledge
 *     tags: [Knowledge]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - categoryIds
 *               - additionalInformation
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               categoryIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *               additionalInformation:
 *                 type: object
 *                 properties:
 *                   applicability:
 *                     type: string
 *                   references:
 *                     type: string
 *                   importance_level:
 *                     type: string
 *           example:
 *             title: "Example Knowledge"
 *             description: "This is an example description"
 *             categoryIds: [1, 2, 3]
 *             additionalInformation:
 *               applicability: "Example Applicability"
 *               references: "Example References"
 *               importance_level: "Example Importance Level"
 *     responses:
 *       201:
 *         description: The knowledge was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Knowledge'
 *       400:
 *         description: Some parameters are missing or the knowledge already exists
 *       500:
 *         description: An error occurred while creating the knowledge
 */

export default async function createKnowledge(req, res) {
  try {
    const {
      title,
      description,
      categoryIds,
      additionalInformation: { applicability, references, importance_level },
    } = req.body;

    if (!title || !description || !categoryIds) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const knowledgeExists = await KnowledgeModel.findOne({ where: { title } });

    if (knowledgeExists) {
      return res.status(400).json({ message: "Knowledge already exists" });
    }

    const newKnowledge = await KnowledgeModel.create({
      title,
      description,
      quantity_views: 0,
    });

    await newKnowledge.addCategories(categoryIds);

    const additionalInformation = await AddtionalInformationModel.create({
      applicability,
      references,
      importance_level,
    });

    await newKnowledge.setAdditionalInformation(additionalInformation);

    return res.status(201).json(newKnowledge);
  } catch (error) {
    console.error("Error in createKnowledge", error);
    return res
      .status(500)
      .json({ error: "An error occurred while creating knowledge" });
  }
}
