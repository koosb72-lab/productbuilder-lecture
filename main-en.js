const recommendBtn = document.getElementById('recommend-btn');
const categorySelect = document.getElementById('category-select');
const menuCategory = document.getElementById('menu-category');
const menuName = document.getElementById('menu-name');
const menuDescription = document.getElementById('menu-description');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

const THEME_KEY = 'theme';

const dinnerMenus = [
  { category: 'Korean', name: 'Kimchi Stew', description: 'A warm and hearty stew that goes perfectly with rice.' },
  { category: 'Korean', name: 'Spicy Pork Bulgogi', description: 'Savory and spicy stir-fried pork for a filling dinner.' },
  { category: 'Korean', name: 'Bibimbap', description: 'A balanced rice bowl with vegetables, meat, and egg.' },
  { category: 'Chinese', name: 'Mapo Tofu Rice', description: 'Spicy tofu over rice with rich and bold flavor.' },
  { category: 'Chinese', name: 'Jajangmyeon', description: 'Noodles with black bean sauce, simple and satisfying.' },
  { category: 'Chinese', name: 'Jjamppong', description: 'Spicy seafood noodle soup with deep umami taste.' },
  { category: 'Japanese', name: 'Katsudon', description: 'Crispy pork cutlet and egg served over rice.' },
  { category: 'Japanese', name: 'Salmon Rice Bowl', description: 'Fresh salmon over rice for a light but rich meal.' },
  { category: 'Japanese', name: 'Udon', description: 'Comforting noodle soup with soft chewy noodles.' },
  { category: 'Western', name: 'Cream Pasta', description: 'Rich and creamy pasta for a cozy dinner.' },
  { category: 'Western', name: 'Tomato Pasta', description: 'Fresh and tangy pasta with tomato sauce.' },
  { category: 'Western', name: 'Steak', description: 'A classic dinner choice for a special evening.' },
  { category: 'Snack', name: 'Tteokbokki', description: 'Chewy rice cakes in a sweet and spicy sauce.' },
  { category: 'Snack', name: 'Rabokki', description: 'A fun combo of ramen and tteokbokki in one dish.' },
  { category: 'Snack', name: 'Kimbap', description: 'A quick and easy rolled rice meal.' },
  { category: 'Light', name: 'Salad Bowl', description: 'A fresh and lighter choice for dinner.' },
  { category: 'Light', name: 'Sandwich', description: 'Fast and convenient when you want something simple.' },
  { category: 'Light', name: 'Chicken Breast Lunchbox', description: 'A protein-focused and balanced meal option.' }
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
