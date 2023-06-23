import { body, validationResult } from "express-validator";

export const articleValidation = [
    body('title').notEmpty().withMessage('title field is required').isLength({ min: 5}).withMessage('Minimum character is 5').isString().withMessage('title has to be a string'),
    body('content').notEmpty().withMessage('content field is required').isLength({ min: 5}).withMessage('Minimum character is 5').isString().withMessage('content has to be a string'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({errors: errors.array()});
        next();
    }
]