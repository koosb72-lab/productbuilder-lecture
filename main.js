const recommendBtn = document.getElementById('recommend-btn');
const categorySelect = document.getElementById('category-select');
const menuCategory = document.getElementById('menu-category');
const menuName = document.getElementById('menu-name');
const menuDescription = document.getElementById('menu-description');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

const THEME_KEY = 'theme';

const dinnerMenus = [
  { category: '한식', name: '김치찌개', description: '따끈한 국물에 밥 한 공기 곁들이기 좋은 메뉴' },
  { category: '한식', name: '제육볶음', description: '매콤달콤한 양념으로 든든하게 먹기 좋은 메뉴' },
  { category: '한식', name: '비빔밥', description: '채소와 고기를 한 그릇에 균형 있게 먹는 메뉴' },
  { category: '중식', name: '마파두부덮밥', description: '얼큰하고 부드러운 두부가 매력적인 덮밥' },
  { category: '중식', name: '짜장면', description: '부담 없이 즐기기 좋은 클래식 면 요리' },
  { category: '중식', name: '짬뽕', description: '해산물 풍미와 칼칼한 국물이 당길 때 좋은 메뉴' },
  { category: '일식', name: '가츠동', description: '바삭한 돈가스를 달걀과 함께 올린 든든한 한 그릇' },
  { category: '일식', name: '연어덮밥', description: '가볍지만 만족감 높은 생연어 덮밥' },
  { category: '일식', name: '우동', description: '부드러운 면발과 따뜻한 국물로 편하게 먹는 메뉴' },
  { category: '양식', name: '크림파스타', description: '진한 소스가 당길 때 좋은 고소한 메뉴' },
  { category: '양식', name: '토마토파스타', description: '상큼한 토마토 소스로 깔끔하게 즐기는 메뉴' },
  { category: '양식', name: '스테이크', description: '특별한 저녁으로 분위기 내기 좋은 메뉴' },
  { category: '분식', name: '떡볶이', description: '매콤달콤하게 즐기는 대표 분식 메뉴' },
  { category: '분식', name: '라볶이', description: '라면과 떡볶이를 함께 즐기는 든든한 조합' },
  { category: '분식', name: '김밥', description: '가볍고 간편하게 먹기 좋은 메뉴' },
  { category: '간편식', name: '샐러드볼', description: '가볍고 산뜻하게 마무리하고 싶을 때 좋은 선택' },
  { category: '간편식', name: '샌드위치', description: '빠르고 간편하게 먹기 좋은 메뉴' },
  { category: '간편식', name: '닭가슴살 도시락', description: '담백하고 균형 있게 먹기 좋은 메뉴' }
];

const pickRandomMenu = (menus) => {
  const index = Math.floor(Math.random() * menus.length);
  return menus[index];
};

const recommendMenu = () => {
  const selectedCategory = categorySelect.value;
  const candidates = selectedCategory === 'all'
    ? dinnerMenus
    : dinnerMenus.filter((menu) => menu.category === selectedCategory);

  const selectedMenu = pickRandomMenu(candidates);
  menuCategory.textContent = selectedMenu.category;
  menuName.textContent = selectedMenu.name;
  menuDescription.textContent = selectedMenu.description;
};

const setTheme = (theme) => {
  document.body.dataset.theme = theme;
  themeToggleBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
};

const initTheme = () => {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === 'dark' || storedTheme === 'light') {
    setTheme(storedTheme);
    return;
  }

  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(systemDark ? 'dark' : 'light');
};

themeToggleBtn.addEventListener('click', () => {
  const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
});

recommendBtn.addEventListener('click', recommendMenu);
categorySelect.addEventListener('change', recommendMenu);

initTheme();
recommendMenu();
