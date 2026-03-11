// src/js/blog.js
// Blog Posts from RSS Feed
export async function initBlogFetcher() {
    const blogPostsContainer = document.getElementById('blogPosts');
    if (!blogPostsContainer) return;

    const query = `
        query {
            publication(host: "docak.hashnode.dev") {
                posts(first: 3) {
                    edges {
                        node {
                            title
                            url
                            publishedAt
                            brief
                        }
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch('https://gql.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query })
        });

        const json = await response.json();
        const posts = json.data?.publication?.posts?.edges || [];

        blogPostsContainer.innerHTML = ''; // Clear loading state

        posts.forEach(({ node }) => {
            const title = node.title;
            const link = node.url;
            const pubDate = new Date(node.publishedAt);
            const description = node.brief;

            // Create post element
            const postElement = document.createElement('article');
            postElement.className = 'blog-post';

            // Format date
            const formattedDate = pubDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // Create post content
            postElement.innerHTML = `
                <h3>${title}</h3>
                <div class="post-meta">
                    <span><i class="far fa-calendar"></i> ${formattedDate}</span>
                </div>
                <div class="post-excerpt">${description}</div>
                <a href="${link}" class="read-more" target="_blank" rel="noopener noreferrer">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
            `;

            blogPostsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        blogPostsContainer.innerHTML = `
            <div class="blog-error">
                <i class="fas fa-exclamation-circle"></i>
                Unable to load blog posts. Please visit my blog directly.
            </div>
        `;
    }
}
