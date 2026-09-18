/* ==================================================
   PKGJSON WORKS
   作品配置
================================================== */


/*
    ⭐ 添加 / 修改作品主要修改这里

    title:
        作品名称

    icon:
        作品图标

    description:
        作品介绍

    tags:
        技术标签

    ai:
        AI参与说明

    buttons:
        跳转按钮
*/


const works = [

    {
        title: "星穹铁道-遐蝶",

        icon: "🌌",

        description:
            "沉浸式游戏角色展示页面，加入动态流光与粒子效果。",

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        ai:
            "🤖 AI参与：视觉设计与动画优化",

        buttons: [

            {
                icon: "🚀",
                name: "GPT-4.0",
                description: "由gpt-4.0生成的作品",
                url: "../sr/xiadie/gpt-v2.html"
            },

            {
                icon: "💻",
                name: "GEMINI",
                description: "由gemini生成的作品",
                url: "../sr/xiadie/gemini-v2.html"
            }

        ]
    },


    {
        title: "崩坏系列-希儿",

        icon: "🌌",

        description:
            "沉浸式游戏角色展示页面，加入动态流光与粒子效果。",

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        ai:
            "🤖 AI参与：视觉设计与动画优化",

        buttons: [

            {
                icon: "🚀",
                name: "GEMINI",
                description: "由gemini生成的作品",
                url: "../sr/seele/gemini-v1.html"
            },

            {
                icon: "🔗",
                name: "源码页面",
                description: "跳转到github源码页面",
                url: "https://github.com/linkkk0/pagelab/blob/main/sr/xiadie/gemini-v2.html"
            }

        ]
    },


    {
        title: "AI未来主页",

        icon: "✨",

        description:
            "实验性 AI 网站首页，融合科技感与玻璃拟态视觉。",

        tags: [
            "AI",
            "CSS",
            "JavaScript"
        ],

        ai:
            "🤖 AI参与：从创意到代码生成",

        buttons: [

            {
                icon: "⚡",
                name: "立即体验",
                description: "这里填写按钮说明",
                url: "https://example.com"
            },

            {
                icon: "🔗",
                name: "项目地址",
                description: "这里填写按钮说明",
                url: "https://github.com/"
            }

        ]
    }

];



/* ==================================================
   创建按钮
================================================== */

function createButton(button) {

    return `

        <a
            class="work-button"
            href="${button.url}"
            target="_blank"
            rel="noopener noreferrer"
        >

            <span class="button-icon">
                ${button.icon}
            </span>

            <span class="button-name">
                ${button.name}
            </span>

            <span class="button-desc">
                ${button.description}
            </span>

        </a>

    `;
}



/* ==================================================
   创建作品卡片
================================================== */

function createWork(work) {

    const tags = work.tags
        .map(tag => `
            <span>
                ${tag}
            </span>
        `)
        .join("");


    const buttons = work.buttons
        .map(button => createButton(button))
        .join("");


    return `

        <article class="card">

            <div class="cover">
                ${work.icon}
            </div>


            <div class="info">

                <h2>
                    ${work.title}
                </h2>


                <p class="desc">
                    ${work.description}
                </p>


                <div class="stack">
                    ${tags}
                </div>


                <div class="ai">
                    ${work.ai}
                </div>


                <div class="buttons">
                    ${buttons}
                </div>

            </div>

        </article>

    `;
}



/* ==================================================
   渲染作品
================================================== */

const container =
    document.getElementById(
        "worksContainer"
    );


container.innerHTML =
    works
        .map(work => createWork(work))
        .join("");



/* ==================================================
   分类按钮
================================================== */

const categoryTags =
    document.querySelectorAll(".tag");


categoryTags.forEach(tag => {

    tag.addEventListener("click", () => {

        categoryTags.forEach(item => {
            item.classList.remove("active");
        });

        tag.classList.add("active");

    });

});