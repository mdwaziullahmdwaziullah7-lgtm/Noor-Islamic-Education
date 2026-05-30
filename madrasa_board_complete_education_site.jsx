<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Noor Islamic Education</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      background: #f4f4f4;
      color: #222;
    }

    header {
      background: #0f6b3e;
      color: white;
      padding: 20px;
      text-align: center;
    }

    nav {
      margin-top: 10px;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin: 0 10px;
      font-weight: bold;
    }

    .hero {
      background: white;
      padding: 60px 20px;
      text-align: center;
    }

    .hero h1 {
      font-size: 40px;
      margin-bottom: 15px;
    }

    .hero p {
      max-width: 800px;
      margin: auto;
      color: #555;
      line-height: 1.8;
    }

    .btn {
      display: inline-block;
      margin-top: 25px;
      background: #0f6b3e;
      color: white;
      padding: 12px 30px;
      border-radius: 10px;
      text-decoration: none;
    }

    .section {
      padding: 50px 20px;
      max-width: 1200px;
      margin: auto;
    }

    .section-title {
      text-align: center;
      font-size: 32px;
      margin-bottom: 40px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }

    .card {
      background: white;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .card h3 {
      color: #0f6b3e;
      margin-bottom: 10px;
    }

    .card ul {
      margin-left: 20px;
      line-height: 1.8;
      color: #555;
    }

    .feature-box {
      background: #0f6b3e;
      color: white;
      padding: 50px 20px;
      text-align: center;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }

    .feature {
      background: rgba(255,255,255,0.15);
      padding: 20px;
      border-radius: 15px;
    }

    footer {
      background: black;
      color: white;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }

    .login-box {
      background: white;
      max-width: 400px;
      margin: 40px auto;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .login-box input {
      width: 100%;
      padding: 12px;
      margin-top: 10px;
      border-radius: 8px;
      border: 1px solid #ccc;
    }

    .login-box button {
      width: 100%;
      padding: 12px;
      margin-top: 15px;
      background: #0f6b3e;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <header>
    <h1>Noor Islamic Education</h1>
    <p>Class 1 থেকে Kamil পর্যন্ত সম্পূর্ণ ইসলামিক শিক্ষা</p>

    <nav>
      <a href="#classes">Classes</a>
      <a href="#subjects">Subjects</a>
      <a href="#videos">Videos</a>
      <a href="#login">Login</a>
    </nav>
  </header>

  <section class="hero">
    <h1>অনলাইনে ইসলামিক শিক্ষা প্ল্যাটফর্ম</h1>

    <p>
      এখানে আপনি Class 1 থেকে Kamil পর্যন্ত সকল বই, নোট, PDF,
      ভিডিও ক্লাস, পরীক্ষার প্রস্তুতি এবং ইসলামিক শিক্ষা একসাথে পাবেন।
    </p>

    <a class="btn" href="#classes">পড়া শুরু করুন</a>
  </section>

  <section class="feature-box">
    <h2>Website Features</h2>

    <div class="feature-grid">
      <div class="feature">✅ Student Login</div>
      <div class="feature">✅ Admin Dashboard</div>
      <div class="feature">✅ PDF Download</div>
      <div class="feature">✅ Video Classes</div>
      <div class="feature">✅ Exam System</div>
      <div class="feature">✅ Result System</div>
      <div class="feature">✅ Islamic Blog</div>
      <div class="feature">✅ Mobile Friendly</div>
    </div>
  </section>

  <section class="section" id="classes">
    <h2 class="section-title">সব ক্লাস</h2>

    <div class="grid">
      <div class="card">
        <h3>Class 1 - 5</h3>
        <ul>
          <li>Quran</li>
          <li>Arabic</li>
          <li>Bangla</li>
          <li>Math</li>
        </ul>
      </div>

      <div class="card">
        <h3>Class 6 - 8</h3>
        <ul>
          <li>Hadith</li>
          <li>Fiqh</li>
          <li>Arabic Grammar</li>
          <li>English</li>
        </ul>
      </div>

      <div class="card">
        <h3>Dakhil</h3>
        <ul>
          <li>Islamic History</li>
          <li>Hadith</li>
          <li>Tafsir</li>
          <li>Math</li>
        </ul>
      </div>

      <div class="card">
        <h3>Alim / Fazil / Kamil</h3>
        <ul>
          <li>Tafsir</li>
          <li>Usulul Hadith</li>
          <li>Balagat</li>
          <li>Fiqhul Islam</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section" id="subjects">
    <h2 class="section-title">জনপ্রিয় বিষয়</h2>

    <div class="grid">
      <div class="card"><h3>📘 Quran Education</h3></div>
      <div class="card"><h3>📗 Hadith</h3></div>
      <div class="card"><h3>📙 Fiqh</h3></div>
      <div class="card"><h3>📕 Arabic Grammar</h3></div>
      <div class="card"><h3>📒 Islamic History</h3></div>
      <div class="card"><h3>📓 Aqidah</h3></div>
    </div>
  </section>

  <section class="section" id="videos">
    <h2 class="section-title">ভিডিও ক্লাস</h2>

    <div class="grid">
      <div class="card">
        <h3>🎥 Quran Class</h3>
        <p>সম্পূর্ণ অনলাইন ভিডিও ক্লাস</p>
      </div>

      <div class="card">
        <h3>🎥 Hadith Class</h3>
        <p>সহজভাবে হাদিস শিক্ষা</p>
      </div>

      <div class="card">
        <h3>🎥 Arabic Grammar</h3>
        <p>আরবি ব্যাকরণ সম্পূর্ণ কোর্স</p>
      </div>
    </div>
  </section>

  <section class="section" id="login">
    <h2 class="section-title">Student Login</h2>

    <div class="login-box">
      <input type="text" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <button>Login</button>
    </div>
  </section>

  <footer>
    <p>© 2026 Noor Islamic Education - All Rights Reserved</p>
  </footer>

</body>
</html>
