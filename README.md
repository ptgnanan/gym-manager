# Gym Management System

一个基于 **Spring Boot 3 + Vue 3** 的前后端分离健身房会员管理系统骨架项目。

## 项目结构

```text
D:\workCode\gym
├─ gym-management-server   # 后端服务
├─ gym-management-admin    # 后台管理端
└─ README.md
```

## 技术栈

### 后端
- JDK 21
- Spring Boot 3.3.x
- Spring Security
- JWT（预留）
- MyBatis-Plus
- MySQL 8
- Lombok
- springdoc-openapi

### 前端
- Vue 3
- Vite
- TypeScript
- Element Plus
- Pinia
- Vue Router
- Axios
- SCSS
- ECharts（预留）

## 业务模块规划
- 仪表盘 dashboard
- 系统管理 system（用户 / 角色 / 菜单）
- 会员管理 member（会员 / 等级 / 套餐 / 订单 / 充值）
- 教练管理 coach
- 课程管理 course（类型 / 课程 / 排期 / 预约）
- 反馈管理 feedback（评价 / 身体指标）
- 器材管理 equipment（器材 / 入库 / 出库 / 维护）
- 内容管理 content（轮播图 / 公告 / 站点内容）

## 启动方式

### 1. 后端
```bash
cd gym-management-server
mvn spring-boot:run
```

### 2. 前端
```bash
cd gym-management-admin
npm install
npm run dev
```

## 说明
- 当前版本为第一阶段项目骨架
- 重点是完成现代化项目结构、UI 基础框架、数据库草案
- 后续将在此基础上逐步补充业务 CRUD 和权限控制
