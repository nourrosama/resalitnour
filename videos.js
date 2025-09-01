// Videos data with dates for filtering
const videosData = [
    {
        id: 1,
        title: {
            en: "Education Impact Story",
            ar: "قصة تأثير التعليم"
        },
        description: {
            en: "See how our education programs are transforming lives in rural communities. Watch the journey of students who now have access to quality education.",
            ar: "شاهد كيف تحول برامجنا التعليمية حياة الناس في المجتمعات الريفية. تابع رحلة الطلاب الذين أصبح لديهم الآن إمكانية الوصول للتعليم الجيد."
        },
        category: "education",
        date: "2024-03-10",
        duration: "5:32",
        thumbnail: "education-video.jpg",
        views: 1250
    },
    {
        id: 2,
        title: {
            en: "Healthcare Mission Success",
            ar: "نجاح مهمة الرعاية الصحية"
        },
        description: {
            en: "Our medical team's journey to remote villages, providing essential healthcare services and training local healthcare workers.",
            ar: "رحلة فريقنا الطبي إلى القرى النائية، وتقديم خدمات الرعاية الصحية الأساسية وتدريب العاملين المحليين في مجال الرعاية الصحية."
        },
        category: "healthcare",
        date: "2024-02-15",
        duration: "8:45",
        thumbnail: "healthcare-video.jpg",
        views: 2100
    },
    {
        id: 3,
        title: {
            en: "Clean Water Project Documentary",
            ar: "فيلم وثائقي عن مشروع المياه النظيفة"
        },
        description: {
            en: "A comprehensive look at our clean water initiative, from planning to implementation and the positive impact on community health.",
            ar: "نظرة شاملة على مبادرة المياه النظيفة، من التخطيط إلى التنفيذ والتأثير الإيجابي على صحة المجتمع."
        },
        category: "community",
        date: "2024-01-20",
        duration: "12:18",
        thumbnail: "water-video.jpg",
        views: 3400
    },
    {
        id: 4,
        title: {
            en: "Volunteer Stories",
            ar: "قصص المتطوعين"
        },
        description: {
            en: "Heartwarming stories from our dedicated volunteers who are making a difference in communities around the world.",
            ar: "قصص مؤثرة من متطوعينا المتفانين الذين يصنعون فرقاً في المجتمعات حول العالم."
        },
        category: "community",
        date: "2023-12-08",
        duration: "6:55",
        thumbnail: "volunteer-video.jpg",
        views: 1800
    },
    {
        id: 5,
        title: {
            en: "Youth Leadership Program",
            ar: "برنامج قيادة الشباب"
        },
        description: {
            en: "Young leaders share their experiences and how the program has empowered them to create positive change in their communities.",
            ar: "يشارك القادة الشباب تجاربهم وكيف مكنهم البرنامج من خلق تغيير إيجابي في مجتمعاتهم."
        },
        category: "education",
        date: "2023-11-25",
        duration: "9:12",
        thumbnail: "youth-video.jpg",
        views: 950
    },
    {
        id: 6,
        title: {
            en: "Annual Impact Report 2023",
            ar: "تقرير التأثير السنوي 2023"
        },
        description: {
            en: "A comprehensive overview of our achievements, impact metrics, and the lives we've touched throughout 2023.",
            ar: "نظرة شاملة على إنجازاتنا ومقاييس التأثير والأرواح التي تأثرت طوال عام 2023."
        },
        category: "community",
        date: "2023-10-30",
        duration: "15:30",
        thumbnail: "annual-report-video.jpg",
        views: 4200
    }
];

// Current language state
let currentLang = 'en';

// Filter elements
const monthFilter = document.getElementById('monthFilter');
const yearFilter = document.getElementById('yearFilter');
const searchBtn = document.getElementById('searchBtn');
const videosGrid = document.getElementById('videosGrid');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        document.body.setAttribute('lang', currentLang);
        document.documentElement.setAttribute('lang', currentLang);
    }
    
    // Display all videos initially
    displayVideos(videosData);
    
    // Add event listeners
    searchBtn.addEventListener('click', filterVideos);
    
    // Add enter key support for filters
    monthFilter.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') filterVideos();
    });
    yearFilter.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') filterVideos();
    });
});

// Filter videos based on selected month and year
function filterVideos() {
    const selectedMonth = monthFilter.value;
    const selectedYear = yearFilter.value;
    
    let filteredVideos = videosData;
    
    if (selectedMonth !== 'all' || selectedYear !== 'all') {
        filteredVideos = videosData.filter(video => {
            const videoDate = new Date(video.date);
            const videoMonth = videoDate.getMonth() + 1; // getMonth() returns 0-11
            const videoYear = videoDate.getFullYear();
            
            const monthMatch = selectedMonth === 'all' || videoMonth === parseInt(selectedMonth);
            const yearMatch = selectedYear === 'all' || videoYear === parseInt(selectedYear);
            
            return monthMatch && yearMatch;
        });
    }
    
    displayVideos(filteredVideos);
    
    // Show message if no results
    if (filteredVideos.length === 0) {
        showNoResultsMessage();
    }
}

// Display videos in the grid
function displayVideos(videos) {
    videosGrid.innerHTML = '';
    
    videos.forEach(video => {
        const videoCard = createVideoCard(video);
        videosGrid.appendChild(videoCard);
    });
}

// Create a video card element
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    
    const date = new Date(video.date);
    const formattedDate = date.toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    card.innerHTML = `
        <div class="video-thumbnail">
            <div class="thumbnail-placeholder">
                <i class="fas fa-play-circle"></i>
                <div class="video-overlay">
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                    <div class="video-duration">${video.duration}</div>
                </div>
            </div>
        </div>
        <div class="video-content">
            <div class="video-date">
                <i class="fas fa-calendar"></i>
                <span>${formattedDate}</span>
            </div>
            <h3>${video.title[currentLang]}</h3>
            <p>${video.description[currentLang]}</p>
            <div class="video-stats">
                <span class="video-views">
                    <i class="fas fa-eye"></i>
                    <span class="views-text-en">${video.views} views</span>
                    <span class="views-text-ar">${video.views} مشاهدة</span>
                </span>
                <span class="video-duration-text">
                    <i class="fas fa-clock"></i>
                    <span>${video.duration}</span>
                </span>
            </div>
            <button class="btn btn-outline video-btn">
                <span class="btn-text-en">Watch Video</span>
                <span class="btn-text-ar">شاهد الفيديو</span>
            </button>
        </div>
    `;
    
    // Add click event to the card
    card.addEventListener('click', () => {
        showVideoDetails(video);
    });
    
    return card;
}

// Show video details modal
function showVideoDetails(video) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    
    const date = new Date(video.date);
    const formattedDate = date.toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    modal.innerHTML = `
        <div class="modal-content" style="direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'}; font-family: ${currentLang === 'ar' ? 'Cairo, sans-serif' : 'Inter, sans-serif'};">
            <div class="modal-header">
                <h2>${video.title[currentLang]}</h2>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="video-player">
                    <div class="video-placeholder-large">
                        <i class="fas fa-play-circle"></i>
                        <p>${video.title[currentLang]}</p>
                        <div class="play-button-large">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="video-detail-info">
                    <div class="detail-item">
                        <i class="fas fa-calendar"></i>
                        <span>${formattedDate}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-tag"></i>
                        <span>${video.category}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-eye"></i>
                        <span>${video.views} views</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <span>${video.duration}</span>
                    </div>
                </div>
                <div class="video-detail-description">
                    <h3>
                        <span class="detail-title-en">Description</span>
                        <span class="detail-title-ar">الوصف</span>
                    </h3>
                    <p>${video.description[currentLang]}</p>
                </div>
                <div class="video-actions">
                    <button class="btn btn-primary">
                        <i class="fas fa-share"></i>
                        <span class="btn-text-en">Share</span>
                        <span class="btn-text-ar">مشاركة</span>
                    </button>
                    <button class="btn btn-outline">
                        <i class="fas fa-download"></i>
                        <span class="btn-text-en">Download</span>
                        <span class="btn-text-ar">تحميل</span>
                    </button>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove()">
                    <span class="btn-text-en">Close</span>
                    <span class="btn-text-ar">إغلاق</span>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Show no results message
function showNoResultsMessage() {
    const message = document.createElement('div');
    message.className = 'no-results';
    message.innerHTML = `
        <div class="no-results-content">
            <i class="fas fa-video-slash"></i>
            <h3>
                <span class="no-results-text-en">No videos found</span>
                <span class="no-results-text-ar">لم يتم العثور على فيديوهات</span>
            </h3>
            <p>
                <span class="no-results-text-en">Try adjusting your filter criteria or browse all videos.</span>
                <span class="no-results-text-ar">حاول تعديل معايير التصفية أو تصفح جميع الفيديوهات.</span>
            </p>
            <button class="btn btn-primary" onclick="resetFilters()">
                <span class="btn-text-en">Show All Videos</span>
                <span class="btn-text-ar">عرض جميع الفيديوهات</span>
            </button>
        </div>
    `;
    
    videosGrid.appendChild(message);
}

// Reset filters
function resetFilters() {
    monthFilter.value = 'all';
    yearFilter.value = 'all';
    displayVideos(videosData);
}

// Listen for language changes from the main script
window.addEventListener('languageChanged', (e) => {
    currentLang = e.detail.language;
    displayVideos(videosData);
});
