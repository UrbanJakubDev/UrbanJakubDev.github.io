<template>
  <div class='login-container box-shadow'>
    <h1>Please login</h1>
    <form class='login-form' method='post' @submit.prevent='checkForm'>
      <div class='input-box'>
        <div class='label-box'>
          <i class='fas fa-user'></i>
          <label for='email'>E-mail</label>
        </div>
        <input id='email' v-model='email' placeholder='email@example.com' type='text' />
      </div>
      <div class='input-box'>
        <div class='label-box'>
          <i class='fas fa-unlock'></i>
          <label for='pass'>Password</label>
        </div>
        <input id='pass' v-model='password' placeholder='Password' type='password' />
      </div>

      <button class='' type='submit'>Login</button>
    </form>

    <div v-if='errors.length' class='popup'>
      <small>Please correct the following error(s):</small>
      <ul>
        <li v-for='error in errors'>{{ error }}</li>
      </ul>
    </div>

    <div v-if='error' class='popup'>
      <p> {{ error }}</p>
    </div>

  </div>
</template>

<script>
export default {
  /* Nuxt Layout */
  layout: 'login',


  data() {
    return {
      email: '',
      password: '',
      error: null,
      errors: []
    }
  },
  methods: {
    /*
    Validate Form function
     */
    checkForm() {
      this.errors = []
      this.error = null

      // Email Validate
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }

      // Password Validate
      if (!this.password) {
        this.errors.push('Password required.')
      }

      // Pass to Login function when errors are OK
      if (!this.errors.length) {
        this.loginUser()
      }
    },

    /**
     Validating Email
     */
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    /**
     Validating Email
     */
    loginUser() {
      /**
       * Nuxt built in function to login user.
       * @function
       * @param {string} Strategy - name of strategy for Nuxt AUTH
       * @param {object} args -  object of user data from Login Form
       * @returns {object} - AccesToken and UserData
       */
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      }).then((response) => {
        let token = response.data.accessToken
        let user = response.data.userData

        /*
        Set token from response to
        Nuxt Auth and Axios Module
         */
        this.$auth.setUserToken(token)
        this.$axios.setToken(token)
        this.$auth.setUser(user)

        // Redirect to Dashboard
        this.$router.push('admin/Dashboard')
      }).catch((e) => {
        this.error = e.response.data.message
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.login-container {
  text-align: center;
  font-size: 1.5rem;
  width: 32rem;
  height: 30rem;
  padding: 2.5rem;
  border-radius: 1rem;
}

.fas {
  color: hotpink;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-box {
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: .1rem dotted var(--color-text-secondary);
}

.label-box {
  text-align: left;
}

.popup {
  padding: .5rem;
  border: .1rem solid red;
  position: relative;
  bottom: -15rem;

  ul {
    font-size: .9em;
    text-align: left;
    list-style: none;
    list-style-position: outside;
  }
}

button {
  width: 16.9rem;
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 1rem;
  padding: 1.2rem;
  color: var(--color-text-primary);
  transition: all 0.1s ease-in-out;
  background: transparent;
  border: .2rem solid var(--color-text-secondary);

  &:hover,
  &:focus {
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
  h1 {
    font-size: 2rem;
  }
}
</style>
