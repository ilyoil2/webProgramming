let path = localStorage.getItem('path') || "휴양";

localStorage.clear();


document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('path').textContent = path;
});

function selectSeason(season) {

  if (season === 'summer') {
    path += " > 여름";
    localStorage.setItem('path', path);
  } else {
    path += " > 겨울";
    localStorage.setItem('path', path);
  }
  window.location.href = "2option.html";

  document.getElementById('path').textContent = path;
}

function selectOption(option) {
  if (option === 'city') {
    path += " > 도시";
    localStorage.setItem('path', path);
  } else {
    path += " > 시골";
    localStorage.setItem('path', path);
  }
  window.location.href = "3activity.html";

  document.getElementById('path').textContent = path;
}

function selectActivity(activity) {
  if (activity === 'active') {
    path += " > 활발한";
    localStorage.setItem('path', path);
  } else {
    path += " > 조용한";
    localStorage.setItem('path', path);
  }
  window.location.href = "4habit.html";

  document.getElementById('path').textContent = path;
}

function selectHabit(habit) {
  if (habit === 'photo') {
    path += " > 사진";
    localStorage.setItem('path', path);
  } else {
    path += " > 음식";
    localStorage.setItem('path', path);
  }

  resultpage(path)

  for(let i = 0; i<2; i++){
    alert(`선택지는 ${path} 입니다`);
  }

  document.getElementById('path').textContent = path;
}

function resultpage(path) {
  if (path === "휴양 > 여름 > 도시 > 활발한 > 사진") {
      window.location.href = "result1 copy 1.html";
  } else if (path === "휴양 > 여름 > 도시 > 활발한 > 음식") {
      window.location.href = "result1 copy 2.html";
  } else if (path === "휴양 > 여름 > 도시 > 조용한 > 사진") {
      window.location.href = "result1 copy 3.html";
  } else if (path === "휴양 > 여름 > 도시 > 조용한 > 음식") {
      window.location.href = "result1 copy 4.html";
  } else if (path === "휴양 > 여름 > 시골 > 활발한 > 사진") {
      window.location.href = "result1 copy 5.html";
  } else if (path === "휴양 > 여름 > 시골 > 활발한 > 음식") {
      window.location.href = "result1 copy 6.html";
  } else if (path === "휴양 > 여름 > 시골 > 조용한 > 사진") {
      window.location.href = "result1 copy 7.html";
  } else if (path === "휴양 > 여름 > 시골 > 조용한 > 음식") {
      window.location.href = "result1 copy 8.html";
  } else if (path === "휴양 > 겨울 > 도시 > 활발한 > 사진") {
      window.location.href = "result1 copy 9.html";
  } else if (path === "휴양 > 겨울 > 도시 > 활발한 > 음식") {
      window.location.href = "result1 copy 10.html";
  } else if (path === "휴양 > 겨울 > 도시 > 조용한 > 사진") {
      window.location.href = "result1 copy 11.html";
  } else if (path === "휴양 > 겨울 > 도시 > 조용한 > 음식") {
      window.location.href = "result1 copy 12.html";
  } else if (path === "휴양 > 겨울 > 시골 > 활발한 > 사진") {
      window.location.href = "result1 copy 13.html";
  } else if (path === "휴양 > 겨울 > 시골 > 활발한 > 음식") {
      window.location.href = "result1 copy 14.html";
  } else if (path === "휴양 > 겨울 > 시골 > 조용한 > 사진") {
      window.location.href = "result1 copy 15.html";
  } else if (path === "휴양 > 겨울 > 시골 > 조용한 > 음식") {
      window.location.href = "result1 copy 16.html";
  }
}

const currentPage = window.location.pathname;

if (currentPage.includes('1season.html')) {
  document.getElementById('summerBtn').addEventListener('click', () => selectSeason('summer'));
  document.getElementById('winterBtn').addEventListener('click', () => selectSeason('winter'));
} else if (currentPage.includes('2option.html')) {
  document.getElementById('cityBtn').addEventListener('click', () => selectOption('city'));
  document.getElementById('countryBtn').addEventListener('click', () => selectOption('country'));
} else if (currentPage.includes('3activity.html')) {
  document.getElementById('activeBtn').addEventListener('click', () => selectActivity('active'));
  document.getElementById('quietBtn').addEventListener('click', () => selectActivity('quiet'));
} else if (currentPage.includes('habit.html')) {
  document.getElementById('photoBtn').addEventListener('click', () => selectHabit('photo'));
  document.getElementById('foodBtn').addEventListener('click', () => selectHabit('food'));
}
