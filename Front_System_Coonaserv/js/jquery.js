jQuery(function () {
  $("#teste").click(() => {
    $("#exampleModalToggle").modal("show");
  });

  $("#segundaModal").click(() => {
    $("#exampleModalToggle2").modal("show");
  });

  $("#editar-cooperado").click(() => {
    $("#modal-editar-cadastro").modal("show");
  });
});
