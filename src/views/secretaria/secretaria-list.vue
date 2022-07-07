<template>
  <div class="secretaria">
    <article class="panel is-warning column is-8">
      <p class="panel-heading">
        Secretaria
      </p>

      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-warning" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
        <router-link to="/cadastrar-secretaria"><button class="button">Cadastrar</button></router-link>
        <a href="" title=""><button class="button">Procurar</button></a>
      </div>

    </article>
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
          <td>Giovanna Fernandes</td>
          <td><router-link to="/detalhar-secretaria"><button class="button">Detalhar</button></router-link></td>
        </tr>

        <tr>
          <th>2</th>
          <td>Fernanda Dias</td>
          <td><router-link to="/detalhar-secretaria"><button class="button">Detalhar</button></router-link></td>
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