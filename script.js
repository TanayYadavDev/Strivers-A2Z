const a2zTopics=[
  {
    name:"Learn the basics",
    progress:"0/54",
    sections:[
      {
        title:"Things to Know in C++/Java/Python or any language",
        problems:[
          {name:"Input Output",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Cpp Basics",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"If ElseIf",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Switch Case",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"What are arrays, strings?",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"For loops",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"While loops",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Functions (Pass by Reference and Value)",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Theory with examples",difficulty:"Easy",article:"#",video:"#",practice:"#"}
        ]
      },

      {
        title:"Build-up Logical Thinking",
        problems:[
          {name:"Easy and Medium",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Hard",difficulty:"Easy",article:"#",video:"#",practice:"#"}
        ]
      },

      {
        title:"Patterns",
        problems:[
          {name:"Pattern Problems",difficulty:"Easy",article:"#",video:"#",practice:"#"}
        ]
      },

      {
        title:"Learn STL/Java-Collections or similar thing in your language",
        problems:[
          {name:"STL",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Java Collections",difficulty:"Easy",article:"#",video:"#",practice:"#"}
        ]
      },

      {
        title:"Know Basic Maths",
        problems:[
          {name:"Count all Digits of a Number",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Reverse a number",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Palindrome Number",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"GCD of Two Numbers",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Check if the Number is Armstrong",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Print all Divisors",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Check for Prime Number",difficulty:"Easy",article:"#",video:"#",practice:"#"}
        ]
      },

      {
        title:"Learn Basic Recursion",
        problems:[
          {name:"Understand recursion by print something N times",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Print name N times using recursion",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Print 1 to N using Recursion",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Print N to 1 using Recursion",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Sum of First N Numbers",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Factorial of a given number",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Reverse an array",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Check if String is Palindrome or Not",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Fibonacci Number",difficulty:"Easy",article:"#",video:"#",practice:"#"}
        ]
      },

      {
        title:"Learn Basic Hashing",
        problems:[
          {name:"Basic Hashing",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Counting Frequencies of Array Elements",difficulty:"Easy",article:"#",video:"#",practice:"#"},
          {name:"Highest Occurring Element in an Array",difficulty:"Easy",article:"#",video:"#",practice:"#"}
        ]
      }
    ]
  },

  {
    name:"Learn Important Sorting Techniques",
    progress:"0/7",
    sections:[]
  },

  {
    name:"Solve Problems on Arrays [Easy -> Medium -> Hard]",
    progress:"0/40",
    sections:[]
  }
];

function renderTopics(){
  const container=document.getElementById('topics-container');
  let html='';
  a2zTopics.forEach((topic,index)=>{
    html+=`
    <div class="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
      <div onclick="toggleTopic(this,${index})" class="topic-header px-5 py-4 flex justify-between items-center cursor-pointer">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-chevron-right text-xs text-gray-400 transition-transform duration-300 nested-icon"></i>
          <span class="font-medium text-[15px] text-white">${topic.name}</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-28 bg-gray-700 h-1 rounded-full overflow-hidden">
            <div class="h-1 bg-orange-500 w-0"></div>
          </div>
          <span class="text-xs text-gray-400">${topic.progress}</span>
        </div>
      </div>

      <div class="inner-content" id="content-${index}">
        ${topic.sections.map((section,sectionIndex)=>`
        <div class="border-t border-gray-800">
          <div onclick="toggleSubtopic(${index},${sectionIndex},this)" class="subtopic-header ml-5 mr-2 px-5 py-4 flex justify-between items-center cursor-pointer rounded-xl">
            <div class="flex items-center gap-3">
              <i class="fa-solid fa-chevron-right text-[11px] text-gray-500 transition-transform duration-300 subtopic-icon"></i>
              <span class="text-sm font-medium text-gray-200">${section.title}</span>
            </div>

            <div class="flex items-center gap-3">
              <div class="w-24 bg-gray-700 h-1 rounded-full overflow-hidden">
                <div class="h-1 bg-orange-500 w-0"></div>
              </div>

              <span class="text-xs text-gray-500">
                0 / ${section.problems.length}
              </span>
            </div>
          </div>

          <div class="nested-subcontent" id="subcontent-${index}-${sectionIndex}">
            <div class="px-6 pb-4 pt-2">
              <div class="overflow-x-auto rounded-2xl border border-gray-800">
                <table class="w-full text-sm min-w-[950px]">
                  <thead class="bg-[#0d0d0d] text-gray-400">
                    <tr>
                      <th class="text-left px-4 py-4">Status</th>
                      <th class="text-left px-4 py-4">Problem</th>
                      <th class="text-left px-4 py-4">Plus</th>
                      <th class="text-left px-4 py-4">Resource</th>
                      <th class="text-left px-4 py-4">Resource</th>
                      <th class="text-left px-4 py-4">Practice</th>
                      <th class="text-left px-4 py-4">Note</th>
                      <th class="text-left px-4 py-4">Revision</th>
                      <th class="text-left px-4 py-4">Difficulty</th>
                    </tr>
                  </thead>

                  <tbody>
                    ${section.problems.map(problem=>`
                    <tr class="border-t border-gray-800 hover:bg-[#161616] transition-colors">
                      <td class="px-4 py-4">
                        <input type="checkbox" class="accent-orange-500 scale-110">
                      </td>

                      <td class="px-4 py-4 font-medium text-gray-200">
                        ${problem.name}
                      </td>

                      <td class="px-4 py-4">
                        <a href="#" class="text-orange-400 hover:text-orange-300 text-xs font-medium">
                          Solve
                        </a>
                      </td>

                      <td class="px-4 py-4">
                        <a href="${problem.article}" target="_blank">
                          <i class="fa-solid fa-video text-orange-400"></i>
                        </a>
                      </td>

                      <td class="px-4 py-4">
                        <a href="${problem.video}" target="_blank">
                          <i class="fa-solid fa-file-lines text-gray-400"></i>
                          <i class="fa-brands fa-youtube text-red-500 ml-2"></i>
                        </a>
                      </td>

                      <td class="px-4 py-4 text-gray-500">
                        ---
                      </td>

                      <td class="px-4 py-4">
                        <button class="text-gray-400 hover:text-white">
                          <i class="fa-solid fa-circle-plus"></i>
                        </button>
                      </td>

                      <td class="px-4 py-4">
                        <button class="text-gray-500 hover:text-yellow-400">
                          <i class="fa-regular fa-star"></i>
                        </button>
                      </td>

                      <td class="px-4 py-4">
                        <span class="difficulty-badge easy">
                          ${problem.difficulty}
                        </span>
                      </td>
                    </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
    `;
  });

  container.innerHTML=html;
}

function toggleTopic(el,index){
  const content=document.getElementById(`content-${index}`);
  const icon=el.querySelector('.nested-icon');

  if(content.classList.contains('open')){
    content.style.maxHeight=content.scrollHeight+'px';

    setTimeout(()=>{
      content.classList.remove('open');
      content.style.maxHeight='0px';
    },10);

    icon.classList.remove('rotate-90');
  }
  else{
    content.classList.add('open');
    content.style.maxHeight=content.scrollHeight+'px';
    icon.classList.add('rotate-90');
  }
}

function toggleSubtopic(topicIndex,sectionIndex,el){
  const content=document.getElementById(`subcontent-${topicIndex}-${sectionIndex}`);
  const parentContent=document.getElementById(`content-${topicIndex}`);
  const icon=el.querySelector('.subtopic-icon');

  if(content.classList.contains('open')){
    const currentHeight=content.scrollHeight;

    content.style.maxHeight=currentHeight+'px';
    parentContent.style.maxHeight=parentContent.scrollHeight+'px';

    requestAnimationFrame(()=>{
      content.style.maxHeight='0px';
      parentContent.style.maxHeight=
        (parentContent.scrollHeight-currentHeight)+'px';
    });

    content.classList.remove('open');
    icon.classList.remove('rotate-90');
  }
  else{
    content.classList.add('open');

    const targetHeight=content.scrollHeight;

    content.style.maxHeight='0px';

    requestAnimationFrame(()=>{
      parentContent.style.maxHeight=
        (parentContent.scrollHeight+targetHeight)+'px';

      content.style.maxHeight=targetHeight+'px';
    });

    icon.classList.add('rotate-90');
  }
}

function switchTab(n){
  document.querySelectorAll('.tab-btn').forEach((btn,i)=>{
    if(i===n){
      btn.classList.add('active','bg-[#2a2a2a]','text-white');
    }
    else{
      btn.classList.remove('active','bg-[#2a2a2a]','text-white');
    }
  });
}

function showSpotify(){
  document.getElementById('default-content').classList.add('hidden');
  document.getElementById('spotify-content').classList.remove('hidden');
}

function showDefaultRightSidebar(){
  document.getElementById('default-content').classList.remove('hidden');
  document.getElementById('spotify-content').classList.add('hidden');
}

function loadCustomPlaylist(){
  let url=document.getElementById('playlist-url').value.trim();
  const iframe=document.getElementById('spotify-player');

  if(url.includes('spotify.com')){
    if(!url.includes('/embed/')){
      url=url.replace('open.spotify.com/','open.spotify.com/embed/');
    }

    iframe.src=url;
  }
  else{
    alert("Please paste a valid Spotify playlist link");
  }
}

renderTopics();
switchTab(0);
showDefaultRightSidebar();