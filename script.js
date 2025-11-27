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
function startPaymentSimulation() {
    console.log('Payment simulation started');
    setTimeout(() => {
        localStorage.setItem('isPaid', 'true');
        alert('支付成功！页面将刷新解锁全部内容。');
        location.reload();
    }, 2000);
}
