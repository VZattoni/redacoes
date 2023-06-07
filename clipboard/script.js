function copy(e) {

    var copyText = e;

    // console.log(e.innerHTML)

    let test = e.innerHTML + "\n"

    navigator.clipboard.writeText(test);

  }