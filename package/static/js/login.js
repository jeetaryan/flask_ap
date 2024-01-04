var crudOperation = function () {

    var self = this;
    //Mandatory function to be implemented here
    var initialization = function () {
    console.log("hello login");
    }
    var registration = function () {
//        $(document).on("click", "#btnSave1", PostEmployee);

    }
     self.init = function () {
        initialization();
        registration();
    }
}
//var PostEmployee=function (event){
//
//// Fetch all the forms we want to apply custom Bootstrap validation styles to
//  var forms = document.querySelectorAll('.needs-validation')
// // Loop over them and prevent submission
//  Array.prototype.slice.call(forms)
//    .forEach(function (form) {
//        if (!form.checkValidity()) {
//          event.preventDefault()
//          event.stopPropagation()
//        }
//        else{
//        console.log(form);
//          $.ajax({
//                   type : 'POST',
//                   url : "/test",
//                   dataType: 'json',
//                   contentType: 'application/json;charset=UTF-8',
//                   data: {"data":"forms"},
//                   success: function (result) {
//                        console.log("hello success");
//                   },
//                   error: function (err) {
//                        console.log(err.text);
//                   }
//          });
//        }
//        form.classList.add('was-validated')
//    });
//}
