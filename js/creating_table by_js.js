<script>
let form=document.createElement("form")
    form.setAttribute("action", "creating_table by_js2.html")
    form.setAttribute("method" , "get")
    document.body.append(form)


let table = document.createElement("table") // creating table
    table.setAttribute("Id" , "table")
    form.append(table)
//  document.body.append(table)  
//.................................................................

let tr1= document.createElement("tr")
    table.append(tr1)  // creating table row in table

let th1 = document.createElement("th")
    th1.setAttribute("Id" , "lable")
    th1.innerHTML="lable"
    tr1.append(th1)
//  th1.append(tr1)

let th2 = document.createElement("th")
    th2.setAttribute("Id" , "input")
    th2.innerHTML="taking input"
    tr1.append(th2)
// ..................................................................

let tr2 =document.createElement("tr")  // tr2
    table.append(tr2)

let td_name = document.createElement("td")                      //td_name
    // td_name.setAttribute("Id","name")
    td_name.innerHTML="Name :"
    tr2.append(td_name) 


let name_input =document.createElement("td") //td_name for input box
    tr2.append(name_input)

let in1= document.createElement("input") // in td_name input 1
    in1.setAttribute("name","name")
    name_input.append(in1)
// ............................................................................
let tr3 =document.createElement("tr")    //tr3
    table.append(tr3)

    let td_email = document.createElement("td") // lable for input email
        td_email.innerHTML="Email :"
        tr3.append(td_email)

    let email_input = document.createElement("td") // td for email input
        tr3.append(email_input)

    let in2 = document.createElement("input")
        in2.setAttribute("name","email")
        email_input.append(in2)
// ...........................................................................
let tr4 = document.createElement("tr")
    // table.append(tr4)
    document.getElementById("table").append(tr4)



    let td_age = document.createElement("td") // lable for age
        td_age.innerHTML="Age : "
        tr4.append(td_age)

    let age_input = document.createElement("td") // td for age input
        tr4.append(age_input)

        let in3 = document.createElement("input")
            in3.setAttribute("name","age")
            in3.setAttribute("accept" , "number")
        age_input.append(in3)
// .................................................................................

let tr5 = document.createElement("tr")
        table.append(tr5)

    let td_address = document.createElement("td")
        td_address.innerHTML="address : "
        tr5.append(td_address)
    
    let address_input =document.createElement("td")
        tr5.append(address_input)

    let in4 = document.createElement("textarea")
    in4.setAttribute("name","address")
        address_input.append(in4)
// ....................................................................................

let tr6 = document.createElement("tr")
    table.append(tr6)

    let td_school_name =document.createElement("td")
        td_school_name.innerHTML="school_name : "
        tr6.append(td_school_name)

    let school_name_input = document.createElement("td")
        tr6.append(school_name_input)

    let in5 = document.createElement("input")
    in5.setAttribute("name","school")
        school_name_input.append(in5)

// .......................................................................................

let tr7 =document.createElement("tr")
    table.append(tr7)

    let td_class = document.createElement("td")
        td_class.innerHTML="class : "
        tr7.append(td_class)

    let class_input= document.createElement("td")
        tr7.append(class_input)

    let in6 = document.createElement("select")
        let o1=document.createElement("option")
        o1.innerHTML="1st"
        in6.append(o1)
        let o2=document.createElement("option")
        o2.innerHTML="2nd"
        in6.append(o2)
        let o3=document.createElement("option")
        o3.innerHTML="3rd"
        in6.append(o3)
        let o4=document.createElement("option")
        o4.innerHTML="4th"
        in6.append(o4)
        let o5=document.createElement("option")
        o5.innerHTML="5th"
        in6.append(o5)
        let o6=document.createElement("option")
        o6.innerHTML="6th"
        in6.append(o6)
        let o7=document.createElement("option")
        o7.innerHTML="7th"
        in6.append(o7)
        let o8=document.createElement("option")
        o8.innerHTML="8th"
        in6.append(o8)
        let o9=document.createElement("option")
        o9.innerHTML="9th"
        in6.append(o9)
        let o10=document.createElement("option")
        o10.innerHTML="10th"
        in6.append(o10)
        let oselect=document.createElement("option")

        // oselect.setAttribute(selected)
        // oselect.innerHTML="selent"
        // in6.append(oselect)
        in6.setAttribute("name","class")
        
        class_input.append(in6)
// .....................................................................................

let tr8 = document.createElement("tr")
    table.append(tr8)

    let td_gender = document.createElement("td")
        td_gender.innerHTML="gender : "
        tr8.append(td_gender)

    let gender_input = document.createElement("td")
        tr8.append(gender_input)

        

    let in7 = document.createElement("input")
        in7.setAttribute("type" , "radio" )
        in7.setAttribute("name","aa")
        in7.setAttribute("value","Male")
        

    let in8 = document.createElement("input")
        in8.setAttribute("type" , "radio" )
        in8.setAttribute("name","aa")
        in8.setAttribute("value","Female")
        

        // in7.setAttribute("value","male")
        
        gender_input.append(in7)
        gender_input.append(in8)


// .............................................................................

let tr9 = document.createElement("tr")
    table.append(tr9)

    let td_subject = document.createElement("td")
        td_subject.innerHTML="subject :"
        tr9.append(td_subject)

    let subject_input = document.createElement("td")
        tr9.append(subject_input)
        
    let in9 = document.createElement("input")
        in9.setAttribute("name","Maths")
        in9.setAttribute("type" , "checkbox")
        in9.setAttribute("value","Maths")
    
    let in10 = document.createElement("input")
        in10.setAttribute("name","Science")
        in10.setAttribute("type" , "checkbox")
        in10.setAttribute("value","Science")

    let in11 = document.createElement("input")
        in11.setAttribute("name","Sst")
        in11.setAttribute("type" , "checkbox")
        in11.setAttribute("value","Sst")

    let in12 = document.createElement("input")
        in12.setAttribute("name","Hindi")
        in12.setAttribute("type" , "checkbox")
        in12.setAttribute("value","Hindi")

    let in13 = document.createElement("input")
        in13.setAttribute("name","Kannada")
        in13.setAttribute("type" , "checkbox")
        in13.setAttribute("value","Kannada")
        

    

        
        subject_input.append(in9)
        subject_input.append(in10)
        subject_input.append(in11)
        subject_input.append(in12)
        subject_input.append(in13)

// ...................................................................................
let button = document.createElement("input")
    button.setAttribute("Id" , "but")
    button.setAttribute("type" , "submit")
    form.append(button)
</script>