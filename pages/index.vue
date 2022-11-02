<template>
  <div class="overflow-x overflow">
    <Header />
    <section class="home w-90">
      <div class="home__txt">
        <CutTitle classNameTitle="home__title title-primary" classNameSpan="home__split" data_left="0" data_right="0" value="Front-end dev.  web designer"/>
        <nuxt-link class="link-projects" to="/works"
          ><span class="link"> Voir mes<br />projets </span>
          <span class="home__btn"><svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0.287109 13.3669V11.633C0.287109 11.1542 0.672433 10.7661 1.14775 10.7661H28.981L21.3212 3.06758C21.1583 2.90479 21.0667 2.6832 21.0667 2.45204C21.0667 2.22088 21.1583 1.99929 21.3212 1.83651L22.5434 0.622775C22.705 0.458651 22.9249 0.366333 23.1544 0.366333C23.3839 0.366333 23.6039 0.458651 23.7655 0.622775L34.3342 11.2516C34.5763 11.4952 34.7126 11.8258 34.7129 12.1706V12.8294C34.7089 13.1735 34.5732 13.5027 34.3342 13.7484L23.7655 24.3772C23.6039 24.5413 23.3839 24.6337 23.1544 24.6337C22.9249 24.6337 22.705 24.5413 22.5434 24.3772L21.3212 23.1461C21.1593 22.9863 21.0681 22.7676 21.0681 22.5393C21.0681 22.3109 21.1593 22.0922 21.3212 21.9324L28.981 14.2339H1.14775C0.672433 14.2339 0.287109 13.8457 0.287109 13.3669Z" fill="#F92E2D"/></svg>
          </span>
        </nuxt-link>
        <p class="year">{{getYear}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
       year : new Date()
    };
  },
  head() {
    return {
      title: "Sykovaris Dimitrios - Portfolio",
    };
  },
  computed:{
    getYear(){
      return this.year.getFullYear()
    }
  },
};
</script>

<style lang="scss">
.overflow{
  overflow: hidden;
.home {
  height: 100vh;
  @extend %centerFlex;
  &__txt {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
      display: none;
    }
    @include laptop {
      margin-top: 4vw;
      height: 75vh;
      justify-content: space-between;
      flex-direction: row;
      .year{
      display: block;
      position: absolute;
      top: 20vw;
      left: -10%;
      font-size: 75vh;
      color: transparent;
      -webkit-text-stroke: 1px #f92d2d9c;
      font-family: "Mongoose";
    }
    }
  }
  &__title {
    text-align: center;
    @include laptop {
      text-align: left;
      align-self: flex-start;
    }
  }
  .link-projects {
    color: #F92E2D;
    font-family: "Poppins";
    text-transform: uppercase;
    margin-top: 2.5rem;
    font-size: 1.3rem;
    display: flex;
    line-height: 1;
    .home__btn{
      width: 50px;
      border: 1px solid #F92E2D;
      border-radius: 50vw;
      height: 50px;
      padding: 10px;
      margin-left: 15px;
      align-self: flex-end;
    }
    @include laptop {
      align-self: flex-end;
      font-size: 3vw;
    }
  }
}
}
</style>
