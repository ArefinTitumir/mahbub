$(document).ready(function(){
  let sl_in = 0;
  let selected = 0;

  $("#at_1").click(function(){
    if($("#at_1").is(':checked'))
      $("#at_1_inpt").show();
    else {
      $("#at_1_inpt").hide();
    }
  });

  $("#at_2").click(function(){
    if($("#at_2").is(':checked'))
    $("#at_2_inpt").show();
    else{
      $("#at_2_inpt").hide();
    }

  });

  $("#at_3").click(function(){
    if($("#at_3").is(':checked'))
    $("#at_3_inpt").show();
    else{
      $("#at_3_inpt").hide();
    }

  });
  $("#at_4").click(function(){
    if($("#at_4").is(':checked'))
    $("#at_4_inpt").show();
    else{
      $("#at_4_inpt").hide();
    }

  });





  let colleges = {
    "1" : {
      "name": "Mike Curb College of Arts, Media, &amp; Communication",
      "departments" : [
        "Art",
        "Cinema TV",
        "Communication Studies",
        "Journalism",
        "Music",
        "Theater"
      ]
    },
    "2" : {
      "name": "College of Humanities",
      "departments" : [
        "Asian American Studies",
        "Central American & Transborder Studies",
        "Chicana/o Studies",
        "English",
        "Gender and Women’s Studies",
        "Linguistics",
        "Modern & Classical Lang & Lit",
        "Philosophy",
        "Religious Studies"
      ]
    },
    "3" : {
      "name": "College of Science and Mathematics",
      "departments" : [
        "Biology",
        "Chemistry and Biochemistry",
        "Geological Sciences",
        "Mathematics",
        "Physics & Astronomy"
      ]
    },
    "4" : {
      "name": "College of Social & Behavioral Sciences",
      "departments" : [
        "BAfricana Studies",
        "Anthropology",
        "Criminology & Justice Studies",
        "Geography & Environmental Studies",
        "History",
        "Political Science",
        "Psychology",
        "Social Work",
        "Sociology",
        "Urban Studies & Planning",
        "Interdisciplinary Studies"
      ]

    },

    "5" : {
      "name": "David Nazarian College of Business & Economics",
      "departments" : [
        "Accounting and Information Systems",
        "Business Law",
        "Economics",
        "Finance, Financial Planning and Insurance",
        "Management",
        "Marketing",
        "Systems and Operations Management"
      ]

    },
    "6" : {
      "name": "Michael D. Eisner College of Education",
      "departments" : [
        "Deaf Studies",
        "Educational Leadership & Policy Studies",
        "Educational Psychology & Counseling",
        "Elementary Education",
        "Secondary Education",
        "Special Education"
      ]
    },
    "7" : {
      "name": "College of Engineering & Computer Science",
      "departments" : [
        "Civil Engineering and Construction Mgt",
        "Computer Science",
        "Electrical & Computer Engineering",
        "Manufacturing Systems Engineering & Mgt",
        "Mechanical Engineering"
      ]
    },
    "8" : {
      "name": "College of Health & Human Development",
      "departments" : [
        "Child and Adolescent Development",
        "Communication Disorders and Sciences",
        "Environmental and Occupational Health",
        "Family and Consumer Sciences",
        "Health Sciences",
        "Kinesiology",
        "Nursing",
        "Physical Therapy",
        "Recreation & Tourism Mgt"
      ]
    },

    "9" : {
      "name": "Roland Tseng College of Extended Learning",
      "departments" : [
        "Public Sector and Social Services",
        "Engineering, Computer Science & Technical",
        "Health and Human Services",
        "Entertainment, Digital Media & Design"
      ]
    },

    "10":{
      "name":"Library",
      "departments" : [
        "There is no Department"
      ]
    },
    "11":{
      "name":"Student Affairs",
      "departments" : [
        "There is no Department"
      ]
    },
    "12":{
      "name":"Faculty Affairs",
      "departments" : [
        "There is no Department"
      ]
    },
    "13":{
      "name":"Campus Police",
      "departments" : [
        "There is no Department"
      ]
    },
    "14":{
      "name":"Athletics",
      "departments" : [
        "There is no Department"
      ]
    },
    "15":{
      "name":"IT",
      "departments" : [
        "There is no Department"
      ]
    },

  }

  $('#clg_list').on('change', function() {
    let clg = Number($(this).val()); // 15

    let dpt = colleges[clg]["departments"];

    let options = "";
    let xx = 1;
    dpt.forEach(function(item){
      if(item != "There is no Department" && xx === 1) {
        options = `<option value="">Choose</option>`;
        xx = 0;
      };
      options = options + `<option value="${item}">${item}</option>`;
    });

    $('#dpt_list').html(options);

  });

  let t_crs = 0;

  $("#course_nmbr").on("change", function(){
    let crs_nmbr = $(this).val(); // 6

    if(crs_nmbr){
      let x = 0;

      if(t_crs === 0){
        x = 0;
        append_row(x, crs_nmbr);
      }
      if(crs_nmbr > t_crs){ // 6 > 5
        x = t_crs;
        append_row(x, crs_nmbr);
      }
      if(crs_nmbr < t_crs){ // 4 < 5
        let y = 1;
        t_crs = 0;
        $('#sl_courses tr').each(function(){
          if(crs_nmbr < y){
            $(this).remove();
          } else {
            t_crs++;
          }
          y++;
        });
      }     
      
    }
  });

  $("#sl_in_2").on('click', function(){
    if(sl_in === 0){
      $("#selected_items_2").slideDown();
    } else {
      $("#selected_items_2").slideUp();
    }
  });
  $("#add_crs_btn").on('click', function(){
    append_row(0, 1);
    $('#course_nmbr').val(t_crs);
  });

  $(document).on('click', function(e){
      if(e.target.id != "sl_in_2" && !$(e.target).hasClass('sl-item')){
        $("#selected_items_2").hide();
      }
  });


  let control_click = 1;

  function append_row(x, crs_nmbr){
    let i;
    let row = "";
    for(i=x;i<crs_nmbr;i++){
      row = row + `
        <tr>
          <td><input type="text" class="form-control" name="couses_name[]" placeholder="Course code" /></td>
          <td><input type="text" class="form-control" name="couses_nmbr[]" placeholder="Section number"  /></td>
          <td>
              <button type="button" class="close text-danger" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </td>
        </tr>
      `;        
      t_crs++;
    }
    $('#sl_courses').append(row);

    setTimeout(function(){
      close_fn();
    },500);
  }

  function close_fn(){
    $(".close").on('click', function(){
        $(this).closest('tr').remove();  
        
        let z = 0;
        $('#sl_courses tr').each(function(){
          z++;
        });
        
        t_crs = z;
        $('#course_nmbr').val(t_crs);
     
    });
  }








})
