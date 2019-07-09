var app= new Vue ({
    el: "#app1",

    data: {
<<<<<<< HEAD
      

        educationlist:[],
        workexplist:[],
        accomplishmentlist: [],
        extracurricularlist:[],
        languageslist:[],
        programslist:[],
        softskillslist:[],
        awardslist:[],

        workexpEdit: {
            work_company: "",
            work_title: "",
            work_startdate: new Date().toISOString().substr(0, 10),
            work_enddate: new Date().toISOString().substr(0, 10),
            work_description: "",
            start_menu: false,
            end_menu: false,

=======
      workexplist: [
        {
            workcompany: "Apple",
            worktitle: "Developer",
            workstartdate: "Jun 5 2019",
            workenddate: "Jun 12 2022",
            workdescription: "Developed the I-bot.",
        },
        {
            workcompany: "Apple",
            worktitle: "Developer",
            workstartdate: "Jun 5 2019",
            workenddate: "Jun 12 2022",
            workdescription: "Developed the I-bot.",
        },
        {
            workcompany: "Apple",
            worktitle: "Developer",
            workstartdate: "Jun 5 2019",
            workenddate: "Jun 12 2022",
            workdescription: "Developed the I-bot.",
        },
      ],
        workexp1: {
            work1company: "",
            work1title: "",
            work1startdate: "",
            work1enddate: "",
            work1description: "",
>>>>>>> ce6f266cac9e9529c57ffa960921be1dd4f77bfb
        },

        educationEdit: {
          college: "",
          degree: "",
          gradyear: "",
          menu: false
        },
        
        accomplishmentEdit: {
          title: "",
          description: "",
        },
        extracurricularEdit: {
          title: "",
          description: "",
          date: "",
        },
        languagesEdit: {
          title: "",
          proficiency:  "",
        },
        programsEdit: {
          title: "",
          proficiency:  "",
        },
        softskillsEdit: {
          title: "",
        },
        awardsEdit: {
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
        page: "preview",
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
        info:
            {
                first_name:"Bob",
                last_name:"Flem",
                professional_title: "UI Designer",
                address: "1717 E Flaming Gorge Lane",
                city:"Kansas City",
                state:"Kansas",
                zip:"83233",
                country: "United States",
                email: "jsjsjsjsj@gmail.com",
                phone: "288-888-8888",
                summary:"Woah! I'm literally the best person in the world. You should totally hire me my dude.",
            },
    },

    methods: {
      addWork: function(){
        this.workexplist.push(this.workexpEdit)
        this.workexpEdit={
          work1company: "",
          work1title: "",
          work1startdate: "",
          work1enddate: "",
          work1description: "",
          
        }
      },
        addEducation: function(){
          this.educationlist.push(this.educationEdit)

          this.educationEdit= {
            college: "",
            degree: "",
            gradyear: "",
            menu: false
          }
        
      },

      addAccomplishment: function(){
        this.accomplishmentlist.push(this.accomplishmentEdit)

        this.accomplishmentEdit= {
          title: "",
          description: "",
        }

      },

      addLanguage: function(){
        this.languageslist.push(this.languagesEdit)

        this.languagesEdit= {
          title: "",
          proficiency:  "",
        }


      },

      addSkill: function(){
        this.programslist.push(this.programsEdit)

        this.programsEdit= {
          title: "",
          proficiency:  "",
        }


      },

      addAward: function(){
        this.awardslist.push(this.awardsEdit)

        this.awardsEdit= {
          title: "",
          receivedfrom:  "",
          date: "",
          description: "",
        }
      },

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
});
