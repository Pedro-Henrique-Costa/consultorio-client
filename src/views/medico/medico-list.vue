<template>
  <div class="medico">
    <article class="panel is-warning">
      <p class="panel-heading">
        Medico
      </p>

      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-warning" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
        <router-link to="/cadastrar-medico"><button class="button">Cadastrar</button></router-link>
        <a href="" title=""><button class="button">Procurar</button></a>
      </div>

    </article>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </tfoot>
      <tbody>

        <tr>
          <th>1</th>
          <td>Vitor Souza</td>
          <td><router-link to="/detalhar-medico"><button class="button">Detalhar</button></router-link></td>
        </tr>

        <tr>
          <th>2</th>
          <td>João Gustavo</td>
          <td><router-link to="/detalhar-medico"><button class="button">Detalhar</button></router-link></td>
        </tr>


      </tbody>

    </table>

  </div>



</template>

<style>
.button {
  margin-left: 10px;
}


</style>