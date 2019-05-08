$(document).ready(() => {

    const validateNameUtf8 = (name) => {
        let allowedLettersRegex = /^[A-Za-z'`\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]+[A-Za-z '`\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/;
        return allowedLettersRegex.test(name);
    }
    
    const validateEmailUtf8= (email) => {
        let emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return emailRegex.test(email);
    }
    
    const isEqualPass = (password, cPassword) => {
        if (password !== cPassword) {
            $('#cPassword').after('<span id="cPassValidation" class="red">Lozinka i potvrda lozinke se ne poklapaju</span>');
            return false;
        }
        return true;
    }
    
    const clearFields = (element) => {
        $(element).find('input').val('');
    }

    $(document).on('click', '#registration', () => {
        $('#loginForm').hide(); 
        $('#registerForm').show();  
    });
   
    const validUsernameInReg = (username) => {
        if (Client.isUsernameExists(username)) {
            if (!$('#unExists').length) { // if error message isnt shown, show it, otherwise skip additional print 
                $('#usernameReg').after('<span id="unExists" class="red">Ovo korisničko ime je već zauzeto</span>');
            }
            return false;
        } else {
            $('#unExists').remove();
            return true;
        }
    }

    const validEmailInReg = (email) => {
        if (Client.isEmailExists(email)) {
            if (!$('#mailExists').length) {
                $('#mail').after('<span id="mailExists" class="red">Korisnik sa ovim e-mail-om već postoji</span>');
            }
            return false;
        } else {
            $('#mailExists').remove();
            return true;
        }
    }

    const validPasswordInReg = (pass) => {        
        if (pass.match(/[a-z]/) && pass.match(/[A-Z]/) && pass.match(/\d/) && pass.length >= 6) {
            $('#passValidation').remove();
            return true;
        } else {
            if (!$('#passValidation').length) {
                $('#passwordReg').after('<span id="passValidation" class="red">Lozinka mora da sadrži bar jedno malo slovo, bar jedno veliko slovo i bar jednu cifru, i minimum 6 znakova ukupno</span>');
            }
            return false;            
        }
    }

    /**
     * registration
     * */   
    $(document).on('click', '#registerBtn', () => {
        const name = $('#name').val();
        const surname = $('#surname').val();
        const username = $('#usernameReg').val();
        const email = $('#mail').val();
        const password = $('#passwordReg').val();
        const cPassword = $('#cPassword').val();

        if (
            !validateNameUtf8(name) ||
            !validateNameUtf8(surname) || 
            !validUsernameInReg(username) || 
            !validEmailInReg(email) || 
            !validPasswordInReg(password) || 
            !isEqualPass(password, cPassword)) {
            return false;
        } else {
            $('#registerForm').hide();
            $('#registration').remove();
            $('#registerBtn').addClass('hide');
            $('#logInBtn').removeClass('hide');
            $('#loginForm').before('<p id="msgBefLgIn" class="text-center">Uspešno ste se registrovali! <br> Ulogujte se</p>').show();       
        }

        let client = new Client(name, surname, username, email, password);

        Client.addAndSaveClient(client);
        clearFields(this);
    });

    $(document).on('keyup', '#name', function() {
        if (validateNameUtf8($('#name').val())) {
            $('#nameValidation').remove();
        } else {
            if (!$('#nameValidation').length) {
                $('#name').after('<span id="nameValidation" class="red">Samo slova i apostrofi su dozvoljeni</span>');
            }
        }
    });

    $(document).on('keyup', '#surname', function() {
        if (validateNameUtf8($('#surname').val())) {
            $('#surnameValidation').remove();
        } else {
            if (!$('#surnameValidation').length) {
                $('#surname').after('<span id="surnameValidation" class="red">Samo slova i apostrofi su dozvoljeni</span>');
            }
        }
    });

    
    $(document).on('keyup', '#usernameReg', function() {
        return validUsernameInReg($(this).val());
    });

    $(document).on('keyup', '#mail', function() {
        return validEmailInReg($(this).val());
    });

    $(document).on('blur', '#passwordReg', function() {        
        return validPasswordInReg($(this).val());
    });

    $(document).on('blur', '#mail', function() {
        if (validateEmailUtf8($('#mail').val())) {
            $('#emailValidation').remove();
        } else {
            if (!$('#emailValidation').length) {
                $('#mail').after('<span id="emailValidation" class="red">Unesite ispravno e-mail adresu</span>');
            }
        }
    });
    
    $(document).on('click', '#logInBtn', function() {
        let usernameOrEmail = $('#usernameEmail').val();
        let password = $('#password').val();
        let loggedInClient = Client.tryToLogin(usernameOrEmail, password);

        if (loggedInClient !== undefined) {
            sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInClient));
            $('.signInClient').html(`Dobrodošli, ${loggedInClient.name} ${loggedInClient.surname}`);
            $('#loginForm').hide();
            $('#bookForm').hide();
            $('#actions').show();
            $('#msgBefLgIn').remove();
            $('#logInBtn').addClass('hide');
            $('#logOutBtn').removeClass('hide');
        } else {
            if (!$('#loginValidation').length) {
                $('#password').after('<span id="loginValidation" class="red">Neispravno korisničko ime/email ili lozinka</span>');
            }            
        }
    });

    $(document).on('click', '#registration', () => {
        clearFields(this);
        $('#logInBtn').addClass('hide');
        $('#registerBtn').removeClass('hide');
    });

    $(document).on('click', '#logOutBtn', () => {
        if (confirm('Da li ste sigurni da želite da se izlogujete?')) {
            sessionStorage.removeItem('loggedInUser');
            $('#actions').hide();
            $('#bookForm').hide();
            $('#loginForm').show();
            clearFields($('#loginForm'));
            $('#logOutBtn').addClass('hide');
            $('#logInBtn').removeClass('hide');
            $("#reservationsTbody").html('');
            $('#myReservations').remove();
        } 
    });

    $(document).on('hidden.bs.modal', '#bookNow, #registerForm', () => {
        $('#registerForm').hide();
        $('#loginForm').show();
        clearFields('#bookNow');
        clearFields('#registerForm');
        $('#registerBtn').addClass('hide');        
        $('#logInBtn').removeClass('hide');
        $('#loginValidation').remove();
        $('#nameValidation').remove();
        $('#surnameValidation').remove(); 
        $('#emailValidation').remove(); 
        $('#passValidation').remove(); 
        $('#sPassValidation').remove();
        $('#availabilityTable').html('');
        $('#myReservations').remove();
    });

    $(document).on('show.bs.modal', '#bookNow', () => {
        if(sessionStorage.getItem('loggedInUser') !== null) {
            let loggedInClient = JSON.parse(sessionStorage.getItem('loggedInUser'));
            $('.signInClient').html(`Dobrodošli, ${loggedInClient.name} ${loggedInClient.surname}`);
            $('#loginForm').hide();
            $('#actions').show();
            $('#bookForm').hide();            
            $('#logInBtn').addClass('hide');
            $('#logOutBtn').removeClass('hide');
        }        
    });

    $(document).on('click', '#bookBtn', () => {
        $('#actions').hide();
        $('#bookForm').show();
    });

    $(document).on('click', '#arrowLeft', () => {
        $('#bookForm').hide();
        $('#actions').show();
    });
        
    let now = new Date();
    
    $('#startDatePicker').datepicker({
        dateFormat: 'dd.mm.yy.',        
        minDate: now,
        dayNamesMin: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],
        monthNames: [ 'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
        firstDay: 1,        
        onSelect: function(date) {
            var selectedDate = $.datepicker.parseDate('dd.mm.yy.', date); // had to use datepicker's parseDate as js native Date couldn't parse date from dd.mm.yy. format
            $('#endDatePicker').datepicker('option', 'minDate', selectedDate);
        }
    });

    $('#endDatePicker').datepicker({
        dateFormat: 'dd.mm.yy.', 
        minDate: now,
        dayNamesMin: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],
        monthNames: [ 'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
        firstDay: 1
    });

    $.datepicker.setDefaults($.datepicker.regional['sr-latin']);


    /* ============================== ⬇⬇⬇ SHOW SCHEDULED APPOINTMENTS ⬇⬇⬇ ================================= */
    let servicesArray = JSON.parse(localStorage.getItem('services'));
    
    let serviceSelect = $('#selectService');

    for (const service of servicesArray) { 

        // building select-option menu 
        let optGroup = document.createElement('optgroup');
        optGroup.setAttribute('label', service.category);
        serviceSelect.append(optGroup);        
        for (const specificService of service.items) {
            let option = new Option(specificService.name, specificService.id);
            option.setAttribute('duration', specificService.duration);
            optGroup.appendChild(option);
        } 

        // building price list dropdown
        let idCategory = (service.category).replace(' ', '');
        let dropdownMenu = 
        `<li>
            <a class="dropdown-item font-weight-bold aquamarine text-light navbarLink" href="cenovnik.html#${idCategory}">${service.category}</a>
        </li>`;
        $('#priceListMenu').append(dropdownMenu);
    }

    // ---------------------------------------------------------------------------------------------------
    
    let employeesJson = localStorage.getItem('employees');
    let employeesArray = employeesJson ? JSON.parse(employeesJson) : [];

    const findEmployeeById = (employeeId) => {
        for (const employee of employeesArray) {
            if (employeeId === employee.id) {
                return employee;
            }            
        }
    }

    let employeesWhoCanWorkSelectedService = [];
    let selectedEmployees = [];
    
    /**
     * Dynamic adding of options for employee select 
     */
    $(document).on('change', '#selectService', function() {
        let employeeOptionsHtml = '<option value="-1" selected>Odaberite člana tima...</option>';
        employeesWhoCanWorkSelectedService = [];       
        for (const employee of employeesArray) { // on service change, need to find employees who have skills for selected service
            if (-1 !== employee.skills.indexOf(this.value)) { // this.value is the value of selected option
                employeeOptionsHtml += `<option value="${employee.id}">${employee.name}</option>`; // add this employee to select team member dropdown
                employeesWhoCanWorkSelectedService.push(employee); 
            }
        }
        $('#selectEmployee').html(employeeOptionsHtml);
        $('#availabilityTable').html('');
        selectedEmployees = [...employeesWhoCanWorkSelectedService];
    });

    $(document).on('change', '#selectEmployee', function() {
        if (this.value == -1) {
            selectedEmployees = [...employeesWhoCanWorkSelectedService];
        } else {
            let selectedEmployee = findEmployeeById(this.value);
            selectedEmployees = [selectedEmployee];            
        }
        $('#availabilityTable').html('');
    });
    

    /**
     * ❤️️ OF APPOINTMENTS SCHEDULING
     */
    $(document).on('click', '#findFreePeriod', function() {
        let startDateRangeString = $('#startDatePicker').val();        
        let endDateRangeString = $('#endDatePicker').val();
        
        let startDateRange;
        let endDateRange;

        if (startDateRangeString) {
            startDateRange = $.datepicker.parseDate('dd.mm.yy.', startDateRangeString);
        } else {
            alert('Morate uneti početni datum');
            return false;
        }

        if (endDateRangeString) {
            endDateRange = $.datepicker.parseDate('dd.mm.yy.', endDateRangeString);
        } else {
            alert('Morate uneti krajnji datum');
            return false;
        }
        
        let selectedServiceId = $('#selectService').val();
        let selectedServiceDuration = parseInt($('#selectService :selected').attr('duration'));

        if (selectedServiceId == -1) {
            alert('Morate izabrati uslugu');
            return false;
        }

        let reservationsJson = localStorage.getItem('reservations');        
        let reservations = reservationsJson !== null ? JSON.parse(reservationsJson) : {};

        let workingHoursJson = localStorage.getItem('workingHours');
        let workingHours = workingHoursJson !== null ? JSON.parse(workingHoursJson) : [];

        startDateRange.setHours(workingHours[startDateRange.getDay()][0].split(':')[0]);
        startDateRange.setMinutes(workingHours[startDateRange.getDay()][0].split(':')[1]);
        startDateRange.setSeconds(0);
        startDateRange.setMilliseconds(0);

        endDateRange.setHours(workingHours[endDateRange.getDay()][1].split(':')[0]);
        endDateRange.setMinutes(workingHours[endDateRange.getDay()][1].split(':')[1]);
        endDateRange.setSeconds(0);
        endDateRange.setMilliseconds(0);
        
        let availabilityRangeTable = 
        `<thead>
            <tr>
                <th>Datum</th>
                <th class="text-center">Slobodno od</th>
                <th class="text-center">Slobodno do</th>
                <th>Radnik</th>
            </tr>
        </thead>
        <tbody id="appointmentsTbody">`;
        
        for (let tempDateTime = new Date(startDateRange); tempDateTime < endDateRange; tempDateTime.setDate(tempDateTime.getDate() + 1)) 
        {
            let reservationsForTheDay = reservations[tempDateTime.toLocaleDateString('sr-latin')]; // reservations for the temp day, array of objects - {"clientsEmail":"natasa@gmail.com","start":"2019-05-11T15:35:00Z","end":"2019-05-11T16:05:00Z","employeeId":"empl0001","serviceId":"hct0003"}

            let startWorkingTimeForTheDayString = workingHours[tempDateTime.getDay()][0];
            let startWorkingTimeForTheDay = new Date(tempDateTime);
            startWorkingTimeForTheDay.setHours(startWorkingTimeForTheDayString.split(':')[0]);
            startWorkingTimeForTheDay.setMinutes(startWorkingTimeForTheDayString.split(':')[1]);

            let endWorkingTimeForTheDayString = workingHours[tempDateTime.getDay()][1];
            let endWorkingTimeForTheDay = new Date(tempDateTime);
            endWorkingTimeForTheDay.setHours(endWorkingTimeForTheDayString.split(':')[0]);
            endWorkingTimeForTheDay.setMinutes(endWorkingTimeForTheDayString.split(':')[1]);

            for (const employee of selectedEmployees) 
            { // print free intervals for selected employee/employees

                let freeIntervalsForTheDayAndEmployee = [];
                                
                let previousReservedEndTime = startWorkingTimeForTheDay;
                
                if (reservationsForTheDay !== undefined) { // if it is exist some booked term in day, then there would be more fragments of free terms in day (before and after booked terms)
                    for (const reservation of reservationsForTheDay) {
                        if (employee.id === reservation.employeeId) {  
                            let freeInterval = {};
                            let reservedStartTime = new Date(reservation.start);
                            let reservedEndTime = new Date(reservation.end);

                            if (reservedStartTime > previousReservedEndTime) {
                                freeInterval.start = previousReservedEndTime;
                                freeInterval.end = reservedStartTime;
                                freeIntervalsForTheDayAndEmployee.push(freeInterval);                                
                            }
                            previousReservedEndTime = reservedEndTime;             
                        }
                    }                    
                } 
                // check if there is a free interval between the end of the last reservation and the end of working time
                if (previousReservedEndTime < endWorkingTimeForTheDay) {
                    let freeInterval = {};
                    freeInterval.start = previousReservedEndTime;
                    freeInterval.end = endWorkingTimeForTheDay;
                    freeIntervalsForTheDayAndEmployee.push(freeInterval);
                }

                if (freeIntervalsForTheDayAndEmployee.length > 0) {
                    for (const freeIntervalForTheDayAndEmployee of freeIntervalsForTheDayAndEmployee) {
                        
                        if (freeIntervalForTheDayAndEmployee.end.getTime() - freeIntervalForTheDayAndEmployee.start.getTime() >= selectedServiceDuration*60000) {
                            
                            availabilityRangeTable += 
                            `<tr employeeId="${employee.id}" 
                                from="${freeIntervalForTheDayAndEmployee.start.toISOString()}" 
                                to="${freeIntervalForTheDayAndEmployee.end.toISOString()}" 
                                selectedServiceId="${selectedServiceId}"
                                selectedServiceDuration="${selectedServiceDuration}"
                                title="Klik da zakažete u ovom intervalu">
                                <td>${freeIntervalForTheDayAndEmployee.start.toLocaleDateString('sr-latin')}</td>
                                <td class="text-center">${freeIntervalForTheDayAndEmployee.start.toLocaleTimeString('sr-latin').slice(0, 5)}</td>
                                <td class="text-center">${freeIntervalForTheDayAndEmployee.end.toLocaleTimeString('sr-latin').slice(0, 5)}</td>
                                <td>${employee.name}</td>
                            </tr>`;             
                        }
                    }                
                }
            }
        }
        $('#availabilityTable').html(availabilityRangeTable + '</tbody>');
    });


    /**
     * New appointment is created and added (pushed) to reservations array 
     * then saved to local storage 
     */
    $(document).on('click', '#appointmentsTbody tr', function() {
        let selectedServiceId = $(this).attr('selectedServiceId');

        let selectedServiceDuration = parseInt($(this).attr('selectedServiceDuration'));          

        let selectedFreeIntervalStart = new Date($(this).attr('from'));
        let selectedFreeIntervalEnd = new Date($(this).attr('to'));
        let selectedEmployeeId = $(this).attr('employeeId');

        let allowedAppointmentIntervalEnd = new Date(selectedFreeIntervalEnd); // a new variable which represents latest allowed time for scheduling of service
        allowedAppointmentIntervalEnd.setMinutes(allowedAppointmentIntervalEnd.getMinutes() - selectedServiceDuration);
        
        let warningMessageForAppointment = 'Vreme mora biti u intervalu od ' + selectedFreeIntervalStart.toLocaleTimeString('sr-latin').slice(0, 5) 
                + ' do ' + allowedAppointmentIntervalEnd.toLocaleTimeString('sr-latin').slice(0, 5);

        // replace this with time picker if get some time
        let appointmentStartTime = prompt('Zakažite vreme početka za izabranu uslugu. ' + warningMessageForAppointment);
        let appointmentStart = new Date(selectedFreeIntervalStart); // make a copy for later changing

        // entered appointment start time validation
        if (appointmentStartTime) {
            let enteredHoursAndMinutes = appointmentStartTime.split(':');
            if (enteredHoursAndMinutes.length === 2) {
                let enteredHours = parseInt(enteredHoursAndMinutes[0]);
                let enteredMinutes = parseInt(enteredHoursAndMinutes[1]);
                if (!isNaN(enteredHours) && enteredHours >= 0 && enteredHours < 24 &&
                    !isNaN(enteredMinutes) && enteredMinutes >= 0 && enteredMinutes < 60) {
                        appointmentStart.setHours(enteredHours);
                        appointmentStart.setMinutes(enteredMinutes);
                        appointmentStart.setSeconds(0);
                        appointmentStart.setMilliseconds(0);
                        if (appointmentStart < selectedFreeIntervalStart || 
                            appointmentStart > allowedAppointmentIntervalEnd) {
                                alert(warningMessageForAppointment);
                                return false;
                        }
                    } else {
                        alert('Broj sati mora biti između 0 i 23, i broj minuta mora biti između 0 i 59');
                        return false;
                    }
            } else {
                alert('Morate uneti vreme u formatu HH:mm');
                return false;
            }
        } else {
            return false;
        }
        
        let appointmentEnd = new Date(appointmentStart);
        appointmentEnd.setMinutes(appointmentEnd.getMinutes() + selectedServiceDuration);
        
        let reservationsJson = localStorage.getItem('reservations');        
        let reservations = reservationsJson !== null ? JSON.parse(reservationsJson) : {};

        let appointmentDate = appointmentStart.toLocaleDateString('sr-latin');
        
        if (!Array.isArray(reservations[appointmentDate])) { // if there are no reservations for the day, make an empty array to push reservation object into it
            reservations[appointmentDate] = [];                
        }            
        let clientsEmail = JSON.parse(sessionStorage.getItem('loggedInUser')).email;

        reservations[appointmentDate].push({
            clientsEmail: clientsEmail,
            start: appointmentStart.toISOString(),
            end: appointmentEnd.toISOString(),
            employeeId: selectedEmployeeId,
            serviceId: selectedServiceId
        });

        reservations[appointmentDate].sort((a, b) => {
            return new Date(a.start).getTime() - new Date(b.start).getTime();
        });
        localStorage.setItem('reservations', JSON.stringify(reservations));
        $('#availabilityTable').html('');

        $('#reservationsTbody').append(
            `<tr from="${appointmentStart.toISOString()}"
                to="${appointmentEnd.toISOString()}"
                employeeId="${selectedEmployeeId}"
                clientsEmail="${clientsEmail}"
                serviceId="${selectedServiceId}"                    
            >
                <td>${$('#selectService :selected').html()}</td>
                <td>${appointmentDate}</td>
                <td>${appointmentStart.toLocaleTimeString('sr-latin').slice(0, 5)}</td>
                <td>${appointmentEnd.toLocaleTimeString('sr-latin').slice(0, 5)}</td>
                <td>${findEmployeeById(selectedEmployeeId).name}</td>
                <td><i class="fa fa-trash" aria-hidden="true"></i></td>
            </tr>`
        );
    });


    /**
     * Find matching element in saved reservations
     * remove it, and save the array again to local storage
     */
    $(document).on('click', 'i.fa.fa-trash', function(e) {                
        let clickedTr = $(this).parent().parent();

        let from = clickedTr.attr('from');                
        let to = clickedTr.attr('to');
        let employeeId = clickedTr.attr('employeeId');
        let serviceId = clickedTr.attr('serviceId');
        let clientsEmail = clickedTr.attr('clientsEmail');

        let dayOfAppointmentToDeleteString = new Date(from).toLocaleDateString('sr-latin');

        let reservationsJson = localStorage.getItem('reservations');        
        let reservations = reservationsJson !== null ? JSON.parse(reservationsJson) : {};
                
        for (let i = 0; i < reservations[dayOfAppointmentToDeleteString].length; i++) {
            
            let reservation = reservations[dayOfAppointmentToDeleteString][i];
            if (reservation.start === from &&
                reservation.end === to &&
                reservation.employeeId === employeeId &&
                reservation.serviceId === serviceId &&
                reservation.clientsEmail === clientsEmail
                ) {
                    reservations[dayOfAppointmentToDeleteString].splice(i, 1);
                    break;
            }
        
        }
        localStorage.setItem('reservations', JSON.stringify(reservations));
        clickedTr.remove();
    });
   
    const findServiceById = (serviceId) => {
        for (const service of servicesArray) {
            for (const specificService of service.items) {
                if (serviceId === specificService.id) {
                    return specificService;
                }
            }
        }
    }

    /**
     * 
     */
    $(document).on('click', '#myTermsBtn', function() {

        let reservationsJson = localStorage.getItem('reservations');        
        let reservations = reservationsJson !== null ? JSON.parse(reservationsJson) : {};

        let myEmail = JSON.parse(sessionStorage.getItem('loggedInUser')).email;

        let htmlToInsertBelow = 
        `<div class="table-responsive"><table id="myReservations" class="table"><thead>
            <tr>
                <th>Usluga</th>
                <th>Datum</th>
                <th>Rezerv.<br>od</th>
                <th>Rezerv.<br>do</th>
                <th>Član tima</th>
                <th></th>
            </tr>
        </thead>`;

        for (const day of Object.keys(reservations)) {

            if ($.datepicker.parseDate('dd.mm.yy.', day) >= now) {

                for (let reservation of reservations[day]) {
                
                    if (reservation.clientsEmail === myEmail) {

                        let reservationStart = new Date(reservation.start);
                        let reservationEnd = new Date(reservation.end);

                        htmlToInsertBelow += 
                        `<tr from="${reservationStart.toISOString()}"
                            to="${reservationEnd.toISOString()}"
                            employeeId="${reservation.employeeId}"
                            clientsEmail="${reservation.clientsEmail}"
                            serviceId="${reservation.serviceId}"                    
                        >
                            <td>${findServiceById(reservation.serviceId).name}</td>
                            <td>${reservationStart.toLocaleDateString('sr-latin')}</td>
                            <td>${reservationStart.toLocaleTimeString('sr-latin').slice(0, 5)}</td>
                            <td>${reservationEnd.toLocaleTimeString('sr-latin').slice(0, 5)}</td>
                            <td>${findEmployeeById(reservation.employeeId).name}</td>
                            <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                    </tr>`;
                    }
                }
            }
        }
        htmlToInsertBelow += `<tbody></tbody></table></div>`;
        $(this).after(htmlToInsertBelow);
    });
});

