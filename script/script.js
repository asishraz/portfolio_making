// for navbar readability 
const header = document.querySelector('.navbar');
window.onscroll = function() {
    var top = window.scrollY;

    if(top > 100) {
        header.classList.add('navbarDark')

    }
    else {
        header.classList.remove('navbarDark');
    }
}





// for blogs and articles
function openBlogModal(platform, url) {
    const modal = document.getElementById('blogModal');
    const iframe = document.getElementById('blogIframe');
  
    // Set the iframe source based on the platform and URL
    if (platform === 'medium') {
        window.open(url, '_blank')
        iframe.src = url;
    //   iframe.src = `https://medium.com/media/${encodeURIComponent(url)}`;

    } else if (platform === 'notion') {
      // Add Notion handling if needed
    }
  
    modal.style.display = 'block';
  }
  
  function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    const iframe = document.getElementById('blogIframe');
  
    // Reset iframe source to stop video/audio playback
    iframe.src = '';
    modal.style.display = 'none';
  }
  
  // Close the modal if the user clicks outside of it
  window.onclick = function (event) {
    const modal = document.getElementById('blogModal');
    if (event.target === modal) {
      closeBlogModal();
    }
  };
  