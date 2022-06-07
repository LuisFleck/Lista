<template>
    <div>
        <h3>{{ title }}</h3>
        <input type="text" placeholder="Nome do filme" v-model="item"><p></p>
        <button :[arg]="valueOne" type="button" @click="adicionarItem">Adicionar</button>
        <br>
        <ol>
            <li v-for="(filme, index) in itens" :key="index">{{ filme }}</li>
        </ol>
        <button :[arg]="value" type="button" @click="removerItem">Remover</button>
    </div>
</template>

<script>
import ListPreference from '@/preference/ListPreference'
import RemoveItemListPrefence from '@/preference/RemoveItemListPrefence'

export default {
    name: 'ListMovie',
    data: () => ({
        title: 'Filmes Prediletos',
        arg: 'title',
        value: 'Clique aqui para remover',
        valueOne: 'clique para adicionar'
    }),
    mixins: [ListPreference, RemoveItemListPrefence],
    created() {
        console.log('Lista de Filmes criado')
    }
}
</script>