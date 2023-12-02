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
exports.UserMysqlRepository = void 0;
const conecction_1 = require("../../database/conecction");
const user_1 = require("../domain/user");
const hash_1 = require("./helpers/hash");
class UserMysqlRepository {
    registerUser(name, email, password, height, weight, sex) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashPassword = yield (0, hash_1.encrypt)(password);
                const sql = "INSERT INTO usuario (nombre, correo, contraseña, altura, peso, gender) VALUES (?, ?, ?, ?, ?, ?)";
                const params = [name, email, hashPassword, height, weight, sex];
                const [result] = yield (0, conecction_1.query)(sql, params);
                if (result.insertId) {
                    // Crear una instancia de User con el ID generado
                    const user = new user_1.User(result.insertId, name, email, hashPassword, height, weight, sex);
                    return user;
                }
                else {
                    console.error("No se pudo insertar el usuario en la base de datos.");
                    return null;
                }
            }
            catch (error) {
                console.error("Error al registrar el usuario:", error);
                return null;
            }
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userSql = "SELECT UserID AS userid, nombre AS username, correo AS email, contraseña AS password FROM usuario WHERE correo = ? LIMIT 1";
                const [userRows] = yield (0, conecction_1.query)(userSql, [email]);
                if (!Array.isArray(userRows) || userRows.length === 0) {
                    return null; // El usuario no existe
                }
                const userRow = userRows[0];
                const isPasswordMatch = yield (0, hash_1.compare)(password, userRow.password);
                if (!isPasswordMatch) {
                    return null; // Contraseña incorrecta
                }
                const user = new user_1.VerifyLogin(userRow.userid, userRow.username, userRow.email);
                return user;
            }
            catch (error) {
                console.error("Error en loginUser:", error);
                return null;
            }
        });
    }
    listAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM usuario"; // Cambiado a "Users" con mayúscula según la tabla de la base de datos
                const [rows] = yield (0, conecction_1.query)(sql);
                if (!Array.isArray(rows)) {
                    throw new Error('Rows is not an array');
                }
                // Mapear los resultados directamente a instancias de User
                const users = rows.map((row) => {
                    return new user_1.User(row.ID, // Cambiado a "ID" con mayúscula según la columna de la base de datos
                    row.name, // Cambiado a "Name" con mayúscula según la columna de la base de datos
                    row.email, // Cambiado a "Email" con mayúscula según la columna de la base de datos
                    row.password, // Cambiado a "Password" con mayúscula según la columna de la base de datos
                    row.height, // Cambiado a "Active" con mayúscula según la columna de la base de datos
                    row.weight, row.sex.
                        row.id);
                });
                return users;
            }
            catch (error) {
                console.error("Error al listar usuarios:", error);
                return null; // Opcionalmente, podrías lanzar una excepción en lugar de retornar null
            }
        });
    }
    deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'DELETE FROM usuario WHERE userid = ?';
                const result = yield (0, conecction_1.query)(sql, [id]);
                if (!result || result.affectedRows === 0) {
                    return 'No se encontró ningún usuario con el ID proporcionado.';
                }
                return 'Usuario eliminado exitosamente.';
            }
            catch (error) {
                console.error('Error al eliminar el usuario:', error);
                throw error; // Puedes manejar el error de la manera que prefieras o simplemente lanzarlo para que se maneje en un nivel superior.
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT userid, nombre, correo, altura, peso, gender FROM usuario WHERE userid = ? LIMIT 1";
                const [rows] = yield (0, conecction_1.query)(sql, [id]);
                // Verificar si no se encontraron resultados o si la respuesta es vacía
                if (!Array.isArray(rows) || rows.length === 0) {
                    return null;
                }
                const row = rows[0];
                const userData = new user_1.User(row.userid, row.nombre, row.correo, row.contraseña, row.altura, row.peso, row.gender);
                return userData;
            }
            catch (error) {
                console.error("Error en getUserById:", error);
                return null;
            }
        });
    }
    listAllInactiveUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM usuario WHERE cuentaactiva = false"; // SQL modificado para filtrar por status
                const [rows] = yield (0, conecction_1.query)(sql); // Esto probablemente devuelve un tipo de dato más complejo
                if (!Array.isArray(rows)) {
                    throw new Error('Error'); // Puedes manejar este caso según tus necesidades
                }
                const users = rows.map(row => new user_1.User(row.id, row.name, row.phone, row.email, row.password, row.active, row.canlent));
                return users;
            }
            catch (error) {
                console.error("Error en listAllInactiveUser:", error);
                return null; // Retorna null en caso de error o podrías optar por retornar un array vacío dependiendo de tu lógica de negocio
            }
        });
    }
    updateUsers(id, weight) {
        return __awaiter(this, void 0, void 0, function* () {
            const updates = {};
            const keys = Object.keys(updates);
            if (keys.length === 0)
                return null; // No hay nada que actualizar.
            const sqlParts = keys.map(key => `${key} = ?`);
            const sql = `UPDATE usuario SET ${sqlParts.join(', ')} WHERE UserID = ?`;
            try {
                const values = keys.map(key => updates[key]);
                values.push(id);
                yield (0, conecction_1.query)(sql, values);
                const [updatedRows] = yield (0, conecction_1.query)('SELECT * FROM usario WHERE UserID = ?', [id]);
                if (!updatedRows || updatedRows.length === 0) {
                    throw new Error('No hay usuario con esa ID.');
                }
                const updatedUser = new user_1.User(updatedRows[0].id, updatedRows[0].name, updatedRows[0].email, updatedRows[0].password, updatedRows[0].height, updatedRows[0].weight, updatedRows[0].sex);
                return updatedUser;
            }
            catch (error) {
                console.error('Error updating user:', error);
                throw error; // O maneja el error de la manera que prefieras.
            }
        });
    }
    updatePassword(id, password, cpassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Asumiendo que 'password' ya está cifrado.
                const hashPassword = yield (0, hash_1.encrypt)(password);
                // Verificar si las contraseñas coinciden
                if (password !== cpassword) {
                    throw new Error('La contraseña y la verificación de contraseña no coinciden.');
                }
                const sql = 'UPDATE usuario SET password = ? WHERE id = ?';
                const result = yield (0, conecction_1.query)(sql, [hashPassword, id]);
                // Verificar si se actualizó alguna fila
                if (!result || result.affectedRows === 0)
                    return null;
                // Obtener el usuario actualizado
                const [updatedRows] = yield (0, conecction_1.query)('SELECT * FROM users WHERE id = ?', [id]);
                if (updatedRows.length === 0)
                    return null;
                const updatedUser = new user_1.User(updatedRows[0].id, updatedRows[0].name, updatedRows[0].email, updatedRows[0].password, updatedRows[0].height, updatedRows[0].weight, updatedRows[0].sex);
                return updatedUser;
            }
            catch (error) {
                console.error('Error al actualizar la contraseña:', error);
                throw error; // O maneja el error de la manera que prefieras.
            }
        });
    }
    setAsInactive(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'UPDATE usuario SET cuentaactiva = false WHERE userid = ?';
                const [resultSet] = yield (0, conecction_1.query)(sql, [id || null]);
                if (!resultSet || resultSet.affectedRows === 0) {
                    return null;
                }
                return id;
            }
            catch (error) {
                console.error('Error al activar el usuario:', error);
                throw new Error('No se pudo activar el usuario.'); // O maneja el error de la manera que prefieras.
            }
        });
    }
}
exports.UserMysqlRepository = UserMysqlRepository;
