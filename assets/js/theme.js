import 'theme-change';
const checkbox = document.getElementById('theme-toggle');
const themes = checkbox.dataset.setThemeTarget.split(','); // 取得主題名稱

// 初始設定
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  document.documentElement.setAttribute('data-theme', storedTheme);
  checkbox.checked = storedTheme === themes[0]; // 根據儲存的主題設定 checkbox 狀態
} else {
    document.documentElement.setAttribute('data-theme', themes[1]);
    checkbox.checked = false;
}


checkbox.addEventListener('change', () => {
  const theme = checkbox.checked ? themes[0] : themes[1];
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme); // 儲存主題到 localStorage
});