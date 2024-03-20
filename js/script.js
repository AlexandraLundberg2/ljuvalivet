
    var genderSelect = document.getElementById("match-gender");
    var femaleCards = document.querySelectorAll(".card.female");
    var maleCards = document.querySelectorAll(".card.male");

    genderSelect.addEventListener("change", function() {
        var selectedValue = genderSelect.value;
        if (selectedValue === "female") {
            showElements(femaleCards);
            hideElements(maleCards);
        } else if (selectedValue === "male") {
            showElements(maleCards);
            hideElements(femaleCards);
        }
    });

    function showElements(elements) {
        elements.forEach(function(element) {
            element.style.display = "block";
        });
    }

    function hideElements(elements) {
        elements.forEach(function(element) {
            element.style.display = "none";
        });
    }


    var heart = document.getElementById('heart');

function toggleHeart() {
    if (heart.style.display === 'none') {
        heart.style.display = 'block';
    } else {
        heart.style.display = 'none';
    }
}

document.querySelector('.like-btn').addEventListener('click', function() {
    toggleHeart();
});

heart.addEventListener('click', function() {
    toggleHeart();
});


// Hämta alla knappar med klassen "comment-btn"
var commentButtons = document.querySelectorAll('.comment-btn');

// Loopa genom varje knapp och lägg till en händelselyssnare
commentButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var targetId = button.getAttribute('data-target');
        var chatBox = document.getElementById(targetId);

        if (chatBox.style.display === 'block') {
            chatBox.style.display = 'none'; // Dölj text rutan om den redan är synlig
        } else {
            chatBox.style.display = 'block'; // Visa text rutan om den är dold
        }
    });
});

// Hämta alla knappar med klassen "send-message-btn"
var sendButtons = document.querySelectorAll('.send-message-btn');

// Loopa genom varje knapp och lägg till en händelselyssnare
sendButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var message = button.parentElement.querySelector('.chat-textarea').value;
        console.log("Meddelande: " + message); // Här kan du göra något meddelande
    });
});