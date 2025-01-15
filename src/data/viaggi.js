const viaggi = [
    {
        id: 1,
        localita: "Roma",
        dataPartenza: "2025-02-01",
        dataRitorno: "2025-02-10",
        partecipanti: [
            { id: 1, nome: "Mario", cognome: "Rossi", numeroTelefono: "1234567890", codiceFiscale: "RSSMRA80A01H501Z", email: "mario.rossi@example.com" },
            { id: 2, nome: "Giulia", cognome: "Bianchi", numeroTelefono: "0987654321", codiceFiscale: "BNCGLL85M58Z404E", email: "giulia.bianchi@example.com" },
            { id: 3, nome: "Luca", cognome: "Verdi", numeroTelefono: "1122334455", codiceFiscale: "VRDLCA90D13L400I", email: "luca.verdi@example.com" },
            { id: 4, nome: "Sara", cognome: "Neri", numeroTelefono: "2233445566", codiceFiscale: "NRISRA85P54H501M", email: "sara.neri@example.com" },
            { id: 5, nome: "Marco", cognome: "Gialli", numeroTelefono: "3344556677", codiceFiscale: "GLLMRC70L10F205X", email: "marco.gialli@example.com" },
            { id: 6, nome: "Anna", cognome: "Blu", numeroTelefono: "4455667788", codiceFiscale: "BLUANNA80B41A794G", email: "anna.blu@example.com" },
            { id: 7, nome: "Francesco", cognome: "Marrone", numeroTelefono: "5566778899", codiceFiscale: "MRRFNC65T18Z404W", email: "francesco.marrone@example.com" },
            { id: 8, nome: "Elena", cognome: "Grigi", numeroTelefono: "6677889900", codiceFiscale: "GRGELN90S47M099M", email: "elena.grigi@example.com" },
            { id: 9, nome: "Stefano", cognome: "Arancio", numeroTelefono: "7788990011", codiceFiscale: "RNCSTF70C10F205L", email: "stefano.arancio@example.com" },
            { id: 10, nome: "Roberta", cognome: "Verde", numeroTelefono: "8899001122", codiceFiscale: "VRDRBT78D60C351B", email: "roberta.verde@example.com" }
        ]
    },
    {
        id: 2,
        localita: "Milano",
        dataPartenza: "2025-03-15",
        dataRitorno: "2025-03-22",
        partecipanti: [
            { id: 1, nome: "Giovanni", cognome: "Neri", numeroTelefono: "2233445566", codiceFiscale: "NRIGVN75H04Z404M", email: "giovanni.neri@example.com" },
            { id: 2, nome: "Francesca", cognome: "Rossi", numeroTelefono: "3344556677", codiceFiscale: "RSSFNC84T49C351Q", email: "francesca.rossi@example.com" },
            { id: 3, nome: "Lucia", cognome: "Bianchi", numeroTelefono: "4455667788", codiceFiscale: "BNCLCA87A01H501B", email: "lucia.bianchi@example.com" },
            { id: 4, nome: "Paolo", cognome: "Verdi", numeroTelefono: "5566778899", codiceFiscale: "VRDPLO89S05M099I", email: "paolo.verdi@example.com" },
            { id: 5, nome: "Anna", cognome: "Grigi", numeroTelefono: "6677889900", codiceFiscale: "GRGANN92B41A794D", email: "anna.grigi@example.com" },
            { id: 6, nome: "Riccardo", cognome: "Marrone", numeroTelefono: "7788990011", codiceFiscale: "MRRRCD85T15C205S", email: "riccardo.marrone@example.com" },
            { id: 7, nome: "Simona", cognome: "Gialli", numeroTelefono: "8899001122", codiceFiscale: "GLLSMN77P10F205M", email: "simona.gialli@example.com" },
            { id: 8, nome: "Federico", cognome: "Blu", numeroTelefono: "9911223344", codiceFiscale: "BLUFDI87M01A794R", email: "federico.blu@example.com" },
            { id: 9, nome: "Chiara", cognome: "Arancio", numeroTelefono: "1022334455", codiceFiscale: "RNCCHR73P48F205L", email: "chiara.arancio@example.com" },
            { id: 10, nome: "Andrea", cognome: "Verde", numeroTelefono: "2133445566", codiceFiscale: "VRNAND82S05M401Q", email: "andrea.verde@example.com" }
        ]
    },
    {
        id: 3,
        localita: "Napoli",
        dataPartenza: "2025-04-10",
        dataRitorno: "2025-04-20",
        partecipanti: [
            { id: 1, nome: "Gabriele", cognome: "Rossi", numeroTelefono: "2133445566", codiceFiscale: "RSSGBL76C01H501T", email: "gabriele.rossi@example.com" },
            { id: 2, nome: "Elena", cognome: "Bianchi", numeroTelefono: "3244556677", codiceFiscale: "BNCHLN84M02A794D", email: "elena.bianchi@example.com" },
            { id: 3, nome: "Alessandro", cognome: "Verdi", numeroTelefono: "4355667788", codiceFiscale: "VRDALX88T13M099R", email: "alessandro.verdi@example.com" },
            { id: 4, nome: "Monica", cognome: "Grigi", numeroTelefono: "5466778899", codiceFiscale: "GRGMNC91D06F205S", email: "monica.grigi@example.com" },
            { id: 5, nome: "Stefano", cognome: "Marrone", numeroTelefono: "6577889900", codiceFiscale: "MRRSSF80P54C351D", email: "stefano.marrone@example.com" },
            { id: 6, nome: "Francesca", cognome: "Gialli", numeroTelefono: "7688990011", codiceFiscale: "GLLFNC85P60F205N", email: "francesca.gialli@example.com" },
            { id: 7, nome: "Riccardo", cognome: "Blu", numeroTelefono: "8799001122", codiceFiscale: "BLRRCD80S41A794M", email: "riccardo.blu@example.com" },
            { id: 8, nome: "Valentina", cognome: "Arancio", numeroTelefono: "9800112233", codiceFiscale: "RNCLTN89M10F205G", email: "valentina.arancio@example.com" },
            { id: 9, nome: "Giovanni", cognome: "Verde", numeroTelefono: "0911223344", codiceFiscale: "VRNGVN82R19M351T", email: "giovanni.verde@example.com" },
            { id: 10, nome: "Francesca", cognome: "Neri", numeroTelefono: "1022334455", codiceFiscale: "NRIFRN83T05L099Y", email: "francesca.neri@example.com" }
        ]
    },
    {
        id: 4,
        localita: "Venezia",
        dataPartenza: "2025-05-01",
        dataRitorno: "2025-05-07",
        partecipanti: [
            { id: 1, nome: "Lucia", cognome: "Rossi", numeroTelefono: "1234567890", codiceFiscale: "RSSLCU85A02H501Z", email: "lucia.rossi@example.com" },
            { id: 2, nome: "Marco", cognome: "Bianchi", numeroTelefono: "0987654321", codiceFiscale: "BNCMRC72D20A794X", email: "marco.bianchi@example.com" },
            { id: 3, nome: "Giulia", cognome: "Verdi", numeroTelefono: "1122334455", codiceFiscale: "VRDGLI80P14M351Y", email: "giulia.verdi@example.com" },
            { id: 4, nome: "Francesco", cognome: "Neri", numeroTelefono: "2233445566", codiceFiscale: "NRIFNC83S20F205U", email: "francesco.neri@example.com" },
            { id: 5, nome: "Anna", cognome: "Marrone", numeroTelefono: "3344556677", codiceFiscale: "MRRANN79P02C351F", email: "anna.marrone@example.com" },
            { id: 6, nome: "Stefano", cognome: "Gialli", numeroTelefono: "4455667788", codiceFiscale: "GLLSTF70M10A794I", email: "stefano.gialli@example.com" },
            { id: 7, nome: "Maria", cognome: "Blu", numeroTelefono: "5566778899", codiceFiscale: "BLUMRI80B04M205R", email: "maria.blu@example.com" },
            { id: 8, nome: "Giovanni", cognome: "Arancio", numeroTelefono: "6677889900", codiceFiscale: "RNCGNN82P10F205O", email: "giovanni.arancio@example.com" },
            { id: 9, nome: "Paolo", cognome: "Verde", numeroTelefono: "7788990011", codiceFiscale: "VRDPLO87T60C351V", email: "paolo.verde@example.com" },
            { id: 10, nome: "Simona", cognome: "Grigi", numeroTelefono: "8899001122", codiceFiscale: "GRGSMN91S60A794F", email: "simona.grigi@example.com" }
        ]
    },
    {
        id: 5,
        localita: "Firenze",
        dataPartenza: "2025-06-01",
        dataRitorno: "2025-06-10",
        partecipanti: [
            { id: 1, nome: "Carlo", cognome: "Rossi", numeroTelefono: "2233445566", codiceFiscale: "RSSCRL88A01H501W", email: "carlo.rossi@example.com" },
            { id: 2, nome: "Francesca", cognome: "Bianchi", numeroTelefono: "3344556677", codiceFiscale: "BNCFNC84T10F205L", email: "francesca.bianchi@example.com" },
            { id: 3, nome: "Giuseppe", cognome: "Verdi", numeroTelefono: "4455667788", codiceFiscale: "VRDGPP90S11M099F", email: "giuseppe.verdi@example.com" },
            { id: 4, nome: "Monica", cognome: "Grigi", numeroTelefono: "5566778899", codiceFiscale: "GRGMCN85B54C351P", email: "monica.grigi@example.com" },
            { id: 5, nome: "Stefano", cognome: "Marrone", numeroTelefono: "6677889900", codiceFiscale: "MRRFSN83P58F205Q", email: "stefano.marrone@example.com" },
            { id: 6, nome: "Francesca", cognome: "Gialli", numeroTelefono: "7788990011", codiceFiscale: "GLLFNC79B42M351K", email: "francesca.gialli@example.com" },
            { id: 7, nome: "Roberta", cognome: "Blu", numeroTelefono: "8899001122", codiceFiscale: "BLRBTR85B60A794E", email: "roberta.blu@example.com" },
            { id: 8, nome: "Paolo", cognome: "Arancio", numeroTelefono: "9911223344", codiceFiscale: "RNCPLS79P10F205B", email: "paolo.arancio@example.com" },
            { id: 9, nome: "Chiara", cognome: "Verde", numeroTelefono: "1022334455", codiceFiscale: "VRNCHR77S41M099N", email: "chiara.verde@example.com" },
            { id: 10, nome: "Francesca", cognome: "Neri", numeroTelefono: "2133445566", codiceFiscale: "NRIFNC92R12A794F", email: "francesca.neri@example.com" }
        ]
    }
];

export default viaggi;