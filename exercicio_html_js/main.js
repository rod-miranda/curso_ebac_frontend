const form = document.getElementById("form-ex-m7-js");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const valorCampoA = Number(document.getElementById("idCampA").value); 
  const valorCampoB = Number(document.getElementById("idCampB").value);
  const vrCampoA = document.getElementById("idCampA");
  const vrCampoB = document.getElementById("idCampB");
  const msgSucesso = `Calculado com sucesso! O valor do Campo B <b>(${valorCampoB})</b> é maior que o valor do Campo A <b>(${valorCampoA})</b>.`;
  const msgErro = `O valor do Campo B <b>(${valorCampoB})</b> é menor ou igual ao valor do Campo A <b>(${valorCampoA})</b>. Tente novamente!`;
  let frmCalculo = false;
  function vValor(valorCampoA, valorCampoB) {
    return valorCampoA < valorCampoB;
  }
  const mS = document.querySelector(".success-msg");
  const mErr = document.querySelector(".error-msg");

  frmCalculo = vValor(valorCampoA, valorCampoB);

  if (frmCalculo) {
    mS.innerHTML = msgSucesso;
    mS.style.display = "block";
    mErr.style.display = "none";
    vrCampoA.style.border = "";
    mErr.innerHTML = "";
    vrCampoA.value = "";
    vrCampoB.value = "";
  } else {
    vrCampoA.style.border = "1px solid red";
    mErr.innerHTML = msgErro;
    mErr.style.display = "block";
    mS.style.display = "none";
    vrCampoB.value = "";
  }
});
