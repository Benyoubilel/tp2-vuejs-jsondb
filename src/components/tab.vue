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
                                            placeholder="ali" >

                                        <label class="p-2">prenom</label>
                                        <input type="text" class="form-control" name="prenom" id="prenom"
                                            placeholder="benali"  v-model="prenom">
                                        <label class="p-2">email</label>
                                        <input type="email" class="form-control" name="email" id="email"
                                            placeholder="email@gmail.fr"  v-model="email">
                                        <br>
                                        <span class="error-feedback text-danger" >{{msg}}</span>
                                        <div class="modal-footer m-2">
                                            <button type="button" class="btn btn-danger"
                                                data-bs-dismiss="modal">Annuler</button>
                                            <button type="submit" @click="addUsr() " class="btn btn-success" id="submit">Ajouter</button>
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
                        <tr v-for="usr of user" :key="usr.id">
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
                                    data-bs-target="#editmodal{{usr.id}}">
                                    <i class="fa fa-edit fa-x "></i>
                                </button>

                                <!-- editModal -->
                                <div class="modal fade" id="editmodal{{usr.id}}" tabindex="-1"
                                    aria-labelledby="editmodalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="editmodalLabel">Modifier</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form class="form-floating" method="POST" action="" id="editform">
                                                <div class="modal-body">
                                                    <label class="p-2">id</label>
                                                    <input type="text" value="{{usr.id}}" class="form-control" name="id"
                                                        id="id" disabled>
                                                    <label class="p-2">nom</label>
                                                    <input type="text" value="{{usr.nom}}" class="form-control"
                                                        name="nom" id="nom" required>

                                                    <label class="p-2">prenom</label>
                                                    <input type="text" value="{{usr.prenom}}" class="form-control"
                                                        name="nom" id="prenom" required>


                                                    <label class="p-2">email</label>
                                                    <input type="email" value="{{usr.email}}" class="form-control"
                                                        id="email" name="email">
                                                    <br>

                                                    <div class="modal-footer m-2">
                                                        <button type="button" class="btn btn-danger"
                                                            data-bs-dismiss="modal">Annuler</button>
                                                        <button type="submit" class="btn btn-success"
                                                            id="submit">Confirmer</button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                            </td>
                            <td>

                                <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    <i class="fa fa-trash"></i>
                                </button>

                                <!-- Modal -->

                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <form class="form-floating" method="POST" action="" id="editform">

                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel"> <i
                                                            class="fa fa-warning text-danger fa-2x"></i></h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>

                                                <div class="modal-body">
                                                    voulez-vous supprimé cette epreuve!
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger"
                                                        data-bs-dismiss="modal">Annuler</button>
                                                    <button type="submit" class="btn btn-outline-danger"><i
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
import { required, email,minLength } from "@vuelidate/validators";

export default {
    name:'tab',
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
            nom: "",
            prenom: "",
            email: "",
            msg:"",
        };
    },
    validattion() {
        return {
            nom: { required,minLength: minLength(3) },
            prenom: { required,minLength: minLength(3)},
            email: { required, email },
        };
    },
    async mounted(){
        let res= await axios.get('http://localhost:3000/user')
        this.user=res.data;
    },
    methods: {
        async getusr(){
        let res= await axios.get('http://localhost:3000/user')
        this.user=res.data;
    },
        async addUsr() {
            this.v$.$validate();
            if (!this.v$.$error) {
                console.log("validé");
                let result = await axios.post('http://localhost:3000/user', {
                    nom: this.nom,
                    prenom: this.prenom,
                    email: this.email,
                });
                if(result.status == 201){
                     this.msg = "utilisateur ajouté";
                    this.nom="";
                    this.email="";
                    this.prenom="";
                    this.getusr();
                }
                else{
                    this.msg = "utilisateur non ajouté";
                }

            }
            else {
                console.log("non-validé");
            }

        },
    },

};
</script>

