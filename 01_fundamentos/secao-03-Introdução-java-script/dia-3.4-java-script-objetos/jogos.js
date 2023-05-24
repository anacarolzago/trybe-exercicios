const jogos = {
    rodada1: [{
            data: '2023-04-15',
            horario: '16h',
            times: ['Palmeiras', 'Cuiabá']
        },
        {
            data: '2023-04-15',
            horario: '16h',
            times: ['América-MG', 'Fluminense']
        },
        {
            data: '2023-04-15',
            horario: '18h30',
            times: ['Botafogo', 'São Paulo']
        },
        {
            data: '2023-04-15',
            horario: '18h30',
            times: ['Bragantino', 'Bahia']
        },
        {
            data: '2023-04-15',
            horario: '18h30',
            times: ['Athletico-PR', 'Goiás']
        },
        {
            data: '2023-04-15',
            horario: '18h30',
            times: ['Fortaleza', 'Internacional']
        },
        {
            data: '2023-04-15',
            horario: '21h',
            times: ['Atlético-MG', 'Vasco']
        },
        {
            data: '2023-04-16',
            horario: '16h',
            times: ['Flamengo', 'Coritiba']
        },
        {
            data: '2023-04-16',
            horario: '16h',
            times: ['Corinthians', 'Cruzeiro']
        },
        {
            data: '2023-04-16',
            horario: '18h30',
            times: ['Grêmio', 'Santos']
        }
    ],
    rodada2: [{
            data: '2023-04-22',
            horario: '16h',
            times: ['Fluminense', 'Athletico-PR']
        },
        {
            data: '2023-04-22',
            horario: '18h30',
            times: ['São Paulo', 'América-MG']
        },
        {
            data: '2023-04-22',
            horario: '18h30',
            times: ['Coritiba', 'Fortaleza']
        },
        {
            data: '2023-04-22',
            horario: '18h30',
            times: ['Cuiabá', 'Bragantino']
        },
        {
            data: '2023-04-22',
            horario: '21h',
            times: ['Cruzeiro', 'Grêmio']
        },
        {
            data: '2023-04-23',
            horario: '11h',
            times: ['Internacional', 'Flamengo']
        },
        {
            data: '2023-04-23',
            horario: '16h',
            times: ['Vasco', 'Palmeiras']
        },
        {
            data: '2023-04-23',
            horario: '16h',
            times: ['Santos', 'Atlético-MG']
        },
        {
            data: '2023-04-23',
            horario: '19h',
            times: ['Goiás', 'Corinthians']
        },
        {
            data: '2023-04-24',
            horario: '20h',
            times: ['Bahia', 'Botafogo']
        }
    ],
};

for (let rodada of Object.keys(jogos)) {
    for (let jogo of jogos[rodada]) {
        let data = jogo.data.split('-').reverse().join('/'); // sort, reverse, split, join, includes = Metodos para aplicar em array
        // console.log(jogo.times + ' - Data: ' + data); 
        console.log(jogo.times[0] + ' x ' + jogo.times[1] + ' - Data: ' + data); // Separando times por x
    }
}