/**
 * @swagger
 * /knowledge/{id}:
 *   put:
 *     summary: Update an existing knowledge
 *     tags: [Knowledge]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The knowledge id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
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
 *             title: "Updated Knowledge"
 *             description: "This is an updated description"
 *             categoryIds: [1, 2, 3]
 *             additionalInformation:
 *               applicability: "Updated Applicability"
 *               references: "Updated References"
 *               importance_level: "Updated Importance Level"
 *     responses:
 *       200:
 *         description: The knowledge was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Knowledge'
 *       404:
 *         description: The knowledge was not found
 *       500:
 *         description: An error occurred while updating the knowledge
 */

import KnowledgeModel from "./../../../models/KnowledgeModel.js";
import CategoriesModel from "../../../models/CategoriesModel.js";
import AdditionalInformationModel from "../../../models/AdditionalInformationModel.js";

export default async function updateKnowledge(req, res) {
  try {
    const { id } = req.params;
    const { title, description, categoryIds, additionalInformation } = req.body;
    console.log("updatingg...");
    const knowledge = await KnowledgeModel.findByPk(id, {
      include: [
        { model: AdditionalInformationModel, as: "additionalInformation" },
        { model: CategoriesModel, as: "categories" },
      ],
    });

    if (!knowledge) {
      return res.status(404).json({ error: "Conhecimento não encontrado" });
    }

    await knowledge.update({
      title: title,
      description: description,
    });

    if (additionalInformation && knowledge.additionalInformation) {
      await knowledge.additionalInformation.update(additionalInformation);
    }

    if (categoryIds) {
      await knowledge.setCategories(categoryIds);
    }

    res.status(200).json({ knowledge });
  } catch (err) {
    res.status(500).json({ err });
  }
}
