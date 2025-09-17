// Tracing Art - Interactive Navigation and Scroll Effects

class TracingArt {
    constructor() {
        this.currentSection = 1;
        this.sections = document.querySelectorAll('.section');
        this.navDots = document.querySelectorAll('.navDots__dot');
        this.heroTitle = document.querySelector('.hero-title');

        this.init();
    }

    init() {
        this.bindEvents();
        this.showInitialContent();
        this.updateNavigation();
    }

    bindEvents() {
        // Navigation dots
        this.navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSection(index + 1);
            });
        });



        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                    e.preventDefault();
                    this.goToSection(Math.max(1, this.currentSection - 1));
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    this.goToSection(Math.min(3, this.currentSection + 1));
                    break;
            }
        });

        // Scroll wheel navigation with title animations
        let scrollTimeout;
        let scrollProgress = 0; // Track scroll progress within section 1

        document.addEventListener('wheel', (e) => {
            e.preventDefault();

            if (this.currentSection === 1) {
                // Handle scroll-triggered animations within section 1
                this.handleTitleScroll(e.deltaY);
            }

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (e.deltaY > 0) {
                    // Scroll down
                    if (this.currentSection === 1 && scrollProgress < 1) {
                        scrollProgress = Math.min(1, scrollProgress + 0.1);
                        this.updateTitleAnimations(scrollProgress);
                    } else {
                        this.goToSection(Math.min(3, this.currentSection + 1));
                        scrollProgress = 0;
                    }
                } else {
                    // Scroll up
                    if (this.currentSection === 1 && scrollProgress > 0) {
                        scrollProgress = Math.max(0, scrollProgress - 0.1);
                        this.updateTitleAnimations(scrollProgress);
                    } else {
                        this.goToSection(Math.max(1, this.currentSection - 1));
                        scrollProgress = 0;
                    }
                }
            }, 100);
        }, { passive: false });
    }

    showInitialContent() {
        // Show hero title with animation
        setTimeout(() => {
            const lines = this.heroTitle.querySelectorAll('.hero-title__line');
            lines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'translateX(0)';
                }, index * 200);
            });
        }, 500);

    }


    goToSection(sectionNumber) {
        if (sectionNumber === this.currentSection) return;

        // Hide current section
        this.sections[this.currentSection - 1].classList.remove('active');

        // Show new section
        this.currentSection = sectionNumber;
        this.sections[this.currentSection - 1].classList.add('active');

        // Update navigation
        this.updateNavigation();

    }

    updateNavigation() {
        // Update nav dots
        this.navDots.forEach((dot, index) => {
            if (index + 1 === this.currentSection) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Update progress for current section
        const activeDot = this.navDots[this.currentSection - 1];

        // Set progress to 0 for simplicity (can be enhanced later)
        activeDot.style.setProperty('--progress', 0);
    }


    // Method to simulate scroll-triggered text animations
    animateTextBlocks() {
        const textBlocks = document.querySelectorAll('.text-block');
        textBlocks.forEach((block, index) => {
            setTimeout(() => {
                block.classList.add('visible');
                setTimeout(() => {
                    block.classList.remove('visible');
                }, 3000); // Show for 3 seconds
            }, index * 4000); // 4 second intervals
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new TracingArt();

    // Add some demo text block animations for section 1
    setTimeout(() => {
        if (app.currentSection === 1) {
            app.animateTextBlocks();
        }
    }, 2000);
});

// Add CSS animations via JavaScript for dynamic effects
const style = document.createElement('style');
style.textContent = `
    .hero-title__line {
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .hero-title__line:nth-child(2) {
        transform: translateX(20px);
    }
`;
document.head.appendChild(style);