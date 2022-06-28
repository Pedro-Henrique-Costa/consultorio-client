<template>
    <div class="cadastrar-agendamento">
        <p>Cadastro Agendamento</p>
        <br>
        <div class="field">
            <label class="label">Status Agendamento</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Data de</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Data ate</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Encaixe</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Paciente</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Secretaria</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>

        <div class="field">
            <label class="label">Medico</label>
            <div class="control ">
                <input class="input " type="text" placeholder="Text input">
            </div>
        </div>


        <br>

        <div class="field is-grouped">
            <div class="control">
                <router-link to="/agendamento"><button class="button button is-link">Salvar</button></router-link>
            </div>
            <div class="control">
                <router-link to="/agendamento"><button class="button button is-link">Voltar</button></router-link>
            </div>
        </div>


    </div>

</template>