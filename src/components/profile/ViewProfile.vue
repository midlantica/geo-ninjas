<template>
  <div class="view-profile">
    <div v-if="profile" class="card">
      <h2 class="deep-purple-text center pad1">
        <span class="grey-text">Profile:</span> {{ profile.alias }}
      </h2>
      <ul class="collection comments bdr-LR0">
        <li v-for="(comment, index) in comments" :key="index" class="marBH padQ padTH marTH">
          <div class="deep-purple-text padLRH toCapitalize fw-regular">{{ comment.from }}</div>
          <div class="grey-text text-darken-2 padLRH">{{ comment.content }}</div>
        </li>
      </ul>
      <form @submit.prevent="addComment">
        <div class="field padH">
          <label for="comment">Add a comment</label>
          <input type="text" name="comment" v-model="newComment">
          <p v-if="feedback" class="red-text center">{{feedback}}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import db from '@/firebase/init'
  import firebase from 'firebase/app'

  export default {
    name: 'ViewProfile',
    data(){
      return {
        profile: null,
        newComment: null,
        feedback: null,
        comments: []
      }
    },
    created(){
      let ref = db.collection('users')
      let commentsDb = db.collection('comments')

      // get current user
      ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data(),
          this.user.id = doc.id
        })
      })

      // profile data
      ref.doc(this.$route.params.id).get()
      .then(user => {
        this.profile = user.data()
      })

      // comments
      db.collection('comments').where('to', '==', this.$route.params.id)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(change => {
          if(change.type == 'added') {
            this.comments.unshift({
              from: change.doc.data().from,
              content: change.doc.data().content
            })
          }
        })
      })

    },
    methods: {
      addComment(){
        if(this.newComment) {
          this.feedback = null
          db.collection('comments').add({
            to: this.$route.params.id,
            from: this.user.id,
            content: this.newComment,
            time: Date.now()
          }).then(() => {
            this.newComment = null
          })
        } else {
          this.feeback = "You must enter a comment!"
        }
      }
    }

  }
</script>

<style>

</style>
