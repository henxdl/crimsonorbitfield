
  window.onload = () => document.getElementById("urlInput").focus();

document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('redirectForm');
            const urlInput = document.getElementById('urlInput');
            const errorMessage = document.getElementById('errorMessage');

            // Initialize icons
            feather.replace();

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                errorMessage.classList.remove('visible');
                errorMessage.textContent = '';

                let url = urlInput.value.trim();

                if (!url) {
                    errorMessage.textContent = 'Please enter a URL.';
                    errorMessage.classList.add('visible');
                    return;
                }

                // Add https:// if it's not present
                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                    url = 'https://' + url;
                }

                try {
                    const newUrl = new URL(url);
                    window.location.href = newUrl.href;
                } catch (error) {
                    errorMessage.textContent = 'Invalid URL format.';
                    errorMessage.classList.add('visible');
                }
            });
        });
