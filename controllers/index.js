

function index(req, res) {
    const articles = [
        {title: 'The Complete Jazz Guitar Method', snippet: 'Etiam at consequat purus, aliquet rutrum ante. Etiam ut nunc quam. Aenean mattis sodales mauris at fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis, velit eget placerat.'},
        {title: 'Finding Your Singing Voice', snippet: 'Etiam at consequat purus, aliquet rutrum ante. Etiam ut nunc quam. Aenean mattis sodales mauris at fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis, velit eget placerat.'},
        {title: 'Music Theory 101', snippet: 'Etiam at consequat purus, aliquet rutrum ante. Etiam ut nunc quam. Aenean mattis sodales mauris at fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis, velit eget placerat.'},
    ];
    res.render('index', {title: 'Home', articles});
}

module.exports = {
    index,
};