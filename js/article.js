function set_recommended_articles() {
    const recommended_articles = [
        {
            "title": "okay so the thing is that i didn't actually write the articles yet BUT i have this really cool video that i want everyone to see",
            "url": "https://cdn.discordapp.com/attachments/917013506958721027/1085438357007503410/trim.0EA809A0-9156-464C-996C-FE565AEFAD7A.mp4"
        },
    ]

    let core = "<ol class=\"list-unstyled mb-0\">"
    for (let i = 0; i < recommended_articles.length; i++) {
        core += "<li><a href=\"" + recommended_articles[i].url + "\">" + recommended_articles[i].title + "</a></li>"
    }

    document.getElementById("recommended_articles").innerHTML = core + "</ol>"
}

window.onload = function () {
    set_recommended_articles()
}