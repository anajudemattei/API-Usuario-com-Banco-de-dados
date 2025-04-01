const pool = require("../config/database");

const getpost = async () => {
    const result = await pool.query(
        `SELECT post.*, houses.name AS house_name 
         FROM post 
         LEFT JOIN houses ON post.house_id = houses.id`
    );
    return result.rows;
};

const getWizardById = async (id) => {
    const result = await pool.query(
        `SELECT post.*, houses.name AS house_name 
         FROM post 
         LEFT JOIN houses ON post.house_id = houses.id 
         WHERE post.id = $1`, [id]
    );
    return result.rows[0];
};

const createWizard = async (name, house_id) => {
    const result = await pool.query(
        "INSERT INTO post (name, house_id) VALUES ($1, $2) RETURNING *",
        [name, house_id]
    );
    return result.rows[0];
};

const deleteWizard = async (id) => {
    const result = await pool.query("DELETE FROM post WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Bruxo não encontrado." };
    }

    return { message: "Bruxo deletado com sucesso." };
};

const updateWizard = async (id, name, house_id) => {
    const result = await pool.query(
        "UPDATE post SET name = $1, house_id = $2 WHERE id = $3 RETURNING *",
        [name, house_id, id]
    );
    return result.rows[0]
};


module.exports = { getpost, getWizardById, createWizard, deleteWizard, updateWizard };
