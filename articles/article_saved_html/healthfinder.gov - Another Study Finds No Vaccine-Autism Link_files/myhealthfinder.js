(function ($) {
    $(document).ready(function () {
        var myhfTool = $('#myhealthfinder_tool');

        if (myhfTool.length) {
            var whoCtrl = $('select.whoCtrl', myhfTool);
            var whoCtrlBackUp = $('div.who_row input[type="hidden"]', myhfTool);

            whoCtrl.ddslick({
                background: '#fff',
                width: 365,
                onSelected: function (data) {
                    whoCtrlBackUp.val(data.selectedData.value);
                }
            });

            var genderMaleCtrl = $('div.gender_row input[value="maleCtrl"]', myhfTool);
            var genderFemaleCtrl = $('div.gender_row input[value="femaleCtrl"]', myhfTool);

            if (genderMaleCtrl.length && genderFemaleCtrl.length) {
                var ctrlWrapper = $('<div/>', {}).appendTo($('div.gender_row'));

                genderMaleCtrl.parent('div').hide();

                GenderRadio(genderMaleCtrl, ctrlWrapper, { title: 'Male', 'cssclass': 'male' });
                GenderRadio(genderFemaleCtrl, ctrlWrapper, { title: 'Female', 'cssclass': 'female' });
            }

            var pregCtrl = $('div.pregnant_row input');
            if (pregCtrl.length) {
                var ctrlWrapper = $('<div/>', { 'class': 'chk_button_wrapper' }).appendTo($('div.pregnant_row .row_content'));

                pregCtrl.hide();

                PregCheckbox(pregCtrl, ctrlWrapper);
            }

            DisplayPreg(false);

            $('div.age_row input').keyup(function () {
                var genderFemaleCtrl = $('div.gender_row input[value="femaleCtrl"]', myhfTool);
                var age = $(this).val();

                if (genderFemaleCtrl.is(':checked') && age != '' && (parseInt(age) >= 11 && parseInt(age) <= 49))
                    DisplayPreg(true);
                else
                    DisplayPreg(false);
            });
        }
    });

    function PregCheckbox(ctrl, wrapper) {
        var chkButton = $('<a/>', { href: '#' }).appendTo(wrapper);

        chkButton.click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this)[0].checked = false;
            }
            else {
                $(this).addClass('active');
                ctrl[0].checked = true;
            }

            return false;
        });

        wrapper.append(chkButton);
    }

    function GenderRadio(ctrl, wrapper, options) {
        var radioButtonWrapper = $('<div/>', { 'class': 'radio_button_wrapper ' + options.cssclass });
        var radioButton = $('<a/>', { href: '#', title: options.title }).appendTo(radioButtonWrapper);
        var radioLabel = $('<span class="label" />').text(options.title).appendTo(radioButtonWrapper);

        radioButton.click(function () {
            $('div.gender_row').find('a,span').removeClass('active').addClass('inactive');
            $(this).addClass('active').removeClass('inactive');
            $(this).next('span').addClass('active').removeClass('inactive');
            ctrl[0].checked = true;

            var age = $('div.age_row input').val();
            if (ctrl.val() == 'femaleCtrl' && age != '' && (parseInt(age) >= 11 && parseInt(age) <= 49))
                DisplayPreg(true);
            else
                DisplayPreg(false);


            return false;
        });

        wrapper.append(radioButtonWrapper);
    }

    function DisplayPreg(display) {
        if (display)
            $('div.pregnant_row .row_content').show();
        else
            $('div.pregnant_row .row_content').hide();
        $('div.pregnant_row .row_content input[type="checkbox"]')[0].checked = false;
    }
})(jQuery);