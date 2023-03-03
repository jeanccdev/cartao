const { createApp } = Vue

createApp({
    data() {
        return {
            numerocartao: undefined,
            validadecartao: undefined,
            cvv: undefined
        }
    },
    methods: {
      cadastrado() {
        // `this` inside methods points to the current active instance
        alert(`Cartão Cadastrado!`)
        this.numerocartao = undefined,
        this.validadecartao = undefined,
        this.cvv = undefined
      }
    }
}).mount('#appcartao')