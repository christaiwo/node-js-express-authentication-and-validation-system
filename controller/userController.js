import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



export const registerUser = async (req, res) => {
    const { name, email, password} = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(user){
        return res.status(400).json({
            message: "User already exist"
        })
    }


    const createdUser = await prisma.user.create({
        data:{
            name,
            email,
            password:hashedPassword
        }
    })



    return res.status(201).json({ 
        user: createdUser
    })
}


export const loginUser = async (req, res) => {
    const { email, password} = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email,
        }
    })

    if(user){
        const comparePassword = bcrypt.compareSync(password, user.password);

        if(comparePassword){
            const payload = {
                userId: user.id,
            }

            Jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '30d',
            }, (err, token) => {
                if(err || !token){
                    return res.status(401).json({
                        error: "token not found"
                    });
                }

                return res.status(200).json({
                    token
                })


            });
        }
    }


}


export const getUser = async (req, res) => {
    const user = await prisma.user.findUnique({
        where:{
            id: req.userId
        }
    });

    if(!user){
        return res.status(404).json({
            error: "User does not exist"
        })
    }


    return res.status(200).json({
        user
    })

}


export const updateUser = async (req, res) => {
    const { id } = req.params;
    const{ name, email} = req.body;

    const user = await prisma.user.findUnique({
        where: {
            id:req.userId
        },
    })

    if(!user){
        return res.status(404).json({
            error: "User does not exist",
        })
    }

    // check authenticated user
    if(id !== user.id){
        return res.status(403).json({
            error: "You do not have permission to update this account",
        })
    }

    const updatedUser = await prisma.user.update({
        where:{
            id: user.id
        },
        data:{
            name,
            email
        }
    })

    return res.status(200).json({
        user: updatedUser,
    })
}


export const destroyUser = async (req, res) => {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
        where: {
            id:req.userId
        },
    })

    if(!user){
        return res.status(404).json({
            error: "User does not exist",
        })
    }

    // check authenticated user
    if(id !== user.id){
        return res.status(403).json({
            error: "You do not have permission to delete this account",
        })
    }

    await prisma.user.delete({
        where:{
            id: user.id
        }
    })

    return res.status(204).json({
        message: "User deleted successfully",
    })
}


export const getAllUser = async (req, res) => {
    const users = await prisma.user.findMany({
        include:{
            articles: true
        }
    });


    return res.status(200).json({
        users
    })
} 