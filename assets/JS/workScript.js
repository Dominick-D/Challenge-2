const imagesData = [
    {
        "imageUrl": "./Assets/Images/Work/Anime Sensei.png",
        "linkUrl": "https://jlevbury.github.io/get-in-the-repo-shinji/anime.html",
        "githubUrl": "https://github.com/Jlevbury/get-in-the-repo-shinji",
        "description": "\"Get in the Repo, Shinji\" is an anime-themed website featuring a curated collection of anime reviews, recommendations, and discussions. Explore the world of anime with engaging content and multimedia elements, and connect with fellow fans in a vibrant community."
    },
    {
        "imageUrl": "./Assets/Images/Work/JavaScript Quiz.png",
        "linkUrl": "https://dominick-d.github.io/JavaScript_Quiz---Challenge_5/",
        "githubUrl": "https://github.com/Dominick-D/JavaScript_Quiz---Challenge_5",
        "description": "\"JavaScript Quiz\" is an interactive quiz application designed to test your knowledge of JavaScript. Put your coding skills to the test with challenging questions and see how well you fare."
    },
    {
        "imageUrl": "./Assets/Images/Work/Random Password Generator.png",
        "linkUrl": "https://dominick-d.github.io/Password-Generator/",
        "githubUrl": "https://github.com/Dominick-D/Password-Generator",
        "description": "\"Random Password Generator\" is a handy tool for generating strong and secure passwords. With customizable options, you can generate passwords with specific length and character types."
    },
    {
        "imageUrl": "./Assets/Images/Work/Weather App.png",
        "linkUrl": "https://dominick-d.github.io/Weather-2-Go/",
        "githubUrl": "https://github.com/Dominick-D/Weather-2-Go",
        "description": "\"Weather-2-Go\" is a weather forecast application that provides current weather information and forecasts for cities worldwide. Stay prepared and plan your activities with accurate weather data, including temperature, humidity, wind speed, and more!"
    },
    {
        "imageUrl": "./Assets/Images/Work/Work Day Scheduler.png",
        "linkUrl": "https://dominick-d.github.io/Workday-Schedule/",
        "githubUrl": "https://github.com/Dominick-D/Workday-Schedule",
        "description": "\"Workday Schedule\" is a productivity tool that helps you manage your daily tasks and appointments. Keep track of your schedule and organize your workday effectively. Never miss an important deadline or meeting again with Workday Schedule."
    },
    {
        "imageUrl": "./Assets/Images/placeholder.jpg",
        "linkUrl": "#",
        "githubUrl": "#",
        "description": "Description: 6"
    },
    {
        "imageUrl": "./Assets/Images/placeholder.jpg",
        "linkUrl": "#",
        "githubUrl": "#",
        "description": "Description: 7"
    },
    {
        "imageUrl": "./Assets/Images/placeholder.jpg",
        "linkUrl": "#",
        "githubUrl": "#",
        "description": "Description: 8"
    },
    {
        "imageUrl": "./Assets/Images/placeholder.jpg",
        "linkUrl": "#",
        "githubUrl": "#",
        "description": "Description: 9"
    },
    {
        "imageUrl": "./Assets/Images/placeholder.jpg",
        "linkUrl": "#",
        "githubUrl": "#",
        "description": "Description: 10"
    }
];

function switchTabs() {
    const tabs = document.querySelectorAll('.tabs li');
    const tabContents = document.querySelectorAll('.columns');
    const titleImg = document.getElementById('title-img'); 

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('is-active'));
            tab.classList.add('is-active');

            tabContents.forEach(content => content.classList.add('is-hidden'));
            tabContents[index].classList.remove('is-hidden');

            // Switch the title image
            if (index === 0) {
                titleImg.src = "./Assets/Images/Titles/Work_title.png";
                titleImg.alt = "Work";
            } else if (index === 1) {
                titleImg.src = "./Assets/Images/Titles/Photography_title.png";
                titleImg.alt = "Photography";
            }
        });
    });
}


function handleDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        let trigger = dropdown.querySelector('.dropdown-trigger button');
        trigger.addEventListener('click', () => {
            dropdown.classList.toggle('is-active');
        });

        let imageContainer = dropdown.closest('.work-image-container');
        imageContainer.addEventListener('mouseleave', () => {
            dropdown.classList.remove('is-active');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Add tabs functionality to the Work page
    if (document.querySelector('.tabs')) {
        switchTabs();
    }

    const imageColumns = document.getElementById("image-columns");
    imagesData.forEach((imageData, index) => {
        const columnDiv = document.createElement("div");
        columnDiv.className = "column work";
        columnDiv.innerHTML = `
        <div class="work-image-container">
            <div class="zoom-container">
                <a href="${imageData.linkUrl}" target="_blank">
                    <img src="${imageData.imageUrl}" alt="Image ${index + 1}" class="work-image">
                </a>
            </div>
            <div class="column" id="dropdown-column">
            <div class="dropdown" id="dropdown-container">
                <div class="dropdown-trigger" id="test1">
                    <button class="button desc-button" id="desc-button-${index}" aria-haspopup="true" aria-controls="dropdown-menu-${index}">
                        <div class="noise-overlay"></div>
                        <span>Description</span>
                        
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu-${index}" role="menu">
                    <div class="dropdown-content">
                        <div class="dropdown-item has-text-centered">
                            <p>${imageData.description}</p>
                        </div>
                        <div class="dropdown-item has-text-centered">
                            <a href="${imageData.githubUrl}" target="_blank" class="button is-small is-outlined is-dark">Repo</a>
                            <a href="${imageData.linkUrl}" target="_blank" class="button is-small is-outlined is-dark">Website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div/>
        </div>`;
    
        imageColumns.appendChild(columnDiv);
    });
    handleDropdowns();
});
