// 滚动动画效果
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.importance-card, .animal-card, .action-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('fade-in-up');
        }
    });
}

// 导航栏滚动效果
function navbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 1)';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
}

// 表单提交处理
function handleFormSubmit() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 简单验证
            if (name && email && message) {
                // 显示提交成功消息
                alert('感谢您的留言！我们会尽快回复您。');
                
                // 重置表单
                form.reset();
            } else {
                alert('请填写所有必填字段。');
            }
        });
    }
}

// 平滑滚动到锚点
function smoothScrollToAnchor() {
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // 考虑导航栏高度
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 回到顶部按钮
function addBackToTopButton() {
    // 创建按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.id = 'backToTop';
    backToTopBtn.className = 'back-to-top';
    
    // 添加样式
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #3498db;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        z-index: 999;
    `;
    
    // 添加到页面
    document.body.appendChild(backToTopBtn);
    
    // 滚动显示/隐藏按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
            backToTopBtn.style.transform = 'translateY(0)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
            backToTopBtn.style.transform = 'translateY(20px)';
        }
    });
    
    // 点击回到顶部
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 图片加载优化
function optimizeImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // 添加加载效果
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        // 图片加载完成后显示
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // 如果图片已经加载完成
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    // 初始执行一次
    fadeInOnScroll();
    navbarScrollEffect();
    
    // 添加事件监听器
    window.addEventListener('scroll', () => {
        fadeInOnScroll();
        navbarScrollEffect();
    });
    
    handleFormSubmit();
    smoothScrollToAnchor();
    addBackToTopButton();
    optimizeImageLoading();
});

// 窗口大小变化时重新计算
window.addEventListener('resize', () => {
    fadeInOnScroll();
});