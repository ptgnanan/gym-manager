# Gym Management System

一个基于 **Spring Boot 3 + Vue 3** 的前后端分离健身房会员管理系统。

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
- Spring Security + JWT
- MyBatis-Plus
- MySQL 8
- Lombok
- BCrypt 密码加密
- springdoc-openapi

### 前端
- Vue 3 (Composition API)
- Vite
- TypeScript
- Element Plus
- Vue Router
- Axios
- SCSS

## 功能模块

### 已完成
- ✅ JWT 认证系统（登录/注册/登出/token验证）
- ✅ 会员管理（会员/等级/套餐/订单）
- ✅ 教练管理（教练信息CRUD）
- ✅ 课程管理（课程信息CRUD）
- ✅ 器材管理（器材信息CRUD）
- ✅ 反馈管理（评价/身体指标）
- ✅ 内容管理（轮播图/公告）
- ✅ 仪表盘统计

### 待完善
- ⏳ 系统管理（用户/角色/菜单权限）
- ⏳ 表单验证
- ⏳ 分页功能
- ⏳ 数据导出

## 快速开始

### 1. 数据库准备

```bash
# 创建数据库并导入表结构
mysql -u root -p < gym-management-server/src/main/resources/db/schema.sql

# 导入初始数据（包含管理员账号和测试数据）
mysql -u root -p gym_management < gym-management-server/src/main/resources/db/init-data.sql
```

**默认管理员账号：**
- 用户名：`admin`
- 密码：`admin123`

### 2. 启动后端

```bash
cd gym-management-server
mvn spring-boot:run
```

后端服务将在 `http://localhost:8088` 启动

### 3. 启动前端

```bash
cd gym-management-admin
npm install
npm run dev
```

前端服务将在 `http://localhost:5173` 启动

### 4. 访问系统

打开浏览器访问 `http://localhost:5173`，使用默认管理员账号登录。

## 核心功能说明

### 认证系统
- 使用 JWT Token 进行身份验证
- 密码使用 BCrypt 加密存储
- 前端自动在请求头添加 Authorization
- Token 过期自动跳转登录页
- 路由守卫保护需要登录的页面

### 数据库设计
- 30张表覆盖健身房全业务流程
- 使用 MyBatis-Plus 简化 CRUD 操作
- 自动填充创建时间和更新时间
- 软删除支持（status字段）

### API 设计
- RESTful 风格接口
- 统一响应格式 ApiResponse
- 全局异常处理
- Swagger API 文档（访问 `/swagger-ui.html`）

## 配置说明

### 后端配置

修改 `gym-management-server/src/main/resources/application-dev.yml`：

```yaml
spring:
  datasource:
    url: jdbc:mysql://127.0.0.1:3306/gym_management
    username: root
    password: 123456  # 修改为你的数据库密码

jwt:
  secret: your-secret-key  # 生产环境请修改
  expiration: 86400000  # token有效期24小时
```

### 前端配置

修改 `gym-management-admin/src/utils/request.ts` 中的 `baseURL` 如果后端地址不同。

## 项目亮点

1. **现代化技术栈**：Spring Boot 3 + Vue 3 最新版本
2. **完整认证系统**：JWT + BCrypt 安全可靠
3. **清晰架构**：分层设计，模块化开发
4. **美观UI**：现代玻璃态设计风格
5. **真实业务**：覆盖健身房实际运营场景
6. **可扩展性**：易于添加新功能模块

## 开发说明

### 添加新模块步骤

1. 后端：创建 Entity、Mapper、Service、Controller
2. 前端：创建 API 接口、页面组件、路由配置
3. 在侧边栏菜单中添加入口

### 代码规范

- 后端使用 Lombok 减少样板代码
- 前端使用 TypeScript 保证类型安全
- 统一使用 RESTful API 风格
- 遵循单一职责原则

## 常见问题

**Q: 登录后提示401？**  
A: 检查后端JWT配置是否正确，确保token正常生成。

**Q: 数据库连接失败？**  
A: 检查MySQL是否启动，用户名密码是否正确。

**Q: 前端请求跨域？**  
A: 后端已配置CORS，确保前端baseURL正确。

## 许可证

MIT License
