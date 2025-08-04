// Mobile App-Style JavaScript for Naveen Apartments

class MobileApartmentApp {
    constructor() {
        this.currentSection = 'home';
        this.isLoggedIn = false;
        this.currentGalleryCategory = null;
        this.currentImageIndex = 0;
        this.galleryData = this.initializeGalleryData();
        this.init();
    }

    initializeGalleryData() {
        return {
            "exterior": {
                title: "Building Exterior",
                images: [
                    {src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&auto=format&q=75", caption: "Modern apartment building front elevation"},
                    {src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&auto=format&q=75", caption: "Side view with beautiful architectural design"},
                    {src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&auto=format&q=75", caption: "Main entrance with landscaped gardens"},
                    {src: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop&auto=format&q=75", caption: "Evening view of the building complex"},
                    {src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format&q=75", caption: "Green spaces and park facing view"},
                    {src: "https://images.unsplash.com/photo-1486312338219-ce68e2c54648?w=800&h=600&fit=crop&auto=format&q=75", caption: "Complete building view from different angle"}
                ]
            },
            "interior": {
                title: "Apartment Interior",
                images: [
                    {src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format&q=75", caption: "Spacious living room with modern furnishing"},
                    {src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&auto=format&q=75", caption: "Master bedroom with premium interiors"},
                    {src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format&q=75", caption: "Modular kitchen with built-in appliances"},
                    {src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&auto=format&q=75", caption: "Modern bathroom with premium fittings"},
                    {src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop&auto=format&q=75", caption: "Balcony with park view and fresh air"},
                    {src: "https://images.unsplash.com/photo-1540518614846-7eded47432f5?w=800&h=600&fit=crop&auto=format&q=75", caption: "Additional room and storage spaces"}
                ]
            },
            "amenities": {
                title: "Community Amenities",
                images: [
                    {src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&auto=format&q=75", caption: "Modern swimming pool facility"},
                    {src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&auto=format&q=75", caption: "Well-equipped fitness center"},
                    {src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop&auto=format&q=75", caption: "Community hall for events"},
                    {src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format&q=75", caption: "Children's playground area"},
                    {src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop&auto=format&q=75", caption: "Landscaped gardens and walking paths"}
                ]
            },
            "security": {
                title: "Security Features",
                images: [
                    {src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=75", caption: "Main security gate with automated barrier"},
                    {src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format&q=75", caption: "Security booth with 24/7 guard facility"},
                    {src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format&q=75", caption: "CCTV monitoring and surveillance system"},
                    {src: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&h=600&fit=crop&auto=format&q=75", caption: "Night security and illumination"}
                ]
            },
            "parking": {
                title: "Parking Facilities",
                images: [
                    {src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format&q=75", caption: "Covered parking for residents"},
                    {src: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop&auto=format&q=75", caption: "Visitor parking area near entrance"},
                    {src: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=600&fit=crop&auto=format&q=75", caption: "Two-wheeler parking section"}
                ]
            },
            "common": {
                title: "Common Areas",
                images: [
                    {src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop&auto=format&q=75", caption: "Elegant lobby with reception area"},
                    {src: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800&h=600&fit=crop&auto=format&q=75", caption: "High-speed elevators with modern controls"},
                    {src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&auto=format&q=75", caption: "Well-lit corridors with safety features"},
                    {src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop&auto=format&q=75", caption: "Community notice boards and seating"},
                    {src: "https://images.unsplash.com/photo-1540518614846-7eded47432f5?w=800&h=600&fit=crop&auto=format&q=75", caption: "Common seating areas for residents"}
                ]
            }
        };
    }

    init() {
        this.bindEvents();
        this.initializeNavigation();
        this.showSection('home');
        this.handleTouchGestures();
        this.initializeQuickActions();
        this.preloadImages();
        console.log('Mobile Apartment App initialized successfully');
    }

    bindEvents() {
        // Bottom navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.getAttribute('data-section');
                this.navigateToSection(section);
            });
        });

        // Header login button
        const headerLoginBtn = document.getElementById('loginBtn');
        if (headerLoginBtn) {
            headerLoginBtn.addEventListener('click', () => {
                if (this.isLoggedIn) {
                    this.logout();
                } else {
                    this.navigateToSection('residents');
                }
            });
        }

        // Emergency button in header
        const emergencyBtn = document.getElementById('emergencyBtn');
        if (emergencyBtn) {
            emergencyBtn.addEventListener('click', () => {
                this.showEmergencyModal();
            });
        }

        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        // Logout button
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                this.logout();
            });
        }

        // Gallery events
        this.bindGalleryEvents();

        // Modal events
        this.bindModalEvents();

        // Quick action cards
        this.bindQuickActionEvents();

        // Document downloads
        this.bindDownloadEvents();

        // Emergency contact links
        this.bindEmergencyEvents();
    }

    initializeNavigation() {
        // Set initial active state
        this.updateBottomNavigation('home');
    }

    navigateToSection(sectionId) {
        console.log('Navigating to section:', sectionId);
        
        // Hide all sections
        document.querySelectorAll('.app-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
            this.updateBottomNavigation(sectionId);
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Update login button state in header
            this.updateHeaderLoginButton();
            
            console.log('Successfully navigated to:', sectionId);
        } else {
            console.error('Section not found:', sectionId);
        }
    }

    updateBottomNavigation(activeSection) {
        document.querySelectorAll('.nav-item').forEach(item => {
            const section = item.getAttribute('data-section');
            if (section === activeSection) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    updateHeaderLoginButton() {
        const headerLoginBtn = document.getElementById('loginBtn');
        if (headerLoginBtn) {
            if (this.isLoggedIn) {
                headerLoginBtn.innerHTML = '🔓';
                headerLoginBtn.title = 'Logout';
            } else {
                headerLoginBtn.innerHTML = '👤';
                headerLoginBtn.title = 'Login';
            }
        }
    }

    bindQuickActionEvents() {
        document.querySelectorAll('.quick-action-card, .notice-card').forEach(card => {
            card.addEventListener('click', () => {
                const action = card.getAttribute('data-action');
                this.handleQuickAction(action);
            });

            // Add keyboard support
            card.setAttribute('tabindex', '0');
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const action = card.getAttribute('data-action');
                    this.handleQuickAction(action);
                }
            });
        });
    }

    handleQuickAction(action) {
        console.log('Quick action:', action);
        
        switch(action) {
            case 'payment':
                this.showNotification('💳 Payment gateway integration coming soon! Please contact the office for bill payments.', 'info');
                break;
            case 'notices':
                if (this.isLoggedIn) {
                    this.navigateToSection('residents');
                } else {
                    this.navigateToSection('residents');
                    this.showNotification('Please login to view latest notices.', 'info');
                }
                break;
            case 'emergency':
                this.showEmergencyModal();
                break;
            case 'gallery':
                this.navigateToSection('gallery');
                break;
            case 'contact':
                this.navigateToSection('contact');
                break;
            case 'committee':
                this.navigateToSection('contact');
                // Scroll to committee section
                setTimeout(() => {
                    const committeeSection = document.querySelector('.committee-section');
                    if (committeeSection) {
                        committeeSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300);
                break;
            default:
                this.showNotification('Feature coming soon!', 'info');
        }
    }

    initializeQuickActions() {
        // Add touch feedback to quick action cards
        document.querySelectorAll('.quick-action-card, .notice-card').forEach(card => {
            card.addEventListener('touchstart', () => {
                card.style.transform = 'scale(0.95)';
            });
            
            card.addEventListener('touchend', () => {
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            });
        });
    }

    bindGalleryEvents() {
        // Gallery category cards
        document.querySelectorAll('.gallery-category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.getAttribute('data-category');
                this.openGalleryModal(category);
            });

            // Add keyboard support
            card.setAttribute('tabindex', '0');
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const category = card.getAttribute('data-category');
                    this.openGalleryModal(category);
                }
            });
        });
    }

    bindModalEvents() {
        // Gallery modal events
        const galleryModal = document.getElementById('galleryModal');
        const closeGalleryModal = document.getElementById('closeGalleryModal');
        const galleryPrev = document.getElementById('galleryPrev');
        const galleryNext = document.getElementById('galleryNext');

        if (closeGalleryModal) {
            closeGalleryModal.addEventListener('click', () => {
                this.closeGalleryModal();
            });
        }

        if (galleryModal) {
            galleryModal.addEventListener('click', (e) => {
                if (e.target === galleryModal || e.target.classList.contains('modal-overlay')) {
                    this.closeGalleryModal();
                }
            });
        }

        if (galleryPrev) {
            galleryPrev.addEventListener('click', () => {
                this.previousImage();
            });
        }

        if (galleryNext) {
            galleryNext.addEventListener('click', () => {
                this.nextImage();
            });
        }

        // Emergency modal events
        const emergencyModal = document.getElementById('emergencyModal');
        const closeEmergencyModal = document.getElementById('closeEmergencyModal');

        if (closeEmergencyModal) {
            closeEmergencyModal.addEventListener('click', () => {
                this.closeEmergencyModal();
            });
        }

        if (emergencyModal) {
            emergencyModal.addEventListener('click', (e) => {
                if (e.target === emergencyModal || e.target.classList.contains('modal-overlay')) {
                    this.closeEmergencyModal();
                }
            });
        }
    }

    openGalleryModal(category) {
        console.log('Opening gallery modal for category:', category);

        if (!this.galleryData[category]) {
            console.error('Gallery category not found:', category);
            this.showNotification('Gallery category not found', 'error');
            return;
        }

        this.currentGalleryCategory = category;
        this.currentImageIndex = 0;

        const modal = document.getElementById('galleryModal');
        const title = document.getElementById('galleryModalTitle');
        
        if (!modal || !title) {
            console.error('Gallery modal elements not found');
            return;
        }

        title.textContent = this.galleryData[category].title;
        
        this.updateGalleryDisplay();
        this.createThumbnails();
        
        modal.classList.remove('hidden');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus management
        const closeButton = document.getElementById('closeGalleryModal');
        if (closeButton) {
            setTimeout(() => closeButton.focus(), 100);
        }

        console.log('Gallery modal opened successfully');
    }

    closeGalleryModal() {
        const modal = document.getElementById('galleryModal');
        if (modal) {
            modal.classList.add('hidden');
            this.currentGalleryCategory = null;
            this.currentImageIndex = 0;
            
            // Restore body scroll
            document.body.style.overflow = '';
        }
    }

    updateGalleryDisplay() {
        if (!this.currentGalleryCategory) return;

        const categoryData = this.galleryData[this.currentGalleryCategory];
        const currentImage = categoryData.images[this.currentImageIndex];

        // Update main image
        const mainImage = document.getElementById('galleryMainImage');
        if (mainImage) {
            // Show loading state
            mainImage.style.opacity = '0.5';
            
            // Create a new image to test loading
            const tempImg = new Image();
            tempImg.onload = () => {
                mainImage.src = currentImage.src;
                mainImage.alt = currentImage.caption;
                mainImage.style.opacity = '1';
            };
            
            tempImg.onerror = () => {
                // Fallback to a working placeholder
                mainImage.src = `https://via.placeholder.com/800x600/2563EB/ffffff?text=${encodeURIComponent(this.galleryData[this.currentGalleryCategory].title)}`;
                mainImage.alt = currentImage.caption;
                mainImage.style.opacity = '1';
                console.warn('Failed to load gallery image, using placeholder');
            };
            
            tempImg.src = currentImage.src;
        }

        // Update caption
        const caption = document.getElementById('galleryImageCaption');
        if (caption) {
            caption.textContent = currentImage.caption;
        }

        // Update counter
        const counter = document.getElementById('galleryCounter');
        if (counter) {
            counter.textContent = `${this.currentImageIndex + 1} of ${categoryData.images.length}`;
        }

        // Update thumbnail active state
        this.updateThumbnailActive();

        // Update navigation buttons
        const prevBtn = document.getElementById('galleryPrev');
        const nextBtn = document.getElementById('galleryNext');
        
        if (prevBtn) {
            prevBtn.style.opacity = this.currentImageIndex === 0 ? '0.5' : '1';
            prevBtn.disabled = this.currentImageIndex === 0;
        }
        
        if (nextBtn) {
            nextBtn.style.opacity = this.currentImageIndex === categoryData.images.length - 1 ? '0.5' : '1';
            nextBtn.disabled = this.currentImageIndex === categoryData.images.length - 1;
        }
    }

    createThumbnails() {
        if (!this.currentGalleryCategory) return;

        const categoryData = this.galleryData[this.currentGalleryCategory];
        const thumbnailContainer = document.getElementById('galleryThumbnails');
        
        if (!thumbnailContainer) return;

        // Clear existing thumbnails
        thumbnailContainer.innerHTML = '';

        // Create new thumbnails
        categoryData.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            
            // Create thumbnail URL with smaller dimensions
            const thumbnailSrc = image.src.replace('w=800&h=600', 'w=120&h=80');
            
            thumbnail.className = 'gallery-thumbnail';
            thumbnail.setAttribute('data-index', index);
            thumbnail.alt = image.caption;
            
            if (index === this.currentImageIndex) {
                thumbnail.classList.add('active');
            }

            // Handle thumbnail loading
            const tempThumb = new Image();
            tempThumb.onload = () => {
                thumbnail.src = thumbnailSrc;
            };
            tempThumb.onerror = () => {
                thumbnail.src = `https://via.placeholder.com/120x80/6B7280/ffffff?text=${index + 1}`;
            };
            tempThumb.src = thumbnailSrc;

            thumbnail.addEventListener('click', () => {
                this.currentImageIndex = index;
                this.updateGalleryDisplay();
            });

            thumbnailContainer.appendChild(thumbnail);
        });
    }

    updateThumbnailActive() {
        const thumbnails = document.querySelectorAll('.gallery-thumbnail');
        thumbnails.forEach((thumb, index) => {
            if (index === this.currentImageIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    previousImage() {
        if (!this.currentGalleryCategory) return;

        if (this.currentImageIndex > 0) {
            this.currentImageIndex--;
            this.updateGalleryDisplay();
        }
    }

    nextImage() {
        if (!this.currentGalleryCategory) return;

        const categoryData = this.galleryData[this.currentGalleryCategory];
        if (this.currentImageIndex < categoryData.images.length - 1) {
            this.currentImageIndex++;
            this.updateGalleryDisplay();
        }
    }

    showEmergencyModal() {
        const modal = document.getElementById('emergencyModal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            // Focus management
            const closeButton = document.getElementById('closeEmergencyModal');
            if (closeButton) {
                setTimeout(() => closeButton.focus(), 100);
            }
        }
    }

    closeEmergencyModal() {
        const modal = document.getElementById('emergencyModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Demo credentials
        if (username === 'resident' && password === 'naveen123') {
            this.isLoggedIn = true;
            this.showResidentsContent();
            this.updateHeaderLoginButton();
            this.showNotification('🎉 Login successful! Welcome to Residents Corner.', 'success');
        } else {
            this.showNotification('❌ Invalid credentials. Use: Username: resident, Password: naveen123', 'error');
        }
    }

    logout() {
        this.isLoggedIn = false;
        this.hideResidentsContent();
        this.updateHeaderLoginButton();
        this.showNotification('👋 Logged out successfully.', 'info');
    }

    showResidentsContent() {
        const loginDiv = document.getElementById('residentsLogin');
        const contentDiv = document.getElementById('residentsContent');
        
        if (loginDiv) loginDiv.classList.add('hidden');
        if (contentDiv) contentDiv.classList.remove('hidden');
    }

    hideResidentsContent() {
        const loginDiv = document.getElementById('residentsLogin');
        const contentDiv = document.getElementById('residentsContent');
        
        if (loginDiv) loginDiv.classList.remove('hidden');
        if (contentDiv) contentDiv.classList.add('hidden');
    }

    bindDownloadEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' && e.target.textContent.includes('Download')) {
                e.preventDefault();
                this.showNotification('📄 Document download will be available soon. Please contact the office for physical copies.', 'info');
            }
        });
    }

    bindEmergencyEvents() {
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const number = link.getAttribute('href').replace('tel:', '');
                this.showNotification(`📞 Initiating call to ${number}...`, 'info');
            });
        });
    }

    handleTouchGestures() {
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;

        document.addEventListener('touchstart', (e) => {
            // Only handle gestures in gallery modal
            if (!document.getElementById('galleryModal').classList.contains('hidden')) {
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.changedTouches[0].screenY;
            }
        });

        document.addEventListener('touchend', (e) => {
            if (!document.getElementById('galleryModal').classList.contains('hidden')) {
                touchEndX = e.changedTouches[0].screenX;
                touchEndY = e.changedTouches[0].screenY;
                this.handleGestureEnd();
            }
        });
    }

    handleGestureEnd() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Only handle horizontal swipes that are longer than vertical
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX < -50) {
                // Swipe left - next image
                this.nextImage();
            } else if (deltaX > 50) {
                // Swipe right - previous image
                this.previousImage();
            }
        }
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        document.querySelectorAll('.notification').forEach(n => n.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification status status--${type}`;
        notification.textContent = message;
        
        // Style the notification for mobile
        Object.assign(notification.style, {
            position: 'fixed',
            top: '80px', // Below the header
            left: '16px',
            right: '16px',
            zIndex: '3000',
            padding: '16px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            animation: 'slideDown 0.3s ease-out',
            cursor: 'pointer',
            textAlign: 'center'
        });
        
        // Add CSS animation if not exists
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideDown {
                    from { transform: translateY(-100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes slideUp {
                    from { transform: translateY(0); opacity: 1; }
                    to { transform: translateY(-100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Add to page
        document.body.appendChild(notification);
        
        // Auto remove after 4 seconds with animation
        const removeNotification = () => {
            notification.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        };
        
        setTimeout(removeNotification, 4000);
        
        // Click to dismiss
        notification.addEventListener('click', removeNotification);
    }

    preloadImages() {
        // Preload gallery images for better performance
        setTimeout(() => {
            Object.keys(this.galleryData).forEach(category => {
                this.galleryData[category].images.forEach(image => {
                    const img = new Image();
                    img.src = image.src;
                });
            });
            console.log('Gallery images preloaded');
        }, 2000);
    }

    // Keyboard navigation support
    handleKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // ESC key to close modals
            if (e.key === 'Escape') {
                this.closeGalleryModal();
                this.closeEmergencyModal();
            }
            
            // Arrow keys for gallery navigation when modal is open
            if (this.currentGalleryCategory) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.previousImage();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.nextImage();
                }
            }
            
            // Number keys for quick navigation
            if (e.key >= '1' && e.key <= '5') {
                const sections = ['home', 'about', 'gallery', 'contact', 'residents'];
                const index = parseInt(e.key) - 1;
                if (sections[index]) {
                    this.navigateToSection(sections[index]);
                }
            }
        });
    }

    // Utility methods
    formatPhoneNumber(phoneNumber) {
        // Format phone number for display
        return phoneNumber.replace(/(\+91)(\d{2})(\d{4})(\d{4})/, '$1 $2 $3 $4');
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Performance monitoring
    measurePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', Math.round(perfData.loadEventEnd - perfData.loadEventStart), 'ms');
            });
        }
    }

    // Analytics tracking (placeholder)
    trackEvent(category, action, label) {
        console.log(`Analytics: ${category} - ${action} - ${label}`);
    }

    // Accessibility improvements
    initializeAccessibility() {
        // Update ARIA labels
        document.querySelectorAll('.quick-action-card, .notice-card').forEach((card, index) => {
            const actionText = card.querySelector('h3').textContent;
            card.setAttribute('aria-label', `Quick action: ${actionText}`);
        });

        document.querySelectorAll('.gallery-category-card').forEach((card, index) => {
            const categoryText = card.querySelector('h3').textContent;
            card.setAttribute('aria-label', `Open gallery: ${categoryText}`);
        });

        // Focus management
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                // Ensure proper tab order
                const focusableElements = document.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                
                // Add visual focus indicators
                focusableElements.forEach(el => {
                    el.addEventListener('focus', () => {
                        el.style.outline = '2px solid #2563EB';
                        el.style.outlineOffset = '2px';
                    });
                    
                    el.addEventListener('blur', () => {
                        el.style.outline = '';
                        el.style.outlineOffset = '';
                    });
                });
            }
        });
    }
}

// Initialize the mobile app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new MobileApartmentApp();
    
    // Make app instance globally available
    window.mobileApartmentApp = app;
    
    // Initialize additional features
    app.handleKeyboardNavigation();
    app.measurePerformance();
    app.initializeAccessibility();
    
    console.log('Mobile Naveen Apartments app initialized successfully');
});

// Service Worker registration (for future PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('Service worker support detected - ready for PWA implementation');
    });
}

// Handle online/offline status
window.addEventListener('online', () => {
    console.log('App is online');
    if (window.mobileApartmentApp) {
        window.mobileApartmentApp.showNotification('🌐 Internet connection restored.', 'success');
    }
});

window.addEventListener('offline', () => {
    console.log('App is offline');
    if (window.mobileApartmentApp) {
        window.mobileApartmentApp.showNotification('📱 You are currently offline. Some features may not work.', 'warning');
    }
});

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Handle viewport changes for mobile orientation
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        // Trigger resize event to adjust layouts
        window.dispatchEvent(new Event('resize'));
    }, 100);
});

// Add loading states for images
document.getElementById('NoticeDownload').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'docs/ADM_Notice_04082025.pdf';         // Path to your PDF file
    link.download = 'ADM_Notice_04082025.pdf';     // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById('MMPDownload').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'docs/Maintenance_charges072025.xlsx';         // Path to your PDF file
    link.download = 'Maintenance_charges072025.xlsx';     // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Add loading placeholder
        img.style.background = 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)';
        img.style.backgroundSize = '200% 100%';
        img.style.animation = 'loading 1.5s infinite';
        
        img.addEventListener('load', () => {
            img.style.background = '';
            img.style.animation = '';
            img.style.opacity = '1';
        });
        
        img.addEventListener('error', () => {
            img.style.background = '#f5f5f5';
            img.style.animation = '';
            img.style.opacity = '0.8';
            console.warn('Failed to load image:', img.src);
        });
    });
    
    // Add loading animation CSS
    if (!document.querySelector('#loading-styles')) {
        const style = document.createElement('style');
        style.id = 'loading-styles';
        style.textContent = `
            @keyframes loading {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
            }
        `;
        document.head.appendChild(style);
    }

});

console.log('Mobile Naveen Apartments JavaScript loaded successfully');