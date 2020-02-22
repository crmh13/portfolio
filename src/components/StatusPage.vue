<template>
<div class="status">
  <div class="profile">
    <p>HTMl、CSSを使い官公庁のHPのアクセシビリティ対応、保守業務を行いながらプログラミングを独学で学びプログラマになる。</p>
    <p>ゲームとプログラミングが好き。<br>VRゲームやり始め、いずれVRでも何かを作りたい。</p>
  </div>
  <article>
    <ul class="type">
      <li @click="change('language')" :class="{'active': isActive === 'language'}" class="select">げんご</li>
      <li @click="change('framework')" :class="{'active': isActive === 'framework'}" class="select">フレームワーク</li>
    </ul>
    <ul v-if="isActive === 'language'" class="skill">
      <li v-for="(language, index) in  languages" :key="index">{{ language }}</li>
    </ul>
    <ul v-if="isActive === 'framework'" class="skill">
      <li v-for="(framework, index) in frameworks" :key="index">{{ framework }}</li>
    </ul>
  </article>
</div>
</template>

<script>
export default {
  name: 'Status',
  data: function () {
    return {
       languages: [
        'HTML',
        'CSS',
        'JavaScript',
        'Ruby',
        'PHP',
        'Java',
        'VBA',
        'Python(少し触っただけ)',
        'C(少し触っただけ)',
        'C#(少し触っただけ)'
      ],
      frameworks: [
        'Ruby On Rails',
        'Vue.js',
        'Nuxt.js(少し触っただけ)'
      ],
      isActive: 'language'
    }
  },
  methods: {
    change: function(str) {
      this.isActive = str
    }
  }
}
</script>

<style scoped>
.status {
  display: flex;
}

.profile {
  width: 280px;
  height: 200px;
  border-right: 5px solid #fff;
  border-bottom: 5px solid #fff;
  border-radius: 0 0 5px 0;
  text-align: left;
  padding: 5px;
}

article {
  width: 485px;
  height: 100%;
  margin-top: 180px;
  border: 5px solid #fff;
  border-radius: 5px;
}

article li {
  text-align: left;
  list-style-type: none;
}

.type {
  margin: 0;
  border-bottom: 5px solid #fff;
}

.type li {
  display: inline-block;
  width: 200px;
  text-align: center;
  cursor: pointer;
}

.active {
  text-decoration: underline;
}

.skill {
  margin: 0;
  height: 560px;
}

.skill li {
  font-size: 20px;
  margin-top: 15px;
}


@media screen and (max-width: 960px) {
  .status {
    display: block;
  }

  .profile {
    width: 95.5%;
    height: 100%;
    border-left: 5px solid #fff;
  }

  article {
    width: 97%;
    margin-top: 10px;
  }
}

@media screen and (max-width: 780px) {
  .profile {
    width: 100%;
  }

  .profile p {
    padding: 5px;
  }

  article {
    width: 100%;
  }
  
  .type {
    padding: 5px 0;
  }

  .type li {
    width: 45%;
  }
}
</style>