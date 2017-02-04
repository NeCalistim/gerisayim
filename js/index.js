     ////J0K€Я
    gerisayim('03/12/2017 10:00', 'tiktaktiktak');

    function gerisayim(dt, id)
    {
        var bitti = new Date(dt);

        var _saniye = 1000;
        var _dakika = _saniye * 60;
        var _saat = _dakika * 60;
        var _gun = _saat * 24;
        var zamanlayici;

        function showRemaining() {
            var simdi = new Date();
            var kalan = bitti - simdi;
            if (kalan < 0) {

                clearInterval(zamanlayici);
                document.getElementById(id).innerHTML = 'ZAMAN DOLDU!';

                return;
            }
            var gunler = Math.floor(kalan / _gun);
            var saatler = Math.floor((kalan % _gun) / _saat);
            var dakikalar = Math.floor((kalan % _saat) / _dakika);
            var saniyeler = Math.floor((kalan % _dakika) / _saniye);

            if (gunler == 1) {
              document.getElementById(id).innerHTML = gunler + ' GÜN ';
            } else if (gunler == 0) {
              document.getElementById(id).innerHTML = '';
            } else {
              document.getElementById(id).innerHTML = gunler + ' GÜN ';
            }

            if (saatler == 1) {
              document.getElementById(id).innerHTML += saatler + ' SAAT ';
            } else {
              document.getElementById(id).innerHTML += saatler + ' SAAT ';
            }

            if (dakikalar == 1) {
              document.getElementById(id).innerHTML += dakikalar + ' DAKİKA ';
            } else {
              document.getElementById(id).innerHTML += dakikalar + ' DAKİKA ';
            }

            if (saniyeler == 1) {
              document.getElementById(id).innerHTML += saniyeler + ' SANİYE';
            } else {
              document.getElementById(id).innerHTML += saniyeler + ' SANİYE';
            }

        }

        zamanlayici = setInterval(showRemaining, 1000);
    }
