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
    const buyBtns = document.querySelectorAll('.btn-buy');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const searchInput = document.getElementById('search-input');

    // Check if user has paid
    const isPaid = localStorage.getItem('isPaid') === 'true';
    console.log('Is paid:', isPaid);

    // Handle Unlock Bar visibility
    const unlockBar = document.getElementById('unlock-bar');
    if (isPaid && unlockBar) {
        unlockBar.style.display = 'none';
    }

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

        // Ensure courseData is available
        if (!window.courseData) {
            console.error('Course data not loaded!');
            return;
        }

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

// Global functions for HTML onclick attributes

// Payment Method Switching
window.switchPaymentMethod = function (method) {
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
        if (wechatQr) wechatQr.style.display = 'block';
        if (alipayQr) alipayQr.style.display = 'none';
    } else {
        if (wechatQr) wechatQr.style.display = 'none';
        if (alipayQr) alipayQr.style.display = 'block';
    }
}

// Verify Activation Code
window.verifyActivationCode = async function () {
    const codeInput = document.getElementById('activation-code');
    const msgEl = document.getElementById('verify-message');
    const code = codeInput.value.trim();

    if (!code) {
        msgEl.textContent = '❌ 请输入激活码';
        msgEl.style.color = 'red';
        return;
    }

    msgEl.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 正在验证...';
    msgEl.style.color = '#666';

    try {
        // Call backend API
        const response = await fetch('/api/verify-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code })
        });

        const data = await response.json();

        if (data.success) {
            msgEl.innerHTML = '✅ 激活成功！正在解锁...';
            msgEl.style.color = 'green';
            localStorage.setItem('isPaid', 'true');
            setTimeout(() => {
                alert('🎉 恭喜！课程已全部解锁！');
                location.reload();
            }, 1000);
        } else {
            msgEl.textContent = '❌ ' + (data.error || '激活码无效');
            msgEl.style.color = 'red';
        }
    } catch (error) {
        console.error('Verification error:', error);
        msgEl.textContent = '❌ 网络错误，请重试';
        msgEl.style.color = 'red';
    }
}
