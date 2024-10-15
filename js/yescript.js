 function copiarDiscord() {
      const discord = "hzguz";
      const tempInput = document.createElement("input");
      tempInput.value = discord;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      // Mostra o modal
      const modal = document.getElementById("modal-copiado");
      modal.style.display = "block";
      modal.style.opacity = "1";

      // Esconde o modal após 2 segundos
      setTimeout(() => {
        modal.style.opacity = "0";
        setTimeout(() => {
          modal.style.display = "none";
        }, 300); // Aguarda a transição de opacidade antes de esconder
      }, 2000);
    }