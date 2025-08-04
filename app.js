// Mobile App JavaScript for Naveen Apartments - Fixed Navigation System

class MobileApartmentApp {
    constructor() {
        this.currentSection = 'home';
        this.isLoggedIn = false;
        this.currentGalleryCategory = null;
        this.currentImageIndex = 0;
        this.galleryData = this.initializeGalleryData();
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.touchStartY = 0;
        this.touchEndY = 0;
        this.isSwipeEnabled = true;
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
                    {src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&auto=format&q=75", caption: "Modern kitchen with built-in appliances"},
                    {src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&auto=format&q=75", caption: "Luxury bathroom with premium fittings"},
                    {src: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&h=600&fit=crop&auto=format&q=75", caption: "Balcony with beautiful city views"},
                    {src: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=800&h=600&fit=crop&auto=format&q=75", caption: "Storage and utility areas"}
                ]
            },
            "amenities": {
                title: "Amenities",
                images: [
                    {src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&auto=format&q=75", caption: "Swimming pool with crystal clear water"},
                    {src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&auto=format&q=75", caption: "Modern gymnasium with latest equipment"},
                    {src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&auto=format&q=75", caption: "Children's play area with safe equipment"},
                    {src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop&auto=format&q=75", caption: "Community hall for events and gatherings"},
                    {src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format&q=75", caption: "Beautiful garden and landscaping"}
                ]
            },
            "security": {
                title: "Security",
                images: [
                    {src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=75", caption: "Main security gate with modern access control"},
                    {src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format&q=75", caption: "Security booth with 24/7 monitoring"},
                    {src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&auto=format&q=75", caption: "CCTV surveillance system"},
                    {src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format&q=75&brightness=80", caption: "Night security with proper lighting"}
                ]
            },
            "parking": {
                title: "Parking",
                images: [
                    {src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format&q=75", caption: "Covered parking area for residents"},
                    {src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format&q=75", caption: "Visitor parking near main entrance"},
                    {src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&auto=format&q=75", caption: "Two-wheeler parking section"}
                ]
            },
            "common": {
                title: "Common Areas",
                images: [
                    {src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop&auto=format&q=75", caption: "Elegant lobby with modern design"},
                    {src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&auto=format&q=75", caption: "High-speed elevators"},
                    {src: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&h=600&fit=crop&auto=format&q=75", caption: "Well-lit corridors with modern lighting"},
                    {src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format&q=75", caption: "Community notice board area"},
                    {src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format&q=75", caption: "Comfortable seating areas"}
                ]
            }
        };
    }

    init() {
        console.log('Initializing Mobile Apartment App...');
        // Wait for DOM to be fully ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApp();
            });
        } else {
            this.setupApp();
        }
    }

    setupApp() {
        this.bindEvents();
        this.initializeNavigation();
        this.showSection('home');
        this.initializeTouchGestures();
        this.initializeQuickActions();
        setTimeout(() => this.preloadImages(), 1000);
        console.log('Mobile Apartment App with fixed navigation initialized successfully');
    }

    bindEvents() {
        console.log('Binding events...');

        // Bottom navigation - Complete fix
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const section = item.getAttribute('data-section');
            console.log('Binding bottom nav item:', section);
            
            // Remove any existing listeners
            item.replaceWith(item.cloneNode(true));
        });

        // Re-bind after cloning
        document.querySelectorAll('.nav-item').forEach(item => {
            const section = item.getAttribute('data-section');
            
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Bottom nav clicked:', section);
                this.navigateToSection(section);
            });

            // Touch events for mobile
            item.addEventListener('touchend', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Bottom nav touched:', section);
                this.navigateToSection(section);
            });
        });

        // Header buttons
        const headerLoginBtn = document.getElementById('loginBtn');
        if (headerLoginBtn) {
            headerLoginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.isLoggedIn) {
                    this.logout();
                } else {
                    this.navigateToSection('residents');
                }
            });
        }

        const emergencyBtn = document.getElementById('emergencyBtn');
        if (emergencyBtn) {
            emergencyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showEmergencyModal();
            });
        }

        // Quick action cards - Complete fix
        const quickActionCards = document.querySelectorAll('.quick-action-card');
        quickActionCards.forEach(card => {
            const action = card.getAttribute('data-action');
            console.log('Binding quick action:', action);
            
            // Remove existing listeners by cloning
            card.replaceWith(card.cloneNode(true));
        });

        // Re-bind quick actions after cloning
        document.querySelectorAll('.quick-action-card').forEach(card => {
            const action = card.getAttribute('data-action');
            
            card.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Quick action clicked:', action);
                this.handleQuickAction(action);
            });

            card.addEventListener('touchend', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Quick action touched:', action);
                this.handleQuickAction(action);
            });

            // Visual feedback
            card.addEventListener('touchstart', () => {
                card.style.transform = 'scale(0.95)';
            });
            
            card.addEventListener('touchcancel', () => {
                card.style.transform = '';
            });
        });

        // Gallery category cards - Complete fix
        setTimeout(() => {
            this.bindGalleryEvents();
        }, 500);

        // Modal events
        this.bindModalEvents();

        // Form events
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }

        // Emergency contact links
        this.bindEmergencyEvents();

        console.log('All events bound successfully');
    }

    bindGalleryEvents() {
        console.log('Binding gallery events...');
        
        const galleryCards = document.querySelectorAll('.gallery-category-card');
        console.log('Found gallery cards:', galleryCards.length);
        
        galleryCards.forEach(card => {
            const category = card.getAttribute('data-category');
            console.log('Binding gallery card:', category);
            
            // Remove existing listeners
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
        });

        // Re-bind gallery cards after cloning
        document.querySelectorAll('.gallery-category-card').forEach(card => {
            const category = card.getAttribute('data-category');
            
            card.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Gallery card clicked:', category);
                this.openGalleryModal(category);
            });

            card.addEventListener('touchend', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Gallery card touched:', category);
                this.openGalleryModal(category);
            });

            // Visual feedback
            card.addEventListener('touchstart', () => {
                card.style.transform = 'translateY(-2px) scale(0.98)';
            });
            
            card.addEventListener('touchcancel', () => {
                card.style.transform = '';
            });

            // Accessibility
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            const categoryText = card.querySelector('h3')?.textContent || 'Gallery';
            const imageCount = card.querySelector('.image-count-badge')?.textContent || '';
            card.setAttribute('aria-label', `Open ${categoryText} with ${imageCount}`);
        });

        console.log('Gallery events bound successfully');
    }

    navigateToSection(sectionId) {
        console.log('Navigating to section:', sectionId);
        
        if (!sectionId) {
            console.error('No section ID provided');
            return;
        }

        try {
            // Hide all sections
            const allSections = document.querySelectorAll('.app-section');
            allSections.forEach(section => {
                section.classList.remove('active');
            });

            // Show target section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
                this.currentSection = sectionId;
                
                // Update navigation state
                this.updateBottomNavigation(sectionId);
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Update login button state
                this.updateHeaderLoginButton();
                
                // Re-bind gallery events if navigating to gallery
                if (sectionId === 'gallery') {
                    setTimeout(() => {
                        this.bindGalleryEvents();
                    }, 100);
                }
                
                // Show success notification
                const sectionName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
                this.showNotification(`📱 Switched to ${sectionName}`, 'success');
                
                console.log('Successfully navigated to:', sectionId);
            } else {
                console.error('Section not found:', sectionId);
                this.showNotification('❌ Section not found', 'error');
            }
        } catch (error) {
            console.error('Navigation error:', error);
            this.showNotification('❌ Navigation error', 'error');
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

    handleQuickAction(action) {
        console.log('Handling quick action:', action);
        
        try {
            switch(action) {
                case 'payment':
                    this.showNotification('💳 Payment system coming soon! Please contact office for now.', 'info');
                    break;
                case 'notices':
                    this.navigateToSection('residents');
                    if (!this.isLoggedIn) {
                        setTimeout(() => {
                            this.showNotification('Please login to view notices', 'info');
                        }, 500);
                    }
                    break;
                case 'emergency':
                    this.showEmergencyModal();
                    break;
                case 'gallery':
                    console.log('Gallery quick action - navigating to gallery');
                    this.navigateToSection('gallery');
                    break;
                case 'contact':
                    this.navigateToSection('contact');
                    break;
                case 'committee':
                    this.navigateToSection('contact');
                    setTimeout(() => {
                        const committeeSection = document.querySelector('.committee-section');
                        if (committeeSection) {
                            committeeSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 600);
                    break;
                default:
                    this.showNotification('Feature coming soon!', 'info');
            }
        } catch (error) {
            console.error('Quick action error:', error);
            this.showNotification('❌ Action failed', 'error');
        }
    }

    initializeNavigation() {
        this.updateBottomNavigation('home');
    }

    initializeQuickActions() {
        // Additional visual feedback for quick actions
        setTimeout(() => {
            document.querySelectorAll('.quick-action-card').forEach(card => {
                card.addEventListener('mousedown', () => {
                    card.style.transform = 'scale(0.95)';
                });
                
                card.addEventListener('mouseup', () => {
                    setTimeout(() => {
                        card.style.transform = '';
                    }, 150);
                });
            });
        }, 100);
    }

    bindModalEvents() {
        // Gallery modal events
        const galleryModal = document.getElementById('galleryModal');
        const closeGalleryModal = document.getElementById('closeGalleryModal');
        const galleryPrev = document.getElementById('galleryPrev');
        const galleryNext = document.getElementById('galleryNext');

        if (closeGalleryModal) {
            closeGalleryModal.addEventListener('click', (e) => {
                e.preventDefault();
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
            galleryPrev.addEventListener('click', (e) => {
                e.preventDefault();
                this.previousImage();
            });
        }

        if (galleryNext) {
            galleryNext.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextImage();
            });
        }

        // Emergency modal events
        const emergencyModal = document.getElementById('emergencyModal');
        const closeEmergencyModal = document.getElementById('closeEmergencyModal');

        if (closeEmergencyModal) {
            closeEmergencyModal.addEventListener('click', (e) => {
                e.preventDefault();
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

        try {
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

            this.showNotification('📸 Gallery opened - Swipe to navigate', 'info');
            console.log('Gallery modal opened successfully');
        } catch (error) {
            console.error('Gallery modal error:', error);
            this.showNotification('❌ Failed to open gallery', 'error');
        }
    }

    closeGalleryModal() {
        const modal = document.getElementById('galleryModal');
        if (modal) {
            modal.classList.add('hidden');
            this.currentGalleryCategory = null;
            this.currentImageIndex = 0;
            
            // Restore body scroll
            document.body.style.overflow = '';
            this.showNotification('Gallery closed', 'info');
        }
    }

    updateGalleryDisplay() {
        if (!this.currentGalleryCategory) return;

        const categoryData = this.galleryData[this.currentGalleryCategory];
        const currentImage = categoryData.images[this.currentImageIndex];

        // Update main image
        const mainImage = document.getElementById('galleryMainImage');
        if (mainImage && currentImage) {
            mainImage.style.opacity = '0.5';
            
            const tempImg = new Image();
            tempImg.onload = () => {
                mainImage.src = currentImage.src;
                mainImage.alt = currentImage.caption;
                mainImage.style.opacity = '1';
            };
            
            tempImg.onerror = () => {
                mainImage.src = `https://via.placeholder.com/800x600/2563EB/ffffff?text=${encodeURIComponent(this.galleryData[this.currentGalleryCategory].title)}`;
                mainImage.alt = currentImage.caption;
                mainImage.style.opacity = '1';
            };
            
            tempImg.src = currentImage.src;
        }

        // Update caption
        const caption = document.getElementById('galleryImageCaption');
        if (caption && currentImage) {
            caption.textContent = currentImage.caption;
        }

        // Update counter
        const counter = document.getElementById('galleryCounter');
        if (counter) {
            counter.textContent = `${this.currentImageIndex + 1} of ${categoryData.images.length}`;
        }

        // Update thumbnails
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

        thumbnailContainer.innerHTML = '';

        categoryData.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            const thumbnailSrc = image.src.replace('w=800&h=600', 'w=120&h=80');
            
            thumbnail.className = 'gallery-thumbnail';
            thumbnail.setAttribute('data-index', index);
            thumbnail.alt = image.caption;
            
            if (index === this.currentImageIndex) {
                thumbnail.classList.add('active');
            }

            const tempThumb = new Image();
            tempThumb.onload = () => {
                thumbnail.src = thumbnailSrc;
            };
            tempThumb.onerror = () => {
                thumbnail.src = `https://via.placeholder.com/120x80/6B7280/ffffff?text=${index + 1}`;
            };
            tempThumb.src = thumbnailSrc;

            thumbnail.addEventListener('click', (e) => {
                e.preventDefault();
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
            this.showNotification('⬅️ Previous image', 'info');
        }
    }

    nextImage() {
        if (!this.currentGalleryCategory) return;

        const categoryData = this.galleryData[this.currentGalleryCategory];
        if (this.currentImageIndex < categoryData.images.length - 1) {
            this.currentImageIndex++;
            this.updateGalleryDisplay();
            this.showNotification('➡️ Next image', 'info');
        }
    }

    initializeTouchGestures() {
        let touchStartTime = 0;
        let isTouchMove = false;

        document.addEventListener('touchstart', (e) => {
            const modal = document.getElementById('galleryModal');
            if (!modal || modal.classList.contains('hidden')) return;

            touchStartTime = Date.now();
            isTouchMove = false;
            
            this.touchStartX = e.touches[0].clientX;
            this.touchStartY = e.touches[0].clientY;
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            const modal = document.getElementById('galleryModal');
            if (!modal || modal.classList.contains('hidden')) return;

            isTouchMove = true;
            
            if (Math.abs(e.touches[0].clientX - this.touchStartX) > 10) {
                e.preventDefault();
            }
        }, { passive: false });

        document.addEventListener('touchend', (e) => {
            const modal = document.getElementById('galleryModal');
            if (!modal || modal.classList.contains('hidden')) return;

            const touchEndTime = Date.now();
            const touchDuration = touchEndTime - touchStartTime;
            
            this.touchEndX = e.changedTouches[0].clientX;
            this.touchEndY = e.changedTouches[0].clientY;
            
            if (isTouchMove && touchDuration < 500) {
                this.handleSwipeGesture();
            }
        }, { passive: true });
    }

    handleSwipeGesture() {
        if (!this.isSwipeEnabled) return;

        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = this.touchEndY - this.touchStartY;
        
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            this.isSwipeEnabled = false;
            
            if (deltaX < -50) {
                this.nextImage();
            } else if (deltaX > 50) {
                this.previousImage();
            }
            
            setTimeout(() => {
                this.isSwipeEnabled = true;
            }, 300);
        }
    }

    showSection(sectionId) {
        document.querySelectorAll('.app-section').forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    showEmergencyModal() {
        const modal = document.getElementById('emergencyModal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
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
        const username = document.getElementById('username')?.value;
        const password = document.getElementById('password')?.value;

        if (username === 'resident' && password === 'naveen123') {
            this.isLoggedIn = true;
            this.showResidentsContent();
            this.updateHeaderLoginButton();
            this.showNotification('🎉 Login successful!', 'success');
        } else {
            this.showNotification('❌ Invalid credentials. Use: resident / naveen123', 'error');
        }
    }

    logout() {
        this.isLoggedIn = false;
        this.hideResidentsContent();
        this.updateHeaderLoginButton();
        this.showNotification('👋 Logged out successfully', 'info');
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

    bindEmergencyEvents() {
        document.querySelectorAll('a[href^="tel:"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const number = link.getAttribute('href').replace('tel:', '');
                this.showNotification(`📞 Calling ${number}...`, 'info');
            });
        });
    }

    showNotification(message, type = 'info') {
        document.querySelectorAll('.notification').forEach(n => n.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification status status--${type}`;
        notification.textContent = message;
        
        Object.assign(notification.style, {
            position: 'fixed',
            top: '80px',
            left: '16px',
            right: '16px',
            zIndex: '10000',
            padding: '16px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '500',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            animation: 'slideDown 0.3s ease-out',
            cursor: 'pointer',
            textAlign: 'center',
            backdropFilter: 'blur(8px)'
        });
        
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
        
        document.body.appendChild(notification);
        
        const removeNotification = () => {
            notification.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        };
        
        setTimeout(removeNotification, 2500);
        notification.addEventListener('click', removeNotification);
    }

    preloadImages() {
        setTimeout(() => {
            Object.keys(this.galleryData).forEach(category => {
                this.galleryData[category].images.forEach((image, index) => {
                    if (index < 2) {
                        const img = new Image();
                        img.src = image.src;
                    }
                });
            });
            console.log('Gallery images preloaded');
        }, 1000);
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready - initializing app...');
    const app = new MobileApartmentApp();
    window.mobileApartmentApp = app;
    console.log('Mobile Naveen Apartments app initialized successfully');
});

// Handle page visibility and orientation changes
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        if (window.mobileApartmentApp && window.mobileApartmentApp.currentGalleryCategory) {
            window.mobileApartmentApp.updateGalleryDisplay();
        }
    }, 100);
});

console.log('Mobile Naveen Apartments JavaScript loaded successfully');