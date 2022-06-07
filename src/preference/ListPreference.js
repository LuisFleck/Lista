export default {
    data: () => ({
        titulo: 'default list',
        itens: [],
        item: ''
    }),
    methods: {
        adicionarItem() {
            this.itens.push(this.item)
            this.item = ''
        }
    },
    created() {
        console.log('Lista preference criada')
    }
}