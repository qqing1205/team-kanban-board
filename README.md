# team-kanban-board
## 项目简介
这是一个简单的“团队任务看板”Web 应用，用于管理项目进度。基于原生 HTML、CSS 和 JavaScript 开发，数据使用浏览器的 LocalStorage 进行存储。

## 团队成员与角色分配
*   **项目负责人（郜晴晴）**：负责创建仓库、配置分支保护规则、审查 Pull Request（PR）以及最终的代码合并。
*   **前端开发者 A（林璨）**：负责看板的 UI 布局与任务卡片的展示（HTML/CSS）。
*   **前端开发者 B（刘梦璐）**：负责实现“创建新任务”和“删除任务”的功能（JavaScript）。
*   **前端开发者 C（陈可）**：负责实现任务卡片在不同列之间的“拖拽”功能。

## 核心工作流规范
本项目严格遵守标准的 Fork + Pull Request 协作流程：
1. 任何成员不得直接在 'main' 分支提交代码。
2. 开发者需 Fork 本仓库，并在自己的功能分支（如 'feature/ui'）上进行开发。
3. 开发完成后，向本仓库的 'main' 分支发起 Pull Request。
4. 需经过项目负责人 Code Review 并 Approve 后，方可使用 Squash and merge 合并。
