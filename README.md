# pk-front-vue3

## 项目简介

`pk-front-vue3` 是一个基于 Vite、Vue 3 和 UnoCSS 的前端项目，集成了 PWA、页面路由、布局等功能。

## 主要特性

- **Vite**: 快速的开发构建工具
- **Vue 3**: 现代化的前端框架
- **UnoCSS**: 实用的 CSS 工具库
- **PWA**: 渐进式 Web 应用支持
- **自动导入**: 自动导入 Vue 组件和 API
- **布局系统**: 基于 `vite-plugin-vue-layouts` 的布局系统
- **Mock 数据**: 使用 `vite-plugin-mock` 进行数据模拟

## 安装与使用

### 克隆项目

```bash
git clone https://github.com/your-repo/pk-front-vue3.git
cd pk-front-vue3
```

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建项目

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

### 运行单元测试

```bash
pnpm test:unit
```

### 运行端到端测试

```bash
pnpm test:e2e
```

## 项目结构

```plaintext
pk-front-vue3/
├── src/
│   ├── layouts/          # 布局文件
│   ├── pages/            # 页面文件
│   ├── components/       # 组件文件
│   ├── assets/           # 静态资源
│   └── main.ts           # 入口文件
├── public/               # 公共资源
├── vite.config.ts        # Vite 配置
├── package.json          # 项目依赖
└── README.md             # 项目说明
```

## 贡献

欢迎提交 Issue 和 Pull Request 来贡献代码。

## 许可证

本项目基于 MIT 许可证。
