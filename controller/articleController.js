import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const indexArticle = async (req, res) => {
    const articles = await prisma.article.findMany({
        include:{
            author: true
        }
    });


    return res.status(200).json({
        articles
    })
}

export const createArticle = async (req, res) => {
    const { title, content } = req.body;

    const article = await prisma.article.create({
        include:{
            author: true
        },
        data:{
            title: title,
            content: content,
            authorId: req.userId
        }
    });
    return res.status(200).json({
        article,
    })
}


export const showArticle = async (req, res) => {
    const { id } = req.params;

    const article = await prisma.article.findUnique({
        where: {
            id:parseInt(id)
        },
        include:{
            author: true
        }
    })

    if(!article){
        return res.status(404).json({
            error: "article not found",
        })
    }

    return res.status(200).json({
        article,
    })
    
}


export const updateArticle = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const article = await prisma.article.findUnique({
        where: {
            id:parseInt(id)
        },
        include:{
            author: true
        }
    })

    if(!article){
        return res.status(404).json({
            error: "article not found",
        })
    }

    // check authenticated user
    if(article.authorId !== req.userId){
        return res.status(403).json({
            error: "You do not have permission to update this article",
        })
    }

    const updatedArticle = await prisma.article.update({
        where:{
            id: parseInt(id)
        },
        data:{
            title: title,
            content: content
        },
        include:{
            author: true
        }
    })

    return res.status(200).json({
        article: updatedArticle
    })
}


export const destroyArticle = async (req, res) => {
    const { id } = req.params;

    const article = await prisma.article.findUnique({
        where: {
            id:parseInt(id)
        },
        include:{
            author: true
        }
    })

    if(!article){
        return res.status(404).json({
            error: "article not found",
        })
    }

    // check authenticated user
    if(article.authorId !== req.userId){
        return res.status(403).json({
            error: "You do not have permission to delete this article",
        })
    }

    await prisma.article.delete({
        where:{
            id: parseInt(id)
        }
    })

    return res.status(204).json({
        message: "Article deleted successfully",
    })
}

