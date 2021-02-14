<template>
	<div class="contrast-container">
         <div class="row mb-2">
            <div class="col-md-9 col-12">
               <div class="contrast">
                  <img src="~/assets/images/article/congrate.jpg" alt="congrate">
                  <h2>Congrats! You made it!</h2>
                   <template v-if="!data.is_test_completed">
                       <p class="mb-4">Do you want to take a quick quiz and earn +{{ data.points }} points?</p>
                   </template>
                   <template v-else>
                       <p class="mb-4">You have already completed the test you have earned {{ data.points_earned }} out of {{ data.points}} points.</p>
                   </template>

                  <!--<nuxt-link :to="{name: 'training.quiz'}">Yes</nuxt-link>-->
                   <template v-if="!data.is_test_completed">
                       <button class="btn btn-primary" @click="startTest">Yes</button>
                   </template>
                   <template v-else>
                       <button class="btn btn-primary" @click="startTest">Review quiz</button>
                   </template>
               </div>
            </div>
         </div>
      </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';

    export default {
        name: 'congrates',
        props: ['data'],
        methods: {
            ...mapActions('quiz', ['startQuiz']),
            startTest() {
                if (!this.data.test_id) {
                    return;
                }
                this.$store.commit('quiz/setId', this.data.test_id);
                this.startQuiz({ testId: this.data.test_id, $axios: this.$axios }).then(() => {
                    this.$router.push({ path: '/training/quiz' });
                });
            }
        }
    }
</script>
