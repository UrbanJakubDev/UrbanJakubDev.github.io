<template>
  <div class='login_container box-shadow'>
    <h1>Please login</h1>
    <form class='login_form' method='post' @submit.prevent='loginNew'>
      <div class='input-box'>
        <i class='fas fa-user'></i>
        <label for='email'></label>
        <input id='email' v-model='email' placeholder='Email' type='text' />
      </div>
      <div class='input-box'>
        <i class='fas fa-unlock'></i>
        <label for='pass'></label>
        <input id='pass' v-model='password' placeholder='Password' type='password' />
      </div>

      <button class='' type='submit'>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    loginNew(){
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      }).then((response)=> {
        console.log(response.data)
        let token = response.data.accessToken
        let user = response.data.userData
        this.$auth.setUserToken(token)
        this.$axios.setToken(token)
        this.$auth.setUser(user)
        this.$router.push('admin/Dashboard')
      }).catch((e)=>{
        this.error = e.response.data.message
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.login_container {
  text-align: center;
  font-size: 1.5rem;
  width: 28rem;
  height: 28rem;
  padding: 2.5rem;
  border-radius: 1rem;
}

.fas {
  color: hotpink;
}

.login_form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-box {
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--color-text-secondary);
}

button {
  width: 169px;
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 1rem;
  padding: 1.2rem;
  color: var(--color-text-primary);
  transition: all 0.1s ease-in-out;
  background: transparent;
  border: 2px solid var(--color-text-secondary);

  &:hover,
  &:focus {
    // box-shadow: inset 0 -3.25em 0 0 var(--color-text-secondary);
    // border-radius: .4rem;
    box-shadow: 0 0.5em 0.5em -0.4em var(--color-text-secondary);
    transform: translateY(-0.25em);
  }
}

input {
  text-align: left;
  background-color: transparent;
  border: none;
  color: var(--color-text-secondary);



  &:focus {
    outline: none;
    color: var(--color-text-secondary);
  }
}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 550px) {
  h1{
    font-size: 2rem;
  }
}
</style>
