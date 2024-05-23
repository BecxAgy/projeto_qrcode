/**
 * @swagger
 * /knowledge/{id}/qrcode:
 *   post:
 *     summary: Generate a QR code for a knowledge
 *     tags: [Knowledge]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The knowledge id
 *     responses:
 *       200:
 *         description: The QR code was successfully generated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 qrCode:
 *                   type: string
 *       500:
 *         description: An error occurred while generating the QR code
 */

import qrcode from "qrcode";

async function generateQRCode(link) {
  try {
    const qrDataURL = await qrcode.toDataURL(link);
    return qrDataURL;
  } catch (err) {
    console.error("Erro ao gerar QR Code:", err);
    throw err;
  }
}

export default async function createQRCodeKnowledge(req, res) {
  try {
    const { id } = req.params;

    const qrCodeLink = `${process.env.CLIENT_URL}${id}`;

    const qrCodeDataURL = await generateQRCode(qrCodeLink);

    return res.status(200).json({ qrCode: qrCodeDataURL });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Erro ao gerar QR Code", error: err });
  }
}
