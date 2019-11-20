$('#datosPersonales input[type="radio"]').click(function() {
    var natural = $("#natural").is(":checked");
    var juridica = $("#juridica").is(":checked");
    var empresario = $("#empresario").is(":checked");

    var addr = "";

    if (natural) {
        addr = "persona-natural-formulario-1.html"
    } else if (juridica) {
        addr = "persona-juridica-formulario-1.html"
    } else if (empresario) {
        addr = "empresario-individual-formulario-1.html"
    }
    $('#crear').attr('href', addr);
});