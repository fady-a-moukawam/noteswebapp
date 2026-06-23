import express from "express";
import db from "../db";

const router = express.Router();

// from frontend we then call /api/v1/notes/all
router.get('/all', (req, res) => {

    const sqlQuery = 'SELECT * FROM notes';

    db.query(sqlQuery, (err, results) => {
            if (err) res.status(500).json({message: "Internal sever error"});

            res.status(200).json(results);
        }
    )
});

module.exports = router;
