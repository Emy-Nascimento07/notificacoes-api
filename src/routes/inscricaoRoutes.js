const express = require("express");
const router = express.Router();
const InscricaoController = require("../controllers/InscricaoController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Inscricao:
 *       type: object
 *       required:
 *         - eventoId
 *         - participanteId
 *         - dataInscricao
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *           description: ID gerado automaticamente
 *         eventoId:
 *           type: integer
 *           description: ID do evento
 *         participanteId:
 *           type: integer
 *           description: ID do participante
 *         dataInscricao:
 *           type: string
 *           description: Data da inscricao
 *         status:
 *           type: string
 *           description: Status da inscricao
 *       example:
 *         id: 1
 *         eventoId: 2
 *         participanteId: 1
 *         dataInscricao: "2026-02-25"
 *         status: "confirmada"
 */

/**
 * @swagger
 * /inscricoes:
 *   get:
 *     summary: Listar todas as inscricoes
 *     tags: [Inscricoes]
 *     responses:
 *       200:
 *         description: Lista de inscricoes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inscricao'
 */
router.get("/", InscricaoController.index);

/**
 * @swagger
 * /inscricoes/evento/{eventoId}:
 *   get:
 *     summary: Listar inscricoes de um evento
 *     tags: [Inscricoes]
 *     parameters:
 *       - in: path
 *         name: eventoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do evento
 *     responses:
 *       200:
 *         description: Lista de inscricoes do evento
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inscricao'
 *       404:
 *         description: Inscricoes nao encontradas
 */
router.get("/evento/:eventoId", InscricaoController.listarPorEvento);

/**
 * @swagger
 * /inscricoes:
 *   post:
 *     summary: Criar uma nova inscricao
 *     tags: [Inscricoes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - eventoId
 *               - participanteId
 *             properties:
 *               eventoId:
 *                 type: integer
 *               participanteId:
 *                 type: integer
 *               dataInscricao:
 *                 type: string
 *               status:
 *                 type: string
 *             example:
 *               eventoId: 2
 *               participanteId: 1
 *               dataInscricao: "2026-02-25"
 *               status: "confirmada"
 *     responses:
 *       201:
 *         description: Inscricao criada com sucesso
 *       400:
 *         description: Dados invalidos
 */
router.post("/", InscricaoController.store);

/**
 * @swagger
 * /inscricoes/{id}/cancelar:
 *   patch:
 *     summary: Cancelar uma inscricao
 *     tags: [Inscricoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inscricao cancelada
 *       404:
 *         description: Nao foi possivel cancelar a inscricao
 */
router.patch("/:id/cancelar", InscricaoController.cancelar);

/**
 * @swagger
 * /inscricoes/{id}/detalhes:
 *   get:
 *     summary: Listar detalhes de uma inscricao
 *     tags: [Inscricoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da inscricao
 *     responses:
 *       200:
 *         description: Inscricao encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inscricao'
 *       404:
 *         description: Inscricao nao encontrada
 */
router.get("/:id/detalhes", InscricaoController.detalhes);

module.exports = router;