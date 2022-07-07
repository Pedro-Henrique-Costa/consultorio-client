<template>
  <div class="especialidade">
    <article class="panel is-warning column is-8">
      <p class="panel-heading">
        Especialidade
      </p>

      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-warning" type="text" placeholder="Procurar">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
        <router-link to="/especialidade-form"><button class="button">Cadastrar</button></router-link>
        
      </div>

    </article>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Atividade</th>
          <th>Nome</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in especialidadeList" :key="item.id">
          <th>{{ item.id }}</th>

          <th>
            <span v-if="item.ativo" class="tag is-success"> Ativo </span>
            <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
          </th>

          <th>{{ item.nome }}</th>
          <th> <button class="button is-small is-warning"> Detalhar </button> </th>
        </tr>
      </tbody>



    </table>

  </div>



</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

import { Especialidade } from '@/model/especialidade.model'
import { EspecialidadeClient } from '@/client/especialidade.client'


export default class EspecialidadeList extends Vue {

  public pageRequest: PageRequest = new PageRequest()
  public pageResponse: PageResponse<Especialidade> = new PageResponse()

  public especialidadeList: Especialidade[] = []
  public especialidadeClient!: EspecialidadeClient

  public mounted(): void{
    this.especialidadeClient = new EspecialidadeClient()
    //this.especialidadeClient.findById(this.especialidadeList[1].id)
    this.listarEspecialidade()
  }

  public listarEspecialidade(): void {

    debugger

    this.especialidadeClient.findByFiltrosPaginado(this.pageRequest)
      .then(
        success => {
          this.pageResponse = success
          this.especialidadeList = this.pageResponse.content
        },
        error => console.log(error)
      )
  }
}
</script>



<style>
.button {
  margin-left: 10px;
}
</style>