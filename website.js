// HTML Structure
document.body.innerHTML = `
<div class="container">
    <header>
        <div class="profile-img">
            <img src="PeterHeadshot.jpg" alt="Professional headshot">
        </div>
    </header>
    
    <main>
        <div class="content-wrapper">
            <h1>Peter Van Story</h1>
            <h2>Capitol Hill Consulting</h2>
            <div class="description">
                <p>With over 15 years of experience working alongside federal agencies, 
                Peter has successfully led major policy implementation projects and organizational 
                transformations. His expertise in regulatory compliance and strategic planning 
                has helped numerous government departments optimize their operations and achieve their goals.</p>
                <p>Please reach out for a consultation.</p>
            </div>
            <button class="contact-btn" onclick="contactMe()">Contact: vanstorydc@gmail.com</button>
        </div>
    </main>
</div>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        min-height: 100vh;
    }

    .container {
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 33vh;  /* One third of viewport height */
        background: url('capitol.jpg') no-repeat center center;
        background-size: cover;
        z-index: 1;
    }

    .content-wrapper {
        background: #f5f5f5;  /* Light grey background */
        padding: 2rem;
        border-radius: 20px;
        margin: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 2;
    }

    header {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: flex-end;
        padding: 20px;
    }

    main {
        flex-grow: 1;
        background-color: #f5f5f5;  /* Light grey background */
        margin-top: 8vh;  /* Push main content below the banner */
        position: relative;
        z-index: 2;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        padding: 40px 20px;
    }

    h1 {
        color: #2c3e50;
        font-size: 3em;
        margin-bottom: 10px;
    }

    h2 {
        color: #2c3e50;
        font-size: 2.2em;
        margin-bottom: 30px;
    }

    .description {
        font-size: 1.2em;
        line-height: 1.6;
        color: #34495e;
        margin-bottom: 40px;
    }

    .description p:first-child {
        margin-bottom: 20px;  /* Adds space between the paragraphs */
    }

    .contact-btn {
        background-color: #2c3e50;
        color: white;
        border: none;
        padding: 15px 40px;
        font-size: 1.2em;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .contact-btn:hover {
        background-color: #34495e;
    }

    .profile-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin: 20px;
        position: relative;
    }

    .profile-img img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-38%, -40%) scale(2.2);  /* Scale up to show center portion */
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
`;

// JavaScript for contact button
function contactMe() {
    window.location.href = "mailto:vanstorydc@gmail.com";
}
