document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule');
    const searchInput = document.getElementById('categorySearch');
    let allTalks = [];

    // Fetch talks from the backend
    fetch('/api/talks')
        .then(response => response.json())
        .then(data => {
            allTalks = data;
            renderSchedule(allTalks);
        })
        .catch(err => {
            console.error('Error fetching talks:', err);
            scheduleContainer.innerHTML = '<div class="error">Failed to load schedule. Please try again later.</div>';
        });

    // Handle search filtering
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTalks = allTalks.filter(item => {
            if (item.type === 'break') return true; // Always show breaks or decide otherwise
            return item.categories.some(cat => cat.toLowerCase().includes(searchTerm));
        });
        renderSchedule(filteredTalks);
    });

    function renderSchedule(talks) {
        scheduleContainer.innerHTML = '';

        if (talks.length === 0) {
            scheduleContainer.innerHTML = '<div class="no-results">No talks found matching those categories.</div>';
            return;
        }

        talks.forEach((item, index) => {
            if (item.type === 'break') {
                const breakEl = document.createElement('div');
                breakEl.className = 'break-card';
                breakEl.innerHTML = `
                    <div class="time">${item.startTime} - ${item.endTime}</div>
                    <div class="title">${item.title}</div>
                `;
                scheduleContainer.appendChild(breakEl);
            } else {
                const talkEl = document.createElement('div');
                talkEl.className = 'talk-card';
                talkEl.innerHTML = `
                    <div class="time-slot">
                        ${item.startTime}<br>to<br>${item.endTime}
                    </div>
                    <div class="talk-content">
                        <h2>${item.title}</h2>
                        <div class="speakers">By ${item.speakers.join(' & ')}</div>
                        <p class="description">${item.description}</p>
                        <div class="categories">
                            ${item.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                        </div>
                    </div>
                `;
                scheduleContainer.appendChild(talkEl);
            }

            // Add transition marker except after the last item
            if (index < talks.length - 1) {
                const transitionEl = document.createElement('div');
                transitionEl.className = 'transition-marker';
                transitionEl.innerText = '10 min transition';
                scheduleContainer.appendChild(transitionEl);
            }
        });
    }
});
