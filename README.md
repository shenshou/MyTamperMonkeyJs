# MyTamperMonkeyJs

个人油猴脚本项目仓库，集中开发、维护和发布适用于 Tampermonkey / Violentmonkey 的用户脚本。

## 项目边界

- 本仓库只存放用户脚本源码、脚本说明、测试与发布相关内容。
- MyOnlineTools 是独立的在线工具平台，不存放或维护油猴脚本。
- 两个项目分别开发、测试和发布；脚本不依赖 MyOnlineTools 的网页、构建产物或部署流程。

## 脚本列表

| 脚本 | 适用网站 | 当前版本 | 功能 |
| --- | --- | --- | --- |
| [JavDB 评论批量搜索](scripts/javdb-review-batch.user.js) | JavDB | 1.1.1 | 批量搜索番号并获取评论，支持筛选、展开、复制、暂停与继续 |
| [LTX 批量番号存在性检测](scripts/ltx-batch-checker.user.js) | LTX | 1.2.1 | 批量检测番号是否存在，并获取 magnet / ed2k 资源链接 |

## 安装

安装 Tampermonkey 或 Violentmonkey 后，打开对应 Raw 地址安装：

- [安装 JavDB 评论批量搜索](https://raw.githubusercontent.com/shenshou/MyTamperMonkeyJs/main/scripts/javdb-review-batch.user.js)
- [安装 LTX 批量番号存在性检测](https://raw.githubusercontent.com/shenshou/MyTamperMonkeyJs/main/scripts/ltx-batch-checker.user.js)

脚本更新由各自的 `@downloadURL` / `@updateURL` 指向本仓库的 Raw 文件。安装后由用户脚本管理器按其更新机制检查更新。

## 开发与维护

- 每个脚本保持独立文件、独立版本号和独立适用范围。
- 修改前先调查目标网站当前页面行为、接口协议、认证边界和访问限制；不把一个网站的专属实现直接套用到另一个网站。
- 对批量请求明确处理请求间隔、分页、失败分类、暂停/停止和有限重试；不绕过登录、验证码、访问控制或网站风控。
- 修改后至少进行语法检查，并根据改动范围执行静态检查、模拟测试和真实浏览器验证。自动化测试不能替代需要登录态或真实上游接口的验证。
- 发布前更新对应脚本的版本号，并确认元数据中的更新地址仍指向本仓库的 Raw 文件。

### 本地质量检查

需要 Node.js 24 或兼容的较新版本。

```bash
npm install
```

检查单个脚本的语法：

```bash
node --check scripts/javdb-review-batch.user.js
```

运行 ESLint 检查全部脚本：

```bash
npm run lint
```

也可以只检查指定脚本：

```bash
npx eslint scripts/javdb-review-batch.user.js
```

GitHub Actions 只在 PR 涉及用户脚本或质量检查配置时启动。它会根据 PR 的文件差异选择检查范围：普通脚本变更只检查变更的脚本；ESLint、依赖或工作流配置变更则检查全部脚本。README、文档等无关文件变更不会触发检查。当前阶段不引入构建工具或浏览器自动化；当出现适合独立测试的业务逻辑时，再按需增加单元测试。

## 工程规范

跨网站用户脚本开发的通用调查方法、工程判断与质量要求，参见：

- [跨网站油猴脚本开发规范](https://github.com/shenshou/AI-Development-Knowledge/blob/main/docs/%E8%B7%A8%E7%BD%91%E7%AB%99%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.md)
- [cross-site-userscript-engineering Skill](https://github.com/shenshou/AI-Development-Knowledge/blob/main/skills/cross-site-userscript-engineering/SKILL.md)

规范是按需参考的工程知识，不要求每个脚本采用相同架构或引入不必要的复杂度。

## 许可证

当前仓库未声明开源许可证。
