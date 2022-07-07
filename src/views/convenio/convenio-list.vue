<template>
  <div class="convenio">
    <article class="panel is-warning column is-8">
      <p class="panel-heading">
        Convenios
      </p>

      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-warning" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
        <router-link to="/cadastrar-convenio"><button class="button">Cadastrar</button></router-link>
        <a href="" title=""><button class="button">Procurar</button></a>
      </div>

    </article>

    <article>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th></th>
          </tr>
        </tfoot>
        <tbody>

          <tr>
            <th>1</th>
            <td>Itamed</td>
            <th>
              <router-link to="/detalhar-convenio"><button class="button ">Detalhar</button></router-link>
            </th>
          </tr>

          <tr>
            <th>2</th>
            <td>Amil</td>
            <th>
              <router-link to="/detalhar-convenio"><button class="button ">Detalhar</button></router-link>
            </th>
          </tr>



        </tbody>
      </table>
    </article>

  </div>



</template>


<style>
.button {
  margin-left: 10px;

}

.detalhar {
  margin-left: 75%;
  
}


</style>

<script lang="ts">
    import { Vue } from 'vue-class-component';

    import { Especialidade } from '@/model/especialidade.model'
    import { Notification } from '@/model/notification'
    import { EspecialidadeClient } from '@/client/especialidade.client'

    
    export default class EspecialidadeForm extends Vue {

        private especialidadeClient!: EspecialidadeClient
        private especialidade : Especialidade = new Especialidade()
        private notification : Notification = new Notification()
    
        public mounted(): void {
            this.especialidadeClient = new EspecialidadeClient()
        }
        
        private onClickCadastrar(): void {

            this.especialidadeClient.cadastrar(this.especialidade)
                .then(
                success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Especialidade Cadastrada com sucesso!!!')
                    this.onClickLimpar()
                }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                })
        }

        private onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }

        private onClickLimpar(): void {
            this.especialidade = new Especialidade()
        }

        // private created(): void { }
    }
</script>


