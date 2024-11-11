function showPlace(place) {
    const content = document.getElementById('content');

    if (place === 'jeonju') {
        content.innerHTML = "<h2>Jeonju Hanok Village</h2>" +
                            "<img src='images/jeonju_hanok_village.jpg' alt='Jeonju Hanok Village'>" +
                            "<p>Jeonju Hanok Village is a traditional Korean village with over 800 traditional hanok houses. This area has preserved the old-style architecture and culture of Korea, allowing visitors to experience authentic Korean heritage. The village is known for its beautiful hanok houses, Korean-style roofs, wooden walls, and sliding doors. Walking through Jeonju Hanok Village, visitors can explore tea houses, artisan shops, and restaurants that serve local delicacies such as bibimbap, one of Korea's most famous dishes. The village is especially popular during autumn when the foliage creates a stunning backdrop.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Jeonju_Hanok_Village' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'hangang') {
        content.innerHTML = "<h2>Hangang River</h2>" +
                            "<img src='images/hangang_river.jpg' alt='Hangang River'>" +
                            "<p>The Hangang River, also known as the Han River, is one of the major rivers in South Korea and flows through the heart of Seoul. It provides a peaceful escape from the bustling city life, offering scenic parks, biking paths, and riverside cafes. Hangang is a popular spot for locals and tourists alike, who come to enjoy picnics, water sports, and night views of Seoul's skyline. The river banks are lined with various parks such as Yeouido Hangang Park, which hosts festivals and events throughout the year, making it a vibrant cultural and leisure hub in Seoul.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Han_River_(Korea)' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'baeknokdam') {
        content.innerHTML = "<h2>Baeknokdam</h2>" +
                            "<img src='images/baeknokdam_jeju.jpg' alt='Baeknokdam'>" +
                            "<p>Baeknokdam is a crater lake located at the summit of Hallasan Mountain on Jeju Island, South Korea. This lake is named after the Korean words for 'white deer lake,' inspired by the myth that white deer would descend to the lake and drink from its waters. Surrounded by lush vegetation and breathtaking views, Baeknokdam is a sacred and mystical place that attracts hikers and nature lovers. Reaching the lake requires a challenging hike, but the serene atmosphere and panoramic views from the summit make it worth the effort. It’s one of the natural wonders of Jeju Island.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Baengnokdam' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'namsan') {
        content.innerHTML = "<h2>Namsan</h2>" +
                            "<img src='images/namsan_seoul.jpg' alt='Namsan'>" +
                            "<p>Namsan, meaning 'South Mountain,' is located in the center of Seoul and is a popular destination for both locals and tourists. At the peak of Namsan stands the N Seoul Tower, an iconic symbol of the city that offers panoramic views of Seoul’s skyline. Visitors can hike up the mountain or take a cable car to the top, where they’ll find the 'Locks of Love' installation, a popular attraction for couples. Namsan also features well-maintained trails, cherry blossoms in spring, and beautiful autumn foliage, making it an ideal spot for seasonal photography.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Namsan_(Seoul)' target='_blank'>Learn more on Wikipedia</a>";
    } else if (place === 'hongdae') {
        content.innerHTML = "<h2>Hongdae</h2>" +
                            "<img src='images/hongdae_seoul.jpg' alt='Hongdae'>" +
                            "<p>Hongdae is a vibrant and youthful district in Seoul known for its artistic and energetic atmosphere. Named after the nearby Hongik University, Hongdae is filled with street performers, indie music bands, and unique art galleries. The area is also famous for its lively nightlife, with a variety of cafes, clubs, and restaurants catering to young people and tourists. Hongdae’s streets are often adorned with colorful murals and graffiti, making it a hub for creativity and self-expression. It's a must-visit for anyone interested in Seoul's contemporary youth culture.</p>" +
                            "<a href='https://en.wikipedia.org/wiki/Hongdae' target='_blank'>Learn more on Wikipedia</a>";
    }
}
