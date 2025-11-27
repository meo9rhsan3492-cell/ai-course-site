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
    `,

    "1.2.1 安装 Git": `
        <div class="lesson-content">
            <h2>1.2.1 安装 Git</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 安装 Git —— 程序员的"时光机"，让你随时回退代码，安全无忧。</p>
            </div>

            <h3>🤔 为什么需要 Git?</h3>
            <p>想象一下，你写了一天的代码，突然改乱了，想回到早上的状态怎么办？</p>
            <ul>
                <li>❌ <strong>普通人：</strong> Ctrl+Z 按到手断，或者手动备份 "final_v1.py", "final_v2.py"...</li>
                <li>✅ <strong>程序员：</strong> 使用 Git，一条命令回到过去。</li>
            </ul>

            <h3>⬇️ 下载与安装</h3>
            <div class="step-guide">
                <h4>Windows 用户</h4>
                <ol>
                    <li>访问官网：<a href="https://git-scm.com/download/win" target="_blank">git-scm.com/download/win</a></li>
                    <li>下载 <strong>"64-bit Git for Windows Setup"</strong></li>
                    <li>双击安装，<strong>一路点击 "Next" (下一步) 即可</strong>，所有默认选项都是最合适的。</li>
                </ol>

                <h4>Mac 用户</h4>
                <p>打开终端 (Terminal)，输入以下命令即可自动安装：</p>
                <pre><code class="language-bash">git --version</code></pre>
                <p>如果没有安装，系统会弹窗提示你安装 "Command Line Developer Tools"，点击安装即可。</p>
            </div>

            <h3>✅ 验证安装</h3>
            <p>打开终端 (Windows 下是 PowerShell 或 CMD，Mac 下是 Terminal)，输入：</p>
            <pre><code class="language-bash">git --version</code></pre>
            <p>如果出现类似 <code>git version 2.x.x</code> 的文字，说明安装成功！🎉</p>

            <div class="tip-box">
                <h4>💡 首次配置</h4>
                <p>安装后，告诉 Git 你是谁（用于记录代码是谁写的）：</p>
                <pre><code class="language-bash">git config --global user.name "你的名字"
git config --global user.email "你的邮箱"</code></pre>
            </div>
        </div>
    `,

    "1.2.2 安装 Node.js": `
        <div class="lesson-content">
            <h2>1.2.2 安装 Node.js</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 安装 Node.js —— 现代 Web 开发的基石，让 JavaScript 也能跑在服务器上。</p>
            </div>

            <h3>🤔 什么是 Node.js?</h3>
            <p>简单来说，它是一个<strong>让 JavaScript 脱离浏览器运行的环境</strong>。有了它，你不仅能写前端网页，还能写后端服务器、开发命令行工具（比如 Antigravity 的很多插件就是用它写的）。</p>

            <h3>⬇️ 下载与安装</h3>
            <div class="step-guide">
                <ol>
                    <li>访问官网：<a href="https://nodejs.org/" target="_blank">nodejs.org</a></li>
                    <li><strong>关键点：</strong> 请下载左边的 <strong>"LTS" (长期支持版)</strong>，比较稳定。不要下载 "Current" (最新尝鲜版)。</li>
                    <li>双击安装包，一路 "Next" 即可。</li>
                </ol>
            </div>

            <h3>✅ 验证安装</h3>
            <p>打开终端，输入以下命令检查：</p>
            <pre><code class="language-bash">node -v
# 输出 v18.x.x 或 v20.x.x 等版本号

npm -v
# 输出 9.x.x 或 10.x.x (npm 是 Node 的包管理器)</code></pre>

            <div class="success-box">
                <p>🎉 恭喜！你已经具备了运行现代 Web 项目的能力。</p>
            </div>
        </div>
    `,

    "1.2.3 安装 Python": `
        <div class="lesson-content">
            <h2>1.2.3 安装 Python</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 安装 Python —— AI 时代的第一语言，简洁、强大、无所不能。</p>
            </div>

            <h3>🤔 为什么是 Python?</h3>
            <p>因为 <strong>AI = Python</strong>。几乎所有的 AI 框架（PyTorch, TensorFlow）和工具（包括 Antigravity 的后端逻辑）都是用 Python 开发的。</p>

            <h3>⬇️ 下载与安装</h3>
            <div class="step-guide">
                <h4>Windows 用户 (⚠️ 注意细节)</h4>
                <ol>
                    <li>访问官网：<a href="https://www.python.org/downloads/" target="_blank">python.org/downloads</a></li>
                    <li>下载最新的 Python 3.x 版本 (例如 3.11 或 3.12)</li>
                    <li><strong>关键一步：</strong> 在安装界面的最下方，<strong>务必勾选 "Add python.exe to PATH"</strong> ！！！如果不勾选，你在终端里就找不到 Python。</li>
                    <li>点击 "Install Now"。</li>
                </ol>

                <h4>Mac 用户</h4>
                <ol>
                    <li>访问官网下载 macOS 安装包。</li>
                    <li>一路 "Next" 安装。</li>
                    <li>或者使用 Homebrew (如果你懂的话): <code>brew install python</code></li>
                </ol>
            </div>

            <h3>✅ 验证安装</h3>
            <p>打开终端，输入：</p>
            <pre><code class="language-bash">python --version
# 或者 python3 --version</code></pre>
            <p>看到版本号即为成功！</p>

            <div class="practice-box">
                <h4>🏋️ 你的第一行 Python 代码</h4>
                <p>在终端输入 <code>python</code> 进入交互模式，然后输入：</p>
                <pre><code class="language-python">print("Hello, AI World!")</code></pre>
                <p>看到输出了吗？恭喜你，你已经是一名 Python 程序员了！👨‍💻</p>
                <p>输入 <code>exit()</code> 退出。</p>
            </div>
        </div>
    `,

    "1.3.1 AI 时代下的编程核心概念 + 最佳实践": `
        <div class="lesson-content">
            <h2>1.3.1 AI 时代下的编程核心概念 + 最佳实践</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 转变思维，从"手写代码"进化到"指挥 AI 写代码"。</p>
            </div>

            <h3>🧠 核心概念转变</h3>
            <div class="comparison-table">
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr>
                        <th style="padding: 10px; border-bottom: 2px solid #eee;">传统编程</th>
                        <th style="padding: 10px; border-bottom: 2px solid #eee;">AI 编程</th>
                    </tr>
                    <tr>
                        <td style="padding: 10px;">记忆语法 (Syntax)</td>
                        <td style="padding: 10px;">设计逻辑 (Logic)</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;">查文档 (Google/StackOverflow)</td>
                        <td style="padding: 10px;">问 AI (Context-aware)</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;">手写每一行 (Implementation)</td>
                        <td style="padding: 10px;">审查与组装 (Review & Assembly)</td>
                    </tr>
                </table>
            </div>

            <h3>💡 最佳实践：Prompt Engineering (提示词工程)</h3>
            <p>AI 不是读心术，你描述得越清楚，它写得越好。遵循 <strong>"C.I.R" 原则</strong>：</p>
            
            <div class="feature-grid">
                <div class="feature-box">
                    <h4>C - Context (上下文)</h4>
                    <p>告诉 AI 背景。"我正在写一个电商网站的购物车功能..."</p>
                </div>
                <div class="feature-box">
                    <h4>I - Instruction (指令)</h4>
                    <p>具体要做什么。"请写一个函数，计算总价，支持打折。"</p>
                </div>
                <div class="feature-box">
                    <h4>R - Requirement (要求)</h4>
                    <p>具体的约束。"使用 Python，返回值保留2位小数，要处理负数异常。"</p>
                </div>
            </div>

            <div class="chat-example">
                <p>❌ <strong>差的提示词：</strong> "写个计算器。"</p>
                <p>✅ <strong>好的提示词：</strong> "我正在开发一个网页版计算器 (Context)。请用 JavaScript 写一个函数 (Instruction)，接收两个数字和一个运算符，返回结果。如果除数为0，需要返回 null (Requirement)。"</p>
            </div>
        </div>
    `,

    "1.3.2 新手入门实战必备概念 + 最佳实践": `
        <div class="lesson-content">
            <h2>1.3.2 新手入门实战必备概念 + 最佳实践</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 即使有 AI，你也需要懂这 3 个最基础的编程概念，才能看懂 AI 写的代码。</p>
            </div>

            <h3>1️⃣ 变量 (Variables) —— 数据的容器</h3>
            <p>就像给盒子贴标签。</p>
            <pre><code class="language-python">name = "Antigravity"  # 字符串
price = 299           # 数字
is_awesome = True     # 布尔值 (是/否)</code></pre>

            <h3>2️⃣ 循环 (Loops) —— 重复做某事</h3>
            <p>让计算机帮你做重复的苦力活。</p>
            <pre><code class="language-python"># 打印 5 次 "Hello"
for i in range(5):
    print("Hello")</code></pre>

            <h3>3️⃣ 函数 (Functions) —— 功能的封装</h3>
            <p>把一段代码打包，方便重复使用。</p>
            <pre><code class="language-python">def welcome(user):
    return "Welcome, " + user

print(welcome("Alice"))  # 输出: Welcome, Alice
print(welcome("Bob"))    # 输出: Welcome, Bob</code></pre>

            <div class="tip-box">
                <h4>💡 AI 最佳实践</h4>
                <p>你不必背诵这些语法！你只需要知道<strong>"我想存个数据"</strong>、<strong>"我想重复做这件事"</strong>、<strong>"我想把这个功能打包"</strong>，然后告诉 AI，它会帮你写出正确的语法。</p>
            </div>
        </div>
    `,

    "1.3.3 Git 入门: 必学! AI 编程协作基石": `
        <div class="lesson-content">
            <h2>1.3.3 Git 入门: 必学! AI 编程协作基石</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 学会 Git 的 4 个核心命令，从此代码不怕丢。</p>
            </div>

            <h3>🚀 核心流程图</h3>
            <p>工作区 (写代码) → 暂存区 (挑选中) → 仓库 (存档)</p>

            <h3>🛠️ 4 个必须记住的命令</h3>
            <div class="step-guide">
                <h4>1. git init</h4>
                <p><strong>初始化。</strong> 在你的项目文件夹里运行一次，告诉 Git "这里归你管了"。</p>

                <h4>2. git add .</h4>
                <p><strong>添加。</strong> 把你修改的文件放到"暂存区"（准备提交）。<code>.</code> 代表所有文件。</p>

                <h4>3. git commit -m "备注"</h4>
                <p><strong>提交。</strong> 真正地存档。<code>-m</code> 后面写上你干了什么。</p>
                <p>🤖 <strong>AI 技巧：</strong> Antigravity 可以自动帮你写 commit message！</p>

                <h4>4. git push</h4>
                <p><strong>推送。</strong> 把代码上传到云端（如 GitHub），防止电脑爆炸导致代码丢失。</p>
            </div>

            <div class="practice-box">
                <h4>🏋️ 动手练习</h4>
                <ol>
                    <li>新建一个文件夹 <code>my_project</code></li>
                    <li>终端进入该目录：<code>cd my_project</code></li>
                    <li><code>git init</code></li>
                    <li>新建文件 <code>readme.txt</code>，随便写点什么</li>
                    <li><code>git add .</code></li>
                    <li><code>git commit -m "第一次提交"</code></li>
                </ol>
                <p>恭喜！你完成了人生第一次代码存档。</p>
            </div>
        </div>
    `,

    "1.3.4 AI 编程的应用在全栈编程实践": `
        <div class="lesson-content">
            <h2>1.3.4 AI 编程的应用在全栈编程实践</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 了解什么是"全栈"，以及 AI 如何帮你打通前后端。</p>
            </div>

            <h3>🏗️ 什么是全栈 (Full Stack)?</h3>
            <p>全栈 = 前端 (看得见的) + 后端 (处理数据的) + 数据库 (存数据的)。</p>

            <div class="feature-grid">
                <div class="feature-box">
                    <h4>🎨 前端 (Frontend)</h4>
                    <p>HTML, CSS, JavaScript。负责页面长什么样。</p>
                    <p>🤖 <strong>AI 作用：</strong> 画页面、写样式、做动画（比如你现在看到的这个网站）。</p>
                </div>
            <div class="success-box">
                <p>🎉 恭喜！你已经具备了运行现代 Web 项目的能力。</p>
            </div>
        </div>
    `,

    "2.1.1 AI 辅助下的前端开发: NextJS 实战基础入门": `
        <div class="lesson-content">
            <h2>2.1.1 AI 辅助下的前端开发: NextJS 实战基础入门</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 学习 React 的最强框架 Next.js，并学会用 AI 生成漂亮的 UI 组件。</p>
            </div>

            <h3>⚛️ 为什么选 Next.js?</h3>
            <p>React 是库，Next.js 是框架。它帮你解决了路由、渲染、打包等所有麻烦事，让你开箱即用。</p>

            <h3>🤖 AI 辅助写组件</h3>
            <p>以前你需要手写 HTML/CSS，现在你只需要告诉 AI：</p>
            <div class="chat-example">
                <p>"请用 Tailwind CSS 写一个现代化的登录卡片，包含邮箱、密码输入框和登录按钮，要支持深色模式。"</p>
            </div>
            <p>AI 会生成如下代码：</p>
            <pre><code class="language-jsx">export default function LoginCard() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Login</h2>
      <input className="w-full p-2 mb-3 border rounded dark:bg-gray-700" placeholder="Email" />
      <input className="w-full p-2 mb-4 border rounded dark:bg-gray-700" type="password" placeholder="Password" />
      <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Sign In
      </button>
    </div>
  );
}</code></pre>
        </div>
    `,

    "2.1.2 AI 辅助下的后端开发入门: Python 的基本使用": `
        <div class="lesson-content">
            <h2>2.1.2 AI 辅助下的后端开发入门: Python 的基本使用</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 掌握 Python 基础，让 AI 帮你写逻辑。</p>
            </div>

            <h3>🐍 Python 极速入门</h3>
            <p>Python 的语法非常接近英语。看几个例子：</p>

            <h4>1. 变量与判断</h4>
            <pre><code class="language-python">age = 18
if age >= 18:
    print("成年人")
else:
    print("未成年")</code></pre>

            <h4>2. 列表与循环</h4>
            <pre><code class="language-python">fruits = ["Apple", "Banana", "Cherry"]
for fruit in fruits:
    print(f"I love {fruit}")</code></pre>

            <h3>🤖 让 AI 写逻辑</h3>
            <p>你不需要背诵 API，只需要描述逻辑：</p>
            <div class="chat-example">
                <p>"写一个 Python 函数，输入一个文件名，判断它是不是图片格式 (jpg, png, gif)。"</p>
            </div>
        </div>
    `,

    "2.1.3 AI 辅助下的后端开发入门: 用 Flask 实现一个简单的 API": `
        <div class="lesson-content">
            <h2>2.1.3 用 Flask 实现一个简单的 API</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 5行代码搭建一个 Web 服务器。</p>
            </div>

            <h3>🌶️ Flask 简介</h3>
            <p>Flask 是 Python 最轻量级的 Web 框架。</p>

            <h3>💻 Hello World</h3>
            <pre><code class="language-python">from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello, AI World!"

if __name__ == '__main__':
    app.run(debug=True)</code></pre>
            <p>运行后，访问 <code>http://localhost:5000</code> 就能看到网页了！</p>
        </div>
    `,

    "2.1.4 AI 时代的数据库开发 + AI 编写 SQL 指南": `
        <div class="lesson-content">
            <h2>2.1.4 AI 时代的数据库开发</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 不用学复杂的 SQL 语法，用自然语言查询数据库 (Text-to-SQL)。</p>
            </div>

            <h3>💾 数据库基础</h3>
            <p>数据库就像一个超级 Excel 表格。</p>
            <ul>
                <li><strong>Table (表):</strong> 比如 "Users" 表。</li>
                <li><strong>Row (行):</strong> 每一行是一个用户。</li>
                <li><strong>Column (列):</strong> 比如 "Name", "Age"。</li>
            </ul>

            <h3>🤖 AI 写 SQL</h3>
            <div class="chat-example">
                <p><strong>你：</strong> "查询所有年龄大于 20 岁且住在北京的用户，按注册时间倒序排列。"</p>
                <p><strong>AI：</strong></p>
                <pre><code class="language-sql">SELECT * FROM Users 
WHERE age > 20 AND city = 'Beijing' 
ORDER BY created_at DESC;</code></pre>
            </div>
        </div>
    `,

    "2.2.1 新手友好的腾讯云开发 CloudBase": `
        <div class="lesson-content">
            <h2>2.2.1 腾讯云开发 CloudBase</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 了解国内最方便的 Serverless 平台，无需运维服务器。</p>
            </div>

            <h3>☁️ 什么是 CloudBase?</h3>
            <p>它提供了一站式的后端服务：云函数（跑代码）、云数据库（存数据）、云存储（存图片）。</p>
            <p>特别适合微信小程序和 Web 应用开发。</p>
        </div>
    `,

    "2.2.2 出海必备 - Supabase 完全指南": `
        <div class="lesson-content">
            <h2>2.2.2 Supabase 完全指南</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 掌握 "开源版 Firebase"，独立开发者的首选后端。</p>
            </div>

            <h3>🔥 为什么选 Supabase?</h3>
            <ul>
                <li><strong>PostgreSQL:</strong> 强大的关系型数据库。</li>
                <li><strong>Auth:</strong> 内置用户注册/登录系统。</li>
                <li><strong>Realtime:</strong> 数据更新实时推送到前端。</li>
                <li><strong>API:</strong> 自动根据表结构生成 API，不用写后端代码！</li>
            </ul>

            <h3>💻 快速上手</h3>
            <pre><code class="language-javascript">import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xyz.supabase.co', 'public-anon-key')

// 查询数据
const { data, error } = await supabase
  .from('countries')
  .select()</code></pre>
        </div>
    `,

    "3.1.1 快速部署 DeepSeek R1 私有模型": `
        <div class="lesson-content">
            <h2>3.1.1 快速部署 DeepSeek R1 私有模型</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 在你的电脑上运行最强开源模型 DeepSeek R1，实现隐私保护和无限免费对话。</p>
            </div>
            <h3>🛠️ 工具准备</h3>
            <ul>
                <li><strong>Ollama:</strong> 一个极其简单的本地大模型运行工具。</li>
                <li><strong>DeepSeek R1:</strong> 目前推理能力最强的开源模型。</li>
            </ul>
            
            <h3>🚀 部署步骤</h3>
            <h4>Step 1: 安装 Ollama</h4>
            <pre><code class="language-bash"># macOS / Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows
# 直接去 ollama.com 下载安装包</code></pre>

            <h4>Step 2: 拉取并运行模型</h4>
            <p>打开终端，输入以下命令。根据你的显存大小选择不同版本：</p>
            <pre><code class="language-bash"># 电脑配置一般 (8G内存)，用 1.5b 版本
ollama run deepseek-r1:1.5b

# 电脑配置不错 (16G内存+)，用 7b 或 8b 版本
ollama run deepseek-r1:8b

# 显卡土豪 (24G显存+)，用 32b 版本
ollama run deepseek-r1:32b</code></pre>

            <h4>Step 3: 编程调用 (Python)</h4>
            <p>模型跑起来后，它会在 <code>localhost:11434</code> 开启一个 API。</p>
            <pre><code class="language-python">import requests

response = requests.post('http://localhost:11434/api/generate', json={
    "model": "deepseek-r1:8b",
    "prompt": "为什么天空是蓝色的？",
    "stream": False
})

print(response.json()['response'])</code></pre>
        </div>
    `,

    "3.1.2 开发 Chrome 插件: 把上网助手变成生产力外挂": `
        <div class="lesson-content">
            <h2>3.1.2 开发 Chrome 插件: 把上网助手变成生产力外挂</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 开发一个 Chrome 侧边栏插件，一键总结当前网页内容。</p>
            </div>
            
            <h3>🧩 插件核心结构</h3>
            <p>Chrome 插件本质上就是 HTML + JS，只是多了一个 <code>manifest.json</code> 身份证。</p>
            
            <h4>1. manifest.json (配置)</h4>
            <pre><code class="language-json">{
  "manifest_version": 3,
  "name": "AI 网页总结助手",
  "version": "1.0",
  "permissions": ["activeTab", "sidePanel"],
  "side_panel": { "default_path": "sidebar.html" },
  "background": { "service_worker": "background.js" }
}</code></pre>

            <h4>2. sidebar.html (界面)</h4>
            <pre><code class="language-html">&lt;button id="summarize-btn"&gt;总结全文&lt;/button&gt;
&lt;div id="result"&gt;&lt;/div&gt;
&lt;script src="sidebar.js"&gt;&lt;/script&gt;</code></pre>

            <h4>3. sidebar.js (逻辑)</h4>
            <pre><code class="language-javascript">document.getElementById('summarize-btn').addEventListener('click', async () => {
    // 1. 获取当前标签页内容
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    const result = await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: () => document.body.innerText
    });
    const pageContent = result[0].result;

    // 2. 发送给 AI (这里调用你的 API)
    const summary = await callAI(pageContent);
    
    // 3. 显示结果
    document.getElementById('result').innerText = summary;
});</code></pre>
        </div>
    `,

    "3.1.3 开发一个能赚钱的网站: 接入国内个人支付 (无需营业执照)": `
        <div class="lesson-content">
            <h2>3.1.3 接入国内个人支付</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 独立开发者最大的痛点是收款。本节介绍几种无需注册公司的收款方案。</p>
            </div>

            <h3>💰 方案对比</h3>
            <div class="comparison-table">
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr>
                        <th style="padding: 10px; border-bottom: 2px solid #eee;">方案</th>
                        <th style="padding: 10px; border-bottom: 2px solid #eee;">优点</th>
                        <th style="padding: 10px; border-bottom: 2px solid #eee;">缺点</th>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>面包多/爱发电</strong></td>
                        <td style="padding: 10px;">完全合规，无需开发，直接给链接</td>
                        <td style="padding: 10px;">手续费较高，用户体验中断</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>支付宝当面付</strong></td>
                        <td style="padding: 10px;">官方接口，费率低 (0.38%)</td>
                        <td style="padding: 10px;">需要个体户执照 (部分地区个人可申请)</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>易支付/码支付</strong></td>
                        <td style="padding: 10px;">个人免签，直接到账</td>
                        <td style="padding: 10px;"><strong>风险极高</strong>，容易跑路或封号</td>
                    </tr>
                </table>
            </div>

            <h3>🛠️ 推荐方案：面包多 API</h3>
            <p>虽然有手续费，但它是最稳妥的个人方案。</p>
            <pre><code class="language-javascript">// 简单的支付流程
function pay() {
    // 1. 创建订单
    const orderId = createOrder();
    
    // 2. 跳转到面包多支付页
    window.location.href = \`https://mbd.pub/pay?order_id=\${orderId}\`;
}

// 3. 接收 Webhook 回调 (在后端)
app.post('/webhook/mbd', (req, res) => {
    const { status, order_id } = req.body;
    if (status === 'paid') {
        // 给用户发货/开通会员
        activateUser(order_id);
    }
});</code ></pre >
        </div >
    `,

    "3.1.4 用 DeepSeek + Qwen-VL 做一个 AI 办公流应用": `
    < div class="lesson-content" >
            <h2>3.1.4 AI 办公流应用: 智能发票报销助手</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 结合 DeepSeek (文本脑) 和 Qwen-VL (视觉眼)，实现全自动发票识别与归档。</p>
            </div>

            <h3>🏗️ 架构设计</h3>
            <p>用户上传图片 -> <strong>Qwen-VL</strong> 提取文字 -> <strong>DeepSeek</strong> 结构化数据 -> 存入 Excel/数据库。</p>

            <h3>👀 视觉模型调用 (Qwen-VL)</h3>
            <pre><code class="language-python"># 伪代码示例
def analyze_invoice(image_path):
    prompt = "请提取这张发票的：发票代码、金额、日期、开票方。以JSON格式返回。"
    
    response = qwen_vl.chat(
        image=image_path,
        prompt=prompt
    )
    
    return json.loads(response)</code></pre>

            <h3>🧠 文本模型处理 (DeepSeek)</h3>
            <pre><code class="language-python">def check_policy(invoice_data):
    prompt = f"""
    公司报销规定：
    1. 餐饮费单笔不超过 500 元。
    2. 必须是工作日。
    
    当前发票：{invoice_data}
    
    请判断是否合规？如果不合规，说明原因。
    """
    
    return deepseek.chat(prompt)</code></pre>
        </div >
    `,

    "3.1.5 复刻一个 Midjourney: 登录 + 遇文生图 + 支付 + token 管理": `
    < div class="lesson-content" >
            <h2>3.1.5 复刻 Midjourney</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 搭建一个完整的 SaaS 图片生成网站，包含用户系统、积分系统和 AI 绘图功能。</p>
            </div>

            <h3>🛠️ 技术栈</h3>
            <ul>
                <li><strong>前端：</strong> Next.js + Tailwind CSS</li>
                <li><strong>后端/数据库：</strong> Supabase (Auth + Database)</li>
                <li><strong>AI 绘图：</strong> Replicate API (运行 Stable Diffusion XL)</li>
            </ul>

            <h3>🎨 核心代码：调用 Replicate</h3>
            <pre><code class="language-javascript">import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function generateImage(prompt) {
  // 1. 检查用户积分
  const user = await getUser();
  if (user.credits < 1) throw new Error("积分不足");

  // 2. 调用 AI
  const output = await replicate.run(
    "stability-ai/sdxl:39ed52f2...",
    { input: { prompt: prompt } }
  );

  // 3. 扣除积分
  await deductCredit(user.id, 1);

  return output;
}</code></pre>
        </div >
    `,

    "3.1.6 用 Chrome 插件抓取一切网页数据": `
    < div class="lesson-content" >
            <h2>3.1.6 Chrome 插件爬虫</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 利用 Chrome 插件的"特权"，绕过反爬虫机制，抓取任意网页数据。</p>
            </div>

            <h3>🕷️ 为什么用插件做爬虫？</h3>
            <p>传统爬虫 (Python requests) 容易被封 IP 或验证码拦截。插件爬虫运行在真实浏览器中，<strong>完全模拟真人行为</strong>，几乎无法被检测。</p>

            <h3>🛠️ Content Script 注入</h3>
            <p>在 <code>manifest.json</code> 中配置要注入的网站：</p>
            <pre><code class="language-json">"content_scripts": [
  {
    "matches": ["https://www.linkedin.com/*"],
    "js": ["scraper.js"]
  }
]</code></pre>

            <h3>📜 scraper.js (抓取逻辑)</h3>
            <pre><code class="language-javascript">// 等待页面加载完成
window.onload = () => {
    // 1. 提取数据
    const name = document.querySelector('.profile-name').innerText;
    const job = document.querySelector('.job-title').innerText;
    
    // 2. 发送到你的后端
    fetch('https://your-api.com/save', {
        method: 'POST',
        body: JSON.stringify({ name, job })
    });
    
    // 3. 自动翻页 (可选)
    // document.querySelector('.next-page-btn').click();
};</code></pre>
        </div >
    `,

    "3.1.7 使用 v0 + supabase + Antigravity 创建一个导航站(上)": `
    < div class="lesson-content" >
            <h2>3.1.7 AI 导航站开发 (上): 界面与数据库</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 30分钟搭建一个高颜值的 AI 工具导航站。</p>
            </div>

            <h3>🎨 Step 1: 用 v0 生成 UI</h3>
            <p>访问 <a href="https://v0.dev" target="_blank">v0.dev</a>，输入提示词：</p>
            <div class="chat-example">
                <p>"A modern AI tools directory website. Dark mode. Grid layout with cards. Each card has an icon, title, description, and tags. Sidebar with categories."</p>
            </div>
            <p>复制生成的 React 代码到你的 Next.js 项目中。</p>

            <h3>💾 Step 2: Supabase 建表</h3>
            <pre><code class="language-sql">create table tools (
  id bigint primary key generated always as identity,
  name text not null,
  description text,
  url text,
  tags text[],
  category text,
  icon_url text
);</code></pre>
        </div >
    `,

    "3.1.8 使用 Antigravity + supabase + ChatGPT o3 开发端侧后台(下)": `
    < div class="lesson-content" >
            <h2>3.1.8 AI 导航站开发 (下): 智能后台</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 只要输入一个 URL，AI 自动抓取网站信息并分类，一键入库。</p>
            </div>

            <h3>🧠 核心逻辑</h3>
            <ol>
                <li>管理员输入 URL (例如: <code>https://chatgpt.com</code>)</li>
                <li>后端爬虫抓取该页面的 <code>meta description</code></li>
                <li><strong>调用 ChatGPT o3</strong> 分析该工具的功能、分类、标签</li>
                <li>自动存入 Supabase</li>
            </ol>

            <h3>🤖 AI 分析代码</h3>
            <pre><code class="language-javascript">async function analyzeTool(url, htmlContent) {
    const prompt = \`
    分析这个网站: \${url}
    内容: \${htmlContent}
    
    请返回 JSON 格式:
    {
        "name": "工具名",
        "description": "一句话简介",
        "category": "分类(如: 写作, 图像, 编程)",
        "tags": ["标签1", "标签2"]
    }
    \`;
    
    return await callOpenAI(prompt);
}</code></pre>
        </div >
    `,

    "3.1.9 用 lovable + 视觉模型: 开发扫描识别并提取数据的 H5": `
    < div class="lesson-content" >
            <h2>3.1.9 视觉识别 H5: 拍图识物</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 开发一个手机网页，用户拍照上传，AI 识别物体并给出淘宝/亚马逊链接。</p>
            </div>

            <h3>🛠️ 工具链</h3>
            <ul>
                <li><strong>Lovable:</strong> 新一代 No-code 平台，比 v0 更适合做完整应用。</li>
                <li><strong>GPT-4o / Qwen-VL:</strong> 视觉识别模型。</li>
            </ul>

            <h3>📱 核心流程</h3>
            <ol>
                <li>使用 HTML <code>&lt;input type="file" capture="camera"&gt;</code> 调用手机相机。</li>
                <li>将图片转为 Base64。</li>
                <li>发送给 GPT-4o。</li>
            </ol>

            <pre><code class="language-javascript">const prompt = "识别图中的物品，并给出它的品牌、型号和预估价格。";
const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        {
            role: "user",
            content: [
                { type: "text", text: prompt },
                { type: "image_url", image_url: { url: base64Image } }
            ]
        }
    ]
});</code></pre>
        </div >
    `,

    "3.1.10 全栈天气 OOTD 小程序: 文生图": `
    < div class="lesson-content" >
            <h2>3.1.10 天气 OOTD 小程序</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 根据当天的天气和温度，AI 自动生成一套时尚穿搭图片 (OOTD)。</p>
            </div>

            <h3>🔗 数据流</h3>
            <p>Weather API -> Prompt Engineering -> Image Generation API</p>

            <h3>1. 获取天气</h3>
            <pre><code class="language-javascript">const weather = await fetch('https://api.weatherapi.com/...').then(res => res.json());
// 假设结果: 25度, 晴天</code></pre>

        <h3>2. 生成提示词 (Prompt)</h3>
        <pre><code class="language-javascript">const prompt = \`
            Design a fashion outfit for a \${weather.condition} day with \${weather.temp_c}°C.
            Style: Casual, Streetwear.
            Gender: Female.
            Full body shot, high quality, photorealistic.
            \`;</code></pre>

        <h3>3. 生成图片</h3>
        <p>调用 Midjourney 或 Stable Diffusion 接口生成图片并展示给用户。</p>
        </div >
    `,

    "3.1.11 iOS 应用开发: 开发一款 AI 消费记账软件 (基于 Owen Omni)": `
    < div class= "lesson-content" >
            <h2>3.1.11 iOS AI 记账</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 开发一个 iOS App，用户按住说话"我刚买了杯咖啡25元"，AI 自动记账。</p>
            </div>

            <h3>🍎 技术栈</h3>
            <ul>
                <li><strong>SwiftUI:</strong> 苹果最新的声明式 UI 框架 (类似 React)。</li>
                <li><strong>OpenAI Whisper:</strong> 语音转文字 (STT)。</li>
                <li><strong>GPT-4o:</strong> 提取结构化数据 (金额、类别、备注)。</li>
            </ul>

            <h3>💻 核心代码 (Swift)</h3>
            <pre><code class="language-swift">func processVoiceInput(audioData: Data) async {
    // 1. 语音转文字
    let text = await whisperAPI.transcribe(audioData)
    // 假设 text = "我刚买了杯咖啡25元"
    
    // 2. AI 提取信息
    let prompt = "从这句话中提取金额、类别和备注：\(text)"
    let json = await gptAPI.chat(prompt)
    // 结果: {"amount": 25, "category": "餐饮", "note": "咖啡"}

            // 3. 存入 CoreData
            saveTransaction(json)
}</code></pre>
        </div >
    `,

    "3.1.12 开发 Elon Musk 多语言简历网站: 理解国际化 + 开发出海": `
    < div class="lesson-content" >
            <h2>3.1.12 多语言简历网站</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 搭建一个支持中/英/日三语切换的个人主页，并使用 AI 自动翻译内容。</p>
            </div>

            <h3>🌍 Next.js i18n 路由</h3>
            <p>文件结构：</p>
            <pre><code>app/
  [lang]/
    page.tsx  # 首页
    about/
      page.tsx</code></pre>
            <p>访问 <code>/en/about</code> 显示英文，<code>/zh/about</code> 显示中文。</p>

            <h3>🤖 AI 自动翻译脚本</h3>
            <p>不要手动翻译！写个脚本遍历你的 JSON 语言包：</p>
            <pre><code class="language-javascript">const dict = { "hello": "你好", "intro": "我是全栈工程师..." };

async function translateAll() {
    for (const key in dict) {
        const en = await ai.translate(dict[key], 'en');
        const jp = await ai.translate(dict[key], 'ja');
        // 保存到 en.json 和 ja.json
    }
}</code></pre>
        </div >
    `,

    "3.1.13 AI 全自动少儿编程: DeepSeek 如何手把手教你?": `
    < div class="lesson-content" >
            <h2>3.1.13 AI 少儿编程教育</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 利用 DeepSeek 的推理能力，生成个性化的 Python 习题和讲解。</p>
            </div>

            <h3>🎓 场景设计</h3>
            <p>孩子输入："我想画一个五角星"。</p>
            <p>AI 输出：</p>
            <ol>
                <li><strong>代码：</strong> Turtle 库画五角星的代码。</li>
                <li><strong>讲解：</strong> 用孩子听得懂的语言解释 <code>for</code> 循环和角度计算。</li>
                <li><strong>追问：</strong> "试着把颜色改成红色好吗？"</li>
            </ol>

            <h3>🔧 Prompt 设计</h3>
            <pre><code class="language-markdown">Role: 少儿编程老师
Style: 亲切、鼓励、使用emoji
Task: 解释代码时，把变量比喻成"盒子"，把循环比喻成"绕圈圈"。
User Input: {input}</code></pre>
        </div >
    `,

    "3.1.14 Claude Code 入门: 开发一个超酷炫的 AI 编程文档工具": `
    < div class="lesson-content" >
            <h2>3.1.14 Claude Code 文档工具</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 丢给 AI 一个 GitHub 仓库链接，它自动生成 Readme、API 文档和架构图。</p>
            </div>

            <h3>🧠 Claude 的长上下文优势</h3>
            <p>Claude 3.5 Sonnet 支持 200k token，可以一次性读完整个项目的代码。</p>

            <h3>🛠️ 实现流程</h3>
            <ol>
                <li><code>git clone</code> 下载代码。</li>
                <li>将所有代码文件合并成一个大文本 (Context)。</li>
                <li>发送给 Claude API。</li>
                <li>Prompt: "请作为资深架构师，为这个项目编写一份详细的 README.md，包含安装步骤、架构图(Mermaid格式)和核心 API 说明。"</li>
            </ol>
        </div >
    `,

    "3.1.15 Creem 支付完整入门(上): 新手最容易接入的海外支付方式!": `
    < div class="lesson-content" >
            <h2>3.1.15 Creem 支付入门 (上)</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 注册 Creem 账号，这是目前对独立开发者最友好的海外支付平台 (支持支付宝/微信支付)。</p>
            </div>

            <h3>💳 为什么选 Creem?</h3>
            <ul>
                <li>无需海外公司，个人可注册。</li>
                <li>支持全球信用卡 + 支付宝/微信 (这对国人出海太重要了)。</li>
                <li>API 简单，类似 Stripe。</li>
            </ul>

            <h3>📝 准备工作</h3>
            <ol>
                <li>访问 Creem 官网注册。</li>
                <li>创建 Product (比如 "Pro Plan - $9.9/mo")。</li>
                <li>获取 <strong>Product ID</strong> 和 <strong>API Key</strong>。</li>
            </ol>
        </div >
    `,

    "3.1.16 Creem 支付完整入门(下): 让全世界资本来买单!": `
    < div class="lesson-content" >
            <h2>3.1.16 Creem 支付入门 (下)</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 在 Next.js 中集成 Creem Checkout。</p>
            </div>

            <h3>💻 1. 创建支付链接</h3>
            <pre><code class="language-javascript">const checkoutUrl = await creem.checkout.create({
    product_id: "prod_123",
    customer_email: user.email,
    success_url: "https://myapp.com/success",
    cancel_url: "https://myapp.com/pricing"
});
// 跳转用户去支付
window.location.href = checkoutUrl;</code></pre>

            <h3>💻 2. 处理 Webhook (回调)</h3>
            <p>当用户支付成功后，Creem 会通知你的服务器。</p>
            <pre><code class="language-javascript">if (event.type === 'checkout.success') {
    const email = event.data.customer_email;
    // 更新数据库，给用户开通会员
    await supabase.from('users').update({ is_pro: true }).eq('email', email);
}</code></pre>
        </div >
    `,

    "3.1.17 N8N + Claude Code: 自动获取 RSS 并在...": `
    < div class="lesson-content" >
            <h2>3.1.17 N8N 自动化工作流</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 搭建一个"AI 情报员"，每天早上自动抓取科技新闻，总结后推送到你的手机。</p>
            </div>

            <h3>⚙️ N8N 流程图</h3>
            <ol>
                <li><strong>Trigger:</strong> 每天 8:00 定时触发。</li>
                <li><strong>RSS Read:</strong> 读取 Hacker News / 36Kr 的 RSS 源。</li>
                <li><strong>AI Agent (Claude):</strong> "请总结这 10 条新闻，提取核心观点，翻译成中文。"</li>
                <li><strong>Telegram/Discord:</strong> 发送总结后的日报。</li>
            </ol>
        </div >
    `,

    "3.1.18 N8N MCP + CC: 开发一个...": `
    < div class="lesson-content" >
            <h2>3.1.18 N8N MCP 实战</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 使用 Model Context Protocol (MCP) 让 N8N 能直接操作你的本地文件和数据库。</p>
            </div>

            <h3>🔌 什么是 MCP?</h3>
            <p>它是 Anthropic 提出的一个标准，让 AI 模型能以标准化的方式连接外部工具 (Tools) 和数据 (Resources)。</p>
            <p>通过 MCP，你的 N8N 工作流可以直接读取你电脑上的 "project_notes.txt"，或者执行本地的 Python 脚本。</p>
        </div >
    `,

    "3.1.19 Dify Agent 实战(上): ...": `
    < div class="lesson-content" >
            <h2>3.1.19 Dify Agent 实战 (上): 知识库搭建</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 使用 Dify 搭建一个"企业级"的 AI 客服，它懂你们公司的所有文档。</p>
            </div>

            <h3>📚 RAG (检索增强生成)</h3>
            <ol>
                <li><strong>上传文档：</strong> 把公司的 PDF 产品手册、Word 规章制度上传到 Dify。</li>
                <li><strong>分段与清洗：</strong> Dify 会自动把文档切成小块 (Chunks)。</li>
                <li><strong>测试检索：</strong> 输入"如何请假？"，看 Dify 能否找到对应的文档片段。</li>
            </ol>
        </div >
    `,

    "3.1.20 Dify Agent 实战(下): ...": `
    < div class="lesson-content" >
            <h2>3.1.20 Dify Agent 实战 (下): 工作流编排</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 让 AI 不仅能回答问题，还能<strong>执行动作</strong> (比如查询订单状态)。</p>
            </div>

            <h3>🧩 Workflow 编排</h3>
            <p>在 Dify 的画布中连接节点：</p>
            <p><code>开始</code> -> <code>意图识别(是查订单还是闲聊?)</code> -> <code>HTTP请求(查数据库)</code> -> <code>LLM(生成回复)</code> -> <code>结束</code></p>
        </div >
    `,

    "3.1.21 用 Claude Code 开发...": `
    < div class="lesson-content" >
            <h2>3.1.21 Claude Code 实战</h2>
            <p>深入探索 Claude Code 的高级功能，如多文件编辑、自动测试生成和代码重构建议。</p>
        </div >
    `,

    "3.1.22 Codex 入门...": `
    < div class="lesson-content" >
            <h2>3.1.22 Codex 入门</h2>
            <p>OpenAI Codex 是 GitHub Copilot 及其背后技术的核心。本节介绍如何直接调用 Codex API 进行代码补全和生成。</p>
        </div >
    `,

    "3.1.23 Github Spec kit...": `
    < div class="lesson-content" >
            <h2>3.1.23 Github Spec Kit</h2>
            <p>GitHub Spec Kit 是一套标准化的工具，用于定义和验证 AI 生成的代码是否符合特定的规范和测试要求。</p>
        </div >
    `,

    "3.1.24 MCP 完整实战...": `
    < div class="lesson-content" >
            <h2>3.1.24 MCP 完整实战</h2>
            <p>构建一个完整的 MCP Server。例如，创建一个 "SQLite MCP Server"，让 Claude Desktop 可以直接查询和修改你的本地 SQLite 数据库文件。</p>
        </div >
    `,

    "3.1.25 用可逆...": `
    < div class="lesson-content" >
            <h2>3.1.25 高级话题: 可逆计算与 AI</h2>
            <p>探讨 AI 编程的未来趋势，包括可逆计算、自适应系统以及 AI 如何重塑软件工程的范式。</p>
        </div >
    `,

    "3.2.1 基于模版，拥有你的第一个博客!": `
    < div class="lesson-content" >
            <h2>3.2.1 搭建个人博客</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 10分钟拥有一个属于自己的独立博客。</p>
            </div>
            <h3>🛠️ 推荐技术栈</h3>
            <ul>
                <li><strong>Hugo/Hexo:</strong> 静态网站生成器，速度极快。</li>
                <li><strong>GitHub Pages:</strong> 免费托管。</li>
            </ul>
            <pre><code class="language-bash"># Hugo 示例
hugo new site myblog
cd myblog
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
hugo server -D</code></pre>
        </div >
    `,

    "3.2.2 ShipAny: 1小时开发...": `
    < div class="lesson-content" >
            <h2>3.2.2 ShipAny 快速开发</h2>
            <p>ShipAny 是一个 Next.js Boilerplate (样板代码)，内置了 Auth, Payment, Database, Email 等所有 SaaS 必备功能。下载即用，专注业务逻辑。</p>
        </div >
    `,

    "3.2.3 MixSaaS 模版: ...": `
    < div class="lesson-content" >
            <h2>3.2.3 MixSaaS 模板</h2>
            <p>MixSaaS 提供了更丰富的企业级功能，如多租户 (Multi-tenancy)、团队协作、权限管理等，适合开发 B2B 应用。</p>
        </div >
    `,

    "3.2.4 EasyApp 模版: ...": `
    < div class="lesson-content" >
            <h2>3.2.4 EasyApp 模板</h2>
            <p>专为移动端 Web App 设计的模板，针对触摸操作进行了优化，提供类似 Native App 的体验 (PWA)。</p>
        </div >
    `,

    "3.3.1 Vercel 部署: 免费托管你的网站项目": `
    < div class="lesson-content" >
            <h2>3.3.1 Vercel 部署指南</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 将你的 Next.js 项目发布到全球互联网。</p>
            </div>
            <h3>🚀 部署步骤</h3>
            <ol>
                <li>将代码推送到 GitHub。</li>
                <li>登录 <a href="https://vercel.com" target="_blank">Vercel</a>，点击 "Add New..." -> "Project"。</li>
                <li>选择你的 GitHub 仓库，点击 "Import"。</li>
                <li>点击 "Deploy"。等待 1 分钟，你就会获得一个 <code>https://xxx.vercel.app</code> 的域名。</li>
            </ol>
        </div >
    `,

    "3.3.2 新手起步好: 在 Zeabur 部署你的所有服务": `
    < div class="lesson-content" >
            <h2>3.3.2 Zeabur 部署指南</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 部署后端服务 (Python/Node.js/Docker) 和数据库。</p>
            </div>
            <h3>☁️ Zeabur 优势</h3>
            <p>Vercel 主要部署前端，而 Zeabur 是<strong>全栈部署平台</strong>。它能一键部署 PostgreSQL, Redis, MySQL 等数据库，也能部署 Python Flask/Django 应用。</p>
            <p>操作逻辑与 Vercel 类似：连接 GitHub -> 选择项目 -> 自动识别语言 -> 上线。</p>
        </div >
    `
};
