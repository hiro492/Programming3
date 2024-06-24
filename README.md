# Programming3
# プログラム仕様書

## 1. 概要

Hiroの個人ブログサイトは、HTMLとCSSを使用して構築された静的なウェブサイトです。このサイトはレスポンシブデザインに対応しておらず、メディアクエリも使用していません。以下の仕様書では、サイトの各コンポーネントとその機能について詳述します。

## 2. サイト構成

- **ヘッダー**
    - **ロゴ**: ウェブサイトのタイトルを表示。
    - **ナビゲーションメニュー**: ホーム、ブログ、プロフィール、お問い合わせの各リンクを含む。

- **メインコンテンツ**
    - **ホームページ**
        - サイトの紹介と最新のブログ投稿へのリンク。
    - **ブログページ**
        - ブログ投稿の一覧を表示。各投稿にはタイトル、投稿日時、抜粋が含まれる。
    - **ブログ詳細ページ**
        - 各ブログ投稿の詳細内容を表示。タイトル、投稿日時、著者、本文を含む。
    - **プロフィールページ**
        - Hiroの自己紹介や興味・関心事を紹介。



## 3. HTML構造

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hiroのブログ</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Hiroのブログ</h1>
        <nav>
            <ul>
                <li><a href="index.html">ホーム</a></li>
                <li><a href="blog.html">ブログ</a></li>
                <li><a href="profile.html">プロフィール</a></li>
                <li><a href="contact.html">お問い合わせ</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <!-- 各ページのコンテンツがここに表示される -->
    </main>
    <footer>
        <p>&copy; 2024 Hiroのブログ</p>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
        </ul>
    </footer>
</body>
</html>
