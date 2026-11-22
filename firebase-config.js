// Firebase Consoleで作成した shokubure-core-system Webアプリの設定
// Web APIキーはFirebase Webアプリ設定の公開クライアント情報です。
// サービスアカウント鍵・秘密鍵・パスワードは絶対にここへ記載しないでください。

export const firebaseConfig = {
  apiKey: "AIzaSyB16kr_JzxFldmQ-vfJsWVsHD55_8fqiM8",
  authDomain: "jobure-coresystem.firebaseapp.com",
  projectId: "jobure-coresystem",
  storageBucket: "jobure-coresystem.firebasestorage.app",
  messagingSenderId: "354424564993",
  appId: "1:354424564993:web:349c5083431eed2a503f00",
  measurementId: "G-WKPFQC6901"
};

// TODO: GASをウェブアプリとしてデプロイした後、/exec で終わるURLに置き換える
export const CORE_API_URL = "ここにGASのWebアプリURL";
