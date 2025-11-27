// Main JavaScript for AI Course Site
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded!');

    // Get DOM elements
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const courseView = document.getElementById('course-view');
    const lessonView = document.getElementById('lesson-view');
    const lessonContentContainer = document.getElementById('lesson-content-container');
    const backToCourseBtn = document.getElementById('back-to-course');
    const paymentModal = document.getElementById('payment-modal');
    const paymentCloseBtn = document.querySelector('.payment-close');
    const paymentStatus = document.getElementById('payment-status');
    const buyBtns = document.querySelectorAll('.btn-buy');
    const methodBtns = document.querySelectorAll('.method-btn');
    const navItems = document.querySelectorAll('.nav-item');
    const progressBar = document.getElementById('progress-bar');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const searchInput = document.getElementById('search-input');

    // Check if user has paid
    const isPaid = localStorage.getItem('isPaid') === 'true';
    console.log('Is paid:', isPaid);

    // Get all lesson links
    const lessonLinks = document.querySelectorAll('.lesson-list a');
    console.log('Found lesson links:', lessonLinks.length);

    // Apply paid content styling and event listeners
    lessonLinks.forEach((link, index) => {
        const isFree = index < 3; // First 3 lessons are free

        if (!isPaid && !isFree) {
            link.classList.add('paid-content');
            link.parentElement.classList.add('paid-lesson');
        }

        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Clicked:', link.textContent.trim());

            if (!isPaid && !isFree) {
                console.log('Opening payment modal');
                openPaymentModal();
                return;
            }

            const lessonTitle = link.textContent.trim();
            openLessonView(lessonTitle);
        });
    });

    // Open lesson view function
    function openLessonView(title) {
        console.log('Opening lesson:', title);

        const content = window.courseData[title];
        console.log('Content found:', !!content);

        if (!content) {
            lessonContentContainer.innerHTML = `
                <div class="lesson-content">
                    <h2>${title}</h2>
                    <p>本节课程内容正在更新中...</p>
                    <p>请稍后回来查看。</p>
                </div>
            `;
        } else {
            lessonContentContainer.innerHTML = content;
        }

        courseView.style.display = 'none';
        lessonView.style.display = 'block';

        // Scroll to top
        if (mainContent) mainContent.scrollTop = 0;
    }

    // Back to course view
    if (backToCourseBtn) {
        backToCourseBtn.addEventListener('click', () => {
            lessonView.style.display = 'none';
            courseView.style.display = 'block';
        });
    }

    // Payment modal
    function openPaymentModal() {
        if (paymentModal) {
            paymentModal.style.display = 'block';
        }
    }

    // Buy buttons
    buyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            openPaymentModal();
        });
    });

    // Close payment modal
    if (paymentCloseBtn) {
        paymentCloseBtn.addEventListener('click', () => {
            paymentModal.style.display = 'none';
        });
    }

    // Theme toggle
    if (themeToggleBtn) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }

        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    }

    console.log('All event listeners attached!');
});

// Payment simulation (global function for inline onclick)
// Payment Method Switching
function switchPaymentMethod(method) {
    // Update buttons
    document.querySelectorAll('.method-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.method === method) {
            btn.classList.add('active');
        }
    });

    // Update QR Codes
    const wechatQr = document.getElementById('qr-wechat');
    const alipayQr = document.getElementById('qr-alipay');

    if (method === 'wechat') {
        wechatQr.style.display = 'block';
        alipayQr.style.display = 'none';
        // Main JavaScript for AI Course Site
        document.addEventListener('DOMContentLoaded', () => {
            console.log('Script loaded!');

            // Get DOM elements
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.querySelector('.main-content');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const courseView = document.getElementById('course-view');
            const lessonView = document.getElementById('lesson-view');
            const lessonContentContainer = document.getElementById('lesson-content-container');
            const backToCourseBtn = document.getElementById('back-to-course');
            const paymentModal = document.getElementById('payment-modal');
            const paymentCloseBtn = document.querySelector('.payment-close');
            const paymentStatus = document.getElementById('payment-status');
            const buyBtns = document.querySelectorAll('.btn-buy');
            const methodBtns = document.querySelectorAll('.method-btn');
            const navItems = document.querySelectorAll('.nav-item');
            const progressBar = document.getElementById('progress-bar');
            const themeToggleBtn = document.getElementById('theme-toggle');
            const searchInput = document.getElementById('search-input');

            // Check if user has paid
            const isPaid = localStorage.getItem('isPaid') === 'true';
            console.log('Is paid:', isPaid);

            // Get all lesson links
            const lessonLinks = document.querySelectorAll('.lesson-list a');
            console.log('Found lesson links:', lessonLinks.length);

            // Apply paid content styling and event listeners
            lessonLinks.forEach((link, index) => {
                const isFree = index < 3; // First 3 lessons are free

                if (!isPaid && !isFree) {
                    link.classList.add('paid-content');
                    link.parentElement.classList.add('paid-lesson');
                }

                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Clicked:', link.textContent.trim());

                    if (!isPaid && !isFree) {
                        console.log('Opening payment modal');
                        openPaymentModal();
                        return;
                    }

                    const lessonTitle = link.textContent.trim();
                    openLessonView(lessonTitle);
                });
            });

            // Open lesson view function
            function openLessonView(title) {
                console.log('Opening lesson:', title);

                const content = window.courseData[title];
                console.log('Content found:', !!content);

                if (!content) {
                    lessonContentContainer.innerHTML = `
                <div class="lesson-content">
                    <h2>${title}</h2>
                    <p>本节课程内容正在更新中...</p>
                    <p>请稍后回来查看。</p>
                </div>
            `;
                } else {
                    lessonContentContainer.innerHTML = content;
                }

                courseView.style.display = 'none';
                lessonView.style.display = 'block';

                // Scroll to top
                if (mainContent) mainContent.scrollTop = 0;
            }

            // Back to course view
            if (backToCourseBtn) {
                backToCourseBtn.addEventListener('click', () => {
                    lessonView.style.display = 'none';
                    courseView.style.display = 'block';
                });
            }

            // Payment modal
            function openPaymentModal() {
                if (paymentModal) {
                    paymentModal.style.display = 'block';
                }
            }

            // Buy buttons
            buyBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    openPaymentModal();
                });
            });

            // Close payment modal
            if (paymentCloseBtn) {
                paymentCloseBtn.addEventListener('click', () => {
                    paymentModal.style.display = 'none';
                });
            }

            // Theme toggle
            if (themeToggleBtn) {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark') {
                    document.body.classList.add('dark-mode');
                }

                themeToggleBtn.addEventListener('click', () => {
                    document.body.classList.toggle('dark-mode');
                    const isDark = document.body.classList.contains('dark-mode');
                    localStorage.setItem('theme', isDark ? 'dark' : 'light');
                });
            }

            // Mobile menu
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', () => {
                    sidebar.classList.toggle('show');
                });
            }

            console.log('All event listeners attached!');
        });

        // Payment simulation (global function for inline onclick)
        // Payment Method Switching
        function switchPaymentMethod(method) {
            // Update buttons
            document.querySelectorAll('.method-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.method === method) {
                    btn.classList.add('active');
                }
            });

            // Update QR Codes
            const wechatQr = document.getElementById('qr-wechat');
            const alipayQr = document.getElementById('qr-alipay');

            if (method === 'wechat') {
                wechatQr.style.display = 'block';
                alipayQr.style.display = 'none';
            } else {
                wechatQr.style.display = 'none';
                alipayQr.style.display = 'block';
            }
        }

        // Verify Activation Code
        async function verifyActivationCode() {
            const codeInput = document.getElementById('activation-code');
            const statusEl = document.getElementById('payment-status');
            const confirmBtn = document.querySelector('.btn-pay-confirm');
            const code = codeInput.value.trim();

            if (!code) {
                alert('请输入激活码');
                return;
            }

            // Change status to verifying
            statusEl.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> 正在验证激活码...';
            statusEl.style.color = '#3b82f6';
            confirmBtn.disabled = true;
            confirmBtn.textContent = '验证中...';

            try {
                // Call backend API
                // Call backend API
                const API_BASE = ''; // Use relative path for production
                const response = await fetch(`${API_BASE}/verify-code`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ code })
                });

                const data = await response.json();

                if (data.success) {
                    statusEl.innerHTML = '<i class="fa-solid fa-check-circle"></i> 验证成功！';
                    statusEl.style.color = '#22c55e';

                    localStorage.setItem('isPaid', 'true');

                    setTimeout(() => {
                        alert('🎉 恭喜！激活码验证成功，课程已解锁！');
                        location.reload();
                    }, 500);
                } else {
                    throw new Error(data.error || '验证失败');
                }
            } catch (error) {
                statusEl.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${error.message}`;
                statusEl.style.color = '#ef4444';
                confirmBtn.disabled = false;
                confirmBtn.textContent = '验证并解锁课程';
            }
        }
