-- 插入初始管理员账号 (密码: admin123)
INSERT INTO sys_user (username, password, nickname, phone, email, user_type, status, created_at, updated_at)
VALUES ('admin', '$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iAt6Z5EHsM8lE9lBOsl7iAt6Z5EH', '系统管理员', '13800138000', 'admin@gym.com', 'ADMIN', 1, NOW(), NOW());

-- 插入测试会员等级
INSERT INTO member_level (level_name, level_value, discount_rate, description, status, created_at)
VALUES 
('普通会员', 1, 100.00, '基础会员等级', 1, NOW()),
('黄金会员', 2, 95.00, '享受95折优惠', 1, NOW()),
('钻石会员', 3, 90.00, '享受9折优惠', 1, NOW());

-- 插入测试会员套餐
INSERT INTO member_package (package_name, package_type, price, duration_days, session_count, description, status, created_at)
VALUES 
('月卡', 'TIME_BASED', 299.00, 30, NULL, '30天无限次使用', 1, NOW()),
('季卡', 'TIME_BASED', 799.00, 90, NULL, '90天无限次使用', 1, NOW()),
('年卡', 'TIME_BASED', 2999.00, 365, NULL, '365天无限次使用', 1, NOW()),
('私教10节课', 'SESSION_BASED', 1999.00, NULL, 10, '10节私教课程', 1, NOW()),
('私教20节课', 'SESSION_BASED', 3599.00, NULL, 20, '20节私教课程', 1, NOW());

-- 插入测试教练
INSERT INTO coach (coach_no, name, gender, phone, specialty, introduction, status, created_at)
VALUES 
('C001', '王教练', 1, '13900000001', '增肌/力量训练', '5年健身教练经验，擅长力量训练和增肌指导', 1, NOW()),
('C002', '刘教练', 2, '13900000002', '减脂/塑形', '国家级健身教练，专注女性塑形和减脂训练', 1, NOW()),
('C003', '张教练', 1, '13900000003', '功能性训练', '运动康复专家，擅长功能性训练和损伤预防', 1, NOW());

-- 插入测试课程分类
INSERT INTO course_category (category_name, description, status)
VALUES 
('有氧课程', '提高心肺功能的有氧运动课程', 1),
('力量课程', '增强肌肉力量的训练课程', 1),
('瑜伽课程', '身心平衡的瑜伽练习', 1);

-- 插入测试课程
INSERT INTO course (course_name, course_type, category_id, coach_id, duration_minutes, capacity, description, status, created_at)
VALUES 
('燃脂搏击操', 'GROUP', 1, 1, 60, 20, '高强度有氧燃脂课程', 1, NOW()),
('力量塑形', 'GROUP', 2, 2, 45, 15, '全身力量训练课程', 1, NOW()),
('流瑜伽', 'GROUP', 3, 2, 60, 25, '舒缓身心的瑜伽课程', 1, NOW()),
('私教一对一', 'PRIVATE', NULL, 1, 60, 1, '个性化私教训练', 1, NOW());

-- 插入测试器材分类
INSERT INTO equipment_category (category_name, description, status)
VALUES 
('有氧器械', '跑步机、动感单车等有氧设备', 1),
('力量器械', '杠铃、哑铃、史密斯架等力量设备', 1),
('功能性器械', '瑜伽垫、弹力带等辅助器材', 1);

-- 插入测试器材
INSERT INTO equipment (equipment_no, equipment_name, category_id, quantity, available_quantity, location, status, created_at)
VALUES 
('EQ-001', '跑步机', 1, 12, 12, 'A区', 'NORMAL', NOW()),
('EQ-002', '动感单车', 1, 20, 18, 'A区', 'NORMAL', NOW()),
('EQ-003', '史密斯架', 2, 3, 3, 'B区', 'NORMAL', NOW()),
('EQ-004', '哑铃套装', 2, 10, 10, 'B区', 'NORMAL', NOW()),
('EQ-005', '瑜伽垫', 3, 50, 45, 'C区', 'NORMAL', NOW());

-- 插入测试公告分类
INSERT INTO announcement_category (category_name, sort_no, status)
VALUES 
('系统通知', 1, 1),
('活动公告', 2, 1),
('课程安排', 3, 1);

-- 插入测试公告
INSERT INTO announcement (category_id, title, summary, content, publish_status, published_at, created_at)
VALUES 
(1, '欢迎使用健身房管理系统', '系统已正式上线', '欢迎使用本健身房管理系统，如有问题请联系管理员。', 'PUBLISHED', NOW(), NOW()),
(2, '春季健身挑战赛开始报名', '丰厚奖品等你来拿', '为期一个月的春季健身挑战赛现已开始报名，完成挑战即可获得精美礼品！', 'PUBLISHED', NOW(), NOW());

-- 插入测试轮播图
INSERT INTO banner (title, image_url, link_url, sort_no, status)
VALUES 
('春季健身优惠', 'https://via.placeholder.com/1200x400/3b82f6/ffffff?text=Spring+Fitness+Sale', '/promotion/spring', 1, 1),
('新会员专享', 'https://via.placeholder.com/1200x400/10b981/ffffff?text=New+Member+Offer', '/promotion/new-member', 2, 1),
('私教课程推荐', 'https://via.placeholder.com/1200x400/f59e0b/ffffff?text=Personal+Training', '/course/private', 3, 1);
