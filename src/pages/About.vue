<template>
  <Layout mode="info">
    <v-container class="contents">

      <section style="height: 0">
        <div>
          <p>
            『かるたよみ』は、音声合成による発話の機能を使って文章を自動読み上げする機能を使い、カルタ遊びの読み手を担うアプリです。
          </p>
          <p>
            音声合成によるイントネーションの面白さや読み違いなども含めて楽しむアプリです。
            設定により発話のニュアンスも変わります。いろいろな設定をお試しください。<br>
            また読み上げ補正データ(ひらがな文)が提供されているゲームの場合は、そちらを読み上げる設定が有効になります。
            これは漢字の読み間違えが補正されます。ただし、ひらがなによる読み間違え「は」の「Ha」と「Wa」などは発生します。
            イントネーションも若干変わりますが音声合成によるものに変わりはありません。
            読み上げ補正が提供されている場合でもゲームの設定で無効にでき、読み間違えを楽しむこともできます。<br>
          </p>
          <p>
            音声合成については <a href="https://developer.mozilla.org/docs/Web/API/Web_Speech_API">Web Speech API</a> を利用しており、本アプリのリリース時点 2020年4月現在 <a href="https://developer.mozilla.org/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental">験的な機能</a> となっています。お使いの環境によっては発話されないことがあります。詳しくは <a href="https://developer.mozilla.org/ja/docs/Web/API/SpeechSynthesis#Browser_compatibility">こちら</a> をご確認ください。
          </p>
        </div>

        <h3>利用している画像素材</h3>
        <p>
          <ul>
            <li><a href="https://www.photo-ac.com/main/detail/3195277">百人一首 - No: 3195277｜写真AC</a></li>
            <li><a href="https://www.photo-ac.com/main/detail/2992384">近江神宮 - No: 2992384｜写真AC</a></li>
            <li><a href="https://www.photo-ac.com/main/detail/1943255">雲龍院別院 - No: 1943255｜写真AC</a></li>
            <li><a href="https://www.photo-ac.com/main/detail/3156592">貼りたての畳 - No: 3156592｜写真AC</a></li>
            <li><a href="https://pixabay.com/ja/illustrations/%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8-%E6%9C%A8%E7%89%88%E5%8D%B0%E5%88%B7-%E6%9C%A8%E7%89%88%E7%94%BB-%E6%B3%A2-1247354/">イメージ 木版印刷 木版画 - Pixabay</a></li>
          </ul>
        </p>

        <h3>利用している色情報</h3>
        <p>
          <ul>
            <li><a href="https://irononamae.web.fc2.com/wa/">和の色 - 色の名前と色見本</a></li>
          </ul>
        </p>

        <h3>利用している読札データ</h3>
        <p>
          各カルタの読み上げ設定画面に記載<br>
        </p>

        <h3>プライバシーポリシー</h3>
        <div>
          <strong>Google Analytics</strong>
          <p>
            当サイトおよび本アプリではアクセス解析のために <a href="https://analytics.google.com/analytics/web/">Google Analytics</a> を利用しております。クッキー(<a href="https://developer.mozilla.org/docs/Web/HTTP/Cookies">HTTP Cookie</a>)を使用し、個人を特定する情報を含まずにデータを収集します。Google Analytics の利用により収集されたデータは、<a href="https://policies.google.com/privacy">Google社</a> のプライバシーポリシーに基づいて管理されます。
          </p>
        </div>

        <h3>免責事項</h3>
        <p>
          『かるたよみ』(以降「本アプリ」)は、いかなる環境においても利用可能なものではありません。また事前の告知なく仕様を変更する場合があります。したがって本アプリがいかなる環境かでも利用可能であること保証いたしません。<br>
          本アプリの動作環境は行っておりますが、すべての状況下において動作を保証するものではありません。また本アプリを使用したことによる損害(一次的、二次的に関わらず、表示情報の誤謬や逸脱を含む)、その他の不利益に対して一切の責任を負いません。<br>
          本アプリに不備があっても訂正する義務は負わないものとします。また予告なく開発の中止やサービスの停止等をすることができるものとします。<br>
        </p>
      </section>

    </v-container>
  </Layout>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  metaInfo() {
    const title = 'About';
    return {
      title,
      meta: [
        { key: 'twitter:title', content: title, template: true },
        { key: 'og:title', content: title, template: true }
      ] as never
    };
  }
});
</script>


<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

hr {
  margin: 8px 0;
}
</style>
