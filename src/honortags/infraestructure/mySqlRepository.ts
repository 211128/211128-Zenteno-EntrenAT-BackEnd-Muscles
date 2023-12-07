import { query } from "../../database/conecction";
import { Tag } from "../domain/arm";
import { ITagRepository } from "../domain/armRepository";

export class MysqlRepository implements ITagRepository {
  async registerTag(
    descripcion: string,
    autor: string
  ): Promise<Tag | null> {
    try {
      // Consulta para insertar el nuevo registro de tag
      const insertSql = "INSERT INTO tags (descripcion, autor) VALUES (?, ?)";
      const insertParams: any[] = [descripcion, autor];
      const [result]: any = await query(insertSql, insertParams);
  
      if (result.insertId) {
        // Crear una instancia de Tag con el ID generado
        const tag = new Tag(result.insertId, descripcion, autor);
        return tag;
      } else {
        console.error("No se pudo insertar el registro de tags en la base de datos.");
        return null;
      }
    } catch (error) {
      console.error("Error al registrar el tags:", error);
      return null;
    }
  }
  

  async listAllTags(): Promise<Tag[] | null> {
    try {
      const sql = "SELECT tagID, descripcion, autor FROM tags"; 
      const [rows]: any = await query(sql);

      if (!Array.isArray(rows)) {
        throw new Error('Rows is not an array');
      }

      // Mapear los resultados directamente a instancias de Tag
      const tags: Tag[] = rows.map((row: any) => {
        return new Tag(
          row.tagID,     
          row.descripcion,   
          row.autor
        );
      });

      console.log("Datos obtenidos de la base de datos:", tags);

      return tags;
    } catch (error) {
      console.error("Error al listar tags:", error);
      return null; // Opcionalmente, podrías lanzar una excepción en lugar de retornar null
    }
}


async listAllTagById(id: number): Promise<Tag | null> {
  try {
      const sql = "SELECT tagID, descripcion, autor FROM tags WHERE tagID = ? LIMIT 1";
      const [rows]: any = await query(sql, [id]);

      // Verificar si no se encontraron resultados o si la respuesta es vacía
      if (!Array.isArray(rows) || rows.length === 0) {
          return null;
      }

      const row = rows[0];
      const tag = new Tag(
          row.tagID,
          row.descripcion,
          row.autor,
      );

      console.log("Datos obtenidos de la base de datos:", tag);

      return tag;
  } catch (error) {
      console.error("Error al obtener datos de la tabla tags:", error);
      return null;
  }
}








}
