var app = new Vue({
  el: '#UserInfo', // Must have an object ID in user.html that matches this.
  data: {
    username: 'John Smith',
    picturelrg: 'large picture',
    picturesml: 'small picture',
    country: 'country of origin',
    birth: 'birthdate',
    age: 'current age',
    email: 'email address'
  },
  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser: function() {
        fetch('https://randomuser.me/api/')
        .then(response => response.json() )
        .then(data => {
        var userData = data.results[0];  //mayber UserInfo
        console.log(userData);
        this.username = userData.name.first + " " + userData.name.last;
        this.email = userData.email;
        this.country = userData.location.country;
        this.birth = userData.dob.date[0] + userData.dob.date[1] + userData.dob.date[2] + userData.dob.date[3] + userData.dob.date[4] + userData.dob.date[5] + userData.dob.date[6] + userData.dob.date[7] + userData.dob.date[8] + userData.dob.date[9];
        this.age = userData.dob.age;
        this.picturelrg = userData.picture.large;
        this.picturesml = userData.picture.thumbnail;
        })


      .catch((error)=>{
        console.error('error:',error);
        fetch('.JSON/randomuser.me-sample.json')
        .then(response => response.json())
        .then(data => {
          var userData = data.results[0];  //mayber UserInfo
          console.log(userData);
          this.username = userData.name.first + " " + userData.name.last;
          this.email = userData.email;
          this.country = userData.location.state;
          this.birth = userData.dob.date[0] + userData.dob.date[1] + userData.dob.date[2] + userData.dob.date[3] + userData.dob.date[4] + userData.dob.date[5] + userData.dob.date[6] + userData.dob.date[7] + userData.dob.date[8] + userData.dob.date[9];
          this.age = userData.dob.age;
          //this.picturelrg = userData.picture.large;
          //this.picturesml = userData.picture.thumbnail;
        })
      });
 }
}
})
