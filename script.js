const skillsContainer =
document.getElementById("skills-container");

const skills = [

    {
        name: "HTML",
        progress: 80
    },

    {
        name: "CSS",
        progress: 75
    },

    {
        name: "JavaScript",
        progress: 45
    },

    {
        name: "Python",
        progress: 35
    },

    {
        name: "React",
        progress: 5
    }

];

function renderSkills() {

    skillsContainer.innerHTML = "";

    skills.forEach((skill) => {

        const card =
        document.createElement("div");

        card.classList.add("skill-card");

        card.innerHTML = `

            <div class="skill-header">

                <h3>${skill.name}</h3>

                <span>${skill.progress}%</span>

            </div>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width:${skill.progress}%"
                >
                </div>

            </div>

            <button class="increase-btn">
                +5% Progress
            </button>

        `;

        const button =
        card.querySelector(".increase-btn");

        button.addEventListener("click", function(){

            if(skill.progress < 100){

                skill.progress += 5;

                if(skill.progress > 100){

                    skill.progress = 100;
                }

                renderSkills();
            }

        });

        skillsContainer.appendChild(card);

    });

}

renderSkills();