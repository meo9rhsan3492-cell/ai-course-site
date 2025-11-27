document.addEventListener('DOMContentLoaded', () => {
    try {
        // Check if courseData is loaded
        if (typeof window.courseData === 'undefined') {
            console.error('CRITICAL: courseData is not defined!');
            alert('系统错误：课程数据文件 (content.js) 未加载或存在语法错误！');
            return;
        }

        const navItems = document.querySelectorAll('.nav-item');

        // View Elements
        const courseView = document.getElementById('course-view');
        const lessonView = document.getElementById('lesson-view');
        const lessonContentContainer = document.getElementById('lesson-content-container');
        const backToCourseBtn = document.getElementById('back-to-course');

        // Payment Modal Elements
        const paymentModal = document.getElementById('payment-modal');
        const paymentCloseBtn = document.querySelector('.payment-close');
        const buyBtns = document.querySelectorAll('.btn-buy, .btn-primary');
        const paymentStatus = document.getElementById('payment-status');
        const methodBtns = document.querySelectorAll('.method-btn');

        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');
        const progressBar = document.getElementById('progress-bar');
        const mainContent = document.querySelector('.main-content');
        const themeToggleBtn = document.getElementById('theme-toggle');
        const searchInput = document.getElementById('search-input');

        // --- Search Logic ---
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const lessonLinks = document.querySelectorAll('.lesson-list li');
                const subChapters = document.querySelectorAll('.sub-chapter');
                const chapters = document.querySelectorAll('.chapter-card');

                lessonLinks.forEach(li => {
                    const text = li.innerText.toLowerCase();
                    if (text.includes(query)) {
                        li.style.display = 'block';
                    } else {
                        li.style.display = 'none';
                    }
                });

                // Hide empty sub-chapters
                subChapters.forEach(sub => {
                    const visibleLessons = sub.querySelectorAll('.lesson-list li[style="display: block"]');
                    if (query === '' || visibleLessons.length > 0) {
                        sub.style.display = 'block';
                    } else {
                        sub.style.display = 'none';
                    }
                });

                // Hide empty chapters
                chapters.forEach(chap => {
                    const visibleSubs = chap.querySelectorAll('.sub-chapter[style="display: block"]');
                    if (query === '' || visibleSubs.length > 0) {
                        chap.style.display = 'block';
                    } else {
                        chap.style.display = 'none';
                    }
                });
            });
        }

        // --- Dark Mode Logic ---
        const body = document.body;
        const icon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

        // Check localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                const isDark = body.classList.contains('dark-mode');

                if (isDark) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                    localStorage.setItem('theme', 'dark');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                    localStorage.setItem('theme', 'light');
                }
            });
        }

        // --- Mobile Menu Logic ---
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('show');
            });
        }

        // Close sidebar when clicking a link on mobile
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('show');
                }
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            });
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 &&
                !sidebar.contains(e.target) &&
                !mobileMenuBtn.contains(e.target) &&
                sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
            }
        });

        // --- Scroll Progress Logic ---
        if (mainContent) {
            mainContent.addEventListener('scroll', () => {
                const scrollTop = mainContent.scrollTop;
                const scrollHeight = mainContent.scrollHeight - mainContent.clientHeight;
                const scrollPercent = (scrollTop / scrollHeight) * 100;
                if (progressBar) progressBar.style.width = scrollPercent + '%';
            });
        }

        // --- Hover effects for cards ---
        const cards = document.querySelectorAll('.chapter-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = 'var(--primary-color)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = 'var(--border-color)';
            });
        });

        // --- Payment & Access Control Logic ---

        // Check if user has paid
        const isPaid = localStorage.getItem('isPaid') === 'true';

        // Initialize Lessons
        const lessonLinks = document.querySelectorAll('.lesson-list a');

        // Load Progress
        loadProgress();

        function loadProgress() {
            const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
            lessonLinks.forEach(link => {
                if (completedLessons.includes(link.innerText.trim())) {
                    link.parentElement.classList.add('completed');
                } else {
                    link.parentElement.classList.remove('completed');
                }
            });
        }

        function toggleLessonCompletion(title, btn) {
            let completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
            const index = completedLessons.indexOf(title);

            if (index > -1) {
                // Remove
                completedLessons.splice(index, 1);
                btn.innerHTML = '<i class="fa-regular fa-circle-check"></i> 标记为已学';
                btn.classList.remove('completed');
            } else {
                // Add
                completedLessons.push(title);
                btn.innerHTML = '<i class="fa-solid fa-check-circle"></i> 已学完';
                btn.classList.add('completed');
            }

            localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
            loadProgress(); // Update sidebar
        }

        lessonLinks.forEach((link, index) => {
            // Free lessons: First 3 lessons only (index 0, 1, 2)
            const isFree = index < 3;

            if (!isPaid && !isFree) {
                link.classList.add('paid-content');
                link.parentElement.classList.add('paid-lesson');
            }

            link.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Lesson clicked:', link.textContent.trim());
                console.log('Is paid:', isPaid, 'Is free:', isFree);

                if (!isPaid && !isFree) {
                    console.log('Opening payment modal');
                    openPaymentModal();
                    return;
                }

                const lessonTitle = link.textContent.trim();
                console.log('Opening lesson view for:', lessonTitle);
                openLessonView(lessonTitle);
            });
        });

        // Open Lesson View
        function openLessonView(title) {
            // Clean title
            const cleanTitle = title.replace('🔒', '').trim();

            const content = window.courseData[cleanTitle];

            const finalContent = content || `
                <div class="lesson-content">
                    <h2>${cleanTitle}</h2>
                    <p>本节课程内容正在更新中...</p>
                    <p>请稍后回来查看。</p>
            const navContainer = document.createElement('div');
            navContainer.className = 'lesson-navigation';

            // Prev Button
            const prevBtn = document.createElement('a');
            prevBtn.className = 'nav-btn';
            if (currentIndex > 0) {
                const prevLink = lessonLinks[currentIndex - 1];
                prevBtn.innerHTML = `< i class="fa-solid fa-arrow-left" ></i > 上一篇`;
                prevBtn.href = "#";
                prevBtn.onclick = (e) => {
                    e.preventDefault();
                    prevLink.click();
                };
            } else {
                prevBtn.classList.add('disabled');
                prevBtn.innerHTML = `< i class="fa-solid fa-arrow-left" ></i > 上一篇`;
            }
            navContainer.appendChild(prevBtn);

            // Mark as Completed Button
            const completeBtn = document.createElement('button');
            completeBtn.className = 'btn-complete';
            const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
            if (completedLessons.includes(title)) {
                completeBtn.innerHTML = '<i class="fa-solid fa-check-circle"></i> 已学完';
                completeBtn.classList.add('completed');
            } else {
                completeBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i> 标记为已学';
            }
            completeBtn.onclick = () => toggleLessonCompletion(title, completeBtn);
            navContainer.appendChild(completeBtn);

            // Next Button
            const nextBtn = document.createElement('a');
            nextBtn.className = 'nav-btn';
            if (currentIndex < lessonLinks.length - 1) {
                const nextLink = lessonLinks[currentIndex + 1];
                nextBtn.innerHTML = `下一篇 < i class="fa-solid fa-arrow-right" ></i > `;
                nextBtn.href = "#";
                nextBtn.onclick = (e) => {
                    e.preventDefault();
                    nextLink.click();
                };
            } else {
                nextBtn.classList.add('disabled');
                nextBtn.innerHTML = `下一篇 < i class="fa-solid fa-arrow-right" ></i > `;
            }
            navContainer.appendChild(nextBtn);
            if (lessonContentContainer) lessonContentContainer.appendChild(navContainer);

            // Switch Views
            if (courseView) {
                courseView.style.display = 'none';
                courseView.classList.remove('fade-in');
            }
            if (lessonView) {
                lessonView.style.display = 'block';
                lessonView.classList.remove('fade-in');
                void lessonView.offsetWidth; // Trigger reflow
                lessonView.classList.add('fade-in');
            }

            // Enhance Code Blocks
            enhanceCodeBlocks();

            // Scroll to top
            if (mainContent) mainContent.scrollTop = 0;
        }

        function enhanceCodeBlocks() {
            const preTags = document.querySelectorAll('#lesson-content-container pre');
            preTags.forEach(pre => {
                // Check if already enhanced
                if (pre.parentElement.classList.contains('code-block-wrapper')) return;

                // Create wrapper
                const wrapper = document.createElement('div');
                wrapper.className = 'code-block-wrapper';

                // Create header
                const header = document.createElement('div');
                header.className = 'code-header';
                header.innerHTML = `
                < div class="window-controls" >
                        <div class="window-dot dot-red"></div>
                        <div class="window-dot dot-yellow"></div>
                        <div class="window-dot dot-green"></div>
                    </div >
                <button class="copy-btn"><i class="fa-regular fa-copy"></i> Copy</button>
            `;

                // Wrap pre
                pre.parentNode.insertBefore(wrapper, pre);
                wrapper.appendChild(header);
                wrapper.appendChild(pre);

                // Add code class for Prism if missing
                const code = pre.querySelector('code');
                if (code && !code.className) {
                    code.className = 'language-javascript';
                }
                if (pre && !pre.className) {
                    pre.className = 'language-javascript';
                }

                // Highlight
                if (window.Prism) {
                    Prism.highlightElement(code || pre);
                }

                // Copy Logic
                const copyBtn = header.querySelector('.copy-btn');
                copyBtn.addEventListener('click', () => {
                    const text = pre.innerText;
                    navigator.clipboard.writeText(text).then(() => {
                        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                        copyBtn.classList.add('copied');
                        setTimeout(() => {
                            copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
                            copyBtn.classList.remove('copied');
                        }, 2000);
                    });
                });
            });
        }

        // Back to Course View
        if (backToCourseBtn) {
            backToCourseBtn.addEventListener('click', () => {
                if (lessonView) lessonView.style.display = 'none';
                if (courseView) {
                    courseView.style.display = 'block';
                    courseView.classList.remove('fade-in');
                    void courseView.offsetWidth; // Trigger reflow
                    courseView.classList.add('fade-in');
                }
            });
        }

        // --- Payment Flow ---

        function openPaymentModal() {
            if (paymentModal) {
                paymentModal.style.display = 'block';
                startPaymentSimulation();
            }
        }

        function startPaymentSimulation() {
            if (paymentStatus) paymentStatus.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 等待支付中...';

            // Simulate scanning delay
            setTimeout(() => {
                if (paymentStatus) paymentStatus.innerHTML = '<i class="fa-solid fa-check-circle" style="color: green;"></i> 支付成功!';

                // Persist payment state
                localStorage.setItem('isPaid', 'true');

                // Unlock content after short delay
                setTimeout(() => {
                    alert('支付成功！已解锁全部课程内容。');
                    location.reload(); // Reload to refresh UI state
                }, 1000);
            }, 3000);
        }

        // Buy Buttons Trigger
        buyBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (isPaid) {
                    alert('您已经购买过完整版，无需重复购买！');
                } else {
                    openPaymentModal();
                }
            });
        });

        // Payment Method Toggles
        methodBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                methodBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // --- Modal Closing Logic ---

        if (paymentCloseBtn) {
            paymentCloseBtn.addEventListener('click', () => {
                if (paymentModal) paymentModal.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            if (paymentModal && e.target == paymentModal) {
                paymentModal.style.display = 'none';
            }
        });

    } catch (globalErr) {
        console.error('Global script error:', globalErr);
        alert('脚本错误: ' + globalErr.message);
    }
});
