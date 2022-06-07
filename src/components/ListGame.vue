<template>
    <div>
        <h3>{{ titulo }}</h3>
        <input type="text" placeholder="Nome o Jogo" v-model="item"><p></p>
        <button :[arg]="valueOne" type="button" @click="adicionarItem">Adicionar</button>
        <br>
        <ol>
            <li v-for="(item, index) in itens" :key="index">{{ item }}</li>
        </ol>
        <button :[arg]="value" type="button" @click="removerItem">Remover</button>
    </div>
</template>

<script>
import ListPreference from '@/preference/ListPreference'
import RemoveItemListPrefence from '@/preference/RemoveItemListPrefence'

export default {
    name: 'ListGame',
    data: () => ({
        titulo: 'Lista de Jogos',
        arg: 'title',
        value: 'Clique aqui para remover',
        valueOne: 'clique para adicionar'
        
    }),
    mixins: [ListPreference, RemoveItemListPrefence]
}

</script>