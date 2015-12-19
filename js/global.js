$( function() {
        var endDate = "October  30, 2015 23:55:59";

        $('.countdown.simple').countdown({ date: endDate });

        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>D&iacute;as</span></div><div>" + this.leadingZeros(data.hours, 2) + 
              " <span>Horas</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>Minutos</span></div><div>" + this.leadingZeros(data.sec, 2) + 
              " <span>Segundos</span></div><br/><div><h3>Muy Pronto estar&eacute;mos estrenando casa</h3></div>");
          }
        });

        $('.countdown.callback').countdown({
          date: +(new Date) + 10000,
          render: function(data) {
            $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
          },
          onEnd: function() {
            $(this.el).addClass('ended');
          }
        }).on("click", function() {
          $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
        });
		
		
		
      });
   