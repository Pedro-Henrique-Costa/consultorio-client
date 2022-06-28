<template>
  <div class="especialidade">
    <article class="panel is-warning">
      <p class="panel-heading">
        Especialidade
      </p>

      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-warning" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
        <router-link to="/cadastrar-especialidade"><button class="button">Cadastrar</button></router-link>
        <a href="" title=""><button class="button">Procurar</button></a>
      </div>

    </article>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Especialidade</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>ID</th>
          <th>Especialidade</th>
        </tr>
      </tfoot>
      <tbody>

        <tr>
          <th>1</th>
          <td>Genética Médica</td>
          <td><router-link to="/detalhar-especialidade"><button class="button">Detalhar</button></router-link></td>
        </tr>

        <tr>
          <th>2</th>
          <td>IInfectologia</td>
          <td><router-link to="/detalhar-especialidade"><button class="button">Detalhar</button></router-link></td>
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