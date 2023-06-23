import { body, check, validationResult } from "express-validator";

export const registerValidation = [
    body('name').notEmpty().withMessage('Full name is required').isLength({ min: 2 }).withMessage('Full name must be at least 2 characters long').isString().withMessage('Full name must be a string'),
    body('email').notEmpty().withMessage('Email address is required').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 8 }).withMessage('Password must be at least 6 characters long'),
    
    (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({errors: errors.array()});
    next();
  },

]


export const loginValidation = [
  body('email').notEmpty().withMessage('Email address is required').isEmail().withMessage('Invalid email address'),
  body('password').notEmpty().withMessage('Password is required').isLength({ min: 8 }).withMessage('Password must be at least 6 characters long'),
  
  (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({errors: errors.array()});

  next();
},

]


export const updateUserValidation = [
  body('name').notEmpty().withMessage('Full name is required').isLength({ min: 2 }).withMessage('Full name must be at least 2 characters long').isString().withMessage('Full name must be a string'),
  body('email').notEmpty().withMessage('Email address is required').isEmail().withMessage('Invalid email address'),

  (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({errors: errors.array()});
  next();
},

]