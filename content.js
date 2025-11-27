window.courseData = {
    "1. Antigravity 的简介和安装": `
        <div class="lesson-content">
            <h2>1. Antigravity 的简介和安装</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 了解为什么 Google Antigravity 是 AI 时代的"超级编程助手"，并成功安装到你的电脑上。</p>
            </div>
            
            <h3>🚀 1.1 为什么选择 Antigravity?</h3>
            <p>Google Antigravity 不是一个简单的代码编辑器，它是 <strong>下一代 AI 驱动的编程环境</strong>。由 Google DeepMind 团队打造，它将强大的 Gemini AI 直接内置到编辑器中。</p>
            
            <div class="feature-grid">
                <div class="feature-box">
                    <h4>⚡ 超智能补全</h4>
                    <p>AI 预测你的意图，自动生成整段代码，甚至是完整的函数</p>
                </div>
                <div class="feature-box">
                    <h4>🔧 自动Debug</h4>
                    <p>报错了？AI 不仅告诉你错在哪，还直接帮你修复</p>
                </div>
                <div class="feature-box">
                    <h4>📖 代码讲解</h4>
                    <p>看不懂代码？选中后AI用白话文给你详细解释</p>
                </div>
                <div class="feature-box">
                    <h4>🎨 代码优化</h4>
                    <p>自动重构，让你的代码更简洁、更高效</p>
                </div>
            </div>

            <h3>💻 1.2 安装步骤 (保姆级教程)</h3>
            <div class="step-guide">
                <h4>第一步：访问官网</h4>
                <p>打开浏览器，访问 <a href="https://antigravity.google.com" target="_blank">antigravity.google.com</a></p>
                <div class="code-block-wrapper">
                    <pre><code>🌐 网址: https://antigravity.google.com
📌 提示: 目前处于内测阶段，可能需要加入等待列表</code></pre>
                </div>
                
                <h4>第二步：下载安装包</h4>
                <p>点击首页的 <strong>"Download for [Your OS]"</strong> 按钮</p>
                <ul>
                    <li>🪟 <strong>Windows:</strong> 下载 .exe 安装文件 (约 300MB)</li>
                    <li>🍎 <strong>Mac:</strong> 下载 .dmg 文件 (支持 Intel 和 Apple Silicon)</li>
                    <li>🐧 <strong>Linux:</strong> 支持 .deb 和 .rpm 包</li>
                </ul>

                <h4>第三步：安装与初始化</h4>
                <p>双击安装包，跟随安装向导：</p>
                <ol>
                    <li>选择安装路径（默认即可）</li>
                    <li>勾选"添加到PATH"（重要！）</li>
                    <li>首次启动会要求登录 Google 账号</li>
                    <li>选择 AI 模型：推荐 <strong>Gemini Ultra</strong> (最强大)</li>
                </ol>
            </div>

            <h3>✅ 1.3 验证安装</h3>
            <p>安装完成后，打开 Antigravity，尝试以下操作：</p>
            <pre><code class="language-bash"># 按快捷键唤起 AI 助手
Windows/Linux: Ctrl + Space
Mac: Cmd + Space

# 或者点击右上角的 "🤖 AI Chat" 图标</code></pre>
            <p>如果看到 AI 聊天面板弹出，并显示欢迎信息，恭喜你安装成功！🎉</p>

            <div class="tip-box">
                <h4>💡 新手提示</h4>
                <p>首次使用时，Antigravity 会自动下载 AI 模型（约 2GB），请确保网络畅通。下载完成后，AI 功能就可以完全离线使用了！</p>
            </div>
        </div>
    `,

    "2. 熟悉 Antigravity 界面的工作区": `
        <div class="lesson-content">
            <h2>2. 熟悉 Antigravity 界面的工作区</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 像熟悉自家客厅一样熟悉 Antigravity 的每个角落。</p>
            </div>

            <h3>🖥️ 2.1 界面布局详解</h3>
            <p>Antigravity 的界面分为 <strong>6 个核心区域</strong>：</p>

            <div class="layout-diagram">
                <pre style="background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px;">
┌────────────────────────────────────────────────────┐
│  🔍 顶部工具栏 (Toolbar)                              │
├──────┬────────────────────────┬──────────────────────┤
│      │                        │                      │
│  🧭  │   📝 编辑区             │   🤖 AI 侧边栏        │
│ 活动栏│   (Editor Area)        │   (AI Sidebar)       │
│      │                        │                      │
│      │                        │                      │
├──────┴────────────────────────┴──────────────────────┤
│  📊 底部状态栏 (Status Bar)                           │
└────────────────────────────────────────────────────┘
                </pre>
            </div>

            <h4>① 活动栏 (左侧图标竖条)</h4>
            <ul>
                <li>📁 <strong>资源管理器:</strong> 查看项目文件</li>
                <li>🔍 <strong>搜索:</strong> 全局文件搜索</li>
                <li>🌿 <strong>Git:</strong> 版本控制</li>
                <li>🤖 <strong>AI 助手:</strong> Antigravity 的核心功能！</li>
                <li>🔌 <strong>扩展:</strong> 安装插件</li>
            </ul>

            <h4>② 编辑区 (中间最大区域)</h4>
            <p>这里是你编写代码的主战场。支持：</p>
            <ul>
                <li>多标签页，随意切换文件</li>
                <li>分屏编辑（最多4分屏）</li>
                <li>实时语法高亮和错误提示</li>
                <li>AI 智能补全（输入时自动弹出建议）</li>
            </ul>

            <h4>③ AI 侧边栏 (右侧)</h4>
            <p>这是 Antigravity 的<strong>王牌功能</strong>！</p>
            <div class="feature-list">
                <div class="feature-item">
                    <span class="icon">💬</span>
                    <div>
                        <strong>Chat 模式</strong>
                        <p>像和朋友聊天一样问 AI 问题</p>
                    </div>
                </div>
                <div class="feature-item">
                    <span class="icon">🔍</span>
                    <div>
                        <strong>Explain 模式</strong>
                        <p>选中代码，AI自动详解</p>
                    </div>
                </div>
                <div class="feature-item">
                    <span class="icon">✨</span>
                    <div>
                        <strong>Generate 模式</strong>
                        <p>描述需求，AI 自动写代码</p>
                    </div>
                </div>
            </div>

            <h3>⚡ 2.2 核心快捷键</h3>
            <table style="width: 100%; margin: 20px 0;border-collapse: collapse;">
                <thead>
                    <tr style="background: var(--primary-color); color: white;">
                        <th style="padding: 12px; text-align: left;">功能</th>
                        <th style="padding: 12px; text-align: left;">Windows/Linux</th>
                        <th style="padding: 12px; text-align: left;">Mac</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">唤起 AI Chat</td>
                        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><code>Ctrl + Space</code></td>
                        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><code>Cmd + Space</code></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">AI 生成代码</td>
                        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><code>Ctrl + K</code></td>
                        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><code>Cmd + K</code></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">解释选中代码</td>
                        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><code>Ctrl + Shift + E</code></td>
                        <td style="padding: 10px; border-bottom: 1px solid var(--border-color);"><code>Cmd + Shift + E</code></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;">命令面板</td>
                        <td style="padding: 10px;"><code>Ctrl + Shift + P</code></td>
                        <td style="padding: 10px;"><code>Cmd + Shift + P</code></td>
                    </tr>
                </tbody>
            </table>

            <h3>🎯 2.3 实战演练</h3>
            <p>让我们用一个实际例子熟悉界面：</p>
            <ol>
                <li>按 <code>Ctrl + N</code> 新建文件</li>
                <li>输入 <code>def hello</code> 并等待</li>
                <li>AI 会自动建议补全 → 按 <code>Tab</code> 接受</li>
                <li>选中你的代码，按 <code>Ctrl + Shift + E</code></li>
                <li>AI 会在侧边栏解释这段代码的作用</li>
            </ol>

            <div class="success-box">
                <p>✅ 如果上述步骤都成功，说明你已经掌握了 Antigravity 的基本操作！</p>
            </div>
        </div>
    `,

    "3. Antigravity 的核心功能: Chat": `
        <div class="lesson-content">
            <h2>3. Antigravity 的核心功能: Chat</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 掌握 AI Chat 功能，让 AI 成为你的24小时编程导师。</p>
            </div>

            <h3>💬 3.1 Chat 功能详解</h3>
            <p>Antigravity 的 Chat 不是简单的问答机器人，它能：</p>
            <ul>
                <li>🧠 <strong>理解上下文：</strong> 知道你当前在写什么代码</li>
                <li>📖 <strong>多轮对话：</strong> 可以持续追问，深入讨论</li>
                <li>⚡ <strong>直接修改代码：</strong> 不满意？让 AI 改到满意为止</li>
                <li>🌐 <strong>联网搜索：</strong> 自动查找最新的技术文档和解决方案</li>
            </ul>

            <h3>🎯 3.2 Chat 的5种实战场景</h3>

            <h4>场景1: 学习新知识</h4>
            <div class="chat-example">
                <div class="user-message">
                    <strong>👤 你：</strong>
                    <p>什么是异步编程？用 Python 举个例子</p>
                </div>
                <div class="ai-message">
                    <strong>🤖 AI：</strong>
                    <p>异步编程是一种<strong>不阻塞主线程</strong>的编程方式。简单来说...</p>
                    <pre><code class="language-python">import asyncio

async def fetch_data():
    print("开始下载...")
    await asyncio.sleep(2)  # 模拟网络请求
    print("下载完成！")
    return "数据内容"

# 运行异步函数
asyncio.run(fetch_data())</code></pre>
                    <p>这个例子中，<code>await</code> 关键字让程序在等待时不会卡住，可以去做其他事情。</p>
                </div>
            </div>

            <h4>场景2: Debug代码</h4>
            <div class="chat-example">
                <div class="user-message">
                    <strong>👤 你：</strong>
                    <p>这段代码报错了，帮我看看哪里有问题</p>
                    <pre><code class="language-python">numbers = [1, 2, 3]
print(numbers[5])</code></pre>
                </div>
                <div class="ai-message">
                    <strong>🤖 AI：</strong>
                    <p>❌ 这里的问题是<strong>索引超出范围</strong>（IndexError）</p>
                    <p>你的列表 <code>numbers</code> 只有3个元素，索引是 0, 1, 2，但你试图访问索引5。</p>
                    <p>✅ 修复方法：</p>
                    <pre><code class="language-python"># 方法1: 检查索引
if len(numbers) > 5:
    print(numbers[5])
else:
    print("索引超出范围")

# 方法2: 使用 try-except
try:
    print(numbers[5])
except IndexError:
    print("列表没有这个索引")</code></pre>
                </div>
            </div>

            <h3>🔥 3.3 进阶技巧</h3>

            <h4>技巧1: @ 引用文件</h4>
            <p>在 Chat 中输入 <code>@文件名</code>，AI 会自动读取该文件内容：</p>
            <pre><code>👤 @main.py 这个文件的入口函数在哪？</code></pre>

            <h4>技巧2: 连续追问</h4>
            <p>不要怕问傻问题！持续追问能让你理解得更深：</p>
            <pre style="background: var(--card-bg); padding: 15px; border-radius: 8px;"><code>👤 什么是装饰器？
🤖 装饰器是一个函数，它接收另一个函数作为参数...

👤 能举个实际例子吗？
🤖 当然！比如你想给函数计时...

👤 为什么要用 @wraps？
🤖 因为...</code></pre>

            <div class="practice-box">
                <h4>🏋️ 动手练习</h4>
                <p>打开 Antigravity，尝试用 Chat 完成以下任务：</p>
                <ol>
                    <li>问 AI："如何用 Python 读取 CSV 文件？"</li>
                    <li>让 AI 生成一个计算斐波那契数列的函数</li>
                    <li>选中生成的代码，问："这个算法的时间复杂度是多少？"</li>
                </ol>
            </div>
        </div>
    `,

    "4. Antigravity Rules 规则": `
        <div class="lesson-content">
            <h2>4. Antigravity Rules 规则</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 学会使用 Rules 让 AI 自动遵守你的代码规范，团队协作更高效。</p>
            </div>

            <h3>📜 4.1 什么是 Antigravity Rules？</h3>
            <p>Rules 是一个<strong>AI编程规范文件</strong>，告诉 AI：</p>
            <ul>
                <li>✅ 你喜欢什么样的代码风格（缩进、命名等）</li>
                <li>✅ 项目使用的技术栈和框架</li>
                <li>✅ 常用的设计模式和最佳实践</li>
                <li>✅ 你的团队约定（比如错误处理方式）</li>
            </ul>

            <p>有了 Rules，AI 就像一个<strong>遵守公司规范的新员工</strong>，每次生成的代码都符合你的要求！</p>

            <h3>⚙️ 4.2 创建你的第一个 Rules</h3>
            <p>在项目根目录创建 <code>.antigravity</code> 文件夹，然后新建 <code>rules.md</code>：</p>

            <pre><code class="language-markdown"># 我的代码规范

## 编程语言
- 主要语言：Python 3.11+
- 前端：React + TypeScript

## 代码风格
- 缩进：4 个空格
- 最大行长度：120 字符
- 字符串使用双引号
- 所有函数必须有类型提示

## 命名规范
- 变量名：snake_case (例如：user_name)
- 类名：PascalCase (例如：UserManager)
- 常量：UPPER_CASE (例如：MAX_SIZE)

## 框架约定
- Web 框架：FastAPI
- ORM：SQLAlchemy
- 测试：pytest
- 总是使用异步函数 (async/await)

## 错误处理
- 永远不要使用裸的 except
- 自定义异常继承自 Exception
- 记录所有错误到日志</code></pre>

            <div class="tip-box">
                <h4>💡 最佳实践</h4>
                <ul>
                    <li>把 <code>rules.md</code> 提交到 Git，让团队共享</li>
                    <li>随着项目演进持续更新 Rules</li>
                    <li>可以为不同的子项目创建不同的 Rules</li>
                </ul>
            </div>

            <div class="practice-box">
                <h4>🏋️ 动手练习</h4>
                <p>创建你自己的 Rules 文件，包含：</p>
                <ol>
                    <li>你最常用的编程语言和框架</li>
                    <li>你喜欢的代码风格（缩进、命名）</li>
                    <li>至少2条错误处理规范</li>
                </ol>
                <p>然后让 AI 生成一个函数，看看是否自动遵守了你的规范！</p>
            </div>
        </div>
    `,

    "5. Antigravity 2.0 Agent 大更新 (必看)": `
        <div class="lesson-content">
            <h2>5. Antigravity 2.0 Agent 大更新 (必看)</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 掌握 Antigravity 2.0 的划时代功能 —— <strong>Agent 智能体</strong>，让 AI 自主完成复杂编程任务。</p>
            </div>

            <h3>🤖 5.1 什么是 Agent？</h3>
            <p>如果说普通 AI 是<strong>"助手"</strong>，那么 Agent 就是<strong>"自主工作的机器人"</strong>。</p>
            
            <div class="comparison-table">
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <thead>
                        <tr style="background: var(--primary-color); color: white;">
                            <th style="padding: 12px; text-align: left;">传统 AI Chat</th>
                            <th style="padding: 12px; text-align: left;">Antigravity 2.0 Agent</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">你问一句，AI 答一句</td>
                            <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">你给任务，AI 自主拆解并执行</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">只能修改当前文件</td>
                            <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">可以跨文件、跨项目操作</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">需要你手动执行代码</td>
                            <td style="padding: 10px; border-bottom: 1px solid var(--border-color);">可以自动运行、测试、Debug</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px;">不会主动查资料</td>
                            <td style="padding: 10px;">自动联网搜索解决方案</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>⚡ 5.2 Agent 工作流程</h3>
            <div class="workflow-diagram">
                <pre style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 12px;">
┌─────────────────────────────────────────────────┐
│  📝 Step 1: 你给任务                               │
│  "创建一个用户注册API，包括邮箱验证和密码加密"        │
└────────────────┬────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────┐
│  🧠 Step 2: Agent 自主规划                        │
│  ├─ 创建 models/user.py (数据模型)                │
│  ├─ 创建 routes/auth.py (API路由)                 │
│  ├─ 安装依赖: passlib, pydantic-email             │
│  └─ 编写单元测试                                   │
└────────────────┬────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────┐
│  ⚙️ Step 3: 自动执行                              │
│  Agent 开始写代码、安装包、运行测试...               │
└────────────────┬────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────┐
│  ✅ Step 4: 完成 + 报告                           │
│  "任务完成！已创建3个文件，通过12个测试用例"          │
└─────────────────────────────────────────────────┘
                </pre>
            </div>

            <h3>🎯 5.3 Agent 实战案例</h3>

            <h4>案例: 从零搭建 REST API</h4>
            <div class="chat-example">
                <div class="user-message">
                    <strong>👤 你：</strong>
                    <p>/agent 创建一个博客系统的后端API，需要实现：</p>
                    <ul>
                        <li>用户注册/登录 (JWT认证)</li>
                        <li>发表/编辑/删除文章</li>
                        <li>评论功能</li>
                        <li>分页查询</li>
                    </ul>
                    <p>使用 FastAPI + SQLite</p>
                </div>
                <div class="ai-message">
                    <strong>🤖 Agent：</strong>
                    <p>收到！我将分 7 个步骤完成：</p>
                    <ol>
                        <li>✅ 初始化项目结构</li>
                        <li>✅ 创建数据模型 (User, Post, Comment)</li>
                        <li>✅ 实现用户认证 (JWT)</li>
                        <li>✅ 实现文章 CRUD 接口</li>
                        <li>✅ 实现评论功能</li>
                        <li>✅ 添加分页查询</li>
                        <li>✅ 编写测试用例</li>
                    </ol>
                    <p>🎉 任务完成！创建了 15 个文件，295 行代码。</p>
                    <p>运行 <code>uvicorn main:app --reload</code> 即可启动服务。</p>
                </div>
            </div>

            <h3>⚠️ 5.4 使用 Agent 的注意事项</h3>
            <div class="warning-box">
                <ul>
                    <li>🔍 <strong>审查代码：</strong> Agent 生成的代码需要人工 review</li>
                    <li>💾 <strong>及时保存：</strong> 重要改动前建议 Git commit</li>
                    <li>🎯 <strong>任务明确：</strong> 给 Agent 的指令越具体，结果越好</li>
                    <li>🔄 <strong>渐进式：</strong> 大任务分成小步骤，逐步验证</li>
                </ul>
            </div>

            <div class="success-box">
                <h4>🎉 恭喜！</h4>
                <p>你已经掌握了 Antigravity 的核心功能！现在你拥有了一个 24/7 在线的 AI 编程助手。</p>
                <p>下一章我们将学习如何搭建开发环境，真正动手写代码！</p>
            </div>
        </div>
    `
};
