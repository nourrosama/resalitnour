// Activities data with dates for filtering
const activitiesData = [
    {
        id: 1,
        title: {
            en: "Education for All Initiative",
            ar: "مبادرة التعليم للجميع"
        },
        description: {
            en: "Providing quality education to children in underserved communities, building schools, and training teachers.",
            ar: "تقديم تعليم عالي الجودة للأطفال في المجتمعات المحرومة، وبناء المدارس، وتدريب المعلمين."
        },
        category: "education",
        date: "2024-03-15",
        image: "education-activity.jpg",
        progress: 75
    },
    {
        id: 2,
        title: {
            en: "Healthcare Access Program",
            ar: "برنامج الوصول للرعاية الصحية"
        },
        description: {
            en: "Building clinics, providing medical supplies, and training healthcare workers in remote areas.",
            ar: "بناء العيادات، وتوفير الإمدادات الطبية، وتدريب العاملين في مجال الرعاية الصحية في المناطق النائية."
        },
        category: "healthcare",
        date: "2024-02-20",
        image: "healthcare-activity.jpg",
        progress: 60
    },
    {
        id: 3,
        title: {
            en: "Clean Water Project",
            ar: "مشروع المياه النظيفة"
        },
        description: {
            en: "Installing water wells and purification systems to provide clean drinking water to communities.",
            ar: "تركيب آبار المياه وأنظمة التنقية لتوفير مياه الشرب النظيفة للمجتمعات."
        },
        category: "community",
        date: "2024-01-10",
        image: "water-activity.jpg",
        progress: 90
    },
    {
        id: 4,
        title: {
            en: "Community Development Workshop",
            ar: "ورشة عمل تنمية المجتمع"
        },
        description: {
            en: "Empowering local communities through skill development and capacity building programs.",
            ar: "تمكين المجتمعات المحلية من خلال تطوير المهارات وبرامج بناء القدرات."
        },
        category: "community",
        date: "2023-12-05",
        image: "community-activity.jpg",
        progress: 85
    },
    {
        id: 5,
        title: {
            en: "Youth Leadership Program",
            ar: "برنامج قيادة الشباب"
        },
        description: {
            en: "Developing leadership skills among young people to create positive change in their communities.",
            ar: "تطوير مهارات القيادة بين الشباب لخلق تغيير إيجابي في مجتمعاتهم."
        },
        category: "education",
        date: "2023-11-20",
        image: "youth-activity.jpg",
        progress: 70
    },
    {
        id: 6,
        title: {
            en: "Medical Mission Trip",
            ar: "رحلة البعثة الطبية"
        },
        description: {
            en: "Providing free medical care and health education to remote communities.",
            ar: "تقديم الرعاية الطبية المجانية والتوعية الصحية للمجتمعات النائية."
        },
        category: "healthcare",
        date: "2023-10-15",
        image: "medical-activity.jpg",
        progress: 95
    }
];

// Current language state
let currentLang = 'en';

// Filter elements
const monthFilter = document.getElementById('monthFilter');
const yearFilter = document.getElementById('yearFilter');
const searchBtn = document.getElementById('searchBtn');
const activitiesGrid = document.getElementById('activitiesGrid');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        document.body.setAttribute('lang', currentLang);
        document.documentElement.setAttribute('lang', currentLang);
    }
    
    // Display all activities initially
    displayActivities(activitiesData);
    
    // Add event listeners
    searchBtn.addEventListener('click', filterActivities);
    
    // Add enter key support for filters
    monthFilter.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') filterActivities();
    });
    yearFilter.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') filterActivities();
    });
});

// Filter activities based on selected month and year
function filterActivities() {
    const selectedMonth = monthFilter.value;
    const selectedYear = yearFilter.value;
    
    let filteredActivities = activitiesData;
    
    if (selectedMonth !== 'all' || selectedYear !== 'all') {
        filteredActivities = activitiesData.filter(activity => {
            const activityDate = new Date(activity.date);
            const activityMonth = activityDate.getMonth() + 1; // getMonth() returns 0-11
            const activityYear = activityDate.getFullYear();
            
            const monthMatch = selectedMonth === 'all' || activityMonth === parseInt(selectedMonth);
            const yearMatch = selectedYear === 'all' || activityYear === parseInt(selectedYear);
            
            return monthMatch && yearMatch;
        });
    }
    
    displayActivities(filteredActivities);
    
    // Show message if no results
    if (filteredActivities.length === 0) {
        showNoResultsMessage();
    }
}

// Display activities in the grid
function displayActivities(activities) {
    activitiesGrid.innerHTML = '';
    
    activities.forEach(activity => {
        const activityCard = createActivityCard(activity);
        activitiesGrid.appendChild(activityCard);
    });
}

// Create an activity card element
function createActivityCard(activity) {
    const card = document.createElement('div');
    card.className = 'activity-card';
    
    const date = new Date(activity.date);
    const formattedDate = date.toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    card.innerHTML = `
        <div class="activity-image">
            <div class="image-placeholder">
                <i class="fas fa-calendar-alt"></i>
                <p>${activity.title[currentLang]}</p>
            </div>
        </div>
        <div class="activity-content">
            <div class="activity-date">
                <i class="fas fa-calendar"></i>
                <span>${formattedDate}</span>
            </div>
            <h3>${activity.title[currentLang]}</h3>
            <p>${activity.description[currentLang]}</p>
            <div class="activity-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${activity.progress}%"></div>
                </div>
                <span class="progress-text">
                    <span class="progress-text-en">${activity.progress}% Complete</span>
                    <span class="progress-text-ar">${activity.progress}% مكتمل</span>
                </span>
            </div>
            <button class="btn btn-outline activity-btn">
                <span class="btn-text-en">Learn More</span>
                <span class="btn-text-ar">اعرف المزيد</span>
            </button>
        </div>
    `;
    
    // Add click event to the card
    card.addEventListener('click', () => {
        showActivityDetails(activity);
    });
    
    return card;
}

// Show activity details modal
function showActivityDetails(activity) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    
    const date = new Date(activity.date);
    const formattedDate = date.toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    modal.innerHTML = `
        <div class="modal-content" style="direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'}; font-family: ${currentLang === 'ar' ? 'Cairo, sans-serif' : 'Inter, sans-serif'};">
            <div class="modal-header">
                <h2>${activity.title[currentLang]}</h2>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="activity-detail-image">
                    <div class="image-placeholder">
                        <i class="fas fa-calendar-alt"></i>
                        <p>${activity.title[currentLang]}</p>
                    </div>
                </div>
                <div class="activity-detail-info">
                    <div class="detail-item">
                        <i class="fas fa-calendar"></i>
                        <span>${formattedDate}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-tag"></i>
                        <span>${activity.category}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-chart-line"></i>
                        <span>${activity.progress}% Complete</span>
                    </div>
                </div>
                <div class="activity-detail-description">
                    <p>${activity.description[currentLang]}</p>
                </div>
                <div class="activity-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${activity.progress}%"></div>
                    </div>
                    <span class="progress-text">${activity.progress}% Complete</span>
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
            <i class="fas fa-search"></i>
            <h3>
                <span class="no-results-text-en">No activities found</span>
                <span class="no-results-text-ar">لم يتم العثور على أنشطة</span>
            </h3>
            <p>
                <span class="no-results-text-en">Try adjusting your filter criteria or browse all activities.</span>
                <span class="no-results-text-ar">حاول تعديل معايير التصفية أو تصفح جميع الأنشطة.</span>
            </p>
            <button class="btn btn-primary" onclick="resetFilters()">
                <span class="btn-text-en">Show All Activities</span>
                <span class="btn-text-ar">عرض جميع الأنشطة</span>
            </button>
        </div>
    `;
    
    activitiesGrid.appendChild(message);
}

// Reset filters
function resetFilters() {
    monthFilter.value = 'all';
    yearFilter.value = 'all';
    displayActivities(activitiesData);
}

// Listen for language changes from the main script
window.addEventListener('languageChanged', (e) => {
    currentLang = e.detail.language;
    displayActivities(activitiesData);
});
