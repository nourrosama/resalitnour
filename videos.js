// Videos data with dates for filtering
const videosData = [
    {
        id: 1,
        title: {
            en: "المقر الجديد",
            ar: "المقر الجديد"
        },
        description: {
            en: "فيديو ترحيبي بالمقر الجديد 2021",
            ar: "فيديو ترحيبي بالمقر الجديد 2021"
        },
        category: "community",
        date: "2021",
        duration: "2:20",
        thumbnail: "assets/thumbnails/welcome.jpg.png",
        videoUrl: "https://www.youtube.com/embed/okBlAZpvFjI?si=kZWfcIcGXTJwRQyd"
    },
    {
        id: 2,
        title: {
            en: "2021-02-06 إطعام",
            ar: "2021-02-06 إطعام"
        },
        description: {
            en: "2021-02-06 إطعام",
            ar: "2021-02-06 إطعام"
        },
        category: "community",
        date: "2021-02-06",
        duration: "1:22",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "https://www.youtube.com/embed/Kbq-B_BftkM?si=sIzCn_KGmCzpxLFp"
    },
    {
        id: 3,
        title: {
            en: "2021-03-13 إطعام",
            ar: "2021-03-13 إطعام"
        },
        description: {
            en: "2021-03-13 إطعام",
            ar: "2021-03-13 إطعام"
        },
        category: "community",
        date: "2021-03-13",
        duration: "1:42",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "https://www.youtube.com/embed/SchXzph5n-g?si=xA3erAmQObwj7g5C"
    },
    {
        id: 4,
        title: {
            en: "2021-04-07 مساعدات غذائيه شهر رمضان",
            ar: "2021-04-07 مساعدات غذائيه شهر رمضان"
        },
        description: {
            en: "2021-04-07 مساعدات غذائيه شهر رمضان",
            ar: "2021-04-07 مساعدات غذائيه شهر رمضان"
        },
        category: "community",
        date: "2021-04-07",
        duration: "0:16",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "https://www.youtube.com/embed/B0LU92Vrrao?si=DIlpJZlDwig_si9B"
    },
    {
        id: 5,
        title: {
            en: "2021-04-20 بوستر معرض خيري توزيع الملابس في رمضان",
            ar: "2021-04-20 بوستر معرض خيري توزيع الملابس في رمضان"
        },
        description: {
            en: "2021-04-20 بوستر معرض خيري توزيع الملابس في رمضان",
            ar: "2021-04-20 بوستر معرض خيري توزيع الملابس في رمضان"
        },
        category: "community",
        date: "2021-04-16",
        duration: "2:05",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "https://www.youtube.com/embed/YQDY8Kyvzl4?si=1gbT1WuubLIT2XGI"
    },
    {
        id: 6,
        title: {
            en: "جمعية رسالة نور للتنمية 2021-04-20 معرض خيري توزيع الملابس  في رمضان",
            ar: "جمعية رسالة نور للتنمية 2021-04-20 معرض خيري توزيع الملابس  في رمضان"
        },
        description: {
            en: "جمعية رسالة نور للتنمية 2021-04-20 معرض خيري توزيع الملابس  في رمضان",
            ar: "جمعية رسالة نور للتنمية 2021-04-20 معرض خيري توزيع الملابس  في رمضان"
        },
        category: "community",
        date: "2021-04-20",
        duration: "2:33",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "https://www.youtube.com/embed/sZFUX5HbbQA?si=VKF3M1zw0CEHYFXj"
    },
    {
        id: 7,
        title: {
            en: "إطعام جمعية رسالة نور للتنمية بتاريخ 30-08-2021",
            ar: "إطعام جمعية رسالة نور للتنمية بتاريخ 30-08-2021"
        },
        description: {
            en: "إطعام جمعية رسالة نور للتنمية بتاريخ 30-08-2021",
            ar: "إطعام جمعية رسالة نور للتنمية بتاريخ 30-08-2021"
        },
        category: "community",
        date: "2021-08-30",
        duration: "1:35",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "https://www.youtube.com/embed/jF-agToa5Y8?si=wyqtCgLYpXDYnBZC"
    },
    {
        id: 8,
        title: {
            en: "إطعام 1-12-2021 لعمل 150 وجبة",
            ar: "إطعام 1-12-2021 لعمل 150 وجبة"
        },
        description: {
            en: "إطعام 1-12-2021 لعمل 150 وجبة",
            ar: "إطعام 1-12-2021 لعمل 150 وجبة"
        },
        category: "community",
        date: "2021-12-01",
        duration: "1:30",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "https://www.youtube.com/embed/h9MbCtqCsxc?si=lNTAdPgqHepP5wKe"
    },
    {
        id: 9,
        title: {
            en: "فيديو نقل المقر الجديد",
            ar: "فيديو نقل المقر الجديد"
        },
        description: {
            en: "فيديو نقل المقر الجديد",
            ar: "فيديو نقل المقر الجديد"
        },
        category: "community",
        date: "2021-12-16",
        duration: "2:21",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "ahttps://www.youtube.com/embed/okBlAZpvFjI?si=SIxDi5WldRwtt15B"
    },
    {
        id: 10,
        title: {
            en: "إطعام اليوم 25ديسمبر 140 وجبة",
            ar: "إطعام اليوم 25ديسمبر 140 وجبة"
        },
        description: {
            en: "إطعام اليوم 25ديسمبر 140 وجبة",
            ar: "إطعام اليوم 25ديسمبر 140 وجبة"
        },
        category: "community",
        date: "2021-12-25",
        duration: "1:02",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "https://www.youtube.com/embed/TM5a7nHWq8M?si=H2H1SEaCO_Pm6gbL"
    },
    {
        id: 11,
        title: {
            en: "إطعام 29-12-2021 لعمل 435 وجبة",
            ar: "إطعام 29-12-2021 لعمل 435 وجبة"
        },
        description: {
            en: "إطعام 29-12-2021 لعمل 435 وجبة",
            ar: "إطعام 29-12-2021 لعمل 435 وجبة"
        },
        category: "community",
        date: "2021-12-29",
        duration: "3:14",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "https://www.youtube.com/embed/lgfSB3C5GpI?si=Nh0N5ocW1200Wckw"
    },
    {
        id: 12,
        title: {
            en: "14-2-2022 إطعام 166 وجبه",
            ar: "14-2-2022 إطعام 166 وجبه"
        },
        description: {
            en: "14-2-2022 إطعام 166 وجبه",
            ar: "14-2-2022 إطعام 166 وجبه"
        },
        category: "community",
        date: "2022-02-14",
        duration: "1:50",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "https://www.youtube.com/embed/792Mv44YsF0?si=F7dea8KtPl93i_zV"
    },
    {
        id: 13,
        title: {
            en: "10-03-2022إطعام جمعية رسالة نور للتنمية",
            ar: "10-03-2022إطعام جمعية رسالة نور للتنمية"
        },
        description: {
            en: "10-03-2022إطعام جمعية رسالة نور للتنمية",
            ar: "10-03-2022إطعام جمعية رسالة نور للتنمية"
        },
        category: "community",
        date: "2022-03-10",
        duration: "1:02",
        thumbnail: "assets/thumbnails/mar22.jpg.png",
        videoUrl: "https://www.youtube.com/embed/x6qXhE0j63Q?si=fMQMuq5ZVMQozIZ8"
    }
];
// Current language state for videos
let videosCurrentLang = 'en';

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
        videosCurrentLang = savedLang;
        document.body.setAttribute('lang', videosCurrentLang);
        document.documentElement.setAttribute('lang', videosCurrentLang);
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
    
    if (!videos || videos.length === 0) {
        return;
    }
    
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
    const formattedDate = date.toLocaleDateString(videosCurrentLang === 'ar' ? 'ar-SA' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    card.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title[videosCurrentLang]}" class="video-thumbnail-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="thumbnail-placeholder" style="display: none;">
                <i class="fas fa-play-circle"></i>
            </div>
            <div class="video-overlay">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
                <div class="video-duration">${video.duration}</div>
            </div>
        </div>
        <div class="video-content">
            <h3>${video.title[videosCurrentLang]}</h3>
            <p>${video.description[videosCurrentLang]}</p>
            <div class="video-date">
                <i class="fas fa-calendar"></i>
                <span>${formattedDate}</span>
            </div>
        </div>
    `;
    
    // Add click event to the card: ALWAYS open in a new tab
    card.addEventListener('click', () => {
        const url = video.videoUrl;
        if (!url) {
            alert(videosCurrentLang === 'en' ? 'No video link available.' : 'لا يتوفر رابط فيديو.');
            return;
        }

        let targetUrl = url;
        // Convert YouTube embed or short URLs to standard watch URL when possible
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            if (url.includes('/embed/')) {
                const afterEmbed = url.split('/embed/')[1] || '';
                const videoId = afterEmbed.split('?')[0];
                if (videoId) {
                    targetUrl = `https://www.youtube.com/watch?v=${videoId}`;
                }
            } else if (url.includes('youtu.be/')) {
                const videoId = url.split('youtu.be/')[1]?.split('?')[0];
                if (videoId) {
                    targetUrl = `https://www.youtube.com/watch?v=${videoId}`;
                }
            }
        }
        window.open(targetUrl, '_blank', 'noopener');
    });
    
    return card;
}

// Show video details modal
function showVideoDetails(video) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    
    const date = new Date(video.date);
    const formattedDate = date.toLocaleDateString(videosCurrentLang === 'ar' ? 'ar-SA' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    modal.innerHTML = `
        <div class="modal-content" style="direction: ${videosCurrentLang === 'ar' ? 'rtl' : 'ltr'}; font-family: ${videosCurrentLang === 'ar' ? 'Cairo, sans-serif' : 'Inter, sans-serif'};">
            <div class="modal-header">
                <h2>${video.title[videosCurrentLang]}</h2>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="video-player">
                    <video id="modalVideo" class="video-player-element" controls preload="metadata" poster="${video.thumbnail}">
                        <source src="${video.videoUrl}" type="video/mp4">
                        <span class="video-text-en">Your browser does not support the video tag.</span>
                        <span class="video-text-ar">متصفحك لا يدعم تشغيل الفيديو.</span>
                    </video>
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
                        <i class="fas fa-clock"></i>
                        <span>${video.duration}</span>
                    </div>
                </div>
                <div class="video-detail-description">
                    <h3>
                        <span class="detail-title-en">Description</span>
                        <span class="detail-title-ar">الوصف</span>
                    </h3>
                    <p>${video.description[videosCurrentLang]}</p>
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
    
    // Get the video element
    const videoElement = modal.querySelector('#modalVideo');
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            // Pause video before closing
            if (videoElement) {
                videoElement.pause();
            }
            modal.remove();
        }
    });
    
    // Close modal when clicking close button
    const closeButton = modal.querySelector('.modal-close');
    closeButton.addEventListener('click', () => {
        if (videoElement) {
            videoElement.pause();
        }
        modal.remove();
    });
    
    // Pause video when modal is closed via ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.parentNode) {
            if (videoElement) {
                videoElement.pause();
            }
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
    videosCurrentLang = e.detail.language;
    displayVideos(videosData);
});

