<template>
  <div class='login_container box-shadow neumorphism'>
    <h3>Please login</h3>
    <form action='#' class='login_form'>
      <div class='input-box'>
        <i class='fas fa-user'></i>
        <label for='username'></label>
        <input id='username' type='text' placeholder='Username' />
      </div>
      <div class='input-box'>
        <i class='fas fa-unlock'></i>
        <label for='pass'></label>
        <input id='pass' type='text' placeholder='Password' />
      </div>

      <button class='' type='submit'>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'login'
}
</script>

<style lang='scss' scoped>
.login_container {
  text-align: center;
  font-size: 1.5rem;
  width: 25rem;
  height: 25rem;
  padding: 2rem;
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
  border: none;
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
</style>
