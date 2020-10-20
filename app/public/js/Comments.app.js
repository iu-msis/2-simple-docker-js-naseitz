var app = new Vue({
  el: '#CommentPage',
  data: {
    Comment: [{
      id: "",
      commentText: ""
    }],
    newComment: {
      id: "",
      commentText: ""
    }
  },
  created() {
    this.fetchComment();
  },

  methods: {
    fetchComment() {
      fetch('api/comments/index.php')
      .then(response => response.json())
      .then(json => {
        this.Comment=json;
        console.log(this.Comment);
      });
    },
    createComment(){
      //make a line for getting the // ID
      fetch('api/comments/create.php',{
      method:'POST',
      body: JSON.stringify(this.newComment),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json())
    .then( json => {
      console.log("Returned from post:", json);
      this.Comment.push(json[0]);
      this.newComment = this.newCommentData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newComment);
  },
  newCommentData() {
    return {
      id: "",
      commentText:""
    }
  }


  }
})
