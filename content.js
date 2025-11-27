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
                <div class="feature-box">
                    <h4>⚙️ 后端 (Backend)</h4>
                    <p>Python, Node.js。负责处理业务逻辑（比如登录验证、支付处理）。</p>
                    <p>🤖 <strong>AI 作用：</strong> 写 API 接口、设计算法、处理数据。</p>
                </div>
                <div class="feature-box">
                    <h4>💾 数据库 (Database)</h4>
                    <p>SQL, MongoDB。负责永久保存数据。</p>
                    <p>🤖 <strong>AI 作用：</strong> 写 SQL 查询语句、设计表结构。</p>
                </div>
            </div>

            <h3>🚀 AI 如何改变全栈开发？</h3>
            <p>以前，全栈工程师需要精通所有技术，学习曲线极陡。现在：</p>
            <ul>
                <li>你只需要懂<strong>逻辑</strong>和<strong>架构</strong>。</li>
                <li>具体的代码实现（无论是前端的 CSS 还是后端的 SQL）都可以交给 AI。</li>
                <li><strong>Antigravity</strong> 可以同时理解你的前后端代码，帮你实现跨端的功能（比如"在前端加个按钮，点击后调用后端的支付接口"）。</li>
            </ul>

            <div class="success-box">
                <p>第一章结束！你已经准备好环境和思维了。下一章，我们将开始真正的<strong>实战开发</strong>！🚀</p>
            </div>
        </div>
    `,

    "2.1.1 AI 辅助下的前端开发: NextJS 实战基础入门": `
        < div class= "lesson-content" >
            <h2>2.1.1 AI 辅助下的前端开发: NextJS 实战基础入门</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 使用 Next.js + AI 快速搭建一个现代化的 React 应用。</p>
            </div>
            <h3>🚀 为什么选 Next.js?</h3>
            <p>React 是库，Next.js 是框架。它自带路由、服务端渲染 (SSR) 和 API 功能，是目前最流行的 React 框架。</p>
            <h3>🛠️ AI 辅助开发流程</h3>
            <ol>
                <li><strong>初始化：</strong> <code>npx create-next-app@latest my-app</code></li>
                <li><strong>让 AI 写组件：</strong> "请帮我写一个 Hero Section 组件，包含标题、副标题和两个按钮，使用 Tailwind CSS 样式。"</li>
                <li><strong>让 AI 写页面：</strong> "请把刚才的 Hero 组件放到 page.tsx 中，并添加一个导航栏。"</li>
            </ol>
            <div class="code-block-wrapper">
                <pre><code class="language-bash">npx create-next-app@latest my-ai-app
cd my-ai-app
npm run dev</code></pre>
            </div>
        </div>
    `,

    "2.1.2 AI 辅助下的后端开发入门: Python 的基本使用": `
    < div class="lesson-content" >
            <h2>2.1.2 AI 辅助下的后端开发入门: Python 的基本使用</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 掌握 Python 基础语法，为后端开发打下基础。</p>
            </div>
            <h3>🐍 Python 核心语法速览</h3>
            <p>Python 以简洁著称。让 AI 帮你写代码，你只需要负责 Review。</p>
            <pre><code class="language-python"># 列表推导式
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]  # [1, 4, 9, 16, 25]

# 字典操作
user = {"name": "Antigravity", "role": "Admin"}
print(user.get("name"))</code></pre>
            <div class="tip-box">
                <h4>💡 AI 提示词</h4>
                <p>"请用 Python 写一个函数，接收一个字符串列表，返回其中长度大于 5 的字符串，并按长度降序排列。"</p>
            </div>
        </div >
    `,

    "2.1.3 AI 辅助下的后端开发入门: 用 Flask 实现一个简单的 API": `
    < div class="lesson-content" >
            <h2>2.1.3 AI 辅助下的后端开发入门: 用 Flask 实现一个简单的 API</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 5分钟写出一个能用的 Web API。</p>
            </div>
            <h3>🌶️ Flask 极简示例</h3>
            <pre><code class="language-python">from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/hello')
def hello():
    return jsonify({"message": "Hello from AI Course!"})

if __name__ == '__main__':
    app.run(debug=True)</code></pre>
            <p>运行后访问 <code>http://localhost:5000/api/hello</code> 即可看到 JSON 数据。</p>
        </div >
    `,

    "2.1.4 AI 时代的数据库开发 + AI 编写 SQL 指南": `
    < div class="lesson-content" >
            <h2>2.1.4 AI 时代的数据库开发 + AI 编写 SQL 指南</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 不用死记硬背 SQL 语法，让 AI 帮你写查询。</p>
            </div>
            <h3>💾 SQL 基础</h3>
            <p>SQL (Structured Query Language) 是与数据库对话的语言。</p>
            <div class="chat-example">
                <p><strong>👤 你：</strong> "我有一个 users 表 (id, name, email) 和 orders 表 (id, user_id, amount)。请写一个 SQL 查询，找出消费总额最高的前 10 名用户。"</p>
                <p><strong>🤖 AI：</strong></p>
                <pre><code class="language-sql">SELECT u.name, SUM(o.amount) as total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id
ORDER BY total_spent DESC
LIMIT 10;</code></pre>
            </div>
        </div >
    `,

    "2.2.1 新手友好的腾讯云 CloudBase": `
    < div class="lesson-content" >
            <h2>2.2.1 新手友好的腾讯云 CloudBase</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 了解国内最方便的 Serverless 平台 —— 腾讯云开发 (CloudBase)。</p>
            </div>
            <h3>☁️ 什么是 CloudBase?</h3>
            <p>它提供云函数、云数据库、云存储等一站式后端服务，无需购买服务器，按量付费，非常适合个人开发者和小程序开发。</p>
            <ul>
                <li>✅ <strong>免运维：</strong> 不用管服务器死机、升级。</li>
                <li>✅ <strong>低成本：</strong> 有免费额度，适合起步。</li>
                <li>✅ <strong>全栈集成：</strong> 完美支持微信小程序。</li>
            </ul>
        </div >
    `,

    "1. 认识腾讯云开发 CloudBase": `
    < div class="lesson-content" >
            <h2>1. 认识腾讯云开发 CloudBase</h2>
            <p>CloudBase 是腾讯云提供的云原生一体化开发环境和工具平台。它为开发者提供高可用、自动弹性扩缩的后端云服务，包含计算、存储、托管等 serverless 化能力。</p>
            <h3>核心能力</h3>
            <ul>
                <li><strong>云函数：</strong> 在云端运行的代码，无需管理服务器。</li>
                <li><strong>云数据库：</strong> 兼容 MongoDB 的文档型数据库。</li>
                <li><strong>云存储：</strong> 存储图片、视频等文件。</li>
            </ul>
        </div >
    `,

    "2. 开发 AI 客服后台": `
    < div class="lesson-content" >
            <h2>2. 开发 AI 客服后台</h2>
            <p>我们将使用 CloudBase 的云函数来搭建一个简单的 AI 客服后台。</p>
            <h3>步骤</h3>
            <ol>
                <li>在腾讯云控制台创建云开发环境。</li>
                <li>新建云函数 <code>ai-chat</code>。</li>
                <li>在云函数中调用 DeepSeek 或 OpenAI 的 API。</li>
                <li>部署云函数并开启 HTTP 访问访问。</li>
            </ol>
        </div >
    `,

    "3. 完成用户登录": `
    < div class="lesson-content" >
            <h2>3. 完成用户登录</h2>
            <p>使用 CloudBase 的身份认证服务，轻松实现微信一键登录。</p>
            <pre><code class="language-javascript">const app = tcb.init({ env: 'your-env-id' });
const auth = app.auth();

async function login() {
    await auth.signInWithWeixin();
    console.log('登录成功');
}</code></pre>
        </div >
    `,

    "4. 完成 AI 客服核心功能": `
    < div class="lesson-content" >
            <h2>4. 完成 AI 客服核心功能</h2>
            <p>结合前端界面和后端云函数，实现完整的对话流程。</p>
            <p>前端发送用户消息 -> 云函数调用 LLM -> 返回 AI 回复 -> 前端展示。</p>
        </div >
    `,

    "5. 完成发布作品的见证": `
    < div class="lesson-content" >
            <h2>5. 完成发布作品的见证</h2>
            <p>将你的 AI 客服应用部署上线，分享给朋友使用！</p>
            <p>CloudBase 提供静态网站托管功能，一键上传 HTML/CSS/JS 文件即可拥有公网域名。</p>
        </div >
    `,

    "2.2.2 出海必备 - Supabase 完全指南": `
    < div class="lesson-content" >
            <h2>2.2.2 出海必备 - Supabase 完全指南</h2>
            <div class="intro-box">
                <p><strong>📚 本节目标：</strong> 学习 "开源版 Firebase" —— Supabase，海外项目的首选后端。</p>
            </div>
            <h3>🔥 为什么选择 Supabase?</h3>
            <p>Supabase 基于 PostgreSQL，提供了实时数据库、身份验证、对象存储等功能，且 API 极其好用。</p>
        </div >
    `,

    "1. 什么是 Supabase?": `
    < div class="lesson-content" >
            <h2>1. 什么是 Supabase?</h2>
            <p>Supabase 是一个开源的 Firebase 替代品。它基于 PostgreSQL 构建，提供了一整套后端服务。</p>
        </div >
    `,

    "2. 给项目初始化数据库表": `
    < div class="lesson-content" >
            <h2>2. 给项目初始化数据库表</h2>
            <p>在 Supabase Dashboard 中，使用 Table Editor 可视化创建表格。</p>
            <p>或者使用 SQL Editor：</p>
            <pre><code class="language-sql">CREATE TABLE todos (
  id bigint generated by default as identity primary key,
  task text,
  is_complete boolean default false,
  user_id uuid references auth.users
);</code></pre>
        </div >
    `,

    "3. 轻松接入 Supabase": `
    < div class="lesson-content" >
            <h2>3. 轻松接入 Supabase</h2>
            <p>安装 JS 客户端：<code>npm install @supabase/supabase-js</code></p>
            <pre><code class="language-javascript">import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xyzcompany.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)</code></pre>
        </div >
    `,

    "4. 轻松接入邮件鉴权注册功能 (Auth)": `
    < div class="lesson-content" >
            <h2>4. 轻松接入邮件鉴权注册功能 (Auth)</h2>
            <pre><code class="language-javascript">const { user, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})</code></pre>
            <p>Supabase 自动处理邮件发送和 Token 验证。</p>
        </div >
    `,

    "5. 用 Antigravity 给 Todo List 实现增删改查 (Database)": `
    < div class="lesson-content" >
            <h2>5. 用 Antigravity 给 Todo List 实现增删改查</h2>
            <p>让 AI 帮你写 CRUD 代码：</p>
            <pre><code class="language-javascript">// 查询
const { data, error } = await supabase
  .from('todos')
  .select('*')

// 插入
const { data, error } = await supabase
  .from('todos')
  .insert([{ task: 'Learn AI', user_id: user.id }])</code></pre>
        </div >
    `,

    "6. 增加文件上传功能 (Storage)": `
    < div class="lesson-content" >
            <h2>6. 增加文件上传功能 (Storage)</h2>
            <p>创建 Bucket，然后上传文件：</p>
            <pre><code class="language-javascript">const { data, error } = await supabase
  .storage
  .from('avatars')
  .upload('public/avatar1.png', avatarFile)</code></pre>
        </div >
    `,

    "7. 给应用增加实时功能 (Realtime)": `
    < div class="lesson-content" >
            <h2>7. 给应用增加实时功能 (Realtime)</h2>
            <p>订阅数据库变更，实现多人协作：</p>
            <pre><code class="language-javascript">supabase
  .channel('public:todos')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'todos' }, payload => {
    console.log('Change received!', payload)
  })
  .subscribe()</code></pre>
        </div >
    `,

    "8. 数据安全设置 (RLS)": `
    < div class="lesson-content" >
            <h2>8. 数据安全设置 (RLS)</h2>
            <p>Row Level Security (RLS) 是 Supabase 的核心安全机制。永远不要在客户端暴露 Service Key。</p>
            <pre><code class="language-sql">-- 允许用户只看到自己的 todo
create policy "Individuals can view their own todos."
on todos for select
using ( auth.uid() = user_id );</code></pre>
        </div>
    `,
    "3.1.1 快速部署 DeepSeek R1 私有模型": `
        < div class= "lesson-content" >
            <h2>3.1.1 快速部署 DeepSeek R1 私有模型</h2>
            <p><strong>目标：</strong> 在本地或云端服务器部署高性能开源模型 DeepSeek R1。</p>
            <p>使用 Ollama 是最简单的方式：</p>
            <pre><code class="language-bash"># 安装 Ollama
curl -fsSL https://ollama.com/install.sh | sh

# 运行 DeepSeek R1
ollama run deepseek-r1</code></pre>
        </div>
    `,
    "3.1.2 开发 Chrome 插件: 把上网助手变成生产力外挂": `
    < div class="lesson-content" >
            <h2>3.1.2 开发 Chrome 插件</h2>
            <p><strong>目标：</strong> 编写一个 Chrome 扩展，利用 AI 总结网页内容。</p>
            <p>核心文件 <code>manifest.json</code>:</p>
            <pre><code class="language-json">{
  "manifest_version": 3,
  "name": "AI Summarizer",
  "version": "1.0",
  "permissions": ["activeTab"],
  "action": { "default_popup": "popup.html" }
}</code></pre>
        </div >
    `,
    "3.1.3 开发一个能赚钱的网站: 接入国内个人支付 (无需营业执照)": `
    < div class="lesson-content" >
            <h2>3.1.3 接入国内个人支付</h2>
            <p><strong>方案：</strong> 使用"面包多"、"爱发电"等平台的 API，或者使用支付宝/微信的当面付（需要个体户）。</p>
            <p>最简单的个人方案是使用第三方免签支付网关（注意风险），或者使用发卡平台。</p>
        </div >
    `,
    "3.1.4 用 DeepSeek + Qwen-VL 做一个 AI 办公流应用": `
    < div class="lesson-content" >
            <h2>3.1.4 AI 办公流应用</h2>
            <p>结合文本模型 (DeepSeek) 和视觉模型 (Qwen-VL) 实现文档分析、发票识别等自动化流程。</p>
        </div >
    `,
    "3.1.5 复刻一个 Midjourney: 登录 + 遇文生图 + 支付 + token 管理": `
    < div class="lesson-content" >
            <h2>3.1.5 复刻 Midjourney</h2>
            <p><strong>架构：</strong> Next.js 前端 + Supabase 后端 + Replicate API (调用 Stable Diffusion)。</p>
            <p>实现积分扣除机制：每次生成图片扣除用户 Token。</p>
        </div >
    `,
    "3.1.6 用 Chrome 插件抓取一切网页数据": `
    < div class="lesson-content" >
            <h2>3.1.6 Chrome 插件爬虫</h2>
            <p>利用 Chrome 插件的权限，注入 Content Script 到页面，提取 DOM 数据并发送到后端。</p>
        </div >
    `,
    "3.1.7 使用 v0 + supabase + Antigravity 创建一个导航站(上)": `
    < div class="lesson-content" >
            <h2>3.1.7 AI 导航站开发 (上)</h2>
            <p>使用 Vercel v0 生成 UI，Supabase 存储链接数据，Antigravity 编写业务逻辑。</p>
        </div >
    `,
    "3.1.8 使用 Antigravity + supabase + ChatGPT o3 开发端侧后台(下)": `
    < div class="lesson-content" >
            <h2>3.1.8 AI 导航站开发 (下)</h2>
            <p>开发管理后台，实现链接的增删改查，并接入 ChatGPT o3 自动生成网站简介。</p>
        </div >
    `,
    "3.1.9 用 lovable + 视觉模型: 开发扫描识别并提取数据的 H5": `
    < div class="lesson-content" >
            <h2>3.1.9 视觉识别 H5</h2>
            <p>使用 Lovable (No-code/Low-code) 平台快速搭建前端，调用 GPT-4V 或 Qwen-VL API 进行图片识别。</p>
        </div >
    `,
    "3.1.10 全栈天气 OOTD 小程序: 文生图": `
    < div class="lesson-content" >
            <h2>3.1.10 天气 OOTD 小程序</h2>
            <p>获取天气 API 数据 -> 生成穿搭建议 Prompt -> 调用 SDXL 生成穿搭图片。</p>
        </div >
    `,
    "3.1.11 iOS 应用开发: 开发一款 AI 消费记账软件 (基于 Owen Omni)": `
    < div class="lesson-content" >
            <h2>3.1.11 iOS AI 记账</h2>
            <p>使用 SwiftUI 开发 iOS 界面，接入 OpenAI Whisper 实现语音记账。</p>
        </div >
    `,
    "3.1.12 开发 Elon Musk 多语言简历网站: 理解国际化 + 开发出海": `
    < div class="lesson-content" >
            <h2>3.1.12 多语言简历网站</h2>
            <p>使用 Next.js i18n 路由，结合 AI 翻译，快速生成多语言版本的个人主页。</p>
        </div >
    `,
    "3.1.13 AI 全自动少儿编程: DeepSeek 如何手把手教你?": `
    < div class="lesson-content" >
            <h2>3.1.13 AI 少儿编程</h2>
            <p>利用 DeepSeek 的推理能力，生成适合儿童的 Python 教学案例和互动练习。</p>
        </div >
    `,
    "3.1.14 Claude Code 入门: 开发一个超酷炫的 AI 编程文档工具": `
    < div class="lesson-content" >
            <h2>3.1.14 Claude Code 文档工具</h2>
            <p>使用 Claude 的长上下文能力，分析整个代码库，自动生成 API 文档和架构图。</p>
        </div >
    `,
    "3.1.15 Creem 支付完整入门(上): 新手最容易接入的海外支付方式!": `
    < div class="lesson-content" >
            <h2>3.1.15 Creem 支付入门 (上)</h2>
            <p>注册 Creem 账号，获取 API Key，配置 Webhook。</p>
        </div >
    `,
    "3.1.16 Creem 支付完整入门(下): 让全世界资本来买单!": `
    < div class="lesson-content" >
            <h2>3.1.16 Creem 支付入门 (下)</h2>
            <p>在 Next.js 中集成 Creem Checkout，处理支付回调，更新用户会员状态。</p>
        </div >
    `,
    "3.1.17 N8N + Claude Code: 自动获取 RSS 并在...": `
    < div class="lesson-content" >
            <h2>3.1.17 N8N 自动化工作流</h2>
            <p>搭建 N8N 流程：读取 RSS -> Claude 总结 -> 发送到 Telegram/Discord。</p>
        </div >
    `,
    "3.1.18 N8N MCP + CC: 开发一个...": `
    < div class="lesson-content" >
            <h2>3.1.18 N8N MCP 实战</h2>
            <p>使用 Model Context Protocol (MCP) 连接 N8N 和本地 AI 模型。</p>
        </div >
    `,
    "3.1.19 Dify Agent 实战(上): ...": `
    < div class="lesson-content" >
            <h2>3.1.19 Dify Agent 实战 (上)</h2>
            <p>Dify 是开源的 LLM 应用开发平台。本节介绍如何搭建 Dify 知识库。</p>
        </div >
    `,
    "3.1.20 Dify Agent 实战(下): ...": `
    < div class="lesson-content" >
            <h2>3.1.20 Dify Agent 实战 (下)</h2>
            <p>在 Dify 中编排 Agent 工作流，接入外部 API 工具。</p>
        </div >
    `,
    "3.1.21 用 Claude Code 开发...": `
    < div class="lesson-content" >
            <h2>3.1.21 Claude Code 实战</h2>
            <p>深入探索 Claude Code 的高级功能。</p>
        </div >
    `,
    "3.1.22 Codex 入门...": `
    < div class="lesson-content" >
            <h2>3.1.22 Codex 入门</h2>
            <p>OpenAI Codex 模型的使用指南。</p>
        </div >
    `,
    "3.1.23 Github Spec kit...": `
    < div class="lesson-content" >
            <h2>3.1.23 Github Spec Kit</h2>
            <p>使用 GitHub 最新工具包加速开发。</p>
        </div >
    `,
    "3.1.24 MCP 完整实战...": `
    < div class="lesson-content" >
            <h2>3.1.24 MCP 完整实战</h2>
            <p>构建一个完整的 MCP Server，连接你的本地数据和 AI。</p>
        </div >
    `,
    "3.1.25 用可逆...": `
    < div class="lesson-content" >
            <h2>3.1.25 高级话题</h2>
            <p>探索 AI 编程的更多可能性。</p>
        </div >
    `,
    "3.2.1 基于模版，拥有你的第一个博客!": `
    < div class="lesson-content" >
            <h2>3.2.1 搭建个人博客</h2>
            <p>使用 Hugo 或 Hexo 模板，配合 GitHub Pages 免费部署。</p>
        </div >
    `,
    "3.2.2 ShipAny: 1小时开发...": `
    < div class="lesson-content" >
            <h2>3.2.2 ShipAny 快速开发</h2>
            <p>使用 ShipAny 样板代码，快速启动 SaaS 项目。</p>
        </div >
    `,
    "3.2.3 MixSaaS 模版: ...": `
    < div class="lesson-content" >
            <h2>3.2.3 MixSaaS 模板</h2>
            <p>全功能的 SaaS 启动模板介绍。</p>
        </div >
    `,
    "3.2.4 EasyApp 模版: ...": `
    < div class="lesson-content" >
            <h2>3.2.4 EasyApp 模板</h2>
            <p>移动端应用开发模板。</p>
        </div >
    `,
    "3.3.1 Vercel 部署: 免费托管你的网站项目": `
    < div class="lesson-content" >
            <h2>3.3.1 Vercel 部署指南</h2>
            <p>连接 GitHub 仓库，一键部署 Next.js 应用到 Vercel 全球边缘网络。</p>
        </div >
    `,
    "3.3.2 新手起步好: 在 Zeabur 部署你的所有服务": `
    < div class="lesson-content" >
            <h2>3.3.2 Zeabur 部署指南</h2>
            <p>Zeabur 是国人开发的优秀部署平台，支持 Docker、Node.js、Python 等多种环境，服务器位于亚太地区，国内访问速度快。</p>
        </div >
    `
};
