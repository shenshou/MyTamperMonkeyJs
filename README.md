# MyTamperMonkeyJs

个人油猴脚本项目仓库，集中开发、维护和发布适用于 Tampermonkey / Violentmonkey 的用户脚本。

## 项目边界

- 本仓库只存放用户脚本源码、脚本说明及发布所需内容。
- MyOnlineTools 是独立的在线工具平台，不存放或维护油猴脚本。
- 两个项目分别开发和发布；脚本不依赖 MyOnlineTools 的网页、构建产物或部署流程。

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
- 修改后根据改动范围进行代码审查、语法检查和必要的功能验证；暂不设置固定的自动化测试流程，待脚本规模增长或实际问题确有需要时再引入。
- 发布前更新对应脚本的版本号，并确认元数据中的更新地址仍指向本仓库的 Raw 文件。

## 工程规范

跨网站用户脚本开发的通用调查方法、工程判断与质量要求，参见：

- [跨网站油猴脚本开发规范](https://github.com/shenshou/AI-Development-Knowledge/blob/main/docs/%E8%B7%A8%E7%BD%91%E7%AB%99%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.md)
- [cross-site-userscript-engineering Skill](https://github.com/shenshou/AI-Development-Knowledge/blob/main/skills/cross-site-userscript-engineering/SKILL.md)

规范是按需参考的工程知识，不要求每个脚本采用相同架构或引入不必要的复杂度。

## 许可证

当前仓库未声明开源许可证。
