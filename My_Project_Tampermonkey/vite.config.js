import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/Apps/Erase_BackgroundImg/main.js',
      userscript: {
        name: ' 网页背景图片清除Pro(含伪元素检测)--ts创建修改',
        namespace: 'npm/vite-plugin-monkey',
        // 【关键】修改为你想要测试的网址，支持通配符
        match: [
          'https://zh.moegirl.org.cn/*', 
          'https://*.moegirl.org.cn/*'
        ],
        // 如果你需要用到 GM_addStyle 等高级函数，在这里声明
        grant: ['GM_addStyle', 'GM_getValue', 'GM_setValue'],
        author: 'ts-from_Gemini',
        description: '强制删除所有网页标签及其伪元素(::before, ::after)的背景图-基于 Vite 的专业魔改脚本',
      },
    }),
    monkey({
      entry: '',
      userscript: {
        name: '',
        namespace: 'npm/vite-plugin-monkey',
        // 【关键】修改为你想要测试的网址，支持通配符
        match: [
          
        ],
        // 如果你需要用到 GM_addStyle 等高级函数，在这里声明
        grant: ['GM_addStyle', 'GM_getValue', 'GM_setValue'],
        author: 'ts-from_Gemini',
        description: '',
      },
    }),
  ],
});
