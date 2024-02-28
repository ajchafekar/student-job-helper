// script.js

// Simulated data for featured job listings
const featuredJobsData = [
    { title: "Job Title 1", company: "Company A", location: "Location A" },
    { title: "Job Title 2", company: "Company B", location: "Location B" },
    // Add more job listings as needed
];

// Function to dynamically load featured job listings
function loadFeaturedJobs() {
    const jobListingsContainer = document.querySelector('.job-listings');
    featuredJobsData.forEach(job => {
        const jobListing = document.createElement('div');
        jobListing.classList.add('job');
        jobListing.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
        `;
        jobListingsContainer.appendChild(jobListing);
    });
}

// Execute function to load featured job listings when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedJobs();
});
