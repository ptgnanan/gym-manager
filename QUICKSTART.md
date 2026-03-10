# 快速启动指南

## 第一步：准备数据库

1. 确保 MySQL 8 已安装并运行
2. 打开命令行，执行以下命令：

```bash
# 进入项目目录
cd D:\workCode\gym\gym-management-server\src\main\resources\db

# 创建数据库和表结构
mysql -u root -p < schema.sql

# 导入初始数据
mysql -u root -p gym_management < init-data.sql
```

或者使用 MySQL 客户端工具（如 Navicat、DBeaver）：
- 创建数据库 `gym_management`
- 执行 `schema.sql` 创建表
- 执行 `init-data.sql` 导入数据

## 第二步：配置后端

1. 打开 `gym-management-server/src/main/resources/application-dev.yml`
2. 修改数据库密码（如果不是123456）：

```yaml
spring:
  datasource:
    password: 你的MySQL密码
```

## 第三步：启动后端

```bash
cd D:\workCode\gym\gym-management-server
mvn spring-boot:run
```

看到 "Started GymManagementServerApplication" 表示启动成功。

## 第四步：启动前端

打开新的命令行窗口：

```bash
cd D:\workCode\gym\gym-management-admin
npm install
npm run dev
```

看到 "Local: http://localhost:5173" 表示启动成功。

## 第五步：登录系统

1. 浏览器访问：http://localhost:5173
2. 使用默认账号登录：
   - 用户名：`admin`
   - 密码：`admin123`

## 测试功能

登录后可以测试以下功能：

1. **仪表盘**：查看系统概览和统计数据
2. **会员管理**：查看、添加、编辑会员信息
3. **教练管理**：管理教练档案
4. **课程管理**：管理课程信息
5. **器材管理**：管理健身器材
6. **反馈管理**：查看会员反馈
7. **内容管理**：管理轮播图和公告
8. **退出登录**：点击右上角"退出登录"按钮

## 常见问题

### 后端启动失败

**问题1：端口8088被占用**
- 解决：修改 `application.yml` 中的 `server.port`

**问题2：数据库连接失败**
- 检查 MySQL 是否启动
- 检查用户名密码是否正确
- 检查数据库 `gym_management` 是否存在

**问题3：JWT相关错误**
- 确保 `application-dev.yml` 中 jwt.secret 长度足够（至少32字符）

### 前端启动失败

**问题1：npm install 失败**
- 尝试使用淘宝镜像：`npm install --registry=https://registry.npmmirror.com`

**问题2：端口5173被占用**
- Vite 会自动使用下一个可用端口

**问题3：登录后401错误**
- 检查后端是否正常启动
- 检查浏览器控制台是否有跨域错误
- 清除浏览器缓存和 localStorage

### 登录问题

**问题：忘记管理员密码**
- 重新执行 `init-data.sql` 重置为默认密码 `admin123`

**问题：登录后立即跳转回登录页**
- 检查浏览器是否禁用了 localStorage
- 打开浏览器开发者工具查看 Console 错误信息

## API 文档

后端启动后，访问 Swagger API 文档：
http://localhost:8088/swagger-ui.html

## 开发建议

1. 使用 IntelliJ IDEA 打开后端项目
2. 使用 VS Code 打开前端项目
3. 安装推荐的 VS Code 插件：
   - Vue Language Features (Volar)
   - TypeScript Vue Plugin (Volar)
   - ESLint
   - Prettier

## 下一步

系统已经具备核心功能，可以继续完善：

1. 添加表单验证
2. 实现分页功能
3. 添加数据导出
4. 完善权限管理
5. 添加单元测试

祝你使用愉快！
