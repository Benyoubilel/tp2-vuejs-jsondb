<script setup lang="ts"></script>
<template>


    <section class="container-fluid p-4">
        <div class="row dark">
            <div class="col-md-12">
                <div class="container-fluid p-4">
                    <h1>
                        Gestion des utilisateur
                    </h1>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary align-items-center pull-right m-2"
                        data-bs-toggle="modal" data-bs-target="#addmodal">
                        Ajouter <i class="fa fa-plus fa-x"></i>
                    </button>

                    <!-- AddModal -->
                    <div class="modal fade" id="addmodal" tabindex="-1" aria-labelledby="addmodalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="addmodalLabel">Ajouter</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <form class="form-floating" method="POST" action="" @click.prevent>

                                    <div class="modal-body">
                                        <label class="p-2">nom</label>
                                        <input type="text" class="form-control" name="nom" id="nom" v-model="nom"
                                            placeholder="ali">

                                        <label class="p-2">prenom</label>
                                        <input type="text" class="form-control" name="prenom" id="prenom"
                                            placeholder="benali" v-model="prenom">
                                        <label class="p-2">email</label>
                                        <input type="email" class="form-control" name="email" id="email"
                                            placeholder="email@gmail.fr" v-model="email">
                                        <br>
                                        <span class="error-feedback text-danger">{{ msg }}</span>
                                        <div class="modal-footer m-2">
                                            <button type="button" class="btn btn-danger"
                                                data-bs-dismiss="modal">Annuler</button>
                                            <button type="submit" @click="addUsr()" class="btn btn-success"
                                                id="submit">Ajouter</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-sm" id="datatable">
                    <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>
                                nom
                            </th>
                            <th>
                                prenom
                            </th>
                            <th>
                                email
                            </th>
                            <th>
                                Modifier
                            </th>
                            <th>
                                supprimer
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usr of user" v-bind:key="usr.id">
                            <td>
                                {{ usr.id }}
                            </td>
                            <td>
                                {{ usr.nom }}
                            </td>
                            <td>
                                {{ usr.prenom }}
                            </td>
                            <td>
                                {{ usr.email }}
                            </td>
                            <td>
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-success align-items-center" data-bs-toggle="modal"
                                    v-bind:data-bs-target=editbs+usr.id>
                                    <i class="fa fa-edit fa-x "></i>
                                </button>

                                <!-- editModal -->
                                <div class="modal fade" v-bind:id=edit+usr.id tabindex="-1"
                                    aria-labelledby="editmodalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="editmodalLabel">Modifier</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form class="form-floating" id="editform" @click.prevent
                                                v-bind:key="usr.id">
                                                <div class="modal-body">
                                                    <label class="p-2">id</label>
                                                    <input type="text" v-model=usr.id class="form-control"
                                                        name="id" id="id" disabled>
                                                    <label class="p-2">nom</label>
                                                    <input type="text" v-model=usr.nom class="form-control"
                                                        name="nom" id="nom" required>

                                                    <label class="p-2">prenom</label>
                                                    <input type="text" v-model=usr.prenom class="form-control"
                                                        name="nom" required>


                                                    <label class="p-2">email</label>
                                                    <input type="email" v-model=usr.email class="form-control"
                                                        id="email" name="email">
                                                
                                                    <br>
                                              <span class="error-feedback text-danger">{{ msgupdt }}</span>
                                                    <div class="modal-footer m-2">
                                                        <button type="button" class="btn btn-danger"
                                                            data-bs-dismiss="modal">Annuler</button>
                                                        <button type="submit" class="btn btn-success" id="submit"
                                                            v-bind:key="usr.id"
                                                            v-on:click="updateUsr(usr.id,usr.nom,usr.prenom,usr.email)">Confirmer</button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                            </td>
                            <td>

                                <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
                                    v-bind:data-bs-target=rmbs+usr.id>
                                    <i class="fa fa-trash"></i>
                                </button>

                                <!-- Modal -->

                                <div class="modal fade" v-bind:id=rm+usr.id tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <form class="form-floating" v-bind:key="usr.id">

                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel"> <i
                                                            class="fa fa-warning text-danger fa-2x"></i></h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>

                                                <div class="modal-body">
                                                    voulez-vous supprim?? cette utilisteur!
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger"
                                                        data-bs-dismiss="modal">Annuler</button>
                                                    <button type="submit" class="btn btn-outline-danger"
                                                        v-bind:key="usr.id" v-on:click="remusr(usr.id)"><i
                                                            class="fa fa-trash"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>

    </section>



</template>
<script>
import axios from "axios";

import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
    name: 'tab',
    data() {
        return {
            user: [{
                "nom": "",
                "prenom": "",
                "email": "",
                "id": "",
            }
            ],
            v$: useValidate(),
            id: "",
            nom: "",
            prenom: "",
            email: "",
            msg: "",
            msgupdt:"",
            editbs: "#editmodal",
            edit: "editmodal",
            rmbs: "#delete",
            rm: "delete",
            value: "",
        };
    },
    validattion() {
        return {
            nom: { required, minLength: minLength(3) },
            prenom: { required, minLength: minLength(3) },
            email: { required, email },
        };
    },
    async mounted() {
        let res = await axios.get('http://localhost:3000/user');
        this.user = res.data;
    },
    methods: {
        async getusr() {
            let res = await axios.get('http://localhost:3000/user');
            this.user = res.data;
        },
        async addUsr() {
            this.v$.$validate();
            if (!this.v$.$error) {
                console.log("valid??");
                let result = await axios.post('http://localhost:3000/user', {
                    nom: this.nom,
                    prenom: this.prenom,
                    email: this.email,
                });
                if (result.status == 201) {
                    this.msg = "utilisateur ajout??";
                    this.nom = "";
                    this.email = "";
                    this.prenom = "";
                    this.getusr();
                }
                else {
                    this.msg = "utilisateur non ajout??";
                }

            }
            else {
                console.log("non-valid??");
            }

        },
        async remusr(id) {
            //    let resp= await axios.get('http://localhost:3000/user/1');
            //    console.log(resp.data);
            axios.delete('http://localhost:3000/user/' + id);
            this.getusr();
        },
        async updateUsr(id,nom,prenom,email) {

        //   let rep=  await axios.get('http://localhost:3000/user/' + id);
        //   this.user= rep.data;
         let rep = await axios.put('http://localhost:3000/user/' + id , {nom:nom,prenom:prenom,email:email});
         if (rep.status == 201) {
                    this.msgupdt = "utilisateur modifie";
                    this.getusr();
                }
                else {
                    this.msgupdt = "erreur";
                }
          

        }


    },

};
</script>

