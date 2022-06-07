export default {
    methods: {
        removerItem() {
            this.itens.pop()
        }
    },
    created() {
        console.log('remove created default list ')
    }
}