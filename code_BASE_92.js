

var app= new Vue ({
    el: "#app1",

    data: {
        workexp1: {
            work1company: "",
            work1title: "",
            work1startdate: "",
            work1enddate: "",
            work1description: "",
        },
        education1: {
          college: "",
          degree: "",
          gradyear: "",
        },
        accomplishment1: {
          title: "",
          description: "",
        },
        extracurricular: {
          title: "",
          description: "",
          date: "",
        },
        languages1: {
          title: "",
          proficiency:  "",
        },
        programs1: {
          title: "",
          proficiency:  "",
        },
        softskills: {
          title: "",
        },
        awards1: {
          title: "",
          receivedfrom:  "",
          date: "",
          description: "",
        },
        proficiencylist: [
          "Beginner",
          "Intermediate",
          "Proficient",
          "Advanced",
          "Expert"
        ],
        page: "form",
        colors: [
            "orange",
            "black",
            "red",
            "blue",
            "green"
        ],
        picked_color: "black",
        color_brightness: 6,
        accent: 0,
        info: [
            {
                first_name:"",
                last_name:"",
                address: "",
                city:"",
                state:"",
                zip:"", 
                country: "",
                email: "",
                phone: "",
            }
        ],
        
    },

    methods: {

    },

    computed: {
        computedColorClass: function () {
          return {
            "lighten-5": this.color_brightness == 1,
            "lighten-4": this.color_brightness == 2,
            "lighten-3": this.color_brightness == 3,
            "lighten-2": this.color_brightness == 4,
            "lighten-1": this.color_brightness == 5,
            "darken-1": this.color_brightness == 7,
            "darken-2": this.color_brightness == 8,
            "darken-3": this.color_brightness == 9,
            "darken-4": this.color_brightness == 10,
            "accent-1": this.accent == 11,
            "accent-2": this.accent == 12,
            "accent-3": this.accent == 13,
            "accent-4": this.accent == 14,
          }
        },
      },
})