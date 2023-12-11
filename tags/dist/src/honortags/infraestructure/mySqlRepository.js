"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlRepository = void 0;
const conecction_1 = require("../../database/conecction");
const arm_1 = require("../domain/arm");
class MysqlRepository {
    registerTag(descripcion, autor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Consulta para insertar el nuevo registro de tag
                const insertSql = "INSERT INTO tags (descripcion, autor) VALUES (?, ?)";
                const insertParams = [descripcion, autor];
                const [result] = yield (0, conecction_1.query)(insertSql, insertParams);
                if (result.insertId) {
                    // Crear una instancia de Tag con el ID generado
                    const tag = new arm_1.Tag(result.insertId, descripcion, autor);
                    return tag;
                }
                else {
                    console.error("No se pudo insertar el registro de tags en la base de datos.");
                    return null;
                }
            }
            catch (error) {
                console.error("Error al registrar el tags:", error);
                return null;
            }
        });
    }
    listAllTags() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT tagID, descripcion, autor FROM tags";
                const [rows] = yield (0, conecction_1.query)(sql);
                if (!Array.isArray(rows)) {
                    throw new Error('Rows is not an array');
                }
                // Mapear los resultados directamente a instancias de Tag
                const tags = rows.map((row) => {
                    return new arm_1.Tag(row.tagID, row.descripcion, row.autor);
                });
                console.log("Datos obtenidos de la base de datos:", tags);
                return tags;
            }
            catch (error) {
                console.error("Error al listar tags:", error);
                return null; // Opcionalmente, podrías lanzar una excepción en lugar de retornar null
            }
        });
    }
    listAllTagById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT tagID, descripcion, autor FROM tags WHERE tagID = ? LIMIT 1";
                const [rows] = yield (0, conecction_1.query)(sql, [id]);
                // Verificar si no se encontraron resultados o si la respuesta es vacía
                if (!Array.isArray(rows) || rows.length === 0) {
                    return null;
                }
                const row = rows[0];
                const tag = new arm_1.Tag(row.tagID, row.descripcion, row.autor);
                console.log("Datos obtenidos de la base de datos:", tag);
                return tag;
            }
            catch (error) {
                console.error("Error al obtener datos de la tabla tags:", error);
                return null;
            }
        });
    }
}
exports.MysqlRepository = MysqlRepository;
