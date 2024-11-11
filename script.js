function showPlace(place) {
    const content = document.getElementById('content');

    if (place === 'jeonju') {
        content.innerHTML = "<h2>Jeonju Hanok Village</h2>" +
                            "<img src='images/jeonju_hanok_village.jpg' alt='Jeonju Hanok Village'>" +
                            "<p>Jeonju Hanok Village is a traditional Korean village with over 800 traditional hanok houses.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Jeonju_Hanok_Village' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'hangang') {
        content.innerHTML = "<h2>Hangang River</h2>" +
                            "<img src='images/hangang_river.jpg' alt='Hangang River'>" +
                            "<p>The Hangang River is a major river in South Korea, flowing through Seoul.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Han_River_(Korea)' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'baeknokdam') {
        content.innerHTML = "<h2>Baeknokdam</h2>" +
                            "<img src='images/baeknokdam_jeju.jpg' alt='Baeknokdam'>" +
                            "<p>Baeknokdam is a crater lake at the top of Hallasan Mountain in Jeju Island.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Baengnokdam' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'namsan') {
        content.innerHTML = "<h2>Namsan</h2>" +
                            "<img src='images/namsan_seoul.jpg' alt='Namsan'>" +
                            "<p>Namsan is a mountain in the center of Seoul with a popular tower and scenic views.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Namsan_(Seoul)' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'hongdae') {
        content.innerHTML = "<h2>Hongdae</h2>" +
                            "<img src='images/hongdae_seoul.jpg' alt='Hongdae'>" +
                            "<p>Hongdae is a vibrant district in Seoul known for its youthful and artistic atmosphere.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Hongdae' target='_blank'>Learn more on Wikipedia</a>";
    }
}
