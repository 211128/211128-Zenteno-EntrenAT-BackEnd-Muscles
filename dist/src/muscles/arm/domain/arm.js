"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsArm = exports.Arm = void 0;
class Arm {
    constructor(id, userid, exercises, weight) {
        this.id = id;
        this.userid = userid;
        this.exercises = exercises;
        this.weight = weight;
    }
}
exports.Arm = Arm;
class TagsArm {
    constructor(tagid, userid, descripcion, autor) {
        this.tagid = tagid;
        this.userid = userid;
        this.descripcion = descripcion;
        this.autor = autor;
    }
}
exports.TagsArm = TagsArm;
