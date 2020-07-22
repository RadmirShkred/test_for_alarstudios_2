function edit_row(num) {
    document.getElementById("edit_button" + num).style.display = "none";
    document.getElementById("save_button" + num).style.display = "block";

    let name = document.getElementById("name_row" + num);
    let phone = document.getElementById("phone_row" + num);

    let name_data = name.innerHTML;
    let phone_data = phone.innerHTML;

    name.innerHTML = "<input type='text' id='name_text" + num + "' value='" + name_data + "'>";
    phone.innerHTML = "<input type='tel' name='name' placeholder=\"+7 (123) 456-78-90\" pattern='[\\+]\\d{1,2}\\s[\\(]\\d{3}[\\)]\\s\\d{3}[\\-]\\d{2}[\\-]\\d{2}' minlength=\"18\" maxlength=\"19\" id='phone_text" + num + "' value='" + phone_data + "'><span class=\"form_error\">Format +7 (123) 456-78-90</span>";
}

function save_row(num) {
    let name_val = document.getElementById("name_text" + num).value;
    let phone_val = document.getElementById("phone_text" + num).value;

    if (name_val.length !== 0 && phone_val.length !== 0 && phone_val.length >= 18) {
        document.getElementById("name_row" + num).innerHTML = name_val;
        document.getElementById("phone_row" + num).innerHTML = phone_val;

        document.getElementById("edit_button" + num).style.display = "block";
        document.getElementById("save_button" + num).style.display = "none";
    }
}


function delete_row(num) {
    document.getElementById("row" + num + "").outerHTML = "";
}

function add_row() {
    let name = document.getElementById("new_name");
    let name_warning = document.getElementById("name_warning");
    let new_name = document.getElementById("new_name").value;
    let new_phone = document.getElementById("new_phone").value;


    if (new_name.length > 0) {
        name.classList.add(".name_valid");
        name.classList.remove("name_invalid");
        name_warning.innerHTML = "";
    }

    if (new_name.length === 0) {
        name.classList.remove("name_valid");
        name.classList.add(".name_invalid");
        name_warning.innerHTML = "Please enter a name";
    }


    if (new_name.length !== 0 && new_phone.length !== 0 && new_phone.length >= 18) {
        let table = document.getElementById("data_table");
        let table_len = (table.rows.length) - 1;
        table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'>" +
            "<td id='name_row" + table_len + "'>" + new_name + "</td>" +
            "<td id='phone_row" + table_len + "'>" + new_phone + "</td>" +
            "<td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit btn btn-primary btn-custom' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save btn btn-success btn-custom' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete btn btn-danger btn-custom' onclick='delete_row(" + table_len + ")'></td></tr>";

        document.getElementById("new_name").value = "";
        document.getElementById("new_phone").value = "";
        document.getElementById("save_button" + table_len).style.display = "none";
    }
}

// example about response to database:

// const load = async () => {
//     let url = 'https://jsonplaceholder.typicode.com/users';
//     let response = await fetch(url);
//     let data = await response.json();
//     let html = data.map(item => {
//         return `<li>${item.id} ${item.name} (${item.email})</li>`;
//     }).join(' ');
//     document.querySelector('#list').insertAdjacentHTML('afterbegin', html);
// };
//
// document.querySelector('#load').addEventListener('click', load);
