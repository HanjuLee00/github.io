const destinations = {
    "Jeonju Hanok Village": {
        title: "Jeonju Hanok Village",
        image: "images/jeonju_hanok_village.jpg",
        description: "Jeonju Hanok Village is a traditional Korean village with over 800 traditional hanok houses. It is one of the most popular tourist attractions in Korea, known for preserving Korean history and culture. Visitors can experience traditional Korean architecture, taste famous Jeonju Bibimbap, and explore the many local craft shops. The village has a unique charm that combines the beauty of ancient Korean houses with modern conveniences, making it a must-visit for anyone interested in Korea's rich cultural heritage.",
        wikipedia: "https://en.wikipedia.org/wiki/Jeonju_Hanok_Village"
    },
    "Hangang River, Seoul": {
        title: "Hangang River, Seoul",
        image: "images/hangang_river.jpg",
        description: "The Hangang River runs through the heart of Seoul, offering a refreshing natural space within the bustling city. The river is surrounded by 12 riverside parks where visitors can enjoy picnics, cycling, and water sports. During the summer, the parks host various festivals, such as the Hangang Summer Festival. The night view along the river is stunning, with the city lights reflecting off the water. Hangang River is a favorite spot for locals and tourists alike to relax and unwind.",
        wikipedia: "https://en.wikipedia.org/wiki/Han_River_(Korea)"
    },
    "Baeknokdam, Jeju Island": {
        title: "Baeknokdam, Jeju Island",
        image: "images/baeknokdam_jeju.jpg",
        description: "Baeknokdam is a crater lake located at the summit of Hallasan Mountain, the tallest mountain in South Korea, on Jeju Island. Known for its breathtaking views, Baeknokdam attracts hikers and nature lovers. The lake is surrounded by lush vegetation and is said to have been formed thousands of years ago. It is one of Jeju’s most iconic natural landmarks, offering a serene and mystical atmosphere for those who reach its peak after a challenging hike.",
        wikipedia: "https://en.wikipedia.org/wiki/Baengnokdam"
    },
    "Namsan, Seoul": {
        title: "Namsan, Seoul",
        image: "images/namsan_seoul.jpg",
        description: "Namsan is a popular mountain located in central Seoul, home to the famous Namsan Seoul Tower. The mountain offers panoramic views of Seoul and is a popular spot for hiking. Visitors can also explore the Namsan Hanok Village, enjoy cable car rides, and experience the famous 'Love Locks' at the top of the tower. Namsan is a blend of nature and urban life, making it a perfect escape within the city.",
        wikipedia: "https://en.wikipedia.org/wiki/Namsan_(Seoul)"
    },
    "Hongdae, Seoul": {
        title: "Hongdae, Seoul",
        image: "images/hongdae_seoul.jpg",
        description: "Hongdae is a vibrant neighborhood in Seoul, known for its youthful energy, street art, and indie music scene. It’s a hub for arts, cafes, clubs, and live performances. Hongdae is famous for its unique shops and street performances, making it a popular destination for young people and tourists who want to experience Seoul’s modern and creative culture. The area also hosts a variety of cultural events and festivals throughout the year.",
        wikipedia: "https://en.wikipedia.org/wiki/Hongdae,_Seoul"
    }
};

// Function to display the content for a place
function showPlace(placeName) {
    const place = destinations[placeName];
    if (place) {
        document.getElementById('content').innerHTML = `
            <h2>${place.title}</h2>
            <img src="${place.image}" alt="${place.title}">
            <p>${place.description}</p>
            <a href="${place.wikipedia}" target="_blank">Learn more on Wikipedia</a>
        `;
    } else {
        document.getElementById('content').innerHTML = "<p>Destination not found.</p>";
    }
}

// Add event listeners to buttons
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        const placeName = button.textContent.trim();
        showPlace(placeName);
    });
});
