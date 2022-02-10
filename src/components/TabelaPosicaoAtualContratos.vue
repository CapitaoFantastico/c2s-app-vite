<script setup lang="ts">
import { PosicaoAtualContratos } from '../types/components';

const posicaoAtualContratos: PosicaoAtualContratos[] = [
    {
        cnpj: "123",
        cliente: "Cliente 1",
        contrato: "123XX",
        diferenca: 10000,
        parcelasVencidas: 3,
        saldoEmConta: 1000,
        vencido: 2000,
        vencimento: 2500
    },
    {
        cnpj: "124",
        cliente: "Cliente 2",
        contrato: "124XX",
        diferenca: 10000,
        parcelasVencidas: 3,
        saldoEmConta: 1000,
        vencido: 2000,
        vencimento: 2500
    }];

const formatarValores = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valor);
}
</script>

<template>
    <v-card class="mx-auto">
        <v-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Cnpj</th>
                        <th class="text-left">Cliente</th>
                        <th class="text-left">Saldo em conta</th>
                        <th class="text-left">Vencimento</th>
                        <th class="text-left">Vencido</th>
                        <th class="text-left">Diferença</th>
                        <th class="text-left">Parcelas vencidas</th>
                        <th class="text-left">Contrato</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in posicaoAtualContratos" :key="item.contrato">
                        <td>{{ item.cnpj }}</td>
                        <td>{{ item.cliente }}</td>
                        <td>{{ formatarValores(item.saldoEmConta) }}</td>
                        <td>{{ formatarValores(item.vencimento) }}</td>
                        <td>{{ formatarValores(item.vencido) }}</td>
                        <td>{{ formatarValores(item.diferenca) }}</td>
                        <td>{{ item.parcelasVencidas }}</td>
                        <td>{{ item.contrato }}</td>
                    </tr>
                </tbody>
            </template>
        </v-table>
    </v-card>
</template>