function showPlace(place) {
    const content = document.getElementById('content');

    if (place === 'jeonju') {
        content.innerHTML = "<h2>Jeonju Hanok Village</h2>" +
                            "<p>Jeonju Hanok Village is a traditional Korean village with over 800 traditional Korean hanok houses.</p>" +
                            "<h3>Things to Do:</h3>" +
                            "<ul><li>Wear a hanbok (Korean traditional dress)</li>" +
                            "<li>Try Jeonju bibimbap</li>" +
                            "<li>Explore the traditional tea houses</li></ul>";
    } else if (place === 'hangang') {
        content.innerHTML = "<h2>Hangang River, Seoul</h2>" +
                            "<p>The Hangang River flows through Seoul, offering beautiful views and plenty of recreational activities.</p>" +
                            "<h3>Things to Do:</h3>" +
                            "<ul><li>Rent a bike and ride along the river</li>" +
                            "<li>Enjoy a riverside picnic</li>" +
                            "<li>Take a night cruise on the river</li></ul>";
    } else if (place === 'baeknokdam') {
        content.innerHTML = "<h2>Baeknokdam, Jeju Island</h2>" +
                            "<p>Baeknokdam is a volcanic crater lake located at the peak of Hallasan Mountain on Jeju Island.</p>" +
                            "<h3>Things to Do:</h3>" +
                            "<ul><li>Hike up Hallasan Mountain</li>" +
                            "<li>Enjoy the scenic views of the crater lake</li>" +
                            "<li>Experience the unique flora and fauna of Jeju Island</li></ul>";
    } else if (place === 'namsan') {
        content.innerHTML = "<h2>Namsan, Seoul</h2>" +
                            "<p>Namsan is a popular mountain in the center of Seoul, home to the iconic N Seoul Tower.</p>" +
                            "<h3>Things to Do:</h3>" +
                            "<ul><li>Visit N Seoul Tower and enjoy panoramic views of Seoul</li>" +
                            "<li>Take a leisurely walk up the mountain</li>" +
                            "<li>See the famous love locks at N Seoul Tower</li></ul>";
    } else if (place === 'hongdae') {
        content.innerHTML = "<h2>Hongdae, Seoul</h2>" +
                            "<p>Hongdae is a vibrant area known for its youthful energy, arts, and indie music scene.</p>" +
                            "<h3>Things to Do:</h3>" +
                            "<ul><li>Explore street art and mural alleys</li>" +
                            "<li>Visit unique cafes and restaurants</li>" +
                            "<li>Enjoy live performances and street busking</li></ul>";
    } else {
        content.innerHTML = "<p>Select a tourist spot to see more information here.</p>";
    }
}
