function showPlace(place) {
    const content = document.getElementById('content');

    if (place === 'jeonju') {
        content.innerHTML = "<h2>Jeonju Hanok Village</h2>" +
                            "<img src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Jeonju_Hanok_Village.jpg' alt='Jeonju Hanok Village'>" +
                            "<p>Jeonju Hanok Village is a traditional Korean village with over 800 traditional hanok houses.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Jeonju_Hanok_Village' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'hangang') {
        content.innerHTML = "<h2>Hangang River, Seoul</h2>" +
                            "<img src='https://upload.wikimedia.org/wikipedia/commons/e/eb/Hangang_River_Park.jpg' alt='Hangang River'>" +
                            "<p>The Hangang River flows through Seoul, offering beautiful views and plenty of recreational activities.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Han_River_(Korea)' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'baeknokdam') {
        content.innerHTML = "<h2>Baeknokdam, Jeju Island</h2>" +
                            "<img src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Baekrokdam_Jeju.jpg' alt='Baeknokdam'>" +
                            "<p>Baeknokdam is a volcanic crater lake located at the peak of Hallasan Mountain on Jeju Island.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Hallasan#Baengnokdam' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'namsan') {
        content.innerHTML = "<h2>Namsan, Seoul</h2>" +
                            "<img src='https://upload.wikimedia.org/wikipedia/commons/9/9e/Namsan_Seoul.jpg' alt='Namsan'>" +
                            "<p>Namsan is a popular mountain in the center of Seoul, home to the iconic N Seoul Tower.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/N_Seoul_Tower' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'hongdae') {
        content.innerHTML = "<h2>Hongdae, Seoul</h2>" +
                            "<img src='https://upload.wikimedia.org/wikipedia/commons/1/19/Hongdae_Street_Seoul.jpg' alt='Hongdae'>" +
                            "<p>Hongdae is a vibrant area known for its youthful energy, arts, and indie music scene.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Hongdae' target='_blank'>Learn more on Wikipedia</a>";
    } else {
        content.innerHTML = "<p>Select a place to see beautiful images and learn more about it.</p>";
    }
}
