

<template>
<header>
  <router-link to ="/">
    <h1><span>The </span>Movie Hunter</h1>
  </router-link>
  </header>
  <main>
    <router-view>
       
    </router-view>
  </main>
  </template>


<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: white;

  &::selection{
    background: transparent(#E50914,0.5);
  }
}
body{
  background-color: black;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 5;
  animation-delay: 2s;
}

@keyframes example {
  from {background-color: black;}
  to {background-color: red;}
}


a{
  text-decoration: none;
}
header{
  display: flex;
  align-items: center;
  padding: 10px 30x;
  justify-content: center;
  background-color: darkblue;
  box-shadow: 0px 6px 6px rgba(0,0,0,0.1);

}
h1{
  color: red;
  font-size: 30px;

  span{
    color: #ffffff;
  }
}
</style>
