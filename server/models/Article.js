const mongoose = require('mongoose')

let ArticleSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        feature_img: String,
        stars: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                text: String
            }
        ]
    }
);

ArticleSchema.methods.star = () => {
    this.stars++
    return this.save()
}

ArticleSchema.methods.comment = (c) => {
    this.comments.push(c)
    return this.save()
}

ArticleSchema.methods.addAuthor = (author_id) => {
    this.author = author_id
    return this.save()
}

ArticleSchema.methods.getUserArticle = (_id) => {
    Article.find({'author': _id}).then((article) => {
        return article
    }).catch((err) => {
        return err
    })
}

module.exports = mongoose.model('Article', ArticleSchema)